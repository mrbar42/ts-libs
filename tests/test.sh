#!/usr/bin/env bash

set -e

npm run modulify

mkdir -p node_modules/test-ts
cp lib/*.ts node_modules/test-ts/

node_modules/.bin/tsc --build tsconfig.json

