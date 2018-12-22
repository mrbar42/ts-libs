/**
 * This modules returns the actual global object ignoring Typescript's complaints about non-existing variables
 */
// @ts-ignore
let globalScope = typeof global !== 'undefined' && global;
// @ts-ignore
globalScope = globalScope || typeof window !== 'undefined' && window;
// @ts-ignore
globalScope = globalScope || typeof self !== 'undefined' && self;
// @ts-ignore
globalScope = globalScope || this;

export default globalScope;
