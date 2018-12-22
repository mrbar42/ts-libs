# Typescript Libs

provides typescript libs as scoped modules.
this is useful if you want to refer ro a certain type in only one file without having all the codebase exposed to it.
The version of this package follows the corresponding typescript version. e.g. this package 3.2.2-v2 = Typescript 3.2.2

:warning:  **THIS IS NOT BATTLE TESTED** :warning:

install
```sh
npm i -S ts-libs

```

example:
```typescript
import {window} from 'ts-libs/lib/dom';

// @ts-ignore
const global: window = window;


global.fetch('/'); // this is now recognized as fetch - yay! 
```

# Deeper Explanation

Typescript is fun.  
Though it tends to leak declared types throughout the project which makes any declared type
visible on all of your files implicitly.
While this is the intended design, it prevents scoping of types and segregation of external references.

For example all of the types under `node_modules/@types` are included in your project, this increases the risk of bugs since some unwanted libs might leak to unwanted places.
If you have `@types/node` present in your node_modules, it will make all NodeJs globals available without even mentioning it in `tsconfig.json` and will be suggested as auto -complete and auto-import features of your IDE.

This projects convert all the default libs of typescript to exported types that does not leak. any type used from these libs must be explicitly imported.  


this will make `Hello` visible and known by the compile on all of your files
```typescript
declare var Hello: number;
```

this will only be visible in modules if imported by name
```typescript
export type Hello = number;
```

And important note is that the compiler might know how the `fetch` object looks like and what are its parameters, but it's your job to get the actual value from somewhere where is including the `dom` lib will make `fetch` visible globally and assumed to be present on run time.

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
// trying to access DOM globals will result in an error even if the their type is present
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

While Typescript itself and its related components are under the Apache-2.0 license,
any other part of this project that is not derived from Typescript is under [WTFPL](http://www.wtfpl.net/) license.
