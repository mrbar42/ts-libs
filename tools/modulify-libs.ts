import * as fs from 'fs';
import {resolve} from 'path';

const LIBS_DIR = 'node_modules/typescript/lib';
const CUSTOM_HEADERS_DIR = 'custom-lib-modifiers';
const OUTPUT_DIR = `lib`;

try {
    fs.mkdirSync(OUTPUT_DIR);
} catch (e) {
    // whatever
}

const libs = fs.readdirSync(LIBS_DIR).filter(x => x.startsWith('lib.') && x.endsWith('.d.ts'));

let debugLib = '';
// debugLib = 'lib.dom.d.ts';
// debugLib = 'lib.scripthost.d.ts';
const debugIdentifier = '';

libs.forEach(lib => {
    if (debugLib && !lib.includes(debugLib)) return;

    let newContent = fs.readFileSync(`${LIBS_DIR}/${lib}`, 'utf8');

    let customModifiers: { header?: string, ignoredDeclarations?: RegExp } = {};
    let customModifierPath = resolve(__dirname, `../${CUSTOM_HEADERS_DIR}/${lib.replace('.ts', '.js')}`);
    if (fs.existsSync(customModifierPath)) {
        customModifiers = require(customModifierPath);
    }

    // remove useless lines
    newContent = newContent.split('\n').filter(line => {
        if (/^\s*\/\/\/\s*<ref/.test(line)) return false;
        if (/typeof [^;]+;/.test(line)) return false;
        if (customModifiers.ignoredDeclarations && customModifiers.ignoredDeclarations.test(line)) return false;
        return true
    }).join('\n');

    let seenIdentifiers = new Set<string>();
    let duplicateIdentifiers = new Set<string>();
    const ID_REGEX = /^\s*(?:declare\s+(?:[^\s]+)\s+|interface\s+|type\s+)([^\s(:<{\n]+)/;
    newContent.split('\n').forEach(line => {
        const [match, g1] = line.match(ID_REGEX) || [null, null];
        if (match && g1) {
            if (seenIdentifiers.has(g1)) {
                duplicateIdentifiers.add(g1);
            }
            seenIdentifiers.add(g1);
        }
    });


    // add 'Global' suffix to duplicate identifiers declarations
    newContent = newContent.replace(/^\s*(?:declare)\s+([^\s]+)\s+([^\s(:<{\n]+)/mg,
        (match, g1, g2) => {
            if (g1 === 'type' || g1 === 'namespace' || !duplicateIdentifiers.has(g2)) return match;
            return ` declare ${g1} ${g2}Global`
        }
    );

    // go over all identifiers and find duplicates
    let seenDeclarations = new Set<string>();
    let duplicateDeclarations = new Map<string, string[]>();
    newContent.split('\n').forEach(line => {
        const IDENTIFIERS_REGEX = /^\s*(?:declare\s+(?:var|const|let|function|class|namespace))\s*([^\s(<|:{\n]+)/;
        const [match, g1] = line.match(IDENTIFIERS_REGEX) || [null, null];
        if (match && g1) {
            if (debugIdentifier && g1.includes(debugIdentifier)) console.log('DUP?', g1, seenDeclarations.has(g1), match);
            if (seenDeclarations.has(g1)) {
                duplicateDeclarations.set(g1, []);
            }

            seenDeclarations.add(g1);
        }
    });

    // turn this: declare function myFunc(param: string): void;
    // to this: export type myFunc = (param: string) => void;
    newContent = newContent.replace(
        /^\s*declare function\s+([^(<\s:]+)\s*(.*):([^:;\n]+;?$)/mg,
        (match: string, g1: string, g2: string, g3: string) => {
            const identifierVariants = duplicateDeclarations.get(g1);

            let exportStr = 'export ';
            if (identifierVariants) {
                // there is more than instance of this identifier - replace name
                g1 = `${g1}v${identifierVariants.length + 1}`;
                identifierVariants.push(g1);
                exportStr = '';
            }

            return `${exportStr}type ${g1} = ${g2} => ${g3}`;
        }
    );

    debugIdentifier && console.log(newContent.split('\n').filter(x => x.includes(debugIdentifier)).join('\n'));

    // change this: declare var onafterprint: ((this: Window, ev: Event) => any) | null;
    // to this: export type onafterprint = ((this: Window, ev: Event) => any) | null;
    newContent = newContent.replace(
        /^\s*declare\s+(?:var|const|let)\s+([^(<\s:\n]+)\s*:([^;\n]+;?)$/mg,
        (match: string, g1: string, g2: string) => {
            const identifierVariants = duplicateDeclarations.get(g1);

            let exportStr = 'export ';
            if (identifierVariants) {
                // there is more than instance of this identifier - replace name
                g1 = `${g1}v${identifierVariants.length + 1}`;
                identifierVariants.push(g1);
                exportStr = '';
            }

            return `${exportStr}type ${g1} = ${g2}`;
        }
    );

    // change this: declare namespace MyNamespace {}
    // to this: export declare namespace MyNamespace {}
    newContent = newContent.replace(
        /^\s*declare\s+namespace\s+([^(<\s{:\n]+)/mg,
        (match: string, g1: string) => {
            return `export namespace ${g1}`;
        }
    );

    // change this: interface MyInterface {
    // to this: export interface MyInterface {
    newContent = newContent.replace(
        /^\s*(interface|type)\s+([^(<\s{:\n]+)/mg,
        (match: string, g1: string, g2: string) => {
            return `export ${g1} ${g2}`;
        }
    );
    debugIdentifier && console.log(`----------------------------------------------------------------------`);
    debugIdentifier && console.log(newContent.split('\n').filter(x => x.includes(debugIdentifier)).join('\n'));

    // add all joined values
    for (const [identifier, variants] of duplicateDeclarations.entries()) {
        newContent += `\nexport type ${identifier} = ${variants.join(' | ')};`;
    }

    debugIdentifier && console.log(`----------------------------------------------------------------------`);
    debugIdentifier && console.log(newContent.split('\n').filter(x => x.includes(debugIdentifier)).join('\n'));

    newContent = `export {};\n${customModifiers.header || ''}\n${newContent}`;

    fs.writeFileSync(`${OUTPUT_DIR}/${lib.replace('lib.', '')}`, newContent);

    newContent.split('\n').forEach((line, index) => {
        if (/^\s*(export\s+)?declare\s+(?!type|namespace|class)./.test(line)) {
            throw new Error(
                `Lib ${lib}: declare statements are not allowed after lib has been processed\n`
                + `Line ${index + 1}: ${line}`
            );
        }
    });
});
