/// <reference lib="es2016" />
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
    const libBaseName = lib
        .replace(/lib\.(.+)\.d\.ts$/, '$1')
        .replace(/[^a-z0-9_]/i, '_')
        .toUpperCase();
    const content = fs.readFileSync(`${LIBS_DIR}/${lib}`, 'utf8');


    let newContent = content;
    newContent = newContent.replace(/^\s*(declare)\s/mg, '  export ');
    newContent = newContent.replace(/^\s*(interface|type|namespace)\s/mg, '  export $1 ');


    const namespaceDeceleration = `\nexport namespace ${libBaseName} {\n`;
    const lastRefIndex = newContent.lastIndexOf('/// <ref');
    if (lastRefIndex === -1) {
        newContent = `${namespaceDeceleration}${newContent}`;
    }
    else {
        const refEndIndex = newContent.indexOf('\n', lastRefIndex) + 1;
        newContent = `${newContent.slice(0, refEndIndex)}${namespaceDeceleration}${newContent.slice(refEndIndex)}`
    }

    newContent += '\n}';

    fs.writeFileSync(`${OUTPUT_DIR}/${lib.replace('lib.', '')}`, newContent)
});
