#!/usr/bin/env bash

set -e

npm run modulify

mkdir -p node_modules/test-ts
cp  -f lib/*.ts node_modules/test-ts/

echo "" > tests/all-libs.ts
for lib in $(ls node_modules/test-ts | grep '\.ts'); do
    echo "import 'test-ts/${lib%*\.d\.ts}';" >> tests/all-libs.ts
done

node_modules/.bin/tsc --build tests/tsconfig.json
