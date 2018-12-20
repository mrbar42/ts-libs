import {Window} from "../lib/dom";

declare var window: Window;
declare var self: Window;
declare var global: any;

let globalScope = typeof global !== 'undefined' && global;
globalScope = globalScope || typeof window !== 'undefined' && window;
globalScope = globalScope || typeof self !== 'undefined' && self;
// @ts-ignore
globalScope = globalScope || this;

export default globalScope;
