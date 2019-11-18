# Typescript Libs


[![Build Status](https://travis-ci.org/mrbar42/ts-libs.svg?branch=master)](https://travis-ci.org/mrbar42/ts-libs)[![npm](https://img.shields.io/npm/v/ts-libs.svg)](https://www.npmjs.com/package/ts-libs)

Provides typescript libs as scoped modules.
this is useful if you want to refer ro a certain type in only one file without having all the codebase exposed to it.

The version of this package follows the corresponding typescript version. e.g. this package 3.7.2-v2 = Typescript 3.7.2 + revision 2 of this version.

# Usage

install:
```sh
npm i -D ts-libs

```

example:
```typescript
import {window} from 'ts-libs/lib/dom';

// @ts-ignore - Typescript doesn't know that a global object named window exist - so we forcibly declare it
const global: window = window;


global.fetch('/'); // this is now recognized as fetch - yay!

// since the dom lib is not defined in tsconfig.json no dom global is available
fetch('/'); // <- error: couldn't find name fetch
```

# Deeper Explanation

Typescript is fun.  
Though it tends to leak declared types throughout the project which makes any declared type
visible on all of your files implicitly.
for example if the `dom` lib is specified in `ts-config.json`, it causes `window` `fetch` and other browser globals to be assumed everywhere.
While this is the intended design of typescript, it prevents scoping of types and segregation of external references.

For example all of the types under `node_modules/@types` are included in your project, this increases the risk of bugs since some unwanted libs might leak to unwanted places.
If you have `@types/node` present in your node_modules, it will make all NodeJs globals available without even mentioning it in `tsconfig.json` and will be suggested as auto-complete and auto-import features of your IDE.

This project maps all the default libs of typescript to exported types that does not leak. any type used from these libs must be explicitly imported.  


### What does it mean to map types to be exportable?
this statement will make `Hello` visible and recognized by the compiler on all of your files.
```typescript
declare var Hello: number;
```

this will only be visible in modules that imports `Hello` explicitly.
```typescript
export type Hello = number;
```

And important note is that the compiler might know the type of objects, but it's your job to get the actual value from somewhere.
Unlike the case of including the `dom` lib which would immediately assume globals are present at runtime, you will have to assign the type explicitly

More examples:
```typescript
import {window} from '../lib/dom';

// @ts-ignore - Typescript doesn't know that a global object named window exist - so we forcibly declare it
const global: window = window;

// since the dom lib is not defined in tsconfig.json no dom global is available
fetch(); // <- error: couldn't find name fetch

// this way fetch is recognized correctly
global.fetch(123); // this is and error: argument of type 123 is not assignable to parameter of type RequestInit

global.fetch('/'); // this is correct

import {RequestInfo} from '../lib/dom';
// RequestInfo type needs to be imported because it's not available globally
const info: RequestInfo = {
    mode: 'hello'
};

const response = global.fetch(info);


import {console} from '../lib/dom';
// trying to access DOM globals will result in a compilation error even though in reality they might exist in run time.
console.log(123); // error: console only refers to a type but is being used here as a value

{
    const console = global.console;
    console.log('Yay'); // <- this will work
}

// any object can be casted into a DOM type
import {ResponseGlobal, fetchGlobal} from '../lib/dom';

{
    // @ts-ignore
    const browserGlobal: any = window;
    // browserGlobal.console is typed as any, but we can tell the compiler that this is a console object
    // though it's your responsibility to make sure that console property indeed exist on the source object
    const console = browserGlobal.console as console;
    // global object that are constructors will have a Global suffix
    const Response = browserGlobal.Response as ResponseGlobal;

    // this will show no error on compile time but will equal undefined on runtime since 'futch' doesn't actually exist
    const futch = browserGlobal.futch as fetchGlobal;

    console.log(Response, futch);
}
```

# license

The license for this lib is the same as Typescript itself - Apache-2.0 license.
