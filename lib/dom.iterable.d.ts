
export namespace DOM_ITERABLE {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */





/////////////////////////////
/// DOM Iterable APIs
/////////////////////////////
  export interface AudioParamMap extends ReadonlyMap<string, AudioParam> {
}
  export interface AudioTrackList {
    [Symbol.iterator](): IterableIterator<AudioTrack>;
}
  export interface CSSRuleList {
    [Symbol.iterator](): IterableIterator<CSSRule>;
}
  export interface CSSStyleDeclaration {
    [Symbol.iterator](): IterableIterator<string>;
}
  export interface ClientRectList {
    [Symbol.iterator](): IterableIterator<ClientRect>;
}
  export interface DOMRectList {
    [Symbol.iterator](): IterableIterator<DOMRect>;
}
  export interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string>;
}
  export interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string>;
    entries(): IterableIterator<[number, string]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<string>;
}
  export interface DataTransferItemList {
    [Symbol.iterator](): IterableIterator<DataTransferItem>;
}
  export interface FileList {
    [Symbol.iterator](): IterableIterator<File>;
}
  export interface FormData {
    [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    /**
     * Returns a list of keys in the list.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the list.
     */
    values(): IterableIterator<FormDataEntryValue>;
}
  export interface HTMLAllCollection {
    [Symbol.iterator](): IterableIterator<Element>;
}
  export interface HTMLCollectionBase {
    [Symbol.iterator](): IterableIterator<Element>;
}
  export interface HTMLCollectionOf<T extends Element> {
    [Symbol.iterator](): IterableIterator<T>;
}
  export interface HTMLFormElement {
    [Symbol.iterator](): IterableIterator<Element>;
}
  export interface HTMLSelectElement {
    [Symbol.iterator](): IterableIterator<Element>;
}
  export interface Headers {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
     */
    values(): IterableIterator<string>;
}
  export interface MediaList {
    [Symbol.iterator](): IterableIterator<string>;
}
  export interface MimeTypeArray {
    [Symbol.iterator](): IterableIterator<Plugin>;
}
  export interface NamedNodeMap {
    [Symbol.iterator](): IterableIterator<Attr>;
}
  export interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[number, Node]>;
    /**
     * Returns an list of keys in the list.
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list.
     */
    values(): IterableIterator<Node>;
}
  export interface NodeListOf<TNode extends Node> {
    [Symbol.iterator](): IterableIterator<TNode>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[number, TNode]>;
    /**
     * Returns an list of keys in the list.
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list.
     */
    values(): IterableIterator<TNode>;
}
  export interface Plugin {
    [Symbol.iterator](): IterableIterator<MimeType>;
}
  export interface PluginArray {
    [Symbol.iterator](): IterableIterator<Plugin>;
}
  export interface RTCStatsReport extends ReadonlyMap<string, any> {
}
  export interface SVGLengthList {
    [Symbol.iterator](): IterableIterator<SVGLength>;
}
  export interface SVGNumberList {
    [Symbol.iterator](): IterableIterator<SVGNumber>;
}
  export interface SVGStringList {
    [Symbol.iterator](): IterableIterator<string>;
}
  export interface SourceBufferList {
    [Symbol.iterator](): IterableIterator<SourceBuffer>;
}
  export interface SpeechGrammarList {
    [Symbol.iterator](): IterableIterator<SpeechGrammar>;
}
  export interface SpeechRecognitionResult {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionAlternative>;
}
  export interface SpeechRecognitionResultList {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionResult>;
}
  export interface StyleSheetList {
    [Symbol.iterator](): IterableIterator<StyleSheet>;
}
  export interface TextTrackCueList {
    [Symbol.iterator](): IterableIterator<TextTrackCue>;
}
  export interface TextTrackList {
    [Symbol.iterator](): IterableIterator<TextTrack>;
}
  export interface TouchList {
    [Symbol.iterator](): IterableIterator<Touch>;
}
  export interface URLSearchParams {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    /**
     * Returns an array of key, value pairs for every entry in the search params.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a list of keys in the search params.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the search params.
     */
    values(): IterableIterator<string>;
}
  export interface VideoTrackList {
    [Symbol.iterator](): IterableIterator<VideoTrack>;
}

}