import global from './global'

import './all-libs';

// DOM
import {WebSocketGlobal, XMLHttpRequestGlobal, console, CloseEvent, URLGlobal, fetch, RequestGlobal} from 'test-ts/dom';

const browserGlobal = global;
const console = browserGlobal.console as console;
const WebSocket = browserGlobal.WebSocket as WebSocketGlobal;
const XMLHttpRequest = browserGlobal.XMLHttpRequest as XMLHttpRequestGlobal;
const URL = browserGlobal.URL as URLGlobal;
const fetch = browserGlobal.fetch as fetch;
const Request = browserGlobal.Request as RequestGlobal;

const urlInstance = new URL('/url');
console.log(urlInstance);

const xhr = new XMLHttpRequest();
xhr.open('HELLO', '/');

const ws = new WebSocket('ws://localhost:12345');
ws.onclose = (e: CloseEvent) => {};
console.log(ws.binaryType);

const resPromise = fetch('/');

const req = new Request('/', {
    mode: 'cors'
});
const resPromise2 = fetch(req);

console.log(resPromise, resPromise2);

// import {Promise} from 'test-ts/es2015.promise';
import {Promise} from 'test-ts/es2015.promise';

const promise = new Promise((resolve, reject) => {
    resolve();
});

promise.then(() => {
    console.log('Resolved');
});

Promise.resolve({a: 1}).then(() => {
    // nothing
});

Promise.reject({a: 2}).then(() => {
    // nothing
});

import {Intl} from 'test-ts/es2017.intl';
import {RequestInfo} from "../lib/dom";

const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(new Intl.DateTimeFormat('en-US').format(date));
