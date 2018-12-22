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
    mode: 'hello' // <- error about signature missmatch since hello is not is not a valid value for mode
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