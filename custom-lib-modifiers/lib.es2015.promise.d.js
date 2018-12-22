module.exports = {
    header: 'export type Promise<T> = PromiseConstructor;',
    ignoredDeclarations: /declare var Promise: PromiseConstructor;/
};
