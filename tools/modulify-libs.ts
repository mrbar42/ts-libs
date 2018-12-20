/// <reference no-default-lib="true"/>
/// <reference lib="es5" />
/// <reference lib="es2016" />
/// <reference types="@types/node" />

import * as fs from 'fs';

const LIBS_DIR = 'node_modules/typescript/lib';
const OUTPUT_DIR = `lib`;

try {
    fs.mkdirSync(OUTPUT_DIR);
} catch (e) {
    // whatever
}

const libs = fs.readdirSync(LIBS_DIR).filter(x => x.startsWith('lib.') && x.endsWith('.d.ts'));

libs.forEach(lib => {
    // const libBaseName = lib
    //     .replace(/lib\.(.+)\.d\.ts$/, '$1')
    //     .replace(/[^a-z0-9_]/i, '_')
    //     .toUpperCase();
    const content = fs.readFileSync(`${LIBS_DIR}/${lib}`, 'utf8');


    let seenIdentifiers = new Set();

    let newContent = content;
    // turn this: declare function myFunc(param: string): void;
    // to this: export type myFunc = (param: string) => void;
    newContent = newContent.replace(/^\s*(?:declare) function\s+([^(<\s]+)\s*(.*):([^:;\n]+);?$/mg,
        (match: string, g1: string, g2: string, g3: string) => {
            if (seenIdentifiers.has(g1)) {
                if (/v\d$/.test(g1)) {
                    g1 = `${g1}V1`
                }
                else {
                    g1 = `${g1}V2`
                }
            }

            seenIdentifiers.add(g1);

            return `  export type ${g1} = ${g2} => ${g3};`;
        });
    newContent = newContent.replace(/^\s*(declare)\s+([^\s]+)\s+([^\s(:]+):/mg, '  export $1 type $3Global =');
    newContent = newContent.replace(/^\s*(interface|type|namespace)\s/mg, '  export $1 ');


    // const namespaceDeceleration = `\nexport namespace ${libBaseName} {\n`;
    // newContent = `${namespaceDeceleration}${newContent}`;

    // newContent += '\n}';

    newContent = newContent.split('\n').filter(line => {
        if (/^\s*\/\/\/\s*<ref/.test(line)) return false;
        return true
    }).join('\n');

    fs.writeFileSync(`${OUTPUT_DIR}/${lib.replace('lib.', '')}`, newContent)
});
