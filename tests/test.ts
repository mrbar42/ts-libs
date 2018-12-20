/// <reference no-default-lib="true"/>
/// <reference lib="es5" />

import global from './global'

// import {WebSocketGlobal, XMLHttpRequestGlobal, Console, CloseEvent, URLGlobal} from '../lib/dom';
import {WebSocketGlobal, XMLHttpRequestGlobal, Console, CloseEvent, URLGlobal} from 'test-ts/dom';


const browserGlobal = global;
const console = browserGlobal.console as Console;
const WebSocket = browserGlobal.WebSocket as WebSocketGlobal;
const XMLHttpRequest = browserGlobal.XMLHttpRequest as XMLHttpRequestGlobal;
const URL = browserGlobal.URL as URLGlobal;

const urlInstance = new URL('/url');
console.log(urlInstance);


const xhr = new XMLHttpRequest();
xhr.open('HELLO', '/');


const ws = new WebSocket('ws://localhost:12345');
ws.onclose = (e: CloseEvent) => {};
console.log(ws.binaryType);
