export {};

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
/// DOM APIs
/////////////////////////////
export interface Account {
    displayName: string;
    id: string;
    imageURL?: string;
    name?: string;
    rpDisplayName: string;
}
export interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}
export interface AesCbcParams extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}
export interface AesCtrParams extends Algorithm {
    counter: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    length: number;
}
export interface AesDerivedKeyParams extends Algorithm {
    length: number;
}
export interface AesGcmParams extends Algorithm {
    additionalData?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    tagLength?: number;
}
export interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}
export interface AesKeyGenParams extends Algorithm {
    length: number;
}
export interface Algorithm {
    name: string;
}
export interface AnalyserOptions extends AudioNodeOptions {
    fftSize?: number;
    maxDecibels?: number;
    minDecibels?: number;
    smoothingTimeConstant?: number;
}
export interface AnimationEventInit extends EventInit {
    animationName?: string;
    elapsedTime?: number;
    pseudoElement?: string;
}
export interface AnimationPlaybackEventInit extends EventInit {
    currentTime?: number | null;
    timelineTime?: number | null;
}
export interface AssertionOptions {
    allowList?: ScopedCredentialDescriptor[];
    extensions?: WebAuthnExtensions;
    rpId?: string;
    timeoutSeconds?: number;
}
export interface AssignedNodesOptions {
    flatten?: boolean;
}
export interface AudioBufferOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}
export interface AudioBufferSourceOptions {
    buffer?: AudioBuffer | null;
    detune?: number;
    loop?: boolean;
    loopEnd?: number;
    loopStart?: number;
    playbackRate?: number;
}
export interface AudioContextInfo {
    currentTime?: number;
    sampleRate?: number;
}
export interface AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | number;
    sampleRate?: number;
}
export interface AudioNodeOptions {
    channelCount?: number;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;
}
export interface AudioParamDescriptor {
    automationRate?: AutomationRate;
    defaultValue?: number;
    maxValue?: number;
    minValue?: number;
    name: string;
}
export interface AudioProcessingEventInit extends EventInit {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: number;
}
export interface AudioTimestamp {
    contextTime?: number;
    performanceTime?: number;
}
export interface AudioWorkletNodeOptions extends AudioNodeOptions {
    numberOfInputs?: number;
    numberOfOutputs?: number;
    outputChannelCount?: number[];
    parameterData?: Record<string, number>;
    processorOptions?: any;
}
export interface BiquadFilterOptions extends AudioNodeOptions {
    Q?: number;
    detune?: number;
    frequency?: number;
    gain?: number;
    type?: BiquadFilterType;
}
export interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}
export interface ByteLengthChunk {
    byteLength?: number;
}
export interface CacheQueryOptions {
    cacheName?: string;
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}
export interface CanvasRenderingContext2DSettings {
    alpha?: boolean;
}
export interface ChannelMergerOptions extends AudioNodeOptions {
    numberOfInputs?: number;
}
export interface ChannelSplitterOptions extends AudioNodeOptions {
    numberOfOutputs?: number;
}
export interface ClientData {
    challenge: string;
    extensions?: WebAuthnExtensions;
    hashAlg: string | Algorithm;
    origin: string;
    rpId: string;
    tokenBinding?: string;
}
export interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientTypes;
}
export interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}
export interface CompositionEventInit extends UIEventInit {
    data?: string;
}
export interface ComputedEffectTiming extends EffectTiming {
    activeDuration?: number;
    currentIteration?: number | null;
    endTime?: number;
    localTime?: number | null;
    progress?: number | null;
}
export interface ComputedKeyframe {
    composite: CompositeOperationOrAuto;
    computedOffset: number;
    easing: string;
    offset: number | null;
    [property: string]: string | number | null | undefined;
}
export interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
    arrayOfDomainStrings?: string[];
}
export interface ConstantSourceOptions {
    offset?: number;
}
export interface ConstrainBooleanParameters {
    exact?: boolean;
    ideal?: boolean;
}
export interface ConstrainDOMStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}
export interface ConstrainDoubleRange extends DoubleRange {
    exact?: number;
    ideal?: number;
}
export interface ConstrainLongRange extends LongRange {
    exact?: number;
    ideal?: number;
}
export interface ConstrainVideoFacingModeParameters {
    exact?: VideoFacingModeEnum | VideoFacingModeEnum[];
    ideal?: VideoFacingModeEnum | VideoFacingModeEnum[];
}
export interface ConvolverOptions extends AudioNodeOptions {
    buffer?: AudioBuffer | null;
    disableNormalization?: boolean;
}
export interface CustomEventInit<T = any> extends EventInit {
    detail?: T;
}
export interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}
export interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
}
export interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}
export interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}
export interface DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}
export interface DelayOptions extends AudioNodeOptions {
    delayTime?: number;
    maxDelayTime?: number;
}
export interface DeviceAccelerationDict {
    x?: number | null;
    y?: number | null;
    z?: number | null;
}
export interface DeviceLightEventInit extends EventInit {
    value?: number;
}
export interface DeviceMotionEventInit extends EventInit {
    acceleration?: DeviceAccelerationDict | null;
    accelerationIncludingGravity?: DeviceAccelerationDict | null;
    interval?: number | null;
    rotationRate?: DeviceRotationRateDict | null;
}
export interface DeviceOrientationEventInit extends EventInit {
    absolute?: boolean;
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}
export interface DeviceRotationRateDict {
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}
export interface DocumentTimelineOptions {
    originTime?: number;
}
export interface DoubleRange {
    max?: number;
    min?: number;
}
export interface DragEventInit extends MouseEventInit {
    dataTransfer?: DataTransfer | null;
}
export interface DynamicsCompressorOptions extends AudioNodeOptions {
    attack?: number;
    knee?: number;
    ratio?: number;
    release?: number;
    threshold?: number;
}
export interface EcKeyAlgorithm extends KeyAlgorithm {
    namedCurve: NamedCurve;
}
export interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
}
export interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
}
export interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}
export interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}
export interface EffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
}
export interface ElementDefinitionOptions {
    extends?: string;
}
export interface ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}
export interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}
export interface EventListenerOptions {
    capture?: boolean;
}
export interface EventModifierInit extends UIEventInit {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    modifierAltGraph?: boolean;
    modifierCapsLock?: boolean;
    modifierFn?: boolean;
    modifierFnLock?: boolean;
    modifierHyper?: boolean;
    modifierNumLock?: boolean;
    modifierOS?: boolean;
    modifierScrollLock?: boolean;
    modifierSuper?: boolean;
    modifierSymbol?: boolean;
    modifierSymbolLock?: boolean;
    shiftKey?: boolean;
}
export interface ExceptionInformation {
    domain?: string | null;
}
export interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}
export interface FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget | null;
}
export interface FocusNavigationEventInit extends EventInit {
    navigationReason?: string | null;
    originHeight?: number;
    originLeft?: number;
    originTop?: number;
    originWidth?: number;
}
export interface FocusNavigationOrigin {
    originHeight?: number;
    originLeft?: number;
    originTop?: number;
    originWidth?: number;
}
export interface FocusOptions {
    preventScroll?: boolean;
}
export interface GainOptions extends AudioNodeOptions {
    gain?: number;
}
export interface GamepadEventInit extends EventInit {
    gamepad?: Gamepad;
}
export interface GetNotificationOptions {
    tag?: string;
}
export interface GetRootNodeOptions {
    composed?: boolean;
}
export interface HashChangeEventInit extends EventInit {
    newURL?: string;
    oldURL?: string;
}
export interface HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}
export interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}
export interface HmacKeyAlgorithm extends KeyAlgorithm {
    hash: KeyAlgorithm;
    length: number;
}
export interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}
export interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}
export interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}
export interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}
export interface IIRFilterOptions extends AudioNodeOptions {
    feedback: number[];
    feedforward: number[];
}
export interface IntersectionObserverEntryInit {
    boundingClientRect: DOMRectInit;
    intersectionRect: DOMRectInit;
    isIntersecting: boolean;
    rootBounds: DOMRectInit;
    target: Element;
    time: number;
}
export interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}
export interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}
export interface KeyAlgorithm {
    name: string;
}
export interface KeyboardEventInit extends EventModifierInit {
    code?: string;
    key?: string;
    location?: number;
    repeat?: boolean;
}
export interface Keyframe {
    composite?: CompositeOperationOrAuto;
    easing?: string;
    offset?: number | null;
    [property: string]: string | number | null | undefined;
}
export interface KeyframeAnimationOptions extends KeyframeEffectOptions {
    id?: string;
}
export interface KeyframeEffectOptions extends EffectTiming {
    composite?: CompositeOperation;
    iterationComposite?: IterationCompositeOperation;
}
export interface LongRange {
    max?: number;
    min?: number;
}
export interface MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;
}
export interface MediaEncryptedEventInit extends EventInit {
    initData?: ArrayBuffer | null;
    initDataType?: string;
}
export interface MediaKeyMessageEventInit extends EventInit {
    message?: ArrayBuffer | null;
    messageType?: MediaKeyMessageType;
}
export interface MediaKeySystemConfiguration {
    audioCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataTypes?: string[];
    persistentState?: MediaKeysRequirement;
    videoCapabilities?: MediaKeySystemMediaCapability[];
}
export interface MediaKeySystemMediaCapability {
    contentType?: string;
    robustness?: string;
}
export interface MediaQueryListEventInit extends EventInit {
    matches?: boolean;
    media?: string;
}
export interface MediaStreamAudioSourceOptions {
    mediaStream: MediaStream;
}
export interface MediaStreamConstraints {
    audio?: boolean | MediaTrackConstraints;
    peerIdentity?: string;
    video?: boolean | MediaTrackConstraints;
}
export interface MediaStreamErrorEventInit extends EventInit {
    error?: MediaStreamError | null;
}
export interface MediaStreamEventInit extends EventInit {
    stream?: MediaStream;
}
export interface MediaStreamTrackAudioSourceOptions {
    mediaStreamTrack: MediaStreamTrack;
}
export interface MediaStreamTrackEventInit extends EventInit {
    track?: MediaStreamTrack | null;
}
export interface MediaTrackCapabilities {
    aspectRatio?: number | DoubleRange;
    deviceId?: string;
    echoCancellation?: boolean[];
    facingMode?: string;
    frameRate?: number | DoubleRange;
    groupId?: string;
    height?: number | LongRange;
    sampleRate?: number | LongRange;
    sampleSize?: number | LongRange;
    volume?: number | DoubleRange;
    width?: number | LongRange;
}
export interface MediaTrackConstraintSet {
    aspectRatio?: number | ConstrainDoubleRange;
    channelCount?: number | ConstrainLongRange;
    deviceId?: string | string[] | ConstrainDOMStringParameters;
    displaySurface?: string | string[] | ConstrainDOMStringParameters;
    echoCancellation?: boolean | ConstrainBooleanParameters;
    facingMode?: string | string[] | ConstrainDOMStringParameters;
    frameRate?: number | ConstrainDoubleRange;
    groupId?: string | string[] | ConstrainDOMStringParameters;
    height?: number | ConstrainLongRange;
    latency?: number | ConstrainDoubleRange;
    logicalSurface?: boolean | ConstrainBooleanParameters;
    sampleRate?: number | ConstrainLongRange;
    sampleSize?: number | ConstrainLongRange;
    volume?: number | ConstrainDoubleRange;
    width?: number | ConstrainLongRange;
}
export interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}
export interface MediaTrackSettings {
    aspectRatio?: number;
    deviceId?: string;
    echoCancellation?: boolean;
    facingMode?: string;
    frameRate?: number;
    groupId?: string;
    height?: number;
    sampleRate?: number;
    sampleSize?: number;
    volume?: number;
    width?: number;
}
export interface MediaTrackSupportedConstraints {
    aspectRatio?: boolean;
    deviceId?: boolean;
    echoCancellation?: boolean;
    facingMode?: boolean;
    frameRate?: boolean;
    groupId?: boolean;
    height?: boolean;
    sampleRate?: boolean;
    sampleSize?: boolean;
    volume?: boolean;
    width?: boolean;
}
export interface MessageEventInit extends EventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}
export interface MouseEventInit extends EventModifierInit {
    button?: number;
    buttons?: number;
    clientX?: number;
    clientY?: number;
    relatedTarget?: EventTarget | null;
    screenX?: number;
    screenY?: number;
}
export interface MutationObserverInit {
    attributeFilter?: string[];
    attributeOldValue?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
    childList?: boolean;
    subtree?: boolean;
}
export interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}
export interface NotificationAction {
    action: string;
    icon?: string;
    title: string;
}
export interface NotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: number;
    vibrate?: VibratePattern;
}
export interface OfflineAudioCompletionEventInit extends EventInit {
    renderedBuffer: AudioBuffer;
}
export interface OfflineAudioContextOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}
export interface OptionalEffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
}
export interface OscillatorOptions extends AudioNodeOptions {
    detune?: number;
    frequency?: number;
    periodicWave?: PeriodicWave;
    type?: OscillatorType;
}
export interface PannerOptions extends AudioNodeOptions {
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
    distanceModel?: DistanceModelType;
    maxDistance?: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    panningModel?: PanningModelType;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    refDistance?: number;
    rolloffFactor?: number;
}
export interface PaymentCurrencyAmount {
    currency: string;
    currencySystem?: string;
    value: string;
}
export interface PaymentDetailsBase {
    displayItems?: PaymentItem[];
    modifiers?: PaymentDetailsModifier[];
    shippingOptions?: PaymentShippingOption[];
}
export interface PaymentDetailsInit extends PaymentDetailsBase {
    id?: string;
    total: PaymentItem;
}
export interface PaymentDetailsModifier {
    additionalDisplayItems?: PaymentItem[];
    data?: any;
    supportedMethods: string | string[];
    total?: PaymentItem;
}
export interface PaymentDetailsUpdate extends PaymentDetailsBase {
    error?: string;
    total?: PaymentItem;
}
export interface PaymentItem {
    amount: PaymentCurrencyAmount;
    label: string;
    pending?: boolean;
}
export interface PaymentMethodData {
    data?: any;
    supportedMethods: string | string[];
}
export interface PaymentOptions {
    requestPayerEmail?: boolean;
    requestPayerName?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: string;
}
export interface PaymentRequestUpdateEventInit extends EventInit {
}
export interface PaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: string;
    label: string;
    selected?: boolean;
}
export interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}
export interface PerformanceObserverInit {
    buffered?: boolean;
    entryTypes: string[];
}
export interface PeriodicWaveConstraints {
    disableNormalization?: boolean;
}
export interface PeriodicWaveOptions extends PeriodicWaveConstraints {
    imag?: number[] | Float32Array;
    real?: number[] | Float32Array;
}
export interface PipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    preventClose?: boolean;
}
export interface PointerEventInit extends MouseEventInit {
    height?: number;
    isPrimary?: boolean;
    pointerId?: number;
    pointerType?: string;
    pressure?: number;
    tangentialPressure?: number;
    tiltX?: number;
    tiltY?: number;
    twist?: number;
    width?: number;
}
export interface PopStateEventInit extends EventInit {
    state?: any;
}
export interface PositionOptions {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    timeout?: number;
}
export interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}
export interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}
export interface PropertyIndexedKeyframes {
    composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
    easing?: string | string[];
    offset?: number | (number | null)[];
    [property: string]: string | string[] | number | null | (number | null)[] | undefined;
}
export interface PushSubscriptionJSON {
    endpoint?: string;
    expirationTime?: number | null;
    keys?: Record<string, string>;
}
export interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}
export interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySizeCallback<T>;
}
export interface RTCAnswerOptions extends RTCOfferAnswerOptions {
}
export interface RTCCertificateExpiration {
    expires?: number;
}
export interface RTCConfiguration {
    bundlePolicy?: RTCBundlePolicy;
    certificates?: RTCCertificate[];
    iceCandidatePoolSize?: number;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    peerIdentity?: string;
    rtcpMuxPolicy?: RTCRtcpMuxPolicy;
}
export interface RTCDTMFToneChangeEventInit extends EventInit {
    tone: string;
}
export interface RTCDataChannelEventInit extends EventInit {
    channel: RTCDataChannel;
}
export interface RTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    negotiated?: boolean;
    ordered?: boolean;
    priority?: RTCPriorityType;
    protocol?: string;
}
export interface RTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}
export interface RTCDtlsParameters {
    fingerprints?: RTCDtlsFingerprint[];
    role?: RTCDtlsRole;
}
export interface RTCErrorEventInit extends EventInit {
    error?: RTCError | null;
}
export interface RTCIceCandidateAttributes extends RTCStats {
    addressSourceUrl?: string;
    candidateType?: RTCStatsIceCandidateType;
    ipAddress?: string;
    portNumber?: number;
    priority?: number;
    transport?: string;
}
export interface RTCIceCandidateComplete {
}
export interface RTCIceCandidateDictionary {
    foundation?: string;
    ip?: string;
    msMTurnSessionId?: string;
    port?: number;
    priority?: number;
    protocol?: RTCIceProtocol;
    relatedAddress?: string;
    relatedPort?: number;
    tcpType?: RTCIceTcpCandidateType;
    type?: RTCIceCandidateType;
}
export interface RTCIceCandidateInit {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    usernameFragment?: string;
}
export interface RTCIceCandidatePair {
    local?: RTCIceCandidate;
    remote?: RTCIceCandidate;
}
export interface RTCIceCandidatePairStats extends RTCStats {
    availableIncomingBitrate?: number;
    availableOutgoingBitrate?: number;
    bytesReceived?: number;
    bytesSent?: number;
    localCandidateId?: string;
    nominated?: boolean;
    priority?: number;
    readable?: boolean;
    remoteCandidateId?: string;
    roundTripTime?: number;
    state?: RTCStatsIceCandidatePairState;
    transportId?: string;
    writable?: boolean;
}
export interface RTCIceGatherOptions {
    gatherPolicy?: RTCIceGatherPolicy;
    iceservers?: RTCIceServer[];
}
export interface RTCIceParameters {
    password?: string;
    usernameFragment?: string;
}
export interface RTCIceServer {
    credential?: string | RTCOAuthCredential;
    credentialType?: RTCIceCredentialType;
    urls: string | string[];
    username?: string;
}
export interface RTCIdentityProviderOptions {
    peerIdentity?: string;
    protocol?: string;
    usernameHint?: string;
}
export interface RTCInboundRTPStreamStats extends RTCRTPStreamStats {
    bytesReceived?: number;
    fractionLost?: number;
    jitter?: number;
    packetsLost?: number;
    packetsReceived?: number;
}
export interface RTCMediaStreamTrackStats extends RTCStats {
    audioLevel?: number;
    echoReturnLoss?: number;
    echoReturnLossEnhancement?: number;
    frameHeight?: number;
    frameWidth?: number;
    framesCorrupted?: number;
    framesDecoded?: number;
    framesDropped?: number;
    framesPerSecond?: number;
    framesReceived?: number;
    framesSent?: number;
    remoteSource?: boolean;
    ssrcIds?: string[];
    trackIdentifier?: string;
}
export interface RTCOAuthCredential {
    accessToken: string;
    macKey: string;
}
export interface RTCOfferAnswerOptions {
    voiceActivityDetection?: boolean;
}
export interface RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart?: boolean;
    offerToReceiveAudio?: boolean;
    offerToReceiveVideo?: boolean;
}
export interface RTCOutboundRTPStreamStats extends RTCRTPStreamStats {
    bytesSent?: number;
    packetsSent?: number;
    roundTripTime?: number;
    targetBitrate?: number;
}
export interface RTCPeerConnectionIceErrorEventInit extends EventInit {
    errorCode: number;
    hostCandidate?: string;
    statusText?: string;
    url?: string;
}
export interface RTCPeerConnectionIceEventInit extends EventInit {
    candidate?: RTCIceCandidate | null;
    url?: string | null;
}
export interface RTCRTPStreamStats extends RTCStats {
    associateStatsId?: string;
    codecId?: string;
    firCount?: number;
    isRemote?: boolean;
    mediaTrackId?: string;
    mediaType?: string;
    nackCount?: number;
    pliCount?: number;
    sliCount?: number;
    ssrc?: string;
    transportId?: string;
}
export interface RTCRtcpFeedback {
    parameter?: string;
    type?: string;
}
export interface RTCRtcpParameters {
    cname?: string;
    reducedSize?: boolean;
}
export interface RTCRtpCapabilities {
    codecs: RTCRtpCodecCapability[];
    headerExtensions: RTCRtpHeaderExtensionCapability[];
}
export interface RTCRtpCodecCapability {
    channels?: number;
    clockRate: number;
    mimeType: string;
    sdpFmtpLine?: string;
}
export interface RTCRtpCodecParameters {
    channels?: number;
    clockRate: number;
    mimeType: string;
    payloadType: number;
    sdpFmtpLine?: string;
}
export interface RTCRtpCodingParameters {
    rid?: string;
}
export interface RTCRtpContributingSource {
    audioLevel?: number;
    source: number;
    timestamp: number;
}
export interface RTCRtpDecodingParameters extends RTCRtpCodingParameters {
}
export interface RTCRtpEncodingParameters extends RTCRtpCodingParameters {
    active?: boolean;
    codecPayloadType?: number;
    dtx?: RTCDtxStatus;
    maxBitrate?: number;
    maxFramerate?: number;
    priority?: RTCPriorityType;
    ptime?: number;
    scaleResolutionDownBy?: number;
}
export interface RTCRtpFecParameters {
    mechanism?: string;
    ssrc?: number;
}
export interface RTCRtpHeaderExtension {
    kind?: string;
    preferredEncrypt?: boolean;
    preferredId?: number;
    uri?: string;
}
export interface RTCRtpHeaderExtensionCapability {
    uri?: string;
}
export interface RTCRtpHeaderExtensionParameters {
    encrypted?: boolean;
    id: number;
    uri: string;
}
export interface RTCRtpParameters {
    codecs: RTCRtpCodecParameters[];
    headerExtensions: RTCRtpHeaderExtensionParameters[];
    rtcp: RTCRtcpParameters;
}
export interface RTCRtpReceiveParameters extends RTCRtpParameters {
    encodings: RTCRtpDecodingParameters[];
}
export interface RTCRtpRtxParameters {
    ssrc?: number;
}
export interface RTCRtpSendParameters extends RTCRtpParameters {
    degradationPreference?: RTCDegradationPreference;
    encodings: RTCRtpEncodingParameters[];
    transactionId: string;
}
export interface RTCRtpSynchronizationSource extends RTCRtpContributingSource {
    voiceActivityFlag?: boolean;
}
export interface RTCRtpTransceiverInit {
    direction?: RTCRtpTransceiverDirection;
    sendEncodings?: RTCRtpEncodingParameters[];
    streams?: MediaStream[];
}
export interface RTCRtpUnhandled {
    muxId?: string;
    payloadType?: number;
    ssrc?: number;
}
export interface RTCSessionDescriptionInit {
    sdp?: string;
    type: RTCSdpType;
}
export interface RTCSrtpKeyParam {
    keyMethod?: string;
    keySalt?: string;
    lifetime?: string;
    mkiLength?: number;
    mkiValue?: number;
}
export interface RTCSrtpSdesParameters {
    cryptoSuite?: string;
    keyParams?: RTCSrtpKeyParam[];
    sessionParams?: string[];
    tag?: number;
}
export interface RTCSsrcRange {
    max?: number;
    min?: number;
}
export interface RTCStats {
    id: string;
    timestamp: number;
    type: RTCStatsType;
}
export interface RTCStatsEventInit extends EventInit {
    report: RTCStatsReport;
}
export interface RTCStatsReport {
}
export interface RTCTrackEventInit extends EventInit {
    receiver: RTCRtpReceiver;
    streams?: MediaStream[];
    track: MediaStreamTrack;
    transceiver: RTCRtpTransceiver;
}
export interface RTCTransportStats extends RTCStats {
    activeConnection?: boolean;
    bytesReceived?: number;
    bytesSent?: number;
    localCertificateId?: string;
    remoteCertificateId?: string;
    rtcpTransportStatsId?: string;
    selectedCandidatePairId?: string;
}
export interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}
export interface RequestInit {
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: any;
}
export interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}
export interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}
export interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash: KeyAlgorithm;
}
export interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}
export interface RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}
export interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}
export interface RsaOaepParams extends Algorithm {
    label?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}
export interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}
export interface RsaPssParams extends Algorithm {
    saltLength: number;
}
export interface SVGBoundingBoxOptions {
    clipped?: boolean;
    fill?: boolean;
    markers?: boolean;
    stroke?: boolean;
}
export interface ScopedCredentialDescriptor {
    id: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null;
    transports?: Transport[];
    type: ScopedCredentialType;
}
export interface ScopedCredentialOptions {
    excludeList?: ScopedCredentialDescriptor[];
    extensions?: WebAuthnExtensions;
    rpId?: string;
    timeoutSeconds?: number;
}
export interface ScopedCredentialParameters {
    algorithm: string | Algorithm;
    type: ScopedCredentialType;
}
export interface ScrollIntoViewOptions extends ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}
export interface ScrollOptions {
    behavior?: ScrollBehavior;
}
export interface ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
}
export interface SecurityPolicyViolationEventInit extends EventInit {
    blockedURI?: string;
    columnNumber?: number;
    documentURI?: string;
    effectiveDirective?: string;
    lineNumber?: number;
    originalPolicy?: string;
    referrer?: string;
    sourceFile?: string;
    statusCode?: number;
    violatedDirective?: string;
}
export interface ServiceWorkerMessageEventInit extends EventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[] | null;
    source?: ServiceWorker | MessagePort | null;
}
export interface StereoPannerOptions extends AudioNodeOptions {
    pan?: number;
}
export interface StorageEstimate {
    quota?: number;
    usage?: number;
}
export interface StorageEventInit extends EventInit {
    key?: string | null;
    newValue?: string | null;
    oldValue?: string | null;
    storageArea?: Storage | null;
    url?: string;
}
export interface StoreExceptionsInformation extends ExceptionInformation {
    detailURI?: string | null;
    explanationString?: string | null;
    siteName?: string | null;
}
export interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
    arrayOfDomainStrings?: string[];
}
export interface TextDecodeOptions {
    stream?: boolean;
}
export interface TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
}
export interface TouchEventInit extends EventModifierInit {
    changedTouches?: Touch[];
    targetTouches?: Touch[];
    touches?: Touch[];
}
export interface TouchInit {
    altitudeAngle?: number;
    azimuthAngle?: number;
    clientX?: number;
    clientY?: number;
    force?: number;
    identifier: number;
    pageX?: number;
    pageY?: number;
    radiusX?: number;
    radiusY?: number;
    rotationAngle?: number;
    screenX?: number;
    screenY?: number;
    target: EventTarget;
    touchType?: TouchType;
}
export interface TrackEventInit extends EventInit {
    track?: VideoTrack | AudioTrack | TextTrack | null;
}
export interface Transformer<I = any, O = any> {
    flush?: TransformStreamDefaultControllerCallback<O>;
    readableType?: undefined;
    start?: TransformStreamDefaultControllerCallback<O>;
    transform?: TransformStreamDefaultControllerTransformCallback<I, O>;
    writableType?: undefined;
}
export interface TransitionEventInit extends EventInit {
    elapsedTime?: number;
    propertyName?: string;
    pseudoElement?: string;
}
export interface UIEventInit extends EventInit {
    detail?: number;
    view?: Window | null;
}
export interface UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: ReadableStreamErrorCallback;
    pull?: ReadableByteStreamControllerCallback;
    start?: ReadableByteStreamControllerCallback;
    type: "bytes";
}
export interface UnderlyingSink<W = any> {
    abort?: WritableStreamErrorCallback;
    close?: WritableStreamDefaultControllerCloseCallback;
    start?: WritableStreamDefaultControllerStartCallback;
    type?: undefined;
    write?: WritableStreamDefaultControllerWriteCallback<W>;
}
export interface UnderlyingSource<R = any> {
    cancel?: ReadableStreamErrorCallback;
    pull?: ReadableStreamDefaultControllerCallback<R>;
    start?: ReadableStreamDefaultControllerCallback<R>;
    type?: undefined;
}
export interface VRDisplayEventInit extends EventInit {
    display: VRDisplay;
    reason?: VRDisplayEventReason;
}
export interface VRLayer {
    leftBounds?: number[] | Float32Array | null;
    rightBounds?: number[] | Float32Array | null;
    source?: HTMLCanvasElement | null;
}
export interface VRStageParameters {
    sittingToStandingTransform?: Float32Array;
    sizeX?: number;
    sizeY?: number;
}
export interface WaveShaperOptions extends AudioNodeOptions {
    curve?: number[] | Float32Array;
    oversample?: OverSampleType;
}
export interface WebAuthnExtensions {
}
export interface WebGLContextAttributes {
    alpha?: GLboolean;
    antialias?: GLboolean;
    depth?: GLboolean;
    failIfMajorPerformanceCaveat?: boolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: GLboolean;
    preserveDrawingBuffer?: GLboolean;
    stencil?: GLboolean;
}
export interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}
export interface WheelEventInit extends MouseEventInit {
    deltaMode?: number;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
}
export interface WorkerOptions {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}
export interface WorkletOptions {
    credentials?: RequestCredentials;
}
export interface EventListener {
    (evt: Event): void;
}
export interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}
export interface AbortController {
    /**
     * Returns the AbortSignal object associated with this object.
     */
    readonly signal: AbortSignal;
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and
     * signal to any observers that the associated activity is to be aborted.
     */
    abort(): void;
}
export type AbortControllerGlobal =  {
    prototype: AbortController;
    new(): AbortController;
};
export interface AbortSignalEventMap {
    "abort": ProgressEvent;
}
export interface AbortSignal extends EventTarget {
    /**
     * Returns true if this AbortSignal's AbortController has signaled to abort, and false
     * otherwise.
     */
    readonly aborted: boolean;
    onabort: ((this: AbortSignal, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type AbortSignalGlobal =  {
    prototype: AbortSignal;
    new(): AbortSignal;
};
export interface AbstractRange {
    readonly collapsed: boolean;
    readonly endContainer: Node;
    readonly endOffset: number;
    readonly startContainer: Node;
    readonly startOffset: number;
}
export type AbstractRangeGlobal =  {
    prototype: AbstractRange;
    new(): AbstractRange;
};
export interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}
export interface AbstractWorker {
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export interface AesCfbParams extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}
export interface AesCmacParams extends Algorithm {
    length: number;
}
export interface AnalyserNode extends AudioNode {
    fftSize: number;
    readonly frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}
export type AnalyserNodeGlobal =  {
    prototype: AnalyserNode;
    new(context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
};
export interface Animatable {
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
    getAnimations(): Animation[];
}
export interface AnimationEventMap {
    "cancel": AnimationPlaybackEvent;
    "finish": AnimationPlaybackEvent;
}
export interface Animation extends EventTarget {
    currentTime: number | null;
    effect: AnimationEffect | null;
    readonly finished: Promise<Animation>;
    id: string;
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    readonly pending: boolean;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    readonly ready: Promise<Animation>;
    startTime: number | null;
    timeline: AnimationTimeline | null;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    updatePlaybackRate(playbackRate: number): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type AnimationGlobal =  {
    prototype: Animation;
    new(effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation;
};
export interface AnimationEffect {
    getComputedTiming(): ComputedEffectTiming;
    getTiming(): EffectTiming;
    updateTiming(timing?: OptionalEffectTiming): void;
}
export type AnimationEffectGlobal =  {
    prototype: AnimationEffect;
    new(): AnimationEffect;
};
export interface AnimationEvent extends Event {
    readonly animationName: string;
    readonly elapsedTime: number;
    readonly pseudoElement: string;
}
export type AnimationEventGlobal =  {
    prototype: AnimationEvent;
    new(type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
};
export interface AnimationPlaybackEvent extends Event {
    readonly currentTime: number | null;
    readonly timelineTime: number | null;
}
export type AnimationPlaybackEventGlobal =  {
    prototype: AnimationPlaybackEvent;
    new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
};
export interface AnimationTimeline {
    readonly currentTime: number | null;
}
export type AnimationTimelineGlobal =  {
    prototype: AnimationTimeline;
    new(): AnimationTimeline;
};
export interface ApplicationCacheEventMap {
    "cached": Event;
    "checking": Event;
    "downloading": Event;
    "error": Event;
    "noupdate": Event;
    "obsolete": Event;
    "progress": ProgressEvent;
    "updateready": Event;
}
export interface ApplicationCache extends EventTarget {
    /** @deprecated */
    oncached: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onchecking: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    ondownloading: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onerror: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onnoupdate: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onobsolete: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onprogress: ((this: ApplicationCache, ev: ProgressEvent) => any) | null;
    /** @deprecated */
    onupdateready: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    readonly status: number;
    /** @deprecated */
    abort(): void;
    /** @deprecated */
    swapCache(): void;
    /** @deprecated */
    update(): void;
    readonly CHECKING: number;
    readonly DOWNLOADING: number;
    readonly IDLE: number;
    readonly OBSOLETE: number;
    readonly UNCACHED: number;
    readonly UPDATEREADY: number;
    addEventListener<K extends keyof ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ApplicationCacheGlobal =  {
    prototype: ApplicationCache;
    new(): ApplicationCache;
    readonly CHECKING: number;
    readonly DOWNLOADING: number;
    readonly IDLE: number;
    readonly OBSOLETE: number;
    readonly UNCACHED: number;
    readonly UPDATEREADY: number;
};
export interface Attr extends Node {
    readonly localName: string;
    readonly name: string;
    readonly namespaceURI: string | null;
    readonly ownerElement: Element | null;
    readonly prefix: string | null;
    readonly specified: boolean;
    value: string;
}
export type AttrGlobal =  {
    prototype: Attr;
    new(): Attr;
};
export interface AudioBuffer {
    readonly duration: number;
    readonly length: number;
    readonly numberOfChannels: number;
    readonly sampleRate: number;
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
    getChannelData(channel: number): Float32Array;
}
export type AudioBufferGlobal =  {
    prototype: AudioBuffer;
    new(options: AudioBufferOptions): AudioBuffer;
};
export interface AudioBufferSourceNode extends AudioScheduledSourceNode {
    buffer: AudioBuffer | null;
    readonly detune: AudioParam;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    readonly playbackRate: AudioParam;
    start(when?: number, offset?: number, duration?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type AudioBufferSourceNodeGlobal =  {
    prototype: AudioBufferSourceNode;
    new(context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
};
export interface AudioContext extends BaseAudioContext {
    readonly baseLatency: number;
    readonly outputLatency: number;
    close(): Promise<void>;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createMediaStreamTrackSource(mediaStreamTrack: MediaStreamTrack): MediaStreamTrackAudioSourceNode;
    getOutputTimestamp(): AudioTimestamp;
    suspend(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type AudioContextGlobal =  {
    prototype: AudioContext;
    new(contextOptions?: AudioContextOptions): AudioContext;
};
export interface AudioDestinationNode extends AudioNode {
    readonly maxChannelCount: number;
}
export type AudioDestinationNodeGlobal =  {
    prototype: AudioDestinationNode;
    new(): AudioDestinationNode;
};
export interface AudioListener {
    readonly forwardX: AudioParam;
    readonly forwardY: AudioParam;
    readonly forwardZ: AudioParam;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    readonly upX: AudioParam;
    readonly upY: AudioParam;
    readonly upZ: AudioParam;
    /** @deprecated */
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    /** @deprecated */
    setPosition(x: number, y: number, z: number): void;
}
export type AudioListenerGlobal =  {
    prototype: AudioListener;
    new(): AudioListener;
};
export interface AudioNode extends EventTarget {
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    connect(destinationNode: AudioNode, output?: number, input?: number): AudioNode;
    connect(destinationParam: AudioParam, output?: number): void;
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destinationNode: AudioNode): void;
    disconnect(destinationNode: AudioNode, output: number): void;
    disconnect(destinationNode: AudioNode, output: number, input: number): void;
    disconnect(destinationParam: AudioParam): void;
    disconnect(destinationParam: AudioParam, output: number): void;
}
export type AudioNodeGlobal =  {
    prototype: AudioNode;
    new(): AudioNode;
};
export interface AudioParam {
    automationRate: AutomationRate;
    readonly defaultValue: number;
    readonly maxValue: number;
    readonly minValue: number;
    value: number;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueAtTime(value: number, startTime: number): AudioParam;
    setValueCurveAtTime(values: number[] | Float32Array, startTime: number, duration: number): AudioParam;
}
export type AudioParamGlobal =  {
    prototype: AudioParam;
    new(): AudioParam;
};
export interface AudioParamMap {
    forEach(callbackfn: (value: AudioParam, key: string, parent: AudioParamMap) => void, thisArg?: any): void;
}
export type AudioParamMapGlobal =  {
    prototype: AudioParamMap;
    new(): AudioParamMap;
};
export interface AudioProcessingEvent extends Event {
    readonly inputBuffer: AudioBuffer;
    readonly outputBuffer: AudioBuffer;
    readonly playbackTime: number;
}
export type AudioProcessingEventGlobal =  {
    prototype: AudioProcessingEvent;
    new(type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
};
export interface AudioScheduledSourceNodeEventMap {
    "ended": Event;
}
export interface AudioScheduledSourceNode extends AudioNode {
    onended: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type AudioScheduledSourceNodeGlobal =  {
    prototype: AudioScheduledSourceNode;
    new(): AudioScheduledSourceNode;
};
export interface AudioTrack {
    enabled: boolean;
    readonly id: string;
    kind: string;
    readonly label: string;
    language: string;
    readonly sourceBuffer: SourceBuffer;
}
export type AudioTrackGlobal =  {
    prototype: AudioTrack;
    new(): AudioTrack;
};
export interface AudioTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}
export interface AudioTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: ((this: AudioTrackList, ev: TrackEvent) => any) | null;
    onchange: ((this: AudioTrackList, ev: Event) => any) | null;
    onremovetrack: ((this: AudioTrackList, ev: TrackEvent) => any) | null;
    getTrackById(id: string): AudioTrack | null;
    item(index: number): AudioTrack;
    addEventListener<K extends keyof AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: AudioTrack;
}
export type AudioTrackListGlobal =  {
    prototype: AudioTrackList;
    new(): AudioTrackList;
};
export interface AudioWorklet extends Worklet {
}
export type AudioWorkletGlobal =  {
    prototype: AudioWorklet;
    new(): AudioWorklet;
};
export interface AudioWorkletNodeEventMap {
    "processorerror": Event;
}
export interface AudioWorkletNode extends AudioNode {
    onprocessorerror: ((this: AudioWorkletNode, ev: Event) => any) | null;
    readonly parameters: AudioParamMap;
    readonly port: MessagePort;
    addEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type AudioWorkletNodeGlobal =  {
    prototype: AudioWorkletNode;
    new(context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode;
};
export interface BarProp {
    readonly visible: boolean;
}
export type BarPropGlobal =  {
    prototype: BarProp;
    new(): BarProp;
};
export interface BaseAudioContextEventMap {
    "statechange": Event;
}
export interface BaseAudioContext extends EventTarget {
    readonly audioWorklet: AudioWorklet;
    readonly currentTime: number;
    readonly destination: AudioDestinationNode;
    readonly listener: AudioListener;
    onstatechange: ((this: BaseAudioContext, ev: Event) => any) | null;
    readonly sampleRate: number;
    readonly state: AudioContextState;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: number[] | Float32Array, imag: number[] | Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback | null, errorCallback?: DecodeErrorCallback | null): Promise<AudioBuffer>;
    resume(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type BaseAudioContextGlobal =  {
    prototype: BaseAudioContext;
    new(): BaseAudioContext;
};
export interface BeforeUnloadEvent extends Event {
    returnValue: any;
}
export type BeforeUnloadEventGlobal =  {
    prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
};
export interface BhxBrowser {
    readonly lastError: DOMException;
    checkMatchesGlobExpression(pattern: string, value: string): boolean;
    checkMatchesUriExpression(pattern: string, value: string): boolean;
    clearLastError(): void;
    currentWindowId(): number;
    fireExtensionApiTelemetry(functionName: string, isSucceeded: boolean, isSupported: boolean, errorString: string): void;
    genericFunction(functionId: number, destination: any, parameters?: string, callbackId?: number): void;
    genericSynchronousFunction(functionId: number, parameters?: string): string;
    getExtensionId(): string;
    getThisAddress(): any;
    registerGenericFunctionCallbackHandler(callbackHandler: Function): void;
    registerGenericListenerHandler(eventHandler: Function): void;
    setLastError(parameters: string): void;
    webPlatformGenericFunction(destination: any, parameters?: string, callbackId?: number): void;
}
export type BhxBrowserGlobal =  {
    prototype: BhxBrowser;
    new(): BhxBrowser;
};
export interface BiquadFilterNode extends AudioNode {
    readonly Q: AudioParam;
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    readonly gain: AudioParam;
    type: BiquadFilterType;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
export type BiquadFilterNodeGlobal =  {
    prototype: BiquadFilterNode;
    new(context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
};
export interface Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}
export type BlobGlobal =  {
    prototype: Blob;
    new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};
export interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}
export interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
export interface BroadcastChannel extends EventTarget {
    /**
     * Returns the channel name (as passed to the constructor).
     */
    readonly name: string;
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /**
     * Closes the BroadcastChannel object, opening it up to garbage collection.
     */
    close(): void;
    /**
     * Sends the given message to other BroadcastChannel objects set up for this channel. Messages can be structured objects, e.g. nested objects and arrays.
     */
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type BroadcastChannelGlobal =  {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};
export interface BroadcastChannelEventMap {
    message: MessageEvent;
    messageerror: MessageEvent;
}
export interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    highWaterMark: number;
    size(chunk: ArrayBufferView): number;
}
export type ByteLengthQueuingStrategyGlobal =  {
    prototype: ByteLengthQueuingStrategy;
    new(options: { highWaterMark: number }): ByteLengthQueuingStrategy;
};
export interface CDATASection extends Text {
}
export type CDATASectionGlobal =  {
    prototype: CDATASection;
    new(): CDATASection;
};
export interface CSS {
    escape(value: string): string;
    supports(property: string, value?: string): boolean;
}
export type CSSGlobal =  CSS;
export interface CSSConditionRule extends CSSGroupingRule {
    conditionText: string;
}
export type CSSConditionRuleGlobal =  {
    prototype: CSSConditionRule;
    new(): CSSConditionRule;
};
export interface CSSFontFaceRule extends CSSRule {
    readonly style: CSSStyleDeclaration;
}
export type CSSFontFaceRuleGlobal =  {
    prototype: CSSFontFaceRule;
    new(): CSSFontFaceRule;
};
export interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    deleteRule(index: number): void;
    insertRule(rule: string, index: number): number;
}
export type CSSGroupingRuleGlobal =  {
    prototype: CSSGroupingRule;
    new(): CSSGroupingRule;
};
export interface CSSImportRule extends CSSRule {
    readonly href: string;
    readonly media: MediaList;
    readonly styleSheet: CSSStyleSheet;
}
export type CSSImportRuleGlobal =  {
    prototype: CSSImportRule;
    new(): CSSImportRule;
};
export interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    readonly style: CSSStyleDeclaration;
}
export type CSSKeyframeRuleGlobal =  {
    prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
};
export interface CSSKeyframesRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    name: string;
    appendRule(rule: string): void;
    deleteRule(select: string): void;
    findRule(select: string): CSSKeyframeRule | null;
}
export type CSSKeyframesRuleGlobal =  {
    prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
};
export interface CSSMediaRule extends CSSConditionRule {
    readonly media: MediaList;
}
export type CSSMediaRuleGlobal =  {
    prototype: CSSMediaRule;
    new(): CSSMediaRule;
};
export interface CSSNamespaceRule extends CSSRule {
    readonly namespaceURI: string;
    readonly prefix: string;
}
export type CSSNamespaceRuleGlobal =  {
    prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
};
export interface CSSPageRule extends CSSRule {
    readonly pseudoClass: string;
    readonly selector: string;
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}
export type CSSPageRuleGlobal =  {
    prototype: CSSPageRule;
    new(): CSSPageRule;
};
export interface CSSRule {
    cssText: string;
    readonly parentRule: CSSRule | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    readonly type: number;
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
    readonly SUPPORTS_RULE: number;
    readonly UNKNOWN_RULE: number;
    readonly VIEWPORT_RULE: number;
}
export type CSSRuleGlobal =  {
    prototype: CSSRule;
    new(): CSSRule;
    readonly CHARSET_RULE: number;
    readonly FONT_FACE_RULE: number;
    readonly IMPORT_RULE: number;
    readonly KEYFRAMES_RULE: number;
    readonly KEYFRAME_RULE: number;
    readonly MEDIA_RULE: number;
    readonly NAMESPACE_RULE: number;
    readonly PAGE_RULE: number;
    readonly STYLE_RULE: number;
    readonly SUPPORTS_RULE: number;
    readonly UNKNOWN_RULE: number;
    readonly VIEWPORT_RULE: number;
};
export interface CSSRuleList {
    readonly length: number;
    item(index: number): CSSRule | null;
    [index: number]: CSSRule;
}
export type CSSRuleListGlobal =  {
    prototype: CSSRuleList;
    new(): CSSRuleList;
};
export interface CSSStyleDeclaration {
    alignContent: string | null;
    alignItems: string | null;
    alignSelf: string | null;
    alignmentBaseline: string | null;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    backfaceVisibility: string | null;
    background: string | null;
    backgroundAttachment: string | null;
    backgroundClip: string | null;
    backgroundColor: string | null;
    backgroundImage: string | null;
    backgroundOrigin: string | null;
    backgroundPosition: string | null;
    backgroundPositionX: string | null;
    backgroundPositionY: string | null;
    backgroundRepeat: string | null;
    backgroundSize: string | null;
    baselineShift: string | null;
    border: string | null;
    borderBottom: string | null;
    borderBottomColor: string | null;
    borderBottomLeftRadius: string | null;
    borderBottomRightRadius: string | null;
    borderBottomStyle: string | null;
    borderBottomWidth: string | null;
    borderCollapse: string | null;
    borderColor: string | null;
    borderImage: string | null;
    borderImageOutset: string | null;
    borderImageRepeat: string | null;
    borderImageSlice: string | null;
    borderImageSource: string | null;
    borderImageWidth: string | null;
    borderLeft: string | null;
    borderLeftColor: string | null;
    borderLeftStyle: string | null;
    borderLeftWidth: string | null;
    borderRadius: string | null;
    borderRight: string | null;
    borderRightColor: string | null;
    borderRightStyle: string | null;
    borderRightWidth: string | null;
    borderSpacing: string | null;
    borderStyle: string | null;
    borderTop: string | null;
    borderTopColor: string | null;
    borderTopLeftRadius: string | null;
    borderTopRightRadius: string | null;
    borderTopStyle: string | null;
    borderTopWidth: string | null;
    borderWidth: string | null;
    bottom: string | null;
    boxShadow: string | null;
    boxSizing: string | null;
    breakAfter: string | null;
    breakBefore: string | null;
    breakInside: string | null;
    captionSide: string | null;
    clear: string | null;
    clip: string | null;
    clipPath: string | null;
    clipRule: string | null;
    color: string | null;
    colorInterpolationFilters: string | null;
    columnCount: any;
    columnFill: string | null;
    columnGap: any;
    columnRule: string | null;
    columnRuleColor: any;
    columnRuleStyle: string | null;
    columnRuleWidth: any;
    columnSpan: string | null;
    columnWidth: any;
    columns: string | null;
    content: string | null;
    counterIncrement: string | null;
    counterReset: string | null;
    cssFloat: string | null;
    cssText: string;
    cursor: string | null;
    direction: string | null;
    display: string | null;
    dominantBaseline: string | null;
    emptyCells: string | null;
    enableBackground: string | null;
    fill: string | null;
    fillOpacity: string | null;
    fillRule: string | null;
    filter: string | null;
    flex: string | null;
    flexBasis: string | null;
    flexDirection: string | null;
    flexFlow: string | null;
    flexGrow: string | null;
    flexShrink: string | null;
    flexWrap: string | null;
    floodColor: string | null;
    floodOpacity: string | null;
    font: string | null;
    fontFamily: string | null;
    fontFeatureSettings: string | null;
    fontSize: string | null;
    fontSizeAdjust: string | null;
    fontStretch: string | null;
    fontStyle: string | null;
    fontVariant: string | null;
    fontWeight: string | null;
    gap: string | null;
    glyphOrientationHorizontal: string | null;
    glyphOrientationVertical: string | null;
    grid: string | null;
    gridArea: string | null;
    gridAutoColumns: string | null;
    gridAutoFlow: string | null;
    gridAutoRows: string | null;
    gridColumn: string | null;
    gridColumnEnd: string | null;
    gridColumnGap: string | null;
    gridColumnStart: string | null;
    gridGap: string | null;
    gridRow: string | null;
    gridRowEnd: string | null;
    gridRowGap: string | null;
    gridRowStart: string | null;
    gridTemplate: string | null;
    gridTemplateAreas: string | null;
    gridTemplateColumns: string | null;
    gridTemplateRows: string | null;
    height: string | null;
    imeMode: string | null;
    justifyContent: string | null;
    justifyItems: string | null;
    justifySelf: string | null;
    kerning: string | null;
    layoutGrid: string | null;
    layoutGridChar: string | null;
    layoutGridLine: string | null;
    layoutGridMode: string | null;
    layoutGridType: string | null;
    left: string | null;
    readonly length: number;
    letterSpacing: string | null;
    lightingColor: string | null;
    lineBreak: string | null;
    lineHeight: string | null;
    listStyle: string | null;
    listStyleImage: string | null;
    listStylePosition: string | null;
    listStyleType: string | null;
    margin: string | null;
    marginBottom: string | null;
    marginLeft: string | null;
    marginRight: string | null;
    marginTop: string | null;
    marker: string | null;
    markerEnd: string | null;
    markerMid: string | null;
    markerStart: string | null;
    mask: string | null;
    maskImage: string | null;
    maxHeight: string | null;
    maxWidth: string | null;
    minHeight: string | null;
    minWidth: string | null;
    msContentZoomChaining: string | null;
    msContentZoomLimit: string | null;
    msContentZoomLimitMax: any;
    msContentZoomLimitMin: any;
    msContentZoomSnap: string | null;
    msContentZoomSnapPoints: string | null;
    msContentZoomSnapType: string | null;
    msContentZooming: string | null;
    msFlowFrom: string | null;
    msFlowInto: string | null;
    msFontFeatureSettings: string | null;
    msGridColumn: any;
    msGridColumnAlign: string | null;
    msGridColumnSpan: any;
    msGridColumns: string | null;
    msGridRow: any;
    msGridRowAlign: string | null;
    msGridRowSpan: any;
    msGridRows: string | null;
    msHighContrastAdjust: string | null;
    msHyphenateLimitChars: string | null;
    msHyphenateLimitLines: any;
    msHyphenateLimitZone: any;
    msHyphens: string | null;
    msImeAlign: string | null;
    msOverflowStyle: string | null;
    msScrollChaining: string | null;
    msScrollLimit: string | null;
    msScrollLimitXMax: any;
    msScrollLimitXMin: any;
    msScrollLimitYMax: any;
    msScrollLimitYMin: any;
    msScrollRails: string | null;
    msScrollSnapPointsX: string | null;
    msScrollSnapPointsY: string | null;
    msScrollSnapType: string | null;
    msScrollSnapX: string | null;
    msScrollSnapY: string | null;
    msScrollTranslation: string | null;
    msTextCombineHorizontal: string | null;
    msTextSizeAdjust: any;
    msTouchAction: string | null;
    msTouchSelect: string | null;
    msUserSelect: string | null;
    msWrapFlow: string;
    msWrapMargin: any;
    msWrapThrough: string;
    objectFit: string | null;
    objectPosition: string | null;
    opacity: string | null;
    order: string | null;
    orphans: string | null;
    outline: string | null;
    outlineColor: string | null;
    outlineOffset: string | null;
    outlineStyle: string | null;
    outlineWidth: string | null;
    overflow: string | null;
    overflowX: string | null;
    overflowY: string | null;
    padding: string | null;
    paddingBottom: string | null;
    paddingLeft: string | null;
    paddingRight: string | null;
    paddingTop: string | null;
    pageBreakAfter: string | null;
    pageBreakBefore: string | null;
    pageBreakInside: string | null;
    readonly parentRule: CSSRule;
    penAction: string | null;
    perspective: string | null;
    perspectiveOrigin: string | null;
    pointerEvents: string | null;
    position: string | null;
    quotes: string | null;
    resize: string | null;
    right: string | null;
    rotate: string | null;
    rowGap: string | null;
    rubyAlign: string | null;
    rubyOverhang: string | null;
    rubyPosition: string | null;
    scale: string | null;
    scrollBehavior: string;
    stopColor: string | null;
    stopOpacity: string | null;
    stroke: string | null;
    strokeDasharray: string | null;
    strokeDashoffset: string | null;
    strokeLinecap: string | null;
    strokeLinejoin: string | null;
    strokeMiterlimit: string | null;
    strokeOpacity: string | null;
    strokeWidth: string | null;
    tableLayout: string | null;
    textAlign: string | null;
    textAlignLast: string | null;
    textAnchor: string | null;
    textCombineUpright: string | null;
    textDecoration: string | null;
    textIndent: string | null;
    textJustify: string | null;
    textKashida: string | null;
    textKashidaSpace: string | null;
    textOverflow: string | null;
    textShadow: string | null;
    textTransform: string | null;
    textUnderlinePosition: string | null;
    top: string | null;
    touchAction: string;
    transform: string | null;
    transformOrigin: string | null;
    transformStyle: string | null;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string | null;
    unicodeBidi: string | null;
    userSelect: string | null;
    verticalAlign: string | null;
    visibility: string | null;
    /** @deprecated */
    webkitAlignContent: string;
    /** @deprecated */
    webkitAlignItems: string;
    /** @deprecated */
    webkitAlignSelf: string;
    /** @deprecated */
    webkitAnimation: string;
    /** @deprecated */
    webkitAnimationDelay: string;
    /** @deprecated */
    webkitAnimationDirection: string;
    /** @deprecated */
    webkitAnimationDuration: string;
    /** @deprecated */
    webkitAnimationFillMode: string;
    /** @deprecated */
    webkitAnimationIterationCount: string;
    /** @deprecated */
    webkitAnimationName: string;
    /** @deprecated */
    webkitAnimationPlayState: string;
    /** @deprecated */
    webkitAnimationTimingFunction: string;
    /** @deprecated */
    webkitAppearance: string;
    /** @deprecated */
    webkitBackfaceVisibility: string;
    /** @deprecated */
    webkitBackgroundClip: string;
    /** @deprecated */
    webkitBackgroundOrigin: string;
    /** @deprecated */
    webkitBackgroundSize: string;
    /** @deprecated */
    webkitBorderBottomLeftRadius: string;
    /** @deprecated */
    webkitBorderBottomRightRadius: string;
    webkitBorderImage: string | null;
    /** @deprecated */
    webkitBorderRadius: string;
    /** @deprecated */
    webkitBorderTopLeftRadius: string;
    /** @deprecated */
    webkitBorderTopRightRadius: string;
    /** @deprecated */
    webkitBoxAlign: string;
    webkitBoxDirection: string | null;
    /** @deprecated */
    webkitBoxFlex: string;
    /** @deprecated */
    webkitBoxOrdinalGroup: string;
    webkitBoxOrient: string | null;
    /** @deprecated */
    webkitBoxPack: string;
    /** @deprecated */
    webkitBoxShadow: string;
    /** @deprecated */
    webkitBoxSizing: string;
    webkitColumnBreakAfter: string | null;
    webkitColumnBreakBefore: string | null;
    webkitColumnBreakInside: string | null;
    webkitColumnCount: any;
    webkitColumnGap: any;
    webkitColumnRule: string | null;
    webkitColumnRuleColor: any;
    webkitColumnRuleStyle: string | null;
    webkitColumnRuleWidth: any;
    webkitColumnSpan: string | null;
    webkitColumnWidth: any;
    webkitColumns: string | null;
    /** @deprecated */
    webkitFilter: string;
    /** @deprecated */
    webkitFlex: string;
    /** @deprecated */
    webkitFlexBasis: string;
    /** @deprecated */
    webkitFlexDirection: string;
    /** @deprecated */
    webkitFlexFlow: string;
    /** @deprecated */
    webkitFlexGrow: string;
    /** @deprecated */
    webkitFlexShrink: string;
    /** @deprecated */
    webkitFlexWrap: string;
    /** @deprecated */
    webkitJustifyContent: string;
    /** @deprecated */
    webkitMask: string;
    /** @deprecated */
    webkitMaskBoxImage: string;
    /** @deprecated */
    webkitMaskBoxImageOutset: string;
    /** @deprecated */
    webkitMaskBoxImageRepeat: string;
    /** @deprecated */
    webkitMaskBoxImageSlice: string;
    /** @deprecated */
    webkitMaskBoxImageSource: string;
    /** @deprecated */
    webkitMaskBoxImageWidth: string;
    /** @deprecated */
    webkitMaskClip: string;
    /** @deprecated */
    webkitMaskComposite: string;
    /** @deprecated */
    webkitMaskImage: string;
    /** @deprecated */
    webkitMaskOrigin: string;
    /** @deprecated */
    webkitMaskPosition: string;
    /** @deprecated */
    webkitMaskRepeat: string;
    /** @deprecated */
    webkitMaskSize: string;
    /** @deprecated */
    webkitOrder: string;
    /** @deprecated */
    webkitPerspective: string;
    /** @deprecated */
    webkitPerspectiveOrigin: string;
    webkitTapHighlightColor: string | null;
    /** @deprecated */
    webkitTextFillColor: string;
    /** @deprecated */
    webkitTextSizeAdjust: string;
    /** @deprecated */
    webkitTextStroke: string;
    /** @deprecated */
    webkitTextStrokeColor: string;
    /** @deprecated */
    webkitTextStrokeWidth: string;
    /** @deprecated */
    webkitTransform: string;
    /** @deprecated */
    webkitTransformOrigin: string;
    /** @deprecated */
    webkitTransformStyle: string;
    /** @deprecated */
    webkitTransition: string;
    /** @deprecated */
    webkitTransitionDelay: string;
    /** @deprecated */
    webkitTransitionDuration: string;
    /** @deprecated */
    webkitTransitionProperty: string;
    /** @deprecated */
    webkitTransitionTimingFunction: string;
    webkitUserModify: string | null;
    webkitUserSelect: string | null;
    webkitWritingMode: string | null;
    whiteSpace: string | null;
    widows: string | null;
    width: string | null;
    wordBreak: string | null;
    wordSpacing: string | null;
    wordWrap: string | null;
    writingMode: string | null;
    zIndex: string | null;
    zoom: string | null;
    getPropertyPriority(propertyName: string): string;
    getPropertyValue(propertyName: string): string;
    item(index: number): string;
    removeProperty(propertyName: string): string;
    setProperty(propertyName: string, value: string | null, priority?: string | null): void;
    [index: number]: string;
}
export type CSSStyleDeclarationGlobal =  {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
};
export interface CSSStyleRule extends CSSRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}
export type CSSStyleRuleGlobal =  {
    prototype: CSSStyleRule;
    new(): CSSStyleRule;
};
export interface CSSStyleSheet extends StyleSheet {
    readonly cssRules: CSSRuleList;
    /** @deprecated */
    cssText: string;
    /** @deprecated */
    readonly id: string;
    /** @deprecated */
    readonly imports: StyleSheetList;
    /** @deprecated */
    readonly isAlternate: boolean;
    /** @deprecated */
    readonly isPrefAlternate: boolean;
    readonly ownerRule: CSSRule | null;
    /** @deprecated */
    readonly owningElement: Element;
    /** @deprecated */
    readonly pages: any;
    /** @deprecated */
    readonly readOnly: boolean;
    readonly rules: CSSRuleList;
    /** @deprecated */
    addImport(bstrURL: string, lIndex?: number): number;
    /** @deprecated */
    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
    deleteRule(index?: number): void;
    insertRule(rule: string, index?: number): number;
    /** @deprecated */
    removeImport(lIndex: number): void;
    removeRule(lIndex: number): void;
}
export type CSSStyleSheetGlobal =  {
    prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
};
export interface CSSSupportsRule extends CSSConditionRule {
}
export type CSSSupportsRuleGlobal =  {
    prototype: CSSSupportsRule;
    new(): CSSSupportsRule;
};
export interface Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    put(request: RequestInfo, response: Response): Promise<void>;
}
export type CacheGlobal =  {
    prototype: Cache;
    new(): Cache;
};
export interface CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    open(cacheName: string): Promise<Cache>;
}
export type CacheStorageGlobal =  {
    prototype: CacheStorage;
    new(): CacheStorage;
};
export interface CanvasCompositing {
    globalAlpha: number;
    globalCompositeOperation: string;
}
export interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}
export interface CanvasDrawPath {
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    stroke(): void;
    stroke(path: Path2D): void;
}
export interface CanvasFillStrokeStyles {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}
export interface CanvasFilters {
    filter: string;
}
export interface CanvasGradient {
    /**
     * Adds a color stop with the given color to the gradient at the given offset. 0.0 is the offset
     * at one end of the gradient, 1.0 is the offset at the other end.
     * Throws an "IndexSizeError" DOMException if the offset
     * is out of range. Throws a "SyntaxError" DOMException if
     * the color cannot be parsed.
     */
    addColorStop(offset: number, color: string): void;
}
export type CanvasGradientGlobal =  {
    prototype: CanvasGradient;
    new(): CanvasGradient;
};
export interface CanvasImageData {
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}
export interface CanvasImageSmoothing {
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
}
export interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}
export interface CanvasPathDrawingStyles {
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
}
export interface CanvasPattern {
    /**
     * Sets the transformation matrix that will be used when rendering the pattern during a fill or
     * stroke painting operation.
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}
export type CanvasPatternGlobal =  {
    prototype: CanvasPattern;
    new(): CanvasPattern;
};
export interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}
export interface CanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasUserInterface, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasTextDrawingStyles, CanvasPath {
    readonly canvas: HTMLCanvasElement;
}
export type CanvasRenderingContext2DGlobal =  {
    prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
};
export interface CanvasShadowStyles {
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
}
export interface CanvasState {
    restore(): void;
    save(): void;
}
export interface CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}
export interface CanvasTextDrawingStyles {
    direction: CanvasDirection;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
}
export interface CanvasTransform {
    getTransform(): DOMMatrix;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrix2DInit): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}
export interface CanvasUserInterface {
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
    scrollPathIntoView(): void;
    scrollPathIntoView(path: Path2D): void;
}
export interface CaretPosition {
    readonly offset: number;
    readonly offsetNode: Node;
    getClientRect(): DOMRect | null;
}
export type CaretPositionGlobal =  {
    prototype: CaretPosition;
    new(): CaretPosition;
};
export interface ChannelMergerNode extends AudioNode {
}
export type ChannelMergerNodeGlobal =  {
    prototype: ChannelMergerNode;
    new(context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
};
export interface ChannelSplitterNode extends AudioNode {
}
export type ChannelSplitterNodeGlobal =  {
    prototype: ChannelSplitterNode;
    new(context: BaseAudioContext, options?: ChannelSplitterOptions): ChannelSplitterNode;
};
export interface CharacterData extends Node, NonDocumentTypeChildNode, ChildNode {
    data: string;
    readonly length: number;
    appendData(data: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, data: string): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
}
export type CharacterDataGlobal =  {
    prototype: CharacterData;
    new(): CharacterData;
};
export interface ChildNode extends Node {
    /**
     * Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    after(...nodes: (Node | string)[]): void;
    /**
     * Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    before(...nodes: (Node | string)[]): void;
    /**
     * Removes node.
     */
    remove(): void;
    /**
     * Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    replaceWith(...nodes: (Node | string)[]): void;
}
export interface ClientRect {
    bottom: number;
    readonly height: number;
    left: number;
    right: number;
    top: number;
    readonly width: number;
}
export type ClientRectGlobal =  {
    prototype: ClientRect;
    new(): ClientRect;
};
export interface ClientRectList {
    readonly length: number;
    item(index: number): ClientRect;
    [index: number]: ClientRect;
}
export type ClientRectListGlobal =  {
    prototype: ClientRectList;
    new(): ClientRectList;
};
export interface ClipboardEvent extends Event {
    readonly clipboardData: DataTransfer;
}
export type ClipboardEventGlobal =  {
    prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
};
export interface ClipboardEventInit extends EventInit {
    data?: string;
    dataType?: string;
}
export interface CloseEvent extends Event {
    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
    /** @deprecated */
    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;
}
export type CloseEventGlobal =  {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};
export interface Comment extends CharacterData {
}
export type CommentGlobal =  {
    prototype: Comment;
    new(data?: string): Comment;
};
export interface CompositionEvent extends UIEvent {
    readonly data: string;
    readonly locale: string;
    initCompositionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string): void;
}
export type CompositionEventGlobal =  {
    prototype: CompositionEvent;
    new(typeArg: string, eventInitDict?: CompositionEventInit): CompositionEvent;
};
export interface ConcatParams extends Algorithm {
    algorithmId: Uint8Array;
    hash?: string | Algorithm;
    partyUInfo: Uint8Array;
    partyVInfo: Uint8Array;
    privateInfo?: Uint8Array;
    publicInfo?: Uint8Array;
}
export interface Console {
    memory: any;
    assert(condition?: boolean, message?: string, ...data: any[]): void;
    clear(): void;
    count(label?: string): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dir(value?: any, ...optionalParams: any[]): void;
    dirxml(value: any): void;
    error(message?: any, ...optionalParams: any[]): void;
    exception(message?: string, ...optionalParams: any[]): void;
    group(groupTitle?: string, ...optionalParams: any[]): void;
    groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void;
    groupEnd(): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    markTimeline(label?: string): void;
    profile(reportName?: string): void;
    profileEnd(reportName?: string): void;
    table(...tabularData: any[]): void;
    time(label?: string): void;
    timeEnd(label?: string): void;
    timeStamp(label?: string): void;
    timeline(label?: string): void;
    timelineEnd(label?: string): void;
    trace(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
}
export type ConsoleGlobal =  {
    prototype: Console;
    new(): Console;
};
export interface ConstantSourceNode extends AudioScheduledSourceNode {
    readonly offset: AudioParam;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ConstantSourceNodeGlobal =  {
    prototype: ConstantSourceNode;
    new(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
};
export interface ConvolverNode extends AudioNode {
    buffer: AudioBuffer | null;
    normalize: boolean;
}
export type ConvolverNodeGlobal =  {
    prototype: ConvolverNode;
    new(context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
};
export interface Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}
export interface CountQueuingStrategy extends QueuingStrategy {
    highWaterMark: number;
    size(chunk: any): 1;
}
export type CountQueuingStrategyGlobal =  {
    prototype: CountQueuingStrategy;
    new(options: { highWaterMark: number }): CountQueuingStrategy;
};
export interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues<T extends Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T): T;
}
export type CryptoGlobal =  {
    prototype: Crypto;
    new(): Crypto;
};
export interface CryptoKey {
    readonly algorithm: KeyAlgorithm;
    readonly extractable: boolean;
    readonly type: KeyType;
    readonly usages: KeyUsage[];
}
export type CryptoKeyGlobal =  {
    prototype: CryptoKey;
    new(): CryptoKey;
};
export interface CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
}
export type CryptoKeyPairGlobal =  {
    prototype: CryptoKeyPair;
    new(): CryptoKeyPair;
};
export interface CustomElementRegistry {
    define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
    get(name: string): any;
    upgrade(root: Node): void;
    whenDefined(name: string): Promise<void>;
}
export type CustomElementRegistryGlobal =  {
    prototype: CustomElementRegistry;
    new(): CustomElementRegistry;
};
export interface CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with.
     * Typically used for synthetic events.
     */
    readonly detail: T;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void;
}
export type CustomEventGlobal =  {
    prototype: CustomEvent;
    new<T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};
export interface DOMError {
    readonly name: string;
    toString(): string;
}
export type DOMErrorGlobal =  {
    prototype: DOMError;
    new(): DOMError;
};
export interface DOMException {
    readonly code: number;
    readonly message: string;
    readonly name: string;
    readonly ABORT_ERR: number;
    readonly DATA_CLONE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NETWORK_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly SECURITY_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
}
export type DOMExceptionGlobal =  {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    readonly ABORT_ERR: number;
    readonly DATA_CLONE_ERR: number;
    readonly DOMSTRING_SIZE_ERR: number;
    readonly HIERARCHY_REQUEST_ERR: number;
    readonly INDEX_SIZE_ERR: number;
    readonly INUSE_ATTRIBUTE_ERR: number;
    readonly INVALID_ACCESS_ERR: number;
    readonly INVALID_CHARACTER_ERR: number;
    readonly INVALID_MODIFICATION_ERR: number;
    readonly INVALID_NODE_TYPE_ERR: number;
    readonly INVALID_STATE_ERR: number;
    readonly NAMESPACE_ERR: number;
    readonly NETWORK_ERR: number;
    readonly NOT_FOUND_ERR: number;
    readonly NOT_SUPPORTED_ERR: number;
    readonly NO_DATA_ALLOWED_ERR: number;
    readonly NO_MODIFICATION_ALLOWED_ERR: number;
    readonly QUOTA_EXCEEDED_ERR: number;
    readonly SECURITY_ERR: number;
    readonly SYNTAX_ERR: number;
    readonly TIMEOUT_ERR: number;
    readonly TYPE_MISMATCH_ERR: number;
    readonly URL_MISMATCH_ERR: number;
    readonly VALIDATION_ERR: number;
    readonly WRONG_DOCUMENT_ERR: number;
};
export interface DOMImplementation {
    createDocument(namespaceURI: string | null, qualifiedName: string | null, doctype: DocumentType | null): Document;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    /** @deprecated */
    hasFeature(...args: any[]): true;
}
export type DOMImplementationGlobal =  {
    prototype: DOMImplementation;
    new(): DOMImplementation;
};
export interface DOML2DeprecatedColorProperty {
    color: string;
}
export interface DOMMatrix extends DOMMatrixReadOnly {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    invertSelf(): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}
export type DOMMatrixGlobal =  {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};
export type SVGMatrix = DOMMatrix;
export type WebKitCSSMatrix = DOMMatrix;
export interface DOMMatrixReadOnly {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    readonly m11: number;
    readonly m12: number;
    readonly m13: number;
    readonly m14: number;
    readonly m21: number;
    readonly m22: number;
    readonly m23: number;
    readonly m24: number;
    readonly m31: number;
    readonly m32: number;
    readonly m33: number;
    readonly m34: number;
    readonly m41: number;
    readonly m42: number;
    readonly m43: number;
    readonly m44: number;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): any;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}
export type DOMMatrixReadOnlyGlobal =  {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};
export interface DOMParser {
    parseFromString(str: string, type: SupportedType): Document;
}
export type DOMParserGlobal =  {
    prototype: DOMParser;
    new(): DOMParser;
};
export interface DOMPoint extends DOMPointReadOnly {
    w: number;
    x: number;
    y: number;
    z: number;
}
export type DOMPointGlobal =  {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
};
export type SVGPoint = DOMPoint;
export interface DOMPointReadOnly {
    readonly w: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    toJSON(): any;
}
export type DOMPointReadOnlyGlobal =  {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};
export interface DOMQuad {
    readonly p1: DOMPoint;
    readonly p2: DOMPoint;
    readonly p3: DOMPoint;
    readonly p4: DOMPoint;
    getBounds(): DOMRect;
    toJSON(): any;
}
export type DOMQuadGlobal =  {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};
export interface DOMRect extends DOMRectReadOnly {
    height: number;
    width: number;
    x: number;
    y: number;
}
export type DOMRectGlobal =  {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
};
export type SVGRect = DOMRect;
export interface DOMRectList {
    readonly length: number;
    item(index: number): DOMRect | null;
    [index: number]: DOMRect;
}
export type DOMRectListGlobal =  {
    prototype: DOMRectList;
    new(): DOMRectList;
};
export interface DOMRectReadOnly {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    toJSON(): any;
}
export type DOMRectReadOnlyGlobal =  {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};
export interface DOMSettableTokenList extends DOMTokenList {
    value: string;
}
export type DOMSettableTokenListGlobal =  {
    prototype: DOMSettableTokenList;
    new(): DOMSettableTokenList;
};
export interface DOMStringList {
    /**
     * Returns the number of strings in strings.
     */
    readonly length: number;
    /**
     * Returns true if strings contains string, and false
     * otherwise.
     */
    contains(string: string): boolean;
    /**
     * Returns the string with index index from strings.
     */
    item(index: number): string | null;
    [index: number]: string;
}
export type DOMStringListGlobal =  {
    prototype: DOMStringList;
    new(): DOMStringList;
};
export interface DOMStringMap {
    [name: string]: string | undefined;
}
export type DOMStringMapGlobal =  {
    prototype: DOMStringMap;
    new(): DOMStringMap;
};
export interface DOMTokenList {
    /**
     * Returns the number of tokens.
     */
    readonly length: number;
    /**
     * Returns the associated set as string.
     * Can be set, to change the associated attribute.
     */
    value: string;
    /**
     * Adds all arguments passed, except those already present.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty
     * string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments
     * contains any ASCII whitespace.
     */
    add(...tokens: string[]): void;
    /**
     * Returns true if token is present, and false otherwise.
     */
    contains(token: string): boolean;
    /**
     * tokenlist[index]
     */
    item(index: number): string | null;
    /**
     * Removes arguments passed, if they are present.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty
     * string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments
     * contains any ASCII whitespace.
     */
    remove(...tokens: string[]): void;
    /**
     * Replaces token with newToken.
     * Returns true if token was replaced with newToken, and false otherwise.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty
     * string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments
     * contains any ASCII whitespace.
     */
    replace(oldToken: string, newToken: string): void;
    /**
     * Returns true if token is in the associated attribute's supported tokens. Returns
     * false otherwise.
     * Throws a TypeError if the associated attribute has no supported tokens defined.
     */
    supports(token: string): boolean;
    toggle(token: string, force?: boolean): boolean;
    forEach(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
    [index: number]: string;
}
export type DOMTokenListGlobal =  {
    prototype: DOMTokenList;
    new(): DOMTokenList;
};
export interface DataCue extends TextTrackCue {
    data: ArrayBuffer;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: DataCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: DataCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type DataCueGlobal =  {
    prototype: DataCue;
    new(): DataCue;
};
export interface DataTransfer {
    dropEffect: string;
    effectAllowed: string;
    /**
     * Returns a FileList of the files being dragged, if any.
     */
    readonly files: FileList;
    /**
     * Returns a DataTransferItemList object, with the drag data.
     */
    readonly items: DataTransferItemList;
    /**
     * Returns a frozen array listing the formats that were set in the dragstart event. In addition, if any files are being
     * dragged, then one of the types will be the string "Files".
     */
    readonly types: ReadonlyArray<string>;
    /**
     * Removes the data of the specified formats. Removes all data if the argument is omitted.
     */
    clearData(format?: string): void;
    /**
     * Returns the specified data. If there is no such data, returns the empty string.
     */
    getData(format: string): string;
    /**
     * Adds the specified data.
     */
    setData(format: string, data: string): void;
    /**
     * Uses the given element to update the drag feedback, replacing any previously specified
     * feedback.
     */
    setDragImage(image: Element, x: number, y: number): void;
}
export type DataTransferGlobal =  {
    prototype: DataTransfer;
    new(): DataTransfer;
};
export interface DataTransferItem {
    /**
     * Returns the drag data item kind, one of: "string",
     * "file".
     */
    readonly kind: string;
    /**
     * Returns the drag data item type string.
     */
    readonly type: string;
    /**
     * Returns a File object, if the drag data item kind is File.
     */
    getAsFile(): File | null;
    /**
     * Invokes the callback with the string data as the argument, if the drag data item
     * kind is Plain Unicode string.
     */
    getAsString(callback: FunctionStringCallback | null): void;
    webkitGetAsEntry(): any;
}
export type DataTransferItemGlobal =  {
    prototype: DataTransferItem;
    new(): DataTransferItem;
};
export interface DataTransferItemList {
    /**
     * Returns the number of items in the drag data store.
     */
    readonly length: number;
    /**
     * Adds a new entry for the given data to the drag data store. If the data is plain
     * text  then a type string has to be provided
     * also.
     */
    add(data: string, type: string): DataTransferItem | null;
    add(data: File): DataTransferItem | null;
    /**
     * Removes all the entries in the drag data store.
     */
    clear(): void;
    item(index: number): DataTransferItem;
    /**
     * Removes the indexth entry in the drag data store.
     */
    remove(index: number): void;
    [name: number]: DataTransferItem;
}
export type DataTransferItemListGlobal =  {
    prototype: DataTransferItemList;
    new(): DataTransferItemList;
};
export interface DeferredPermissionRequest {
    readonly id: number;
    readonly type: MSWebViewPermissionType;
    readonly uri: string;
    allow(): void;
    deny(): void;
}
export type DeferredPermissionRequestGlobal =  {
    prototype: DeferredPermissionRequest;
    new(): DeferredPermissionRequest;
};
export interface DelayNode extends AudioNode {
    readonly delayTime: AudioParam;
}
export type DelayNodeGlobal =  {
    prototype: DelayNode;
    new(context: BaseAudioContext, options?: DelayOptions): DelayNode;
};
export interface DeviceAcceleration {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}
export type DeviceAccelerationGlobal =  {
    prototype: DeviceAcceleration;
    new(): DeviceAcceleration;
};
export interface DeviceLightEvent extends Event {
    readonly value: number;
}
export type DeviceLightEventGlobal =  {
    prototype: DeviceLightEvent;
    new(typeArg: string, eventInitDict?: DeviceLightEventInit): DeviceLightEvent;
};
export interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceAcceleration | null;
    readonly accelerationIncludingGravity: DeviceAcceleration | null;
    readonly interval: number | null;
    readonly rotationRate: DeviceRotationRate | null;
    initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict | null, accelerationIncludingGravity: DeviceAccelerationDict | null, rotationRate: DeviceRotationRateDict | null, interval: number | null): void;
}
export type DeviceMotionEventGlobal =  {
    prototype: DeviceMotionEvent;
    new(typeArg: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
};
export interface DeviceOrientationEvent extends Event {
    readonly absolute: boolean;
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
    initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number | null, beta: number | null, gamma: number | null, absolute: boolean): void;
}
export type DeviceOrientationEventGlobal =  {
    prototype: DeviceOrientationEvent;
    new(typeArg: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
};
export interface DeviceRotationRate {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}
export type DeviceRotationRateGlobal =  {
    prototype: DeviceRotationRate;
    new(): DeviceRotationRate;
};
export interface DhImportKeyParams extends Algorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}
export interface DhKeyAlgorithm extends KeyAlgorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}
export interface DhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}
export interface DhKeyGenParams extends Algorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}
export interface DocumentEventMap extends GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
    "readystatechange": ProgressEvent;
    "visibilitychange": Event;
}
export interface Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, GlobalEventHandlers, DocumentAndElementEventHandlers {
    /**
     * Sets or gets the URL for the current document.
     */
    readonly URL: string;
    /**
     * Gets the object that has the focus when the parent document has focus.
     */
    readonly activeElement: Element | null;
    /**
     * Sets or gets the color of all active links in the document.
     */
    /** @deprecated */
    alinkColor: string;
    /**
     * Returns a reference to the collection of elements contained by the object.
     */
    /** @deprecated */
    readonly all: HTMLAllCollection;
    /**
     * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
     */
    /** @deprecated */
    readonly anchors: HTMLCollectionOf<HTMLAnchorElement>;
    /**
     * Retrieves a collection of all applet objects in the document.
     */
    /** @deprecated */
    readonly applets: HTMLCollectionOf<HTMLAppletElement>;
    /**
     * Deprecated. Sets or retrieves a value that indicates the background color behind the object.
     */
    /** @deprecated */
    bgColor: string;
    /**
     * Specifies the beginning and end of the document body.
     */
    body: HTMLElement;
    /**
     * Returns document's encoding.
     */
    readonly characterSet: string;
    /**
     * Gets or sets the character set used to encode the object.
     */
    readonly charset: string;
    /**
     * Gets a value that indicates whether standards-compliant mode is switched on for the object.
     */
    readonly compatMode: string;
    /**
     * Returns document's content type.
     */
    readonly contentType: string;
    /**
     * Returns the HTTP cookies that apply to the Document. If there are no cookies or
     * cookies can't be applied to this resource, the empty string will be returned.
     * Can be set, to add a new cookie to the element's set of HTTP cookies.
     * If the contents are sandboxed into a
     * unique origin (e.g. in an iframe with the sandbox attribute), a
     * "SecurityError" DOMException will be thrown on getting
     * and setting.
     */
    cookie: string;
    /**
     * Returns the script element, or the SVG script element,
     * that is currently executing, as long as the element represents a classic script.
     * In the case of reentrant script execution, returns the one that most recently started executing
     * amongst those that have not yet finished executing.
     * Returns null if the Document is not currently executing a script
     * or SVG script element (e.g., because the running script is an event
     * handler, or a timeout), or if the currently executing script or SVG
     * script element represents a module script.
     */
    readonly currentScript: HTMLOrSVGScriptElement | null;
    readonly defaultView: WindowProxy | null;
    /**
     * Sets or gets a value that indicates whether the document can be edited.
     */
    designMode: string;
    /**
     * Sets or retrieves a value that indicates the reading order of the object.
     */
    dir: string;
    /**
     * Gets an object representing the document type declaration associated with the current document.
     */
    readonly doctype: DocumentType | null;
    /**
     * Gets a reference to the root node of the document.
     */
    readonly documentElement: HTMLElement;
    /**
     * Returns document's URL.
     */
    readonly documentURI: string;
    /**
     * Sets or gets the security domain of the document.
     */
    domain: string;
    /**
     * Retrieves a collection of all embed objects in the document.
     */
    readonly embeds: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Sets or gets the foreground (text) color of the document.
     */
    /** @deprecated */
    fgColor: string;
    /**
     * Retrieves a collection, in source order, of all form objects in the document.
     */
    readonly forms: HTMLCollectionOf<HTMLFormElement>;
    /** @deprecated */
    readonly fullscreen: boolean;
    /**
     * Returns true if document has the ability to display elements fullscreen
     * and fullscreen is supported, or false otherwise.
     */
    readonly fullscreenEnabled: boolean;
    /**
     * Returns the head element.
     */
    readonly head: HTMLHeadElement;
    readonly hidden: boolean;
    /**
     * Retrieves a collection, in source order, of img objects in the document.
     */
    readonly images: HTMLCollectionOf<HTMLImageElement>;
    /**
     * Gets the implementation object of the current document.
     */
    readonly implementation: DOMImplementation;
    /**
     * Returns the character encoding used to create the webpage that is loaded into the document object.
     */
    readonly inputEncoding: string;
    /**
     * Gets the date that the page was last modified, if the page supplies one.
     */
    readonly lastModified: string;
    /**
     * Sets or gets the color of the document links.
     */
    /** @deprecated */
    linkColor: string;
    /**
     * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
     */
    readonly links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    /**
     * Contains information about the current URL.
     */
    location: Location;
    onfullscreenchange: ((this: Document, ev: Event) => any) | null;
    onfullscreenerror: ((this: Document, ev: Event) => any) | null;
    /**
     * Fires when the state of the object has changed.
     * @param ev The event
     */
    onreadystatechange: ((this: Document, ev: ProgressEvent) => any) | null;
    onvisibilitychange: ((this: Document, ev: Event) => any) | null;
    /**
     * Returns document's origin.
     */
    readonly origin: string;
    /**
     * Return an HTMLCollection of the embed elements in the Document.
     */
    readonly plugins: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Retrieves a value that indicates the current state of the object.
     */
    readonly readyState: DocumentReadyState;
    /**
     * Gets the URL of the location that referred the user to the current page.
     */
    readonly referrer: string;
    /**
     * Retrieves a collection of all script objects in the document.
     */
    readonly scripts: HTMLCollectionOf<HTMLScriptElement>;
    readonly scrollingElement: Element | null;
    readonly timeline: DocumentTimeline;
    /**
     * Contains the title of the document.
     */
    title: string;
    readonly visibilityState: VisibilityState;
    /**
     * Sets or gets the color of the links that the user has visited.
     */
    /** @deprecated */
    vlinkColor: string;
    /**
     * Moves node from another document and returns it.
     * If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a
     * "HierarchyRequestError" DOMException.
     */
    adoptNode<T extends Node>(source: T): T;
    /** @deprecated */
    captureEvents(): void;
    caretPositionFromPoint(x: number, y: number): CaretPosition | null;
    /** @deprecated */
    caretRangeFromPoint(x: number, y: number): Range;
    /** @deprecated */
    clear(): void;
    /**
     * Closes an output stream and forces the sent data to display.
     */
    close(): void;
    /**
     * Creates an attribute object with a specified name.
     * @param name String that sets the attribute object's name.
     */
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    /**
     * Returns a CDATASection node whose data is data.
     */
    createCDATASection(data: string): CDATASection;
    /**
     * Creates a comment object with the specified data.
     * @param data Sets the comment object's data.
     */
    createComment(data: string): Comment;
    /**
     * Creates a new document.
     */
    createDocumentFragment(): DocumentFragment;
    /**
     * Creates an instance of the element for the specified tag.
     * @param tagName The name of an element.
     */
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    /** @deprecated */
    createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
    createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    /**
     * Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after
     * ":" (U+003E) in qualifiedName or qualifiedName.
     * If localName does not match the Name production an
     * "InvalidCharacterError" DOMException will be thrown.
     * If one of the following conditions is true a "NamespaceError" DOMException will be thrown:
     * localName does not match the QName production.
     * Namespace prefix is not null and namespace is the empty string.
     * Namespace prefix is "xml" and namespace is not the XML namespace.
     * qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
     * namespace is the XMLNS namespace and
     * neither qualifiedName nor namespace prefix is "xmlns".
     * When supplied, options's is can be used to create a customized built-in element.
     */
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "a"): SVGAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "circle"): SVGCircleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "clipPath"): SVGClipPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "componentTransferFunction"): SVGComponentTransferFunctionElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "cursor"): SVGCursorElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "defs"): SVGDefsElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "desc"): SVGDescElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "ellipse"): SVGEllipseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feBlend"): SVGFEBlendElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feColorMatrix"): SVGFEColorMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComponentTransfer"): SVGFEComponentTransferElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComposite"): SVGFECompositeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feConvolveMatrix"): SVGFEConvolveMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDiffuseLighting"): SVGFEDiffuseLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDisplacementMap"): SVGFEDisplacementMapElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDistantLight"): SVGFEDistantLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFlood"): SVGFEFloodElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncA"): SVGFEFuncAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncB"): SVGFEFuncBElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncG"): SVGFEFuncGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncR"): SVGFEFuncRElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feGaussianBlur"): SVGFEGaussianBlurElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feImage"): SVGFEImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMerge"): SVGFEMergeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMergeNode"): SVGFEMergeNodeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMorphology"): SVGFEMorphologyElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feOffset"): SVGFEOffsetElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "fePointLight"): SVGFEPointLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpecularLighting"): SVGFESpecularLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpotLight"): SVGFESpotLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTile"): SVGFETileElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTurbulence"): SVGFETurbulenceElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "filter"): SVGFilterElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "foreignObject"): SVGForeignObjectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "g"): SVGGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "image"): SVGImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "gradient"): SVGGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "line"): SVGLineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "linearGradient"): SVGLinearGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "marker"): SVGMarkerElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "mask"): SVGMaskElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "path"): SVGPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "metadata"): SVGMetadataElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "pattern"): SVGPatternElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polygon"): SVGPolygonElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polyline"): SVGPolylineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "radialGradient"): SVGRadialGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "rect"): SVGRectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "svg"): SVGSVGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "script"): SVGScriptElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "stop"): SVGStopElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "style"): SVGStyleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "switch"): SVGSwitchElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "symbol"): SVGSymbolElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "tspan"): SVGTSpanElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textContent"): SVGTextContentElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "text"): SVGTextElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPath"): SVGTextPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPositioning"): SVGTextPositioningElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "title"): SVGTitleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "use"): SVGUseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "view"): SVGViewElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
    createElementNS(namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions): Element;
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceLightEvent"): DeviceLightEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FocusNavigationEvent"): FocusNavigationEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "ListeningStateChangedEvent"): ListeningStateChangedEvent;
    createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
    createEvent(eventInterface: "MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
    createEvent(eventInterface: "MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
    createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamErrorEvent"): MediaStreamErrorEvent;
    createEvent(eventInterface: "MediaStreamEvent"): MediaStreamEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "OverflowEvent"): OverflowEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PermissionRequestedEvent"): PermissionRequestedEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCDtlsTransportStateChangedEvent"): RTCDtlsTransportStateChangedEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCIceCandidatePairChangedEvent"): RTCIceCandidatePairChangedEvent;
    createEvent(eventInterface: "RTCIceGathererEvent"): RTCIceGathererEvent;
    createEvent(eventInterface: "RTCIceTransportStateChangedEvent"): RTCIceTransportStateChangedEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCSsrcConflictEvent"): RTCSsrcConflictEvent;
    createEvent(eventInterface: "RTCStatsEvent"): RTCStatsEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SVGZoomEvent"): SVGZoomEvent;
    createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "ServiceWorkerMessageEvent"): ServiceWorkerMessageEvent;
    createEvent(eventInterface: "SpeechRecognitionError"): SpeechRecognitionError;
    createEvent(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "TextEvent"): TextEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "VRDisplayEvent"): VRDisplayEvent;
    createEvent(eventInterface: "VRDisplayEvent "): VRDisplayEvent ;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list
     * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator;
    /**
     * Returns a ProcessingInstruction node whose target is target and data is data.
     * If target does not match the Name production an
     * "InvalidCharacterError" DOMException will be thrown.
     * If data contains "?>" an
     * "InvalidCharacterError" DOMException will be thrown.
     */
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
     *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document.
     */
    createRange(): Range;
    /**
     * Creates a text string from the specified value.
     * @param data String that specifies the nodeValue property of the text node.
     */
    createTextNode(data: string): Text;
    createTouch(view: WindowProxy, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch;
    createTouchList(...touches: Touch[]): TouchList;
    /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param filter A custom NodeFilter function to use.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null): TreeWalker;
    /** @deprecated */
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter | null, entityReferenceExpansion?: boolean): TreeWalker;
    /**
     * Returns the element for the specified x coordinate and the specified y coordinate.
     * @param x The x-offset
     * @param y The y-offset
     */
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | ((prefix: string) => string | null) | null, type: number, result: XPathResult | null): XPathResult;
    /**
     * Executes a command on the current document, current selection, or the given range.
     * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param showUI Display the user interface, defaults to false.
     * @param value Value to assign.
     */
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
    /**
     * Stops document's fullscreen element from being displayed fullscreen and
     * resolves promise when done.
     */
    exitFullscreen(): Promise<void>;
    getAnimations(): Animation[];
    /**
     * Returns a reference to the first object with the specified value of the ID or NAME attribute.
     * @param elementId String that specifies the ID value. Case-insensitive.
     */
    getElementById(elementId: string): HTMLElement | null;
    /**
     * collection = element . getElementsByClassName(classNames)
     */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    /**
     * Gets a collection of objects based on the value of the NAME or ID attribute.
     * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
     */
    getElementsByName(elementName: string): NodeListOf<HTMLElement>;
    /**
     * Retrieves a collection of objects based on the specified element name.
     * @param name Specifies the name of an element.
     */
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    /**
     * If namespace and localName are
     * "*" returns a HTMLCollection of all descendant elements.
     * If only namespace is "*" returns a HTMLCollection of all descendant elements whose local name is localName.
     * If only localName is "*" returns a HTMLCollection of all descendant elements whose namespace is namespace.
     * Otherwise, returns a HTMLCollection of all descendant elements whose namespace is namespace and local name is localName.
     */
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    /**
     * Gets a value indicating whether the object currently has focus.
     */
    hasFocus(): boolean;
    importNode<T extends Node>(importedNode: T, deep: boolean): T;
    /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param replace Specifies whether the existing entry for the document is replaced in the history list.
     */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
     * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
     * @param commandId Specifies a command identifier.
     */
    queryCommandEnabled(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandIndeterm(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates the current state of the command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandState(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates whether the current command is supported on the current range.
     * @param commandId Specifies a command identifier.
     */
    queryCommandSupported(commandId: string): boolean;
    /**
     * Returns the current value of the document, range, or current selection for the given command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandValue(commandId: string): string;
    /** @deprecated */
    releaseEvents(): void;
    /**
     * Writes one or more HTML expressions to a document in the specified window.
     * @param content Specifies the text and HTML tags to write.
     */
    write(...text: string[]): void;
    /**
     * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
     * @param content The text and HTML tags to write.
     */
    writeln(...text: string[]): void;
    /**
     * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
     */
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type DocumentGlobal =  {
    prototype: Document;
    new(): Document;
};
export interface DocumentAndElementEventHandlersEventMap {
    "copy": ClipboardEvent;
    "cut": ClipboardEvent;
    "paste": ClipboardEvent;
}
export interface DocumentAndElementEventHandlers {
    oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export interface DocumentEvent {
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceLightEvent"): DeviceLightEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FocusNavigationEvent"): FocusNavigationEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "ListeningStateChangedEvent"): ListeningStateChangedEvent;
    createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
    createEvent(eventInterface: "MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
    createEvent(eventInterface: "MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
    createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamErrorEvent"): MediaStreamErrorEvent;
    createEvent(eventInterface: "MediaStreamEvent"): MediaStreamEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "OverflowEvent"): OverflowEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PermissionRequestedEvent"): PermissionRequestedEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCDtlsTransportStateChangedEvent"): RTCDtlsTransportStateChangedEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCIceCandidatePairChangedEvent"): RTCIceCandidatePairChangedEvent;
    createEvent(eventInterface: "RTCIceGathererEvent"): RTCIceGathererEvent;
    createEvent(eventInterface: "RTCIceTransportStateChangedEvent"): RTCIceTransportStateChangedEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCSsrcConflictEvent"): RTCSsrcConflictEvent;
    createEvent(eventInterface: "RTCStatsEvent"): RTCStatsEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SVGZoomEvent"): SVGZoomEvent;
    createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "ServiceWorkerMessageEvent"): ServiceWorkerMessageEvent;
    createEvent(eventInterface: "SpeechRecognitionError"): SpeechRecognitionError;
    createEvent(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "TextEvent"): TextEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "VRDisplayEvent"): VRDisplayEvent;
    createEvent(eventInterface: "VRDisplayEvent "): VRDisplayEvent ;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
}
export interface DocumentFragment extends Node, NonElementParentNode, ParentNode {
    getElementById(elementId: string): HTMLElement | null;
}
export type DocumentFragmentGlobal =  {
    prototype: DocumentFragment;
    new(): DocumentFragment;
};
export interface DocumentOrShadowRoot {
    readonly activeElement: Element | null;
    /**
     * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
     */
    readonly styleSheets: StyleSheetList;
    caretPositionFromPoint(x: number, y: number): CaretPosition | null;
    /** @deprecated */
    caretRangeFromPoint(x: number, y: number): Range;
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    getSelection(): Selection | null;
}
export interface DocumentTimeline extends AnimationTimeline {
}
export type DocumentTimelineGlobal =  {
    prototype: DocumentTimeline;
    new(options?: DocumentTimelineOptions): DocumentTimeline;
};
export interface DocumentType extends Node, ChildNode {
    readonly name: string;
    readonly publicId: string;
    readonly systemId: string;
}
export type DocumentTypeGlobal =  {
    prototype: DocumentType;
    new(): DocumentType;
};
export interface DragEvent extends MouseEvent {
    /**
     * Returns the DataTransfer object for the event.
     */
    readonly dataTransfer: DataTransfer | null;
}
export type DragEventGlobal =  {
    prototype: DragEvent;
    new(type: string, eventInitDict?: DragEventInit): DragEvent;
};
export interface DynamicsCompressorNode extends AudioNode {
    readonly attack: AudioParam;
    readonly knee: AudioParam;
    readonly ratio: AudioParam;
    readonly reduction: number;
    readonly release: AudioParam;
    readonly threshold: AudioParam;
}
export type DynamicsCompressorNodeGlobal =  {
    prototype: DynamicsCompressorNode;
    new(context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
};
export interface EXT_blend_minmax {
    readonly MAX_EXT: GLenum;
    readonly MIN_EXT: GLenum;
}
export interface EXT_frag_depth {
}
export interface EXT_sRGB {
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: GLenum;
    readonly SRGB8_ALPHA8_EXT: GLenum;
    readonly SRGB_ALPHA_EXT: GLenum;
    readonly SRGB_EXT: GLenum;
}
export interface EXT_shader_texture_lod {
}
export interface EXT_texture_filter_anisotropic {
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
    readonly TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}
export interface ElementEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
}
export interface Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, Animatable {
    readonly assignedSlot: HTMLSlotElement | null;
    readonly attributes: NamedNodeMap;
    /**
     * Allows for manipulation of element's class content attribute as a
     * set of whitespace-separated tokens through a DOMTokenList object.
     */
    readonly classList: DOMTokenList;
    /**
     * Returns the value of element's class content attribute. Can be set
     * to change it.
     */
    className: string;
    readonly clientHeight: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    /**
     * Returns the value of element's id content attribute. Can be set to
     * change it.
     */
    id: string;
    innerHTML: string;
    /**
     * Returns the local name.
     */
    readonly localName: string;
    /**
     * Returns the namespace.
     */
    readonly namespaceURI: string | null;
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    outerHTML: string;
    /**
     * Returns the namespace prefix.
     */
    readonly prefix: string | null;
    readonly scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    /**
     * Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.
     */
    readonly shadowRoot: ShadowRoot | null;
    /**
     * Returns the value of element's slot content attribute. Can be set to
     * change it.
     */
    slot: string;
    /**
     * Returns the HTML-uppercased qualified name.
     */
    readonly tagName: string;
    /**
     * Creates a shadow root for element and returns it.
     */
    attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
    /**
     * Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
     */
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest(selector: string): Element | null;
    /**
     * Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.
     */
    getAttribute(qualifiedName: string): string | null;
    /**
     * Returns element's attribute whose namespace is namespace and local name is localName, and null if there is
     * no such attribute otherwise.
     */
    getAttributeNS(namespace: string | null, localName: string): string | null;
    /**
     * Returns the qualified names of all element's attributes.
     * Can contain duplicates.
     */
    getAttributeNames(): string[];
    getAttributeNode(name: string): Attr | null;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr | null;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    /**
     * Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * Returns true if element has an attribute whose namespace is namespace and local name is localName.
     */
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    /**
     * Returns true if element has attributes, and false otherwise.
     */
    hasAttributes(): boolean;
    hasPointerCapture(pointerId: number): boolean;
    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null;
    insertAdjacentHTML(where: InsertPosition, html: string): void;
    insertAdjacentText(where: InsertPosition, text: string): void;
    /**
     * Returns true if matching selectors against element's root yields element, and false otherwise.
     */
    matches(selectors: string): boolean;
    msGetRegionContent(): any;
    releasePointerCapture(pointerId: number): void;
    /**
     * Removes element's first attribute whose qualified name is qualifiedName.
     */
    removeAttribute(qualifiedName: string): void;
    /**
     * Removes element's attribute whose namespace is namespace and local name is localName.
     */
    removeAttributeNS(namespace: string | null, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    /**
     * Displays element fullscreen and resolves promise when done.
     */
    requestFullscreen(): Promise<void>;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    /**
     * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
     */
    setAttribute(qualifiedName: string, value: string): void;
    /**
     * Sets the value of element's attribute whose namespace is namespace and local name is localName to value.
     */
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    setPointerCapture(pointerId: number): void;
    /**
     * If force is not given, "toggles" qualifiedName, removing it if it is
     * present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.
     * Returns true if qualifiedName is now present, and false otherwise.
     */
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    webkitMatchesSelector(selectors: string): boolean;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ElementGlobal =  {
    prototype: Element;
    new(): Element;
};
export interface ElementCSSInlineStyle {
    readonly style: CSSStyleDeclaration;
}
export interface ElementContentEditable {
    contentEditable: string;
    inputMode: string;
    readonly isContentEditable: boolean;
}
export interface ElementCreationOptions {
    is?: string;
}
export interface ErrorEvent extends Event {
    readonly colno: number;
    readonly error: any;
    readonly filename: string;
    readonly lineno: number;
    readonly message: string;
}
export type ErrorEventGlobal =  {
    prototype: ErrorEvent;
    new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};
export interface Event {
    /**
     * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
     */
    readonly bubbles: boolean;
    cancelBubble: boolean;
    readonly cancelable: boolean;
    /**
     * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
     */
    readonly composed: boolean;
    /**
     * Returns the object whose event listener's callback is currently being
     * invoked.
     */
    readonly currentTarget: EventTarget | null;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    /**
     * Returns true if event was dispatched by the user agent, and
     * false otherwise.
     */
    readonly isTrusted: boolean;
    returnValue: boolean;
    /** @deprecated */
    readonly srcElement: Element | null;
    /**
     * Returns the object to which event is dispatched (its target).
     */
    readonly target: EventTarget | null;
    /**
     * Returns the event's timestamp as the number of milliseconds measured relative to
     * the time origin.
     */
    readonly timeStamp: number;
    /**
     * Returns the type of event, e.g.
     * "click", "hashchange", or
     * "submit".
     */
    readonly type: string;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    /**
     * Invoking this method prevents event from reaching
     * any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any
     * other objects.
     */
    stopImmediatePropagation(): void;
    /**
     * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
     */
    stopPropagation(): void;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}
export type EventGlobal =  {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
};
export interface EventListenerObject {
    handleEvent(evt: Event): void;
}
export interface EventSource extends EventTarget {
    readonly CLOSED: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    onerror: (evt: MessageEvent) => any;
    onmessage: (evt: MessageEvent) => any;
    onopen: (evt: MessageEvent) => any;
    readonly readyState: number;
    readonly url: string;
    readonly withCredentials: boolean;
    close(): void;
}
export type EventSourceGlobal =  {
    prototype: EventSource;
    new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
};
export interface EventSourceInit {
    readonly withCredentials: boolean;
}
export interface EventTarget {
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     * The options argument sets listener-specific options. For compatibility this can be a
     * boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in §2.8 Observing event listeners.
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will
     * be removed.
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     */
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    /**
     * Dispatches a synthetic event event to target and returns true
     * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
export type EventTargetGlobal =  {
    prototype: EventTarget;
    new(): EventTarget;
};
export interface ExtensionScriptApis {
    extensionIdToShortId(extensionId: string): number;
    fireExtensionApiTelemetry(functionName: string, isSucceeded: boolean, isSupported: boolean, errorString: string): void;
    genericFunction(routerAddress: any, parameters?: string, callbackId?: number): void;
    genericSynchronousFunction(functionId: number, parameters?: string): string;
    genericWebRuntimeCallout(to: any, from: any, payload: string): void;
    getExtensionId(): string;
    registerGenericFunctionCallbackHandler(callbackHandler: Function): void;
    registerGenericPersistentCallbackHandler(callbackHandler: Function): void;
    registerWebRuntimeCallbackHandler(handler: Function): any;
}
export type ExtensionScriptApisGlobal =  {
    prototype: ExtensionScriptApis;
    new(): ExtensionScriptApis;
};
export interface External {
    /** @deprecated */
    AddSearchProvider(): void;
    /** @deprecated */
    IsSearchProviderInstalled(): void;
}
export interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
}
export type FileGlobal =  {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};
export interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}
export type FileListGlobal =  {
    prototype: FileList;
    new(): FileList;
};
export interface FileReaderEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
}
export interface FileReader extends EventTarget {
    readonly error: DOMException | null;
    onabort: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onerror: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onload: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onloadend: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onprogress: ((this: FileReader, ev: ProgressEvent) => any) | null;
    readonly readyState: number;
    readonly result: string | ArrayBuffer | null;
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type FileReaderGlobal =  {
    prototype: FileReader;
    new(): FileReader;
    readonly DONE: number;
    readonly EMPTY: number;
    readonly LOADING: number;
};
export interface FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget;
    initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;
}
export type FocusEventGlobal =  {
    prototype: FocusEvent;
    new(typeArg: string, eventInitDict?: FocusEventInit): FocusEvent;
};
export interface FocusNavigationEvent extends Event {
    readonly navigationReason: NavigationReason;
    readonly originHeight: number;
    readonly originLeft: number;
    readonly originTop: number;
    readonly originWidth: number;
    requestFocus(): void;
}
export type FocusNavigationEventGlobal =  {
    prototype: FocusNavigationEvent;
    new(type: string, eventInitDict?: FocusNavigationEventInit): FocusNavigationEvent;
};
export interface FormData {
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string | Blob, fileName?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}
export type FormDataGlobal =  {
    prototype: FormData;
    new(form?: HTMLFormElement): FormData;
};
export interface GainNode extends AudioNode {
    readonly gain: AudioParam;
}
export type GainNodeGlobal =  {
    prototype: GainNode;
    new(context: BaseAudioContext, options?: GainOptions): GainNode;
};
export interface Gamepad {
    readonly axes: number[];
    readonly buttons: GamepadButton[];
    readonly connected: boolean;
    readonly displayId: number;
    readonly hand: GamepadHand;
    readonly hapticActuators: GamepadHapticActuator[];
    readonly id: string;
    readonly index: number;
    readonly mapping: GamepadMappingType;
    readonly pose: GamepadPose | null;
    readonly timestamp: number;
}
export type GamepadGlobal =  {
    prototype: Gamepad;
    new(): Gamepad;
};
export interface GamepadButton {
    readonly pressed: boolean;
    readonly touched: boolean;
    readonly value: number;
}
export type GamepadButtonGlobal =  {
    prototype: GamepadButton;
    new(): GamepadButton;
};
export interface GamepadEvent extends Event {
    readonly gamepad: Gamepad;
}
export type GamepadEventGlobal =  {
    prototype: GamepadEvent;
    new(typeArg: string, eventInitDict?: GamepadEventInit): GamepadEvent;
};
export interface GamepadHapticActuator {
    readonly type: GamepadHapticActuatorType;
    pulse(value: number, duration: number): Promise<boolean>;
}
export type GamepadHapticActuatorGlobal =  {
    prototype: GamepadHapticActuator;
    new(): GamepadHapticActuator;
};
export interface GamepadPose {
    readonly angularAcceleration: Float32Array | null;
    readonly angularVelocity: Float32Array | null;
    readonly hasOrientation: boolean;
    readonly hasPosition: boolean;
    readonly linearAcceleration: Float32Array | null;
    readonly linearVelocity: Float32Array | null;
    readonly orientation: Float32Array | null;
    readonly position: Float32Array | null;
}
export type GamepadPoseGlobal =  {
    prototype: GamepadPose;
    new(): GamepadPose;
};
export interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}
export interface GetSVGDocument {
    getSVGDocument(): Document;
}
export interface GlobalEventHandlersEventMap {
    "abort": UIEvent;
    "animationcancel": AnimationEvent;
    "animationend": AnimationEvent;
    "animationiteration": AnimationEvent;
    "animationstart": AnimationEvent;
    "auxclick": Event;
    "blur": FocusEvent;
    "cancel": Event;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "close": Event;
    "contextmenu": MouseEvent;
    "cuechange": Event;
    "dblclick": MouseEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragexit": Event;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "gotpointercapture": PointerEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadend": ProgressEvent;
    "loadstart": Event;
    "lostpointercapture": PointerEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "pointercancel": PointerEvent;
    "pointerdown": PointerEvent;
    "pointerenter": PointerEvent;
    "pointerleave": PointerEvent;
    "pointermove": PointerEvent;
    "pointerout": PointerEvent;
    "pointerover": PointerEvent;
    "pointerup": PointerEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "reset": Event;
    "resize": UIEvent;
    "scroll": UIEvent;
    "securitypolicyviolation": SecurityPolicyViolationEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "stalled": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "toggle": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "transitioncancel": TransitionEvent;
    "transitionend": TransitionEvent;
    "transitionrun": TransitionEvent;
    "transitionstart": TransitionEvent;
    "volumechange": Event;
    "waiting": Event;
    "wheel": WheelEvent;
}
export interface GlobalEventHandlers {
    /**
     * Fires when the user aborts the download.
     * @param ev The event.
     */
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the object loses the input focus.
     * @param ev The focus event.
     */
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     */
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the contents of the object or selection have changed.
     * @param ev The event.
     */
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     */
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     */
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user double-clicks the object.
     * @param ev The mouse event.
     */
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires on the source object continuously during a drag operation.
     * @param ev The event.
     */
    ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     */
    ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     */
    ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragexit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     */
    ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     */
    ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     */
    ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Occurs when the duration attribute is updated.
     * @param ev The event.
     */
    ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the media element is reset to its initial state.
     * @param ev The event.
     */
    onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the end of playback is reached.
     * @param ev The event
     */
    onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when an error occurs during object loading.
     * @param ev The event.
     */
    onerror: ErrorEventHandler;
    /**
     * Fires when the object receives focus.
     * @param ev The event.
     */
    onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user presses a key.
     * @param ev The keyboard event
     */
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires when the user presses an alphanumeric key.
     * @param ev The event.
     */
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires when the user releases a key.
     * @param ev The keyboard event
     */
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires immediately after the browser loads the object.
     * @param ev The event.
     */
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     */
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     */
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadend: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    /**
     * Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     */
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     */
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     */
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     */
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     */
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     */
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Occurs when playback is paused.
     * @param ev The event.
     */
    onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the play method is requested.
     * @param ev The event.
     */
    onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the audio or video has started playing.
     * @param ev The event.
     */
    onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Occurs to indicate progress while downloading media data.
     * @param ev The event.
     */
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    /**
     * Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     */
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user resets a form.
     * @param ev The event.
     */
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /**
     * Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     */
    onscroll: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    /**
     * Occurs when the seek operation ends.
     * @param ev The event.
     */
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the current playback position is moved.
     * @param ev The event.
     */
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the current selection changes.
     * @param ev The event.
     */
    onselect: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /**
     * Occurs when the download has stopped.
     * @param ev The event.
     */
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     */
    onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs to indicate the current playback position.
     * @param ev The event.
     */
    ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontouchcancel: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchend: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchmove: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchstart: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /**
     * Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     */
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     */
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export interface GlobalFetch {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}
export interface HTMLAllCollection {
    /**
     * Returns the number of elements in the collection.
     */
    readonly length: number;
    /**
     * element = collection(index)
     */
    item(nameOrIndex?: string): HTMLCollection | Element | null;
    /**
     * element = collection(name)
     */
    namedItem(name: string): HTMLCollection | Element | null;
    [index: number]: Element;
}
export type HTMLAllCollectionGlobal =  {
    prototype: HTMLAllCollection;
    new(): HTMLAllCollection;
};
export interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: string;
    /**
     * Sets or retrieves the coordinates of the object.
     */
    /** @deprecated */
    coords: string;
    download: string;
    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: string;
    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    name: string;
    ping: string;
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    /** @deprecated */
    rev: string;
    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLAnchorElementGlobal =  {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
};
export interface HTMLAppletElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    /** @deprecated */
    alt: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    /** @deprecated */
    archive: string;
    /** @deprecated */
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     */
    /** @deprecated */
    codeBase: string;
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the height of the object.
     */
    /** @deprecated */
    height: string;
    /** @deprecated */
    hspace: number;
    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    name: string;
    /** @deprecated */
    object: string;
    /** @deprecated */
    vspace: number;
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLAppletElementGlobal =  {
    prototype: HTMLAppletElement;
    new(): HTMLAppletElement;
};
export interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Sets or retrieves the coordinates of the object.
     */
    coords: string;
    download: string;
    /**
     * Sets or gets whether clicks in this region cause action.
     */
    /** @deprecated */
    noHref: boolean;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Sets or retrieves the shape of the object.
     */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLAreaElementGlobal =  {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
};
export interface HTMLAudioElement extends HTMLMediaElement {
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLAudioElementGlobal =  {
    prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
};
export interface HTMLBRElement extends HTMLElement {
    /**
     * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
     */
    /** @deprecated */
    clear: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLBRElementGlobal =  {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
};
export interface HTMLBaseElement extends HTMLElement {
    /**
     * Gets or sets the baseline URL on which relative links are based.
     */
    href: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLBaseElementGlobal =  {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
};
export interface HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedColorProperty {
    /**
     * Sets or retrieves the current typeface family.
     */
    /** @deprecated */
    face: string;
    /**
     * Sets or retrieves the font size of the object.
     */
    /** @deprecated */
    size: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLBaseFontElementGlobal =  {
    prototype: HTMLBaseFontElement;
    new(): HTMLBaseFontElement;
};
export interface HTMLBodyElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
    "orientationchange": Event;
}
export interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
    /** @deprecated */
    aLink: string;
    /** @deprecated */
    background: string;
    /** @deprecated */
    bgColor: string;
    bgProperties: string;
    /** @deprecated */
    link: string;
    /** @deprecated */
    noWrap: boolean;
    /** @deprecated */
    onorientationchange: ((this: HTMLBodyElement, ev: Event) => any) | null;
    /** @deprecated */
    text: string;
    /** @deprecated */
    vLink: string;
    addEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLBodyElementGlobal =  {
    prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
};
export interface HTMLButtonElement extends HTMLElement {
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: string;
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets the classification and default behavior of the button.
     */
    type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Sets or retrieves the default or selected value of the control.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLButtonElementGlobal =  {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
};
export interface HTMLCanvasElement extends HTMLElement {
    /**
     * Gets or sets the height of a canvas element on a document.
     */
    height: number;
    /**
     * Gets or sets the width of a canvas element on a document.
     */
    width: number;
    /**
     * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
     * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
     */
    getContext(contextId: "2d", contextAttributes?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
    getContext(contextId: "webgl" | "experimental-webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext | null;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    /**
     * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
     * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
     */
    toDataURL(type?: string, quality?: any): string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLCanvasElementGlobal =  {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
};
export interface HTMLCollectionBase {
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    readonly length: number;
    /**
     * Retrieves an object from various collections.
     */
    item(index: number): Element | null;
    [index: number]: Element;
}
export interface HTMLCollection extends HTMLCollectionBase {
    /**
     * Retrieves a select object or an object from an options collection.
     */
    namedItem(name: string): Element | null;
}
export type HTMLCollectionGlobal =  {
    prototype: HTMLCollection;
    new(): HTMLCollection;
};
export interface HTMLCollectionOf<T extends Element> extends HTMLCollectionBase {
    item(index: number): T | null;
    namedItem(name: string): T | null;
    [index: number]: T;
}
export interface HTMLDListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDListElementGlobal =  {
    prototype: HTMLDListElement;
    new(): HTMLDListElement;
};
export interface HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDataElementGlobal =  {
    prototype: HTMLDataElement;
    new(): HTMLDataElement;
};
export interface HTMLDataListElement extends HTMLElement {
    readonly options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDataListElementGlobal =  {
    prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
};
export interface HTMLDetailsElement extends HTMLElement {
    open: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDetailsElementGlobal =  {
    prototype: HTMLDetailsElement;
    new(): HTMLDetailsElement;
};
export interface HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;
    close(returnValue?: string): void;
    show(): void;
    showModal(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDialogElementGlobal =  {
    prototype: HTMLDialogElement;
    new(): HTMLDialogElement;
};
export interface HTMLDirectoryElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDirectoryElementGlobal =  {
    prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
};
export interface HTMLDivElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDivElementGlobal =  {
    prototype: HTMLDivElement;
    new(): HTMLDivElement;
};
export interface HTMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLDocumentGlobal =  {
    prototype: HTMLDocument;
    new(): HTMLDocument;
};
export interface HTMLElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
}
export interface HTMLElement extends Element, GlobalEventHandlers, DocumentAndElementEventHandlers, ElementContentEditable, HTMLOrSVGElement, ElementCSSInlineStyle {
    accessKey: string;
    readonly accessKeyLabel: string;
    autocapitalize: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    innerText: string;
    lang: string;
    readonly offsetHeight: number;
    readonly offsetLeft: number;
    readonly offsetParent: Element | null;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    spellcheck: boolean;
    title: string;
    translate: boolean;
    click(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLElementGlobal =  {
    prototype: HTMLElement;
    new(): HTMLElement;
};
export interface HTMLEmbedElement extends HTMLElement, GetSVGDocument {
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    hidden: any;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: string;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    readonly msPlayToSource: any;
    /**
     * Sets or retrieves the name of the object.
     */
    /** @deprecated */
    name: string;
    /**
     * Retrieves the palette used for the embedded document.
     */
    readonly palette: string;
    /**
     * Retrieves the URL of the plug-in used to view an embedded document.
     */
    readonly pluginspage: string;
    readonly readyState: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    /**
     * Sets or retrieves the height and width units of the embed object.
     */
    units: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLEmbedElementGlobal =  {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
};
export interface HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    readonly elements: HTMLCollection;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    name: string;
    readonly type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLFieldSetElementGlobal =  {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
};
export interface HTMLFontElement extends HTMLElement {
    /** @deprecated */
    color: string;
    /**
     * Sets or retrieves the current typeface family.
     */
    /** @deprecated */
    face: string;
    /** @deprecated */
    size: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLFontElementGlobal =  {
    prototype: HTMLFontElement;
    new(): HTMLFontElement;
};
export interface HTMLFormControlsCollection extends HTMLCollectionBase {
    /**
     * element = collection[name]
     */
    namedItem(name: string): RadioNodeList | Element | null;
}
export type HTMLFormControlsCollectionGlobal =  {
    prototype: HTMLFormControlsCollection;
    new(): HTMLFormControlsCollection;
};
export interface HTMLFormElement extends HTMLElement {
    /**
     * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
     */
    acceptCharset: string;
    /**
     * Sets or retrieves the URL to which the form content is sent for processing.
     */
    action: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: string;
    /**
     * Retrieves a collection, in source order, of all controls in a given form.
     */
    readonly elements: HTMLFormControlsCollection;
    /**
     * Sets or retrieves the MIME encoding for the form.
     */
    encoding: string;
    /**
     * Sets or retrieves the encoding type for the form.
     */
    enctype: string;
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    readonly length: number;
    /**
     * Sets or retrieves how to send the form data to the server.
     */
    method: string;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Designates a form that is not validated when submitted.
     */
    noValidate: boolean;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Fires when the user resets a form.
     */
    reset(): void;
    /**
     * Fires when a FORM is about to be submitted.
     */
    submit(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Element;
    [name: string]: any;
}
export type HTMLFormElementGlobal =  {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
};
export interface HTMLFrameElement extends HTMLElement {
    /**
     * Retrieves the document object of the page or frame.
     */
    /** @deprecated */
    readonly contentDocument: Document | null;
    /**
     * Retrieves the object of the specified.
     */
    /** @deprecated */
    readonly contentWindow: WindowProxy | null;
    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    /** @deprecated */
    frameBorder: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    /** @deprecated */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    /** @deprecated */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    /** @deprecated */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     */
    /** @deprecated */
    name: string;
    /**
     * Sets or retrieves whether the user can resize the frame.
     */
    /** @deprecated */
    noResize: boolean;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    /** @deprecated */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    /** @deprecated */
    src: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLFrameElementGlobal =  {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
};
export interface HTMLFrameSetElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
}
export interface HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    /**
     * Sets or retrieves the frame widths of the object.
     */
    /** @deprecated */
    cols: string;
    /**
     * Sets or retrieves the frame heights of the object.
     */
    /** @deprecated */
    rows: string;
    addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLFrameSetElementGlobal =  {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
};
export interface HTMLHRElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    color: string;
    /**
     * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
     */
    /** @deprecated */
    noShade: boolean;
    /** @deprecated */
    size: string;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLHRElementGlobal =  {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
};
export interface HTMLHeadElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLHeadElementGlobal =  {
    prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
};
export interface HTMLHeadingElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLHeadingElementGlobal =  {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
};
export interface HTMLHtmlElement extends HTMLElement {
    /**
     * Sets or retrieves the DTD version that governs the current document.
     */
    /** @deprecated */
    version: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLHtmlElementGlobal =  {
    prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
};
export interface HTMLHyperlinkElementUtils {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
}
export interface HTMLIFrameElement extends HTMLElement, GetSVGDocument {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    allowFullscreen: boolean;
    allowPaymentRequest: boolean;
    /**
     * Retrieves the document object of the page or frame.
     */
    readonly contentDocument: Document | null;
    /**
     * Retrieves the object of the specified.
     */
    readonly contentWindow: Window | null;
    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    /** @deprecated */
    frameBorder: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    /** @deprecated */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    /** @deprecated */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    /** @deprecated */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     */
    name: string;
    readonly referrerPolicy: ReferrerPolicy;
    readonly sandbox: DOMTokenList;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    /** @deprecated */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    /**
     * Sets or retrives the content of the page that is to contain.
     */
    srcdoc: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLIFrameElementGlobal =  {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
};
export interface HTMLImageElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Specifies the properties of a border drawn around an object.
     */
    /** @deprecated */
    border: string;
    /**
     * Retrieves whether the object is fully loaded.
     */
    readonly complete: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    decoding: "async" | "sync" | "auto";
    /**
     * Sets or retrieves the height of the object.
     */
    height: number;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    /** @deprecated */
    hspace: number;
    /**
     * Sets or retrieves whether the image is a server-side image map.
     */
    isMap: boolean;
    /**
     * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
     */
    /** @deprecated */
    longDesc: string;
    /** @deprecated */
    lowsrc: string;
    /**
     * Sets or retrieves the name of the object.
     */
    /** @deprecated */
    name: string;
    /**
     * The original height of the image resource before sizing.
     */
    readonly naturalHeight: number;
    /**
     * The original width of the image resource before sizing.
     */
    readonly naturalWidth: number;
    referrerPolicy: string;
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcset: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Sets or retrieves the vertical margin for the object.
     */
    /** @deprecated */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: number;
    readonly x: number;
    readonly y: number;
    decode(): Promise<void>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLImageElementGlobal =  {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
};
export interface HTMLInputElement extends HTMLElement {
    /**
     * Sets or retrieves a comma-separated list of content types.
     */
    accept: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    checked: boolean;
    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    defaultChecked: boolean;
    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Returns a FileList object on a file type input object.
     */
    files: FileList | null;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: number;
    indeterminate: boolean;
    readonly labels: NodeListOf<HTMLLabelElement> | null;
    /**
     * Specifies the ID of a pre-defined datalist of options for an input element.
     */
    readonly list: HTMLElement | null;
    /**
     * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
     */
    max: string;
    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: number;
    /**
     * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
     */
    min: string;
    minLength: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets or sets a string containing a regular expression that the user's input must match.
     */
    pattern: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: string;
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    selectionDirection: string | null;
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: number | null;
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: number | null;
    size: number;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    /**
     * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
     */
    step: string;
    /**
     * Returns the content type of the object.
     */
    type: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    /** @deprecated */
    useMap: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Returns the value of the data at the cursor's current position.
     */
    value: string;
    valueAsDate: any;
    /**
     * Returns the input field value as a number.
     */
    valueAsNumber: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: number;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Makes the selection equal to the current object.
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: number, end: number, direction?: "forward" | "backward" | "none"): void;
    /**
     * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
     * @param n Value to decrement the value by.
     */
    stepDown(n?: number): void;
    /**
     * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
     * @param n Value to increment the value by.
     */
    stepUp(n?: number): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLInputElementGlobal =  {
    prototype: HTMLInputElement;
    new(): HTMLInputElement;
};
export interface HTMLLIElement extends HTMLElement {
    /** @deprecated */
    type: string;
    /**
     * Sets or retrieves the value of a list item.
     */
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLLIElementGlobal =  {
    prototype: HTMLLIElement;
    new(): HTMLLIElement;
};
export interface HTMLLabelElement extends HTMLElement {
    readonly control: HTMLElement | null;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the object to which the given label object is assigned.
     */
    htmlFor: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLLabelElementGlobal =  {
    prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
};
export interface HTMLLegendElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLLegendElementGlobal =  {
    prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
};
export interface HTMLLinkElement extends HTMLElement, LinkStyle {
    as: string;
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    disabled: boolean;
    /**
     * Sets or retrieves a destination URL or an anchor point.
     */
    href: string;
    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: string;
    integrity: string;
    /**
     * Sets or retrieves the media type.
     */
    media: string;
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: string;
    readonly relList: DOMTokenList;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    /** @deprecated */
    rev: string;
    readonly sizes: DOMTokenList;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    /** @deprecated */
    target: string;
    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLLinkElementGlobal =  {
    prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
};
export interface HTMLMainElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMainElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMainElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMainElementGlobal =  {
    prototype: HTMLMainElement;
    new(): HTMLMainElement;
};
export interface HTMLMapElement extends HTMLElement {
    /**
     * Retrieves a collection of the area objects defined for the given map object.
     */
    readonly areas: HTMLCollection;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMapElementGlobal =  {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
};
export interface HTMLMarqueeElementEventMap extends HTMLElementEventMap {
    "bounce": Event;
    "finish": Event;
    "start": Event;
}
export interface HTMLMarqueeElement extends HTMLElement {
    /** @deprecated */
    behavior: string;
    /** @deprecated */
    bgColor: string;
    /** @deprecated */
    direction: string;
    /** @deprecated */
    height: string;
    /** @deprecated */
    hspace: number;
    /** @deprecated */
    loop: number;
    /** @deprecated */
    onbounce: ((this: HTMLMarqueeElement, ev: Event) => any) | null;
    /** @deprecated */
    onfinish: ((this: HTMLMarqueeElement, ev: Event) => any) | null;
    /** @deprecated */
    onstart: ((this: HTMLMarqueeElement, ev: Event) => any) | null;
    /** @deprecated */
    scrollAmount: number;
    /** @deprecated */
    scrollDelay: number;
    /** @deprecated */
    trueSpeed: boolean;
    /** @deprecated */
    vspace: number;
    /** @deprecated */
    width: string;
    /** @deprecated */
    start(): void;
    /** @deprecated */
    stop(): void;
    addEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMarqueeElementGlobal =  {
    prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
};
export interface HTMLMediaElementEventMap extends HTMLElementEventMap {
    "encrypted": MediaEncryptedEvent;
    "msneedkey": Event;
}
export interface HTMLMediaElement extends HTMLElement {
    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     */
    readonly audioTracks: AudioTrackList;
    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     */
    autoplay: boolean;
    /**
     * Gets a collection of buffered time ranges.
     */
    readonly buffered: TimeRanges;
    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
     */
    controls: boolean;
    crossOrigin: string | null;
    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     */
    readonly currentSrc: string;
    /**
     * Gets or sets the current playback position, in seconds.
     */
    currentTime: number;
    defaultMuted: boolean;
    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     */
    defaultPlaybackRate: number;
    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
     */
    readonly duration: number;
    /**
     * Gets information about whether the playback has ended or not.
     */
    readonly ended: boolean;
    /**
     * Returns an object representing the current error state of the audio or video element.
     */
    readonly error: MediaError | null;
    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     */
    loop: boolean;
    readonly mediaKeys: MediaKeys | null;
    /**
     * Specifies the purpose of the audio or video media, such as background audio or alerts.
     */
    msAudioCategory: string;
    /**
     * Specifies the output device id that the audio will be sent to.
     */
    msAudioDeviceType: string;
    readonly msGraphicsTrustStatus: MSGraphicsTrust;
    /**
     * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
     */
    /** @deprecated */
    readonly msKeys: MSMediaKeys;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: string;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    readonly msPlayToSource: any;
    /**
     * Specifies whether or not to enable low-latency playback on the media element.
     */
    msRealTime: boolean;
    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     */
    muted: boolean;
    /**
     * Gets the current network activity for the element.
     */
    readonly networkState: number;
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
    /** @deprecated */
    onmsneedkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
    /**
     * Gets a flag that specifies whether playback is paused.
     */
    readonly paused: boolean;
    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
     */
    playbackRate: number;
    /**
     * Gets TimeRanges for the current media resource that has been played.
     */
    readonly played: TimeRanges;
    /**
     * Gets or sets the current playback position, in seconds.
     */
    preload: string;
    readonly readyState: number;
    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     */
    readonly seekable: TimeRanges;
    /**
     * Gets a flag that indicates whether the client is currently moving to a new playback position in the media resource.
     */
    readonly seeking: boolean;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcObject: MediaStream | MediaSource | Blob | null;
    readonly textTracks: TextTrackList;
    readonly videoTracks: VideoTrackList;
    /**
     * Gets or sets the volume level for audio portions of the media element.
     */
    volume: number;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     */
    canPlayType(type: string): CanPlayTypeResult;
    /**
     * Resets the audio or video object and loads a new media resource.
     */
    load(): void;
    /**
     * Clears all effects from the media pipeline.
     */
    msClearEffects(): void;
    msGetAsCastingSource(): any;
    /**
     * Inserts the specified audio effect into media pipeline.
     */
    msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    /** @deprecated */
    msSetMediaKeys(mediaKeys: MSMediaKeys): void;
    /**
     * Specifies the media protection manager for a given media pipeline.
     */
    msSetMediaProtectionManager(mediaProtectionManager?: any): void;
    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     */
    pause(): void;
    /**
     * Loads and starts playback of a media resource.
     */
    play(): Promise<void>;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMediaElementGlobal =  {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    readonly HAVE_CURRENT_DATA: number;
    readonly HAVE_ENOUGH_DATA: number;
    readonly HAVE_FUTURE_DATA: number;
    readonly HAVE_METADATA: number;
    readonly HAVE_NOTHING: number;
    readonly NETWORK_EMPTY: number;
    readonly NETWORK_IDLE: number;
    readonly NETWORK_LOADING: number;
    readonly NETWORK_NO_SOURCE: number;
};
export interface HTMLMenuElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMenuElementGlobal =  {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
};
export interface HTMLMetaElement extends HTMLElement {
    /**
     * Gets or sets meta-information to associate with httpEquiv or name.
     */
    content: string;
    /**
     * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
     */
    httpEquiv: string;
    /**
     * Sets or retrieves the value specified in the content attribute of the meta object.
     */
    name: string;
    /**
     * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
     */
    /** @deprecated */
    scheme: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMetaElementGlobal =  {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
};
export interface HTMLMeterElement extends HTMLElement {
    high: number;
    readonly labels: NodeListOf<HTMLLabelElement>;
    low: number;
    max: number;
    min: number;
    optimum: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLMeterElementGlobal =  {
    prototype: HTMLMeterElement;
    new(): HTMLMeterElement;
};
export interface HTMLModElement extends HTMLElement {
    /**
     * Sets or retrieves reference information about the object.
     */
    cite: string;
    /**
     * Sets or retrieves the date and time of a modification to the object.
     */
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLModElementGlobal =  {
    prototype: HTMLModElement;
    new(): HTMLModElement;
};
export interface HTMLOListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    reversed: boolean;
    /**
     * The starting number.
     */
    start: number;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLOListElementGlobal =  {
    prototype: HTMLOListElement;
    new(): HTMLOListElement;
};
export interface HTMLObjectElement extends HTMLElement, GetSVGDocument {
    /**
     * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
     */
    readonly BaseHref: string;
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    /** @deprecated */
    archive: string;
    /** @deprecated */
    border: string;
    /**
     * Sets or retrieves the URL of the file containing the compiled Java class.
     */
    /** @deprecated */
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     */
    /** @deprecated */
    codeBase: string;
    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     */
    /** @deprecated */
    codeType: string;
    /**
     * Retrieves the document object of the page or frame.
     */
    readonly contentDocument: Document | null;
    /**
     * Sets or retrieves the URL that references the data of the object.
     */
    data: string;
    /** @deprecated */
    declare: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /** @deprecated */
    hspace: number;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: string;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    readonly msPlayToSource: any;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    readonly readyState: number;
    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     */
    /** @deprecated */
    standby: string;
    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: string;
    typemustmatch: boolean;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /** @deprecated */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLObjectElementGlobal =  {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
};
export interface HTMLOptGroupElement extends HTMLElement {
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLOptGroupElementGlobal =  {
    prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
};
export interface HTMLOptionElement extends HTMLElement {
    /**
     * Sets or retrieves the status of an option.
     */
    defaultSelected: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Sets or retrieves the ordinal position of an option in a list box.
     */
    readonly index: number;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: string;
    /**
     * Sets or retrieves whether the option in the list box is the default item.
     */
    selected: boolean;
    /**
     * Sets or retrieves the text string specified by the option tag.
     */
    text: string;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLOptionElementGlobal =  {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
};
export interface HTMLOptionsCollection extends HTMLCollectionOf<HTMLOptionElement> {
    /**
     * Returns the number of elements in the collection.
     * When set to a smaller number, truncates the number of option elements in the corresponding container.
     * When set to a greater number, adds new blank option elements to that container.
     */
    length: number;
    /**
     * Returns the index of the first selected item, if any, or −1 if there is no selected
     * item.
     * Can be set, to change the selection.
     */
    selectedIndex: number;
    /**
     * Inserts element before the node given by before.
     * The before argument can be a number, in which case element is inserted before the item with that number, or an element from the
     * collection, in which case element is inserted before that element.
     * If before is omitted, null, or a number out of range, then element will be added at the end of the list.
     * This method will throw a "HierarchyRequestError" DOMException if
     * element is an ancestor of the element into which it is to be inserted.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    /**
     * Removes the item with index index from the collection.
     */
    remove(index: number): void;
}
export type HTMLOptionsCollectionGlobal =  {
    prototype: HTMLOptionsCollection;
    new(): HTMLOptionsCollection;
};
export interface HTMLOrSVGElement {
    readonly dataset: DOMStringMap;
    nonce: string;
    tabIndex: number;
    blur(): void;
    focus(options?: FocusOptions): void;
}
export interface HTMLOutputElement extends HTMLElement {
    defaultValue: string;
    readonly form: HTMLFormElement | null;
    readonly htmlFor: DOMTokenList;
    readonly labels: NodeListOf<HTMLLabelElement>;
    name: string;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLOutputElementGlobal =  {
    prototype: HTMLOutputElement;
    new(): HTMLOutputElement;
};
export interface HTMLParagraphElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLParagraphElementGlobal =  {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
};
export interface HTMLParamElement extends HTMLElement {
    /**
     * Sets or retrieves the name of an input parameter for an element.
     */
    name: string;
    /**
     * Sets or retrieves the content type of the resource designated by the value attribute.
     */
    /** @deprecated */
    type: string;
    /**
     * Sets or retrieves the value of an input parameter for an element.
     */
    value: string;
    /**
     * Sets or retrieves the data type of the value attribute.
     */
    /** @deprecated */
    valueType: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLParamElementGlobal =  {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
};
export interface HTMLPictureElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLPictureElementGlobal =  {
    prototype: HTMLPictureElement;
    new(): HTMLPictureElement;
};
export interface HTMLPreElement extends HTMLElement {
    /**
     * Sets or gets a value that you can use to implement your own width functionality for the object.
     */
    /** @deprecated */
    width: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLPreElementGlobal =  {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
};
export interface HTMLProgressElement extends HTMLElement {
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Defines the maximum, or "done" value for a progress element.
     */
    max: number;
    /**
     * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
     */
    readonly position: number;
    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     */
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLProgressElementGlobal =  {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
};
export interface HTMLQuoteElement extends HTMLElement {
    /**
     * Sets or retrieves reference information about the object.
     */
    cite: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLQuoteElementGlobal =  {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
};
export interface HTMLScriptElement extends HTMLElement {
    async: boolean;
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    /**
     * Sets or retrieves the status of the script.
     */
    defer: boolean;
    /**
     * Sets or retrieves the event for which the script is written.
     */
    /** @deprecated */
    event: string;
    /**
     * Sets or retrieves the object that is bound to the event script.
     */
    /** @deprecated */
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    referrerPolicy: string;
    /**
     * Retrieves the URL to an external file that contains the source code or data.
     */
    src: string;
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    /**
     * Sets or retrieves the MIME type for the associated scripting engine.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLScriptElementGlobal =  {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
};
export interface HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    length: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    readonly options: HTMLOptionsCollection;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    /**
     * Sets or retrieves the index of the selected option in a select object.
     */
    selectedIndex: number;
    readonly selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    /**
     * Sets or retrieves the number of rows in the list box.
     */
    size: number;
    /**
     * Retrieves the type of select control based on the value of the MULTIPLE attribute.
     */
    readonly type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    /**
     * Retrieves a select object or an object from an options collection.
     * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */
    item(index: number): Element | null;
    /**
     * Retrieves a select object or an object from an options collection.
     * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
     */
    namedItem(name: string): HTMLOptionElement | null;
    /**
     * Removes an element from the collection.
     * @param index Number that specifies the zero-based index of the element to remove from the collection.
     */
    remove(): void;
    remove(index: number): void;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [name: number]: HTMLOptionElement | HTMLOptGroupElement;
}
export type HTMLSelectElementGlobal =  {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
};
export interface HTMLSlotElement extends HTMLElement {
    name: string;
    assignedElements(options?: AssignedNodesOptions): Element[];
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLSlotElementGlobal =  {
    prototype: HTMLSlotElement;
    new(): HTMLSlotElement;
};
export interface HTMLSourceElement extends HTMLElement {
    /**
     * Gets or sets the intended media type of the media source.
     */
    media: string;
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcset: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLSourceElementGlobal =  {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
};
export interface HTMLSpanElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLSpanElementGlobal =  {
    prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
};
export interface HTMLStyleElement extends HTMLElement, LinkStyle {
    /**
     * Sets or retrieves the media type.
     */
    media: string;
    /**
     * Retrieves the CSS language in which the style sheet is written.
     */
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLStyleElementGlobal =  {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
};
export interface HTMLTableCaptionElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the caption or legend.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableCaptionElementGlobal =  {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
};
export interface HTMLTableCellElement extends HTMLElement {
    /**
     * Sets or retrieves abbreviated text for the object.
     */
    abbr: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     */
    /** @deprecated */
    axis: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Retrieves the position of the object in the cells collection of a row.
     */
    readonly cellIndex: number;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number columns in the table that the object should span.
     */
    colSpan: number;
    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     */
    headers: string;
    /**
     * Sets or retrieves the height of the object.
     */
    /** @deprecated */
    height: string;
    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */
    /** @deprecated */
    noWrap: boolean;
    /**
     * Sets or retrieves how many rows in a table the cell should span.
     */
    rowSpan: number;
    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */
    scope: string;
    /** @deprecated */
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableCellElementGlobal =  {
    prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
};
export interface HTMLTableColElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number of columns in the group.
     */
    span: number;
    /** @deprecated */
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableColElementGlobal =  {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
};
export interface HTMLTableDataCellElement extends HTMLTableCellElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableDataCellElementGlobal =  {
    prototype: HTMLTableDataCellElement;
    new(): HTMLTableDataCellElement;
};
export interface HTMLTableElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    /** @deprecated */
    border: string;
    /**
     * Retrieves the caption object of a table.
     */
    caption: HTMLTableCaptionElement | null;
    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     */
    /** @deprecated */
    cellPadding: string;
    /**
     * Sets or retrieves the amount of space between cells in a table.
     */
    /** @deprecated */
    cellSpacing: string;
    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     */
    /** @deprecated */
    frame: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     */
    /** @deprecated */
    rules: string;
    /**
     * Sets or retrieves a description and/or structure of the object.
     */
    /** @deprecated */
    summary: string;
    /**
     * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
     */
    readonly tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    /**
     * Retrieves the tFoot object of the table.
     */
    tFoot: HTMLTableSectionElement | null;
    /**
     * Retrieves the tHead object of the table.
     */
    tHead: HTMLTableSectionElement | null;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    /**
     * Creates an empty caption element in the table.
     */
    createCaption(): HTMLTableCaptionElement;
    /**
     * Creates an empty tBody element in the table.
     */
    createTBody(): HTMLTableSectionElement;
    /**
     * Creates an empty tFoot element in the table.
     */
    createTFoot(): HTMLTableSectionElement;
    /**
     * Returns the tHead element object if successful, or null otherwise.
     */
    createTHead(): HTMLTableSectionElement;
    /**
     * Deletes the caption element and its contents from the table.
     */
    deleteCaption(): void;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Deletes the tFoot element and its contents from the table.
     */
    deleteTFoot(): void;
    /**
     * Deletes the tHead element and its contents from the table.
     */
    deleteTHead(): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableElementGlobal =  {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
};
export interface HTMLTableHeaderCellElement extends HTMLTableCellElement {
    scope: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableHeaderCellElementGlobal =  {
    prototype: HTMLTableHeaderCellElement;
    new(): HTMLTableHeaderCellElement;
};
export interface HTMLTableRowElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Retrieves a collection of all cells in the table row.
     */
    readonly cells: HTMLCollectionOf<HTMLTableDataCellElement | HTMLTableHeaderCellElement>;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Retrieves the position of the object in the rows collection for the table.
     */
    readonly rowIndex: number;
    /**
     * Retrieves the position of the object in the collection.
     */
    readonly sectionRowIndex: number;
    /** @deprecated */
    vAlign: string;
    /**
     * Removes the specified cell from the table row, as well as from the cells collection.
     * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
     */
    deleteCell(index: number): void;
    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     */
    insertCell(index?: number): HTMLTableDataCellElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableRowElementGlobal =  {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
};
export interface HTMLTableSectionElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    /** @deprecated */
    vAlign: string;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTableSectionElementGlobal =  {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
};
export interface HTMLTemplateElement extends HTMLElement {
    readonly content: DocumentFragment;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTemplateElementGlobal =  {
    prototype: HTMLTemplateElement;
    new(): HTMLTemplateElement;
};
export interface HTMLTextAreaElement extends HTMLElement {
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    /**
     * Sets or retrieves the width of the object.
     */
    cols: number;
    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: number;
    minLength: number;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: string;
    /**
     * Sets or retrieves the value indicated whether the content of the object is read-only.
     */
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: number;
    selectionDirection: string;
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: number;
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: number;
    readonly textLength: number;
    /**
     * Retrieves the type of control.
     */
    readonly type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    readonly validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    readonly validity: ValidityState;
    /**
     * Retrieves or sets the text in the entry field of the textArea element.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    readonly willValidate: boolean;
    /**
     * Sets or retrieves how to handle wordwrapping in the object.
     */
    wrap: string;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Highlights the input area of a form element.
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: number, end: number, direction?: "forward" | "backward" | "none"): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTextAreaElementGlobal =  {
    prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
};
export interface HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTimeElementGlobal =  {
    prototype: HTMLTimeElement;
    new(): HTMLTimeElement;
};
export interface HTMLTitleElement extends HTMLElement {
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTitleElementGlobal =  {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
};
export interface HTMLTrackElement extends HTMLElement {
    default: boolean;
    kind: string;
    label: string;
    readonly readyState: number;
    src: string;
    srclang: string;
    readonly track: TextTrack;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLTrackElementGlobal =  {
    prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
    readonly ERROR: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
};
export interface HTMLUListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLUListElementGlobal =  {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
};
export interface HTMLUnknownElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLUnknownElementGlobal =  {
    prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
};
export interface HTMLVideoElementEventMap extends HTMLMediaElementEventMap {
    "MSVideoFormatChanged": Event;
    "MSVideoFrameStepCompleted": Event;
    "MSVideoOptimalLayoutChanged": Event;
}
export interface HTMLVideoElement extends HTMLMediaElement {
    /**
     * Gets or sets the height of the video element.
     */
    height: number;
    msHorizontalMirror: boolean;
    readonly msIsLayoutOptimalForPlayback: boolean;
    readonly msIsStereo3D: boolean;
    msStereo3DPackingMode: string;
    msStereo3DRenderMode: string;
    msZoom: boolean;
    onMSVideoFormatChanged: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onMSVideoFrameStepCompleted: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onMSVideoOptimalLayoutChanged: ((this: HTMLVideoElement, ev: Event) => any) | null;
    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     */
    poster: string;
    /**
     * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
     */
    readonly videoHeight: number;
    /**
     * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
     */
    readonly videoWidth: number;
    readonly webkitDisplayingFullscreen: boolean;
    readonly webkitSupportsFullscreen: boolean;
    /**
     * Gets or sets the width of the video element.
     */
    width: number;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    msFrameStep(forward: boolean): void;
    msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
    webkitEnterFullScreen(): void;
    webkitEnterFullscreen(): void;
    webkitExitFullScreen(): void;
    webkitExitFullscreen(): void;
    addEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type HTMLVideoElementGlobal =  {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
};
export interface HashChangeEvent extends Event {
    readonly newURL: string;
    readonly oldURL: string;
}
export type HashChangeEventGlobal =  {
    prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
};
export interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}
export type HeadersGlobal =  {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};
export interface History {
    readonly length: number;
    scrollRestoration: ScrollRestoration;
    readonly state: any;
    back(): void;
    forward(): void;
    go(delta?: number): void;
    pushState(data: any, title: string, url?: string | null): void;
    replaceState(data: any, title: string, url?: string | null): void;
}
export type HistoryGlobal =  {
    prototype: History;
    new(): History;
};
export interface HkdfCtrParams extends Algorithm {
    context: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    hash: string | Algorithm;
    label: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}
export interface IDBArrayKey extends Array<IDBValidKey> {
}
export interface IDBCursor {
    /**
     * Returns the direction ("next", "nextunique", "prev" or "prevunique")
     * of the cursor.
     */
    readonly direction: IDBCursorDirection;
    /**
     * Returns the key of the cursor.
     * Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    readonly key: IDBValidKey | IDBKeyRange;
    /**
     * Returns the effective key of the cursor.
     * Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    readonly primaryKey: IDBValidKey | IDBKeyRange;
    /**
     * Returns the IDBObjectStore or IDBIndex the cursor was opened from.
     */
    readonly source: IDBObjectStore | IDBIndex;
    /**
     * Advances the cursor through the next count records in
     * range.
     */
    advance(count: number): void;
    /**
     * Advances the cursor to the next record in range matching or
     * after key.
     */
    continue(key?: IDBValidKey | IDBKeyRange): void;
    /**
     * Advances the cursor to the next record in range matching
     * or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
     */
    continuePrimaryKey(key: IDBValidKey | IDBKeyRange, primaryKey: IDBValidKey | IDBKeyRange): void;
    /**
     * Delete the record pointed at by the cursor with a new value.
     * If successful, request's result will be undefined.
     */
    delete(): IDBRequest<undefined>;
    /**
     * Updated the record pointed at by the cursor with a new value.
     * Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
     * If successful, request's result will be the record's key.
     */
    update(value: any): IDBRequest<IDBValidKey>;
}
export type IDBCursorGlobal =  {
    prototype: IDBCursor;
    new(): IDBCursor;
};
export interface IDBCursorWithValue extends IDBCursor {
    /**
     * Returns the cursor's current value.
     */
    readonly value: any;
}
export type IDBCursorWithValueGlobal =  {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};
export interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}
export interface IDBDatabase extends EventTarget {
    /**
     * Returns the name of the database.
     */
    readonly name: string;
    /**
     * Returns a list of the names of object stores in the database.
     */
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    /**
     * Returns the version of the database.
     */
    readonly version: number;
    /**
     * Closes the connection once all running transactions have finished.
     */
    close(): void;
    /**
     * Creates a new object store with the given name and options and returns a new IDBObjectStore.
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    /**
     * Deletes the object store with the given name.
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteObjectStore(name: string): void;
    /**
     * Returns a new transaction with the given mode ("readonly" or "readwrite")
     * and scope which can be a single object store name or an array of names.
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type IDBDatabaseGlobal =  {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};
export interface IDBEnvironment {
    readonly indexedDB: IDBFactory;
}
export interface IDBFactory {
    /**
     * Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if
     * the keys are equal.
     * Throws a "DataError" DOMException if either input is not a valid key.
     */
    cmp(first: any, second: any): number;
    /**
     * Attempts to delete the named database. If the
     * database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request
     * is successful request's result will be null.
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * Attempts to open a connection to the named database with the specified version. If the database already exists
     * with a lower version and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close, then an upgrade
     * will occur. If the database already exists with a higher
     * version the request will fail. If the request is
     * successful request's result will
     * be the connection.
     */
    open(name: string, version?: number): IDBOpenDBRequest;
}
export type IDBFactoryGlobal =  {
    prototype: IDBFactory;
    new(): IDBFactory;
};
export interface IDBIndex {
    readonly keyPath: string | string[];
    readonly multiEntry: boolean;
    /**
     * Updates the name of the store to newName.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    name: string;
    /**
     * Returns the IDBObjectStore the index belongs to.
     */
    readonly objectStore: IDBObjectStore;
    readonly unique: boolean;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     * If successful, request's result will be the
     * count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Retrieves the value of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(key: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     * If successful, request's result will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     * If successful, request's result will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(key: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * Opens a cursor over the records matching query,
     * ordered by direction. If query is null, all records in index are matched.
     * If successful, request's result will be an IDBCursorWithValue, or null if there were no matching records.
     */
    openCursor(range?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in index are matched.
     * If successful, request's result will be an IDBCursor, or null if there were no matching records.
     */
    openKeyCursor(range?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}
export type IDBIndexGlobal =  {
    prototype: IDBIndex;
    new(): IDBIndex;
};
export interface IDBKeyRange {
    /**
     * Returns lower bound, or undefined if none.
     */
    readonly lower: any;
    /**
     * Returns true if the lower open flag is set, and false otherwise.
     */
    readonly lowerOpen: boolean;
    /**
     * Returns upper bound, or undefined if none.
     */
    readonly upper: any;
    /**
     * Returns true if the upper open flag is set, and false otherwise.
     */
    readonly upperOpen: boolean;
    /**
     * Returns true if key is included in the range, and false otherwise.
     */
    includes(key: any): boolean;
}
export type IDBKeyRangeGlobal =  {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning from lower to upper.
     * If lowerOpen is true, lower is not included in the range.
     * If upperOpen is true, upper is not included in the range.
     */
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange starting at key with no
     * upper bound. If open is true, key is not included in the
     * range.
     */
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning only key.
     */
    only(value: any): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange with no lower bound and ending at key. If open is true, key is not included in the range.
     */
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};
export interface IDBObjectStore {
    /**
     * Returns true if the store has a key generator, and false otherwise.
     */
    readonly autoIncrement: boolean;
    /**
     * Returns a list of the names of indexes in the store.
     */
    readonly indexNames: DOMStringList;
    /**
     * Returns the key path of the store, or null if none.
     */
    readonly keyPath: string | string[];
    /**
     * Updates the name of the store to newName.
     * Throws "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    name: string;
    /**
     * Returns the associated transaction.
     */
    readonly transaction: IDBTransaction;
    add(value: any, key?: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey>;
    /**
     * Deletes all records in store.
     * If successful, request's result will
     * be undefined.
     */
    clear(): IDBRequest<undefined>;
    /**
     * Retrieves the number of records matching the
     * given key or key range in query.
     * If successful, request's result will be the count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be
     * satisfied with the data already in store the upgrade
     * transaction will abort with
     * a "ConstraintError" DOMException.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * Deletes records in store with the given key or in the given key range in query.
     * If successful, request's result will
     * be undefined.
     */
    delete(key: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    /**
     * Deletes the index in store with the given name.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    deleteIndex(name: string): void;
    /**
     * Retrieves the value of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>;
    /**
     * Retrieves the values of the records matching the
     * given key or key range in query (up to count if given).
     * If successful, request's result will
     * be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the
     * given key or key range in query (up to count if given).
     * If successful, request's result will
     * be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    index(name: string): IDBIndex;
    /**
     * Opens a cursor over the records matching query,
     * ordered by direction. If query is null, all records in store are matched.
     * If successful, request's result will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.
     */
    openCursor(range?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in store are matched.
     * If successful, request's result will be an IDBCursor pointing at the first matching record, or
     * null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    put(value: any, key?: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey>;
}
export type IDBObjectStoreGlobal =  {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};
export interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;
}
export interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    onblocked: ((this: IDBOpenDBRequest, ev: Event) => any) | null;
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type IDBOpenDBRequestGlobal =  {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};
export interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}
export interface IDBRequest<T = any> extends EventTarget {
    /**
     * When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws
     * a "InvalidStateError" DOMException if the request is still pending.
     */
    readonly error: DOMException | null;
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /**
     * Returns "pending" until a request is complete,
     * then returns "done".
     */
    readonly readyState: IDBRequestReadyState;
    /**
     * When a request is completed, returns the result,
     * or undefined if the request failed. Throws a
     * "InvalidStateError" DOMException if the request is still pending.
     */
    readonly result: T;
    /**
     * Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open
     * request.
     */
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    /**
     * Returns the IDBTransaction the request was made within.
     * If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.
     */
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type IDBRequestGlobal =  {
    prototype: IDBRequest;
    new(): IDBRequest;
};
export interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}
export interface IDBTransaction extends EventTarget {
    /**
     * Returns the transaction's connection.
     */
    readonly db: IDBDatabase;
    /**
     * If the transaction was aborted, returns the
     * error (a DOMException) providing the reason.
     */
    readonly error: DOMException;
    /**
     * Returns the mode the transaction was created with
     * ("readonly" or "readwrite"), or "versionchange" for
     * an upgrade transaction.
     */
    readonly mode: IDBTransactionMode;
    /**
     * Returns a list of the names of object stores in the
     * transaction's scope. For an upgrade transaction this is all object stores in the database.
     */
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * Aborts the transaction. All pending requests will fail with
     * a "AbortError" DOMException and all changes made to the database will be
     * reverted.
     */
    abort(): void;
    /**
     * Returns an IDBObjectStore in the transaction's scope.
     */
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type IDBTransactionGlobal =  {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};
export interface IDBVersionChangeEvent extends Event {
    readonly newVersion: number | null;
    readonly oldVersion: number;
}
export type IDBVersionChangeEventGlobal =  {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};
export interface IIRFilterNode extends AudioNode {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
export type IIRFilterNodeGlobal =  {
    prototype: IIRFilterNode;
    new(context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
};
export interface ImageBitmap {
    /**
     * Returns the intrinsic height of the image, in CSS
     * pixels.
     */
    readonly height: number;
    /**
     * Returns the intrinsic width of the image, in CSS
     * pixels.
     */
    readonly width: number;
    /**
     * Releases imageBitmap's underlying bitmap data.
     */
    close(): void;
}
export type ImageBitmapGlobal =  {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};
export interface ImageBitmapOptions {
    colorSpaceConversion?: "none" | "default";
    imageOrientation?: "none" | "flipY";
    premultiplyAlpha?: "none" | "premultiply" | "default";
    resizeHeight?: number;
    resizeQuality?: "pixelated" | "low" | "medium" | "high";
    resizeWidth?: number;
}
export interface ImageBitmapRenderingContext {
    /**
     * Returns the canvas element that the context is bound to.
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * Replaces contents of the canvas element to which context
     * is bound with a transparent black bitmap whose size corresponds to the width and height
     * content attributes of the canvas element.
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}
export type ImageBitmapRenderingContextGlobal =  {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};
export interface ImageData {
    /**
     * Returns the one-dimensional array containing the data in RGBA order, as integers in the
     * range 0 to 255.
     */
    readonly data: Uint8ClampedArray;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in
     * pixels.
     */
    readonly height: number;
    readonly width: number;
}
export type ImageDataGlobal =  {
    prototype: ImageData;
    new(width: number, height: number): ImageData;
    new(array: Uint8ClampedArray, width: number, height: number): ImageData;
};
export interface IntersectionObserver {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: number[];
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}
export type IntersectionObserverGlobal =  {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};
export interface IntersectionObserverEntry {
    readonly boundingClientRect: ClientRect | DOMRect;
    readonly intersectionRatio: number;
    readonly intersectionRect: ClientRect | DOMRect;
    readonly isIntersecting: boolean;
    readonly rootBounds: ClientRect | DOMRect;
    readonly target: Element;
    readonly time: number;
}
export type IntersectionObserverEntryGlobal =  {
    prototype: IntersectionObserverEntry;
    new(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
};
export interface KeyboardEvent extends UIEvent {
    readonly altKey: boolean;
    /** @deprecated */
    char: string;
    /** @deprecated */
    readonly charCode: number;
    readonly code: string;
    readonly ctrlKey: boolean;
    readonly key: string;
    /** @deprecated */
    readonly keyCode: number;
    readonly location: number;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly shiftKey: boolean;
    /** @deprecated */
    readonly which: number;
    getModifierState(keyArg: string): boolean;
    /** @deprecated */
    initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
    readonly DOM_KEY_LOCATION_JOYSTICK: number;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_MOBILE: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
}
export type KeyboardEventGlobal =  {
    prototype: KeyboardEvent;
    new(typeArg: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    readonly DOM_KEY_LOCATION_JOYSTICK: number;
    readonly DOM_KEY_LOCATION_LEFT: number;
    readonly DOM_KEY_LOCATION_MOBILE: number;
    readonly DOM_KEY_LOCATION_NUMPAD: number;
    readonly DOM_KEY_LOCATION_RIGHT: number;
    readonly DOM_KEY_LOCATION_STANDARD: number;
};
export interface KeyframeEffect extends AnimationEffect {
    composite: CompositeOperation;
    iterationComposite: IterationCompositeOperation;
    target: Element | null;
    getKeyframes(): ComputedKeyframe[];
    setKeyframes(keyframes: Keyframe[] | PropertyIndexedKeyframes | null): void;
}
export type KeyframeEffectGlobal =  {
    prototype: KeyframeEffect;
    new(target: Element | null, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeEffectOptions): KeyframeEffect;
    new(source: KeyframeEffect): KeyframeEffect;
};
export interface LinkStyle {
    readonly sheet: StyleSheet | null;
}
export interface ListeningStateChangedEvent extends Event {
    readonly label: string;
    readonly state: ListeningState;
}
export type ListeningStateChangedEventGlobal =  {
    prototype: ListeningStateChangedEvent;
    new(): ListeningStateChangedEvent;
};
export interface Location {
    /**
     * Returns a DOMStringList object listing the origins of the ancestor browsing contexts, from the parent browsing
     * context to the top-level browsing context.
     */
    readonly ancestorOrigins: DOMStringList;
    /**
     * Returns the Location object's URL's fragment (includes leading "#" if non-empty).
     * Can be set, to navigate to the same URL with a changed fragment (ignores leading "#").
     */
    hash: string;
    /**
     * Returns the Location object's URL's host and port (if different from the default
     * port for the scheme).
     * Can be set, to navigate to the same URL with a changed host and port.
     */
    host: string;
    /**
     * Returns the Location object's URL's host.
     * Can be set, to navigate to the same URL with a changed host.
     */
    hostname: string;
    /**
     * Returns the Location object's URL.
     * Can be set, to navigate to the given URL.
     */
    href: string;
    /**
     * Returns the Location object's URL's origin.
     */
    readonly origin: string;
    /**
     * Returns the Location object's URL's path.
     * Can be set, to navigate to the same URL with a changed path.
     */
    pathname: string;
    /**
     * Returns the Location object's URL's port.
     * Can be set, to navigate to the same URL with a changed port.
     */
    port: string;
    /**
     * Returns the Location object's URL's scheme.
     * Can be set, to navigate to the same URL with a changed scheme.
     */
    protocol: string;
    /**
     * Returns the Location object's URL's query (includes leading "?" if non-empty).
     * Can be set, to navigate to the same URL with a changed query (ignores leading "?").
     */
    search: string;
    /**
     * Navigates to the given URL.
     */
    assign(url: string): void;
    /**
     * Reloads the current page.
     */
    reload(): void;
    /** @deprecated */
    reload(forcedReload: boolean): void;
    /**
     * Removes the current page from the session history and navigates to the given URL.
     */
    replace(url: string): void;
}
export type LocationGlobal =  {
    prototype: Location;
    new(): Location;
};
export interface MSAssertion {
    readonly id: string;
    readonly type: MSCredentialType;
}
export type MSAssertionGlobal =  {
    prototype: MSAssertion;
    new(): MSAssertion;
};
export interface MSBlobBuilder {
    append(data: any, endings?: string): void;
    getBlob(contentType?: string): Blob;
}
export type MSBlobBuilderGlobal =  {
    prototype: MSBlobBuilder;
    new(): MSBlobBuilder;
};
export interface MSFIDOCredentialAssertion extends MSAssertion {
    readonly algorithm: string | Algorithm;
    readonly attestation: any;
    readonly publicKey: string;
    readonly transportHints: MSTransportType[];
}
export type MSFIDOCredentialAssertionGlobal =  {
    prototype: MSFIDOCredentialAssertion;
    new(): MSFIDOCredentialAssertion;
};
export interface MSFIDOSignature {
    readonly authnrData: string;
    readonly clientData: string;
    readonly signature: string;
}
export type MSFIDOSignatureGlobal =  {
    prototype: MSFIDOSignature;
    new(): MSFIDOSignature;
};
export interface MSFIDOSignatureAssertion extends MSAssertion {
    readonly signature: MSFIDOSignature;
}
export type MSFIDOSignatureAssertionGlobal =  {
    prototype: MSFIDOSignatureAssertion;
    new(): MSFIDOSignatureAssertion;
};
export interface MSFileSaver {
    msSaveBlob(blob: any, defaultName?: string): boolean;
    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
}
export interface MSGesture {
    target: Element;
    addPointer(pointerId: number): void;
    stop(): void;
}
export type MSGestureGlobal =  {
    prototype: MSGesture;
    new(): MSGesture;
};
export interface MSGestureEvent extends UIEvent {
    readonly clientX: number;
    readonly clientY: number;
    readonly expansion: number;
    readonly gestureObject: any;
    readonly hwTimestamp: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly rotation: number;
    readonly scale: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly translationX: number;
    readonly translationY: number;
    readonly velocityAngular: number;
    readonly velocityExpansion: number;
    readonly velocityX: number;
    readonly velocityY: number;
    initGestureEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;
    readonly MSGESTURE_FLAG_BEGIN: number;
    readonly MSGESTURE_FLAG_CANCEL: number;
    readonly MSGESTURE_FLAG_END: number;
    readonly MSGESTURE_FLAG_INERTIA: number;
    readonly MSGESTURE_FLAG_NONE: number;
}
export type MSGestureEventGlobal =  {
    prototype: MSGestureEvent;
    new(): MSGestureEvent;
    readonly MSGESTURE_FLAG_BEGIN: number;
    readonly MSGESTURE_FLAG_CANCEL: number;
    readonly MSGESTURE_FLAG_END: number;
    readonly MSGESTURE_FLAG_INERTIA: number;
    readonly MSGESTURE_FLAG_NONE: number;
};
export interface MSGraphicsTrust {
    readonly constrictionActive: boolean;
    readonly status: string;
}
export type MSGraphicsTrustGlobal =  {
    prototype: MSGraphicsTrust;
    new(): MSGraphicsTrust;
};
export interface MSInputMethodContextEventMap {
    "MSCandidateWindowHide": Event;
    "MSCandidateWindowShow": Event;
    "MSCandidateWindowUpdate": Event;
}
export interface MSInputMethodContext extends EventTarget {
    readonly compositionEndOffset: number;
    readonly compositionStartOffset: number;
    oncandidatewindowhide: ((this: MSInputMethodContext, ev: Event) => any) | null;
    oncandidatewindowshow: ((this: MSInputMethodContext, ev: Event) => any) | null;
    oncandidatewindowupdate: ((this: MSInputMethodContext, ev: Event) => any) | null;
    readonly target: HTMLElement;
    getCandidateWindowClientRect(): ClientRect;
    getCompositionAlternatives(): string[];
    hasComposition(): boolean;
    isCandidateWindowVisible(): boolean;
    addEventListener<K extends keyof MSInputMethodContextEventMap>(type: K, listener: (this: MSInputMethodContext, ev: MSInputMethodContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MSInputMethodContextEventMap>(type: K, listener: (this: MSInputMethodContext, ev: MSInputMethodContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type MSInputMethodContextGlobal =  {
    prototype: MSInputMethodContext;
    new(): MSInputMethodContext;
};
export interface MSMediaKeyError {
    readonly code: number;
    readonly systemCode: number;
    readonly MS_MEDIA_KEYERR_CLIENT: number;
    readonly MS_MEDIA_KEYERR_DOMAIN: number;
    readonly MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    readonly MS_MEDIA_KEYERR_OUTPUT: number;
    readonly MS_MEDIA_KEYERR_SERVICE: number;
    readonly MS_MEDIA_KEYERR_UNKNOWN: number;
}
export type MSMediaKeyErrorGlobal =  {
    prototype: MSMediaKeyError;
    new(): MSMediaKeyError;
    readonly MS_MEDIA_KEYERR_CLIENT: number;
    readonly MS_MEDIA_KEYERR_DOMAIN: number;
    readonly MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    readonly MS_MEDIA_KEYERR_OUTPUT: number;
    readonly MS_MEDIA_KEYERR_SERVICE: number;
    readonly MS_MEDIA_KEYERR_UNKNOWN: number;
};
export interface MSMediaKeyMessageEvent extends Event {
    readonly destinationURL: string | null;
    readonly message: Uint8Array;
}
export type MSMediaKeyMessageEventGlobal =  {
    prototype: MSMediaKeyMessageEvent;
    new(): MSMediaKeyMessageEvent;
};
export interface MSMediaKeyNeededEvent extends Event {
    readonly initData: Uint8Array | null;
}
export type MSMediaKeyNeededEventGlobal =  {
    prototype: MSMediaKeyNeededEvent;
    new(): MSMediaKeyNeededEvent;
};
export interface MSMediaKeySession extends EventTarget {
    readonly error: MSMediaKeyError | null;
    readonly keySystem: string;
    readonly sessionId: string;
    close(): void;
    update(key: Uint8Array): void;
}
export type MSMediaKeySessionGlobal =  {
    prototype: MSMediaKeySession;
    new(): MSMediaKeySession;
};
export interface MSMediaKeys {
    readonly keySystem: string;
    createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array | null): MSMediaKeySession;
}
export type MSMediaKeysGlobal =  {
    prototype: MSMediaKeys;
    new(keySystem: string): MSMediaKeys;
    isTypeSupported(keySystem: string, type?: string | null): boolean;
    isTypeSupportedWithFeatures(keySystem: string, type?: string | null): string;
};
export interface MSNavigatorDoNotTrack {
    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
    confirmWebWideTrackingException(args: ExceptionInformation): boolean;
    removeSiteSpecificTrackingException(args: ExceptionInformation): void;
    removeWebWideTrackingException(args: ExceptionInformation): void;
    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
    storeWebWideTrackingException(args: StoreExceptionsInformation): void;
}
export interface MSPointerEvent extends MouseEvent {
    readonly currentPoint: any;
    readonly height: number;
    readonly hwTimestamp: number;
    readonly intermediatePoints: any;
    readonly isPrimary: boolean;
    readonly pointerId: number;
    readonly pointerType: any;
    readonly pressure: number;
    readonly rotation: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly width: number;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
}
export type MSPointerEventGlobal =  {
    prototype: MSPointerEvent;
    new(typeArg: string, eventInitDict?: PointerEventInit): MSPointerEvent;
};
export interface MSStream {
    readonly type: string;
    msClose(): void;
    msDetachStream(): any;
}
export type MSStreamGlobal =  {
    prototype: MSStream;
    new(): MSStream;
};
export interface MediaDeviceInfo {
    readonly deviceId: string;
    readonly groupId: string;
    readonly kind: MediaDeviceKind;
    readonly label: string;
}
export type MediaDeviceInfoGlobal =  {
    prototype: MediaDeviceInfo;
    new(): MediaDeviceInfo;
};
export interface MediaDevicesEventMap {
    "devicechange": Event;
}
export interface MediaDevices extends EventTarget {
    ondevicechange: ((this: MediaDevices, ev: Event) => any) | null;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
    addEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type MediaDevicesGlobal =  {
    prototype: MediaDevices;
    new(): MediaDevices;
};
export interface MediaElementAudioSourceNode extends AudioNode {
    readonly mediaElement: HTMLMediaElement;
}
export type MediaElementAudioSourceNodeGlobal =  {
    prototype: MediaElementAudioSourceNode;
    new(context: AudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
};
export interface MediaEncryptedEvent extends Event {
    readonly initData: ArrayBuffer | null;
    readonly initDataType: string;
}
export type MediaEncryptedEventGlobal =  {
    prototype: MediaEncryptedEvent;
    new(type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
};
export interface MediaError {
    readonly code: number;
    readonly message: string;
    readonly msExtendedCode: number;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    readonly MS_MEDIA_ERR_ENCRYPTED: number;
}
export type MediaErrorGlobal =  {
    prototype: MediaError;
    new(): MediaError;
    readonly MEDIA_ERR_ABORTED: number;
    readonly MEDIA_ERR_DECODE: number;
    readonly MEDIA_ERR_NETWORK: number;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    readonly MS_MEDIA_ERR_ENCRYPTED: number;
};
export interface MediaKeyMessageEvent extends Event {
    readonly message: ArrayBuffer;
    readonly messageType: MediaKeyMessageType;
}
export type MediaKeyMessageEventGlobal =  {
    prototype: MediaKeyMessageEvent;
    new(type: string, eventInitDict?: MediaKeyMessageEventInit): MediaKeyMessageEvent;
};
export interface MediaKeySession extends EventTarget {
    readonly closed: Promise<void>;
    readonly expiration: number;
    readonly keyStatuses: MediaKeyStatusMap;
    readonly sessionId: string;
    close(): Promise<void>;
    generateRequest(initDataType: string, initData: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): Promise<void>;
    load(sessionId: string): Promise<boolean>;
    remove(): Promise<void>;
    update(response: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): Promise<void>;
}
export type MediaKeySessionGlobal =  {
    prototype: MediaKeySession;
    new(): MediaKeySession;
};
export interface MediaKeyStatusMap {
    readonly size: number;
    forEach(callback: Function, thisArg?: any): void;
    get(keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): MediaKeyStatus;
    has(keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): boolean;
}
export type MediaKeyStatusMapGlobal =  {
    prototype: MediaKeyStatusMap;
    new(): MediaKeyStatusMap;
};
export interface MediaKeySystemAccess {
    readonly keySystem: string;
    createMediaKeys(): Promise<MediaKeys>;
    getConfiguration(): MediaKeySystemConfiguration;
}
export type MediaKeySystemAccessGlobal =  {
    prototype: MediaKeySystemAccess;
    new(): MediaKeySystemAccess;
};
export interface MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    setServerCertificate(serverCertificate: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): Promise<void>;
}
export type MediaKeysGlobal =  {
    prototype: MediaKeys;
    new(): MediaKeys;
};
export interface MediaList {
    readonly length: number;
    mediaText: string;
    appendMedium(medium: string): void;
    deleteMedium(medium: string): void;
    item(index: number): string | null;
    toString(): number;
    [index: number]: string;
}
export type MediaListGlobal =  {
    prototype: MediaList;
    new(): MediaList;
};
export interface MediaQueryListEventMap {
    "change": MediaQueryListEvent;
}
export interface MediaQueryList extends EventTarget {
    readonly matches: boolean;
    readonly media: string;
    onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
    /** @deprecated */
    addListener(listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    /** @deprecated */
    removeListener(listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type MediaQueryListGlobal =  {
    prototype: MediaQueryList;
    new(): MediaQueryList;
};
export interface MediaQueryListEvent extends Event {
    readonly matches: boolean;
    readonly media: string;
}
export type MediaQueryListEventGlobal =  {
    prototype: MediaQueryListEvent;
    new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
};
export interface MediaSource extends EventTarget {
    readonly activeSourceBuffers: SourceBufferList;
    duration: number;
    readonly readyState: ReadyState;
    readonly sourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    endOfStream(error?: EndOfStreamError): void;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
}
export type MediaSourceGlobal =  {
    prototype: MediaSource;
    new(): MediaSource;
    isTypeSupported(type: string): boolean;
};
export interface MediaStreamEventMap {
    "active": Event;
    "addtrack": MediaStreamTrackEvent;
    "inactive": Event;
    "removetrack": MediaStreamTrackEvent;
}
export interface MediaStream extends EventTarget {
    readonly active: boolean;
    readonly id: string;
    onactive: ((this: MediaStream, ev: Event) => any) | null;
    onaddtrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    oninactive: ((this: MediaStream, ev: Event) => any) | null;
    onremovetrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    addTrack(track: MediaStreamTrack): void;
    clone(): MediaStream;
    getAudioTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | null;
    getTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    removeTrack(track: MediaStreamTrack): void;
    stop(): void;
    addEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type MediaStreamGlobal =  {
    prototype: MediaStream;
    new(): MediaStream;
    new(stream: MediaStream): MediaStream;
    new(tracks: MediaStreamTrack[]): MediaStream;
};
export interface MediaStreamAudioDestinationNode extends AudioNode {
    readonly stream: MediaStream;
}
export type MediaStreamAudioDestinationNodeGlobal =  {
    prototype: MediaStreamAudioDestinationNode;
    new(context: AudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
};
export interface MediaStreamAudioSourceNode extends AudioNode {
    readonly mediaStream: MediaStream;
}
export type MediaStreamAudioSourceNodeGlobal =  {
    prototype: MediaStreamAudioSourceNode;
    new(context: AudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
};
export interface MediaStreamError {
    readonly constraintName: string | null;
    readonly message: string | null;
    readonly name: string;
}
export type MediaStreamErrorGlobal =  {
    prototype: MediaStreamError;
    new(): MediaStreamError;
};
export interface MediaStreamErrorEvent extends Event {
    readonly error: MediaStreamError | null;
}
export type MediaStreamErrorEventGlobal =  {
    prototype: MediaStreamErrorEvent;
    new(typeArg: string, eventInitDict?: MediaStreamErrorEventInit): MediaStreamErrorEvent;
};
export interface MediaStreamEvent extends Event {
    readonly stream: MediaStream | null;
}
export type MediaStreamEventGlobal =  {
    prototype: MediaStreamEvent;
    new(type: string, eventInitDict: MediaStreamEventInit): MediaStreamEvent;
};
export interface MediaStreamTrackEventMap {
    "ended": MediaStreamErrorEvent;
    "isolationchange": Event;
    "mute": Event;
    "overconstrained": MediaStreamErrorEvent;
    "unmute": Event;
}
export interface MediaStreamTrack extends EventTarget {
    enabled: boolean;
    readonly id: string;
    readonly isolated: boolean;
    readonly kind: string;
    readonly label: string;
    readonly muted: boolean;
    onended: ((this: MediaStreamTrack, ev: MediaStreamErrorEvent) => any) | null;
    onisolationchange: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onoverconstrained: ((this: MediaStreamTrack, ev: MediaStreamErrorEvent) => any) | null;
    onunmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    readonly readonly: boolean;
    readonly readyState: MediaStreamTrackState;
    readonly remote: boolean;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): void;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type MediaStreamTrackGlobal =  {
    prototype: MediaStreamTrack;
    new(): MediaStreamTrack;
};
export interface MediaStreamTrackAudioSourceNode extends AudioNode {
}
export type MediaStreamTrackAudioSourceNodeGlobal =  {
    prototype: MediaStreamTrackAudioSourceNode;
    new(context: AudioContext, options: MediaStreamTrackAudioSourceOptions): MediaStreamTrackAudioSourceNode;
};
export interface MediaStreamTrackEvent extends Event {
    readonly track: MediaStreamTrack;
}
export type MediaStreamTrackEventGlobal =  {
    prototype: MediaStreamTrackEvent;
    new(typeArg: string, eventInitDict?: MediaStreamTrackEventInit): MediaStreamTrackEvent;
};
export interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}
export type MessageChannelGlobal =  {
    prototype: MessageChannel;
    new(): MessageChannel;
};
export interface MessageEvent extends Event {
    /**
     * Returns the data of the message.
     */
    readonly data: any;
    /**
     * Returns the last event ID string, for
     * server-sent events.
     */
    readonly lastEventId: string;
    /**
     * Returns the origin of the message, for server-sent events and
     * cross-document messaging.
     */
    readonly origin: string;
    /**
     * Returns the MessagePort array sent with the message, for cross-document
     * messaging and channel messaging.
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * Returns the WindowProxy of the source window, for cross-document
     * messaging, and the MessagePort being attached, in the connect event fired at
     * SharedWorkerGlobalScope objects.
     */
    readonly source: MessageEventSource | null;
}
export type MessageEventGlobal =  {
    prototype: MessageEvent;
    new(type: string, eventInitDict?: MessageEventInit): MessageEvent;
};
export interface MessagePortEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
export interface MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
    /**
     * Disconnects the port, so that it is no longer active.
     */
    close(): void;
    /**
     * Posts a message through the channel. Objects listed in transfer are
     * transferred, not just cloned, meaning that they are no longer usable on the sending side.
     * Throws a "DataCloneError" DOMException if
     * transfer contains duplicate objects or port, or if message
     * could not be cloned.
     */
    postMessage(message: any, transfer?: Transferable[]): void;
    /**
     * Begins dispatching messages received on the port.
     */
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type MessagePortGlobal =  {
    prototype: MessagePort;
    new(): MessagePort;
};
export interface MimeType {
    readonly description: string;
    readonly enabledPlugin: Plugin;
    readonly suffixes: string;
    readonly type: string;
}
export type MimeTypeGlobal =  {
    prototype: MimeType;
    new(): MimeType;
};
export interface MimeTypeArray {
    readonly length: number;
    item(index: number): Plugin;
    namedItem(type: string): Plugin;
    [index: number]: Plugin;
}
export type MimeTypeArrayGlobal =  {
    prototype: MimeTypeArray;
    new(): MimeTypeArray;
};
export interface MouseEvent extends UIEvent {
    readonly altKey: boolean;
    readonly button: number;
    readonly buttons: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly ctrlKey: boolean;
    /** @deprecated */
    readonly fromElement: Element;
    readonly layerX: number;
    readonly layerY: number;
    readonly metaKey: boolean;
    readonly movementX: number;
    readonly movementY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly relatedTarget: EventTarget;
    readonly screenX: number;
    readonly screenY: number;
    readonly shiftKey: boolean;
    /** @deprecated */
    readonly toElement: Element;
    /** @deprecated */
    readonly which: number;
    readonly x: number;
    readonly y: number;
    getModifierState(keyArg: string): boolean;
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
}
export type MouseEventGlobal =  {
    prototype: MouseEvent;
    new(typeArg: string, eventInitDict?: MouseEventInit): MouseEvent;
};
export interface MutationEvent extends Event {
    readonly attrChange: number;
    readonly attrName: string;
    readonly newValue: string;
    readonly prevValue: string;
    readonly relatedNode: Node;
    initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
    readonly ADDITION: number;
    readonly MODIFICATION: number;
    readonly REMOVAL: number;
}
export type MutationEventGlobal =  {
    prototype: MutationEvent;
    new(): MutationEvent;
    readonly ADDITION: number;
    readonly MODIFICATION: number;
    readonly REMOVAL: number;
};
export interface MutationObserver {
    disconnect(): void;
    /**
     * Instructs the user agent to observe a given target (a node) and report any mutations based on
     * the criteria given by options (an object).
     * The options argument allows for setting mutation
     * observation options via object members. These are the object members that
     * can be used:
     * childList
     * Set to true if mutations to target's children are to be observed.
     * attributes
     * Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is
     * specified.
     * characterData
     * Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified.
     * subtree
     * Set to true if mutations to not just target, but
     * also target's descendants are to be
     * observed.
     * attributeOldValue
     * Set to true if attributes is true or omitted
     * and target's attribute value before the mutation
     * needs to be recorded.
     * characterDataOldValue
     * Set to true if characterData is set to true or omitted and target's data before the mutation
     * needs to be recorded.
     * attributeFilter
     * Set to a list of attribute local names (without namespace) if not all attribute mutations need to be
     * observed and attributes is true
     * or omitted.
     */
    observe(target: Node, options?: MutationObserverInit): void;
    /**
     * Empties the record queue and
     * returns what was in there.
     */
    takeRecords(): MutationRecord[];
}
export type MutationObserverGlobal =  {
    prototype: MutationObserver;
    new(callback: MutationCallback): MutationObserver;
};
export interface MutationRecord {
    readonly addedNodes: NodeList;
    /**
     * Returns the local name of the
     * changed attribute, and null otherwise.
     */
    readonly attributeName: string | null;
    /**
     * Returns the namespace of the
     * changed attribute, and null otherwise.
     */
    readonly attributeNamespace: string | null;
    /**
     * Return the previous and next sibling respectively
     * of the added or removed nodes, and null otherwise.
     */
    readonly nextSibling: Node | null;
    /**
     * The return value depends on type. For
     * "attributes", it is the value of the
     * changed attribute before the change.
     * For "characterData", it is the data of the changed node before the change. For
     * "childList", it is null.
     */
    readonly oldValue: string | null;
    readonly previousSibling: Node | null;
    /**
     * Return the nodes added and removed
     * respectively.
     */
    readonly removedNodes: NodeList;
    readonly target: Node;
    /**
     * Returns "attributes" if it was an attribute mutation.
     * "characterData" if it was a mutation to a CharacterData node. And
     * "childList" if it was a mutation to the tree of nodes.
     */
    readonly type: MutationRecordType;
}
export type MutationRecordGlobal =  {
    prototype: MutationRecord;
    new(): MutationRecord;
};
export interface NamedNodeMap {
    readonly length: number;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    item(index: number): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    [index: number]: Attr;
}
export type NamedNodeMapGlobal =  {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
};
export interface NavigationPreloadManager {
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}
export type NavigationPreloadManagerGlobal =  {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};
export interface Navigator extends NavigatorID, NavigatorOnLine, NavigatorContentUtils, NavigatorStorageUtils, MSNavigatorDoNotTrack, MSFileSaver, NavigatorBeacon, NavigatorConcurrentHardware, NavigatorUserMedia, NavigatorLanguage, NavigatorStorage, NavigatorAutomationInformation {
    readonly activeVRDisplays: ReadonlyArray<VRDisplay>;
    readonly authentication: WebAuthentication;
    readonly cookieEnabled: boolean;
    readonly doNotTrack: string | null;
    gamepadInputEmulation: GamepadInputEmulationType;
    readonly geolocation: Geolocation;
    readonly maxTouchPoints: number;
    readonly mimeTypes: MimeTypeArray;
    readonly msManipulationViewsEnabled: boolean;
    readonly msMaxTouchPoints: number;
    readonly msPointerEnabled: boolean;
    readonly plugins: PluginArray;
    readonly pointerEnabled: boolean;
    readonly serviceWorker: ServiceWorkerContainer;
    readonly webdriver: boolean;
    getGamepads(): (Gamepad | null)[];
    getVRDisplays(): Promise<VRDisplay[]>;
    javaEnabled(): boolean;
    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    vibrate(pattern: number | number[]): boolean;
}
export type NavigatorGlobal =  {
    prototype: Navigator;
    new(): Navigator;
};
export interface NavigatorAutomationInformation {
    readonly webdriver: boolean;
}
export interface NavigatorBeacon {
    sendBeacon(url: string, data?: Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | FormData | string | null): boolean;
}
export interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}
export interface NavigatorContentUtils {
}
export interface NavigatorID {
    readonly appCodeName: string;
    readonly appName: string;
    readonly appVersion: string;
    readonly platform: string;
    readonly product: string;
    readonly productSub: string;
    readonly userAgent: string;
    readonly vendor: string;
    readonly vendorSub: string;
}
export interface NavigatorLanguage {
    readonly language: string;
    readonly languages: ReadonlyArray<string>;
}
export interface NavigatorOnLine {
    readonly onLine: boolean;
}
export interface NavigatorStorage {
    readonly storage: StorageManager;
}
export interface NavigatorStorageUtils {
}
export interface NavigatorUserMedia {
    readonly mediaDevices: MediaDevices;
    getDisplayMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): void;
}
export interface Node extends EventTarget {
    /**
     * Returns node's node document's document base URL.
     */
    readonly baseURI: string;
    /**
     * Returns the children.
     */
    readonly childNodes: NodeListOf<ChildNode>;
    /**
     * Returns the first child.
     */
    readonly firstChild: ChildNode | null;
    /**
     * Returns true if node is connected and false otherwise.
     */
    readonly isConnected: boolean;
    /**
     * Returns the last child.
     */
    readonly lastChild: ChildNode | null;
    /** @deprecated */
    readonly namespaceURI: string | null;
    /**
     * Returns the next sibling.
     */
    readonly nextSibling: Node | null;
    /**
     * Returns a string appropriate for the type of node, as
     * follows:
     * Element
     * Its HTML-uppercased qualified name.
     * Attr
     * Its qualified name.
     * Text
     * "#text".
     * CDATASection
     * "#cdata-section".
     * ProcessingInstruction
     * Its target.
     * Comment
     * "#comment".
     * Document
     * "#document".
     * DocumentType
     * Its name.
     * DocumentFragment
     * "#document-fragment".
     */
    readonly nodeName: string;
    readonly nodeType: number;
    nodeValue: string | null;
    /**
     * Returns the node document.
     * Returns null for documents.
     */
    readonly ownerDocument: Document | null;
    /**
     * Returns the parent element.
     */
    readonly parentElement: HTMLElement | null;
    /**
     * Returns the parent.
     */
    readonly parentNode: Node & ParentNode | null;
    /**
     * Returns the previous sibling.
     */
    readonly previousSibling: Node | null;
    textContent: string | null;
    appendChild<T extends Node>(newChild: T): T;
    /**
     * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     */
    cloneNode(deep?: boolean): Node;
    compareDocumentPosition(other: Node): number;
    /**
     * Returns true if other is an inclusive descendant of node, and false otherwise.
     */
    contains(other: Node | null): boolean;
    /**
     * Returns node's shadow-including root.
     */
    getRootNode(options?: GetRootNodeOptions): Node;
    /**
     * Returns whether node has children.
     */
    hasChildNodes(): boolean;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    isDefaultNamespace(namespace: string | null): boolean;
    /**
     * Returns whether node and otherNode have the same properties.
     */
    isEqualNode(otherNode: Node | null): boolean;
    isSameNode(otherNode: Node | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    /**
     * Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.
     */
    normalize(): void;
    removeChild<T extends Node>(oldChild: T): T;
    replaceChild<T extends Node>(newChild: Node, oldChild: T): T;
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
}
export type NodeGlobal =  {
    prototype: Node;
    new(): Node;
    readonly ATTRIBUTE_NODE: number;
    readonly CDATA_SECTION_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_POSITION_CONTAINED_BY: number;
    readonly DOCUMENT_POSITION_CONTAINS: number;
    readonly DOCUMENT_POSITION_DISCONNECTED: number;
    readonly DOCUMENT_POSITION_FOLLOWING: number;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    readonly DOCUMENT_POSITION_PRECEDING: number;
    readonly DOCUMENT_TYPE_NODE: number;
    readonly ELEMENT_NODE: number;
    readonly ENTITY_NODE: number;
    readonly ENTITY_REFERENCE_NODE: number;
    readonly NOTATION_NODE: number;
    readonly PROCESSING_INSTRUCTION_NODE: number;
    readonly TEXT_NODE: number;
};
export interface NodeFilter {
    acceptNode(node: Node): number;
}
export type NodeFilterGlobal =  {
    readonly FILTER_ACCEPT: number;
    readonly FILTER_REJECT: number;
    readonly FILTER_SKIP: number;
    readonly SHOW_ALL: number;
    readonly SHOW_ATTRIBUTE: number;
    readonly SHOW_CDATA_SECTION: number;
    readonly SHOW_COMMENT: number;
    readonly SHOW_DOCUMENT: number;
    readonly SHOW_DOCUMENT_FRAGMENT: number;
    readonly SHOW_DOCUMENT_TYPE: number;
    readonly SHOW_ELEMENT: number;
    readonly SHOW_ENTITY: number;
    readonly SHOW_ENTITY_REFERENCE: number;
    readonly SHOW_NOTATION: number;
    readonly SHOW_PROCESSING_INSTRUCTION: number;
    readonly SHOW_TEXT: number;
};
export interface NodeIterator {
    readonly filter: NodeFilter | null;
    readonly pointerBeforeReferenceNode: boolean;
    readonly referenceNode: Node;
    readonly root: Node;
    readonly whatToShow: number;
    detach(): void;
    nextNode(): Node | null;
    previousNode(): Node | null;
}
export type NodeIteratorGlobal =  {
    prototype: NodeIterator;
    new(): NodeIterator;
};
export interface NodeList {
    /**
     * Returns the number of nodes in the collection.
     */
    readonly length: number;
    /**
     * element = collection[index]
     */
    item(index: number): Node | null;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
    [index: number]: Node;
}
export type NodeListGlobal =  {
    prototype: NodeList;
    new(): NodeList;
};
export interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
    [index: number]: TNode;
}
export interface NodeSelector {
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}
export interface NonDocumentTypeChildNode {
    /**
     * Returns the first following sibling that
     * is an element, and null otherwise.
     */
    readonly nextElementSibling: Element | null;
    /**
     * Returns the first preceding sibling that
     * is an element, and null otherwise.
     */
    readonly previousElementSibling: Element | null;
}
export interface NonElementParentNode {
    /**
     * Returns the first element within node's descendants whose ID is elementId.
     */
    getElementById(elementId: string): Element | null;
}
export interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}
export interface Notification extends EventTarget {
    readonly actions: ReadonlyArray<NotificationAction>;
    readonly badge: string;
    readonly body: string;
    readonly data: any;
    readonly dir: NotificationDirection;
    readonly icon: string;
    readonly image: string;
    readonly lang: string;
    onclick: ((this: Notification, ev: Event) => any) | null;
    onclose: ((this: Notification, ev: Event) => any) | null;
    onerror: ((this: Notification, ev: Event) => any) | null;
    onshow: ((this: Notification, ev: Event) => any) | null;
    readonly renotify: boolean;
    readonly requireInteraction: boolean;
    readonly silent: boolean;
    readonly tag: string;
    readonly timestamp: number;
    readonly title: string;
    readonly vibrate: ReadonlyArray<number>;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type NotificationGlobal =  {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    readonly maxActions: number;
    readonly permission: NotificationPermission;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};
export interface OES_element_index_uint {
}
export interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}
export interface OES_texture_float {
}
export interface OES_texture_float_linear {
}
export interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: GLenum;
}
export interface OES_texture_half_float_linear {
}
export interface OES_vertex_array_object {
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    readonly VERTEX_ARRAY_BINDING_OES: GLenum;
}
export interface OfflineAudioCompletionEvent extends Event {
    readonly renderedBuffer: AudioBuffer;
}
export type OfflineAudioCompletionEventGlobal =  {
    prototype: OfflineAudioCompletionEvent;
    new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
};
export interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
    "complete": OfflineAudioCompletionEvent;
}
export interface OfflineAudioContext extends BaseAudioContext {
    readonly length: number;
    oncomplete: ((this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => any) | null;
    startRendering(): Promise<AudioBuffer>;
    suspend(suspendTime: number): Promise<void>;
    addEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type OfflineAudioContextGlobal =  {
    prototype: OfflineAudioContext;
    new(contextOptions: OfflineAudioContextOptions): OfflineAudioContext;
    new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
};
export interface OscillatorNode extends AudioScheduledSourceNode {
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    type: OscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type OscillatorNodeGlobal =  {
    prototype: OscillatorNode;
    new(context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
};
export interface OverflowEvent extends UIEvent {
    readonly horizontalOverflow: boolean;
    readonly orient: number;
    readonly verticalOverflow: boolean;
    readonly BOTH: number;
    readonly HORIZONTAL: number;
    readonly VERTICAL: number;
}
export type OverflowEventGlobal =  {
    prototype: OverflowEvent;
    new(): OverflowEvent;
    readonly BOTH: number;
    readonly HORIZONTAL: number;
    readonly VERTICAL: number;
};
export interface PageTransitionEvent extends Event {
    readonly persisted: boolean;
}
export type PageTransitionEventGlobal =  {
    prototype: PageTransitionEvent;
    new(): PageTransitionEvent;
};
export interface PannerNode extends AudioNode {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: DistanceModelType;
    maxDistance: number;
    readonly orientationX: AudioParam;
    readonly orientationY: AudioParam;
    readonly orientationZ: AudioParam;
    panningModel: PanningModelType;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    refDistance: number;
    rolloffFactor: number;
    /** @deprecated */
    setOrientation(x: number, y: number, z: number): void;
    /** @deprecated */
    setPosition(x: number, y: number, z: number): void;
}
export type PannerNodeGlobal =  {
    prototype: PannerNode;
    new(context: BaseAudioContext, options?: PannerOptions): PannerNode;
};
export interface ParentNode {
    readonly childElementCount: number;
    /**
     * Returns the child elements.
     */
    readonly children: HTMLCollection;
    /**
     * Returns the first child that is an element, and null otherwise.
     */
    readonly firstElementChild: Element | null;
    /**
     * Returns the last child that is an element, and null otherwise.
     */
    readonly lastElementChild: Element | null;
    /**
     * Inserts nodes after the last child of node, while replacing
     * strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    append(...nodes: (Node | string)[]): void;
    /**
     * Inserts nodes before the first child of node, while
     * replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    prepend(...nodes: (Node | string)[]): void;
    /**
     * Returns the first element that is a descendant of node that
     * matches selectors.
     */
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    /**
     * Returns all element descendants of node that
     * match selectors.
     */
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}
export interface Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}
export type Path2DGlobal =  {
    prototype: Path2D;
    new(path?: Path2D | string): Path2D;
};
export interface PaymentAddress {
    readonly addressLine: string[];
    readonly city: string;
    readonly country: string;
    readonly dependentLocality: string;
    readonly languageCode: string;
    readonly organization: string;
    readonly phone: string;
    readonly postalCode: string;
    readonly recipient: string;
    readonly region: string;
    readonly sortingCode: string;
    toJSON(): any;
}
export type PaymentAddressGlobal =  {
    prototype: PaymentAddress;
    new(): PaymentAddress;
};
export interface PaymentRequestEventMap {
    "shippingaddresschange": Event;
    "shippingoptionchange": Event;
}
export interface PaymentRequest extends EventTarget {
    readonly id: string;
    onshippingaddresschange: ((this: PaymentRequest, ev: Event) => any) | null;
    onshippingoptionchange: ((this: PaymentRequest, ev: Event) => any) | null;
    readonly shippingAddress: PaymentAddress | null;
    readonly shippingOption: string | null;
    readonly shippingType: PaymentShippingType | null;
    abort(): Promise<void>;
    canMakePayment(): Promise<boolean>;
    show(): Promise<PaymentResponse>;
    addEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type PaymentRequestGlobal =  {
    prototype: PaymentRequest;
    new(methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest;
};
export interface PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: Promise<PaymentDetailsUpdate>): void;
}
export type PaymentRequestUpdateEventGlobal =  {
    prototype: PaymentRequestUpdateEvent;
    new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
};
export interface PaymentResponse {
    readonly details: any;
    readonly methodName: string;
    readonly payerEmail: string | null;
    readonly payerName: string | null;
    readonly payerPhone: string | null;
    readonly requestId: string;
    readonly shippingAddress: PaymentAddress | null;
    readonly shippingOption: string | null;
    complete(result?: PaymentComplete): Promise<void>;
    toJSON(): any;
}
export type PaymentResponseGlobal =  {
    prototype: PaymentResponse;
    new(): PaymentResponse;
};
export interface PerfWidgetExternal {
    readonly activeNetworkRequestCount: number;
    readonly averageFrameTime: number;
    readonly averagePaintTime: number;
    readonly extraInformationEnabled: boolean;
    readonly independentRenderingEnabled: boolean;
    readonly irDisablingContentString: string;
    readonly irStatusAvailable: boolean;
    readonly maxCpuSpeed: number;
    readonly paintRequestsPerSecond: number;
    readonly performanceCounter: number;
    readonly performanceCounterFrequency: number;
    addEventListener(eventType: string, callback: Function): void;
    getMemoryUsage(): number;
    getProcessCpuUsage(): number;
    getRecentCpuUsage(last: number | null): any;
    getRecentFrames(last: number | null): any;
    getRecentMemoryUsage(last: number | null): any;
    getRecentPaintRequests(last: number | null): any;
    removeEventListener(eventType: string, callback: Function): void;
    repositionWindow(x: number, y: number): void;
    resizeWindow(width: number, height: number): void;
}
export type PerfWidgetExternalGlobal =  {
    prototype: PerfWidgetExternal;
    new(): PerfWidgetExternal;
};
export interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}
export interface Performance extends EventTarget {
    /** @deprecated */
    readonly navigation: PerformanceNavigation;
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    readonly timeOrigin: number;
    /** @deprecated */
    readonly timing: PerformanceTiming;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string): void;
    measure(measureName: string, startMark?: string, endMark?: string): void;
    now(): number;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): any;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type PerformanceGlobal =  {
    prototype: Performance;
    new(): Performance;
};
export interface PerformanceEntry {
    readonly duration: number;
    readonly entryType: string;
    readonly name: string;
    readonly startTime: number;
    toJSON(): any;
}
export type PerformanceEntryGlobal =  {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};
export interface PerformanceMark extends PerformanceEntry {
}
export type PerformanceMarkGlobal =  {
    prototype: PerformanceMark;
    new(): PerformanceMark;
};
export interface PerformanceMeasure extends PerformanceEntry {
}
export type PerformanceMeasureGlobal =  {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};
export interface PerformanceNavigation {
    readonly redirectCount: number;
    readonly type: number;
    toJSON(): any;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
}
export type PerformanceNavigationGlobal =  {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    readonly TYPE_BACK_FORWARD: number;
    readonly TYPE_NAVIGATE: number;
    readonly TYPE_RELOAD: number;
    readonly TYPE_RESERVED: number;
};
export interface PerformanceNavigationTiming extends PerformanceResourceTiming {
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly redirectCount: number;
    readonly type: NavigationType;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
    toJSON(): any;
}
export type PerformanceNavigationTimingGlobal =  {
    prototype: PerformanceNavigationTiming;
    new(): PerformanceNavigationTiming;
};
export interface PerformanceObserver {
    disconnect(): void;
    observe(options: PerformanceObserverInit): void;
    takeRecords(): PerformanceEntryList;
}
export type PerformanceObserverGlobal =  {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
};
export interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}
export type PerformanceObserverEntryListGlobal =  {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};
export interface PerformanceResourceTiming extends PerformanceEntry {
    readonly connectEnd: number;
    readonly connectStart: number;
    readonly decodedBodySize: number;
    readonly domainLookupEnd: number;
    readonly domainLookupStart: number;
    readonly encodedBodySize: number;
    readonly fetchStart: number;
    readonly initiatorType: string;
    readonly nextHopProtocol: string;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly secureConnectionStart: number;
    readonly transferSize: number;
    readonly workerStart: number;
    toJSON(): any;
}
export type PerformanceResourceTimingGlobal =  {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};
export interface PerformanceTiming {
    readonly connectEnd: number;
    readonly connectStart: number;
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly domLoading: number;
    readonly domainLookupEnd: number;
    readonly domainLookupStart: number;
    readonly fetchStart: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly navigationStart: number;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly secureConnectionStart: number;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
    toJSON(): any;
}
export type PerformanceTimingGlobal =  {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
};
export interface PeriodicWave {
}
export type PeriodicWaveGlobal =  {
    prototype: PeriodicWave;
    new(context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
};
export interface PermissionRequest extends DeferredPermissionRequest {
    readonly state: MSWebViewPermissionState;
    defer(): void;
}
export type PermissionRequestGlobal =  {
    prototype: PermissionRequest;
    new(): PermissionRequest;
};
export interface PermissionRequestedEvent extends Event {
    readonly permissionRequest: PermissionRequest;
}
export type PermissionRequestedEventGlobal =  {
    prototype: PermissionRequestedEvent;
    new(): PermissionRequestedEvent;
};
export interface Plugin {
    readonly description: string;
    readonly filename: string;
    readonly length: number;
    readonly name: string;
    readonly version: string;
    item(index: number): MimeType;
    namedItem(type: string): MimeType;
    [index: number]: MimeType;
}
export type PluginGlobal =  {
    prototype: Plugin;
    new(): Plugin;
};
export interface PluginArray {
    readonly length: number;
    item(index: number): Plugin;
    namedItem(name: string): Plugin;
    refresh(reload?: boolean): void;
    [index: number]: Plugin;
}
export type PluginArrayGlobal =  {
    prototype: PluginArray;
    new(): PluginArray;
};
export interface PointerEvent extends MouseEvent {
    readonly height: number;
    readonly isPrimary: boolean;
    readonly pointerId: number;
    readonly pointerType: string;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly width: number;
}
export type PointerEventGlobal =  {
    prototype: PointerEvent;
    new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
};
export interface PopStateEvent extends Event {
    readonly state: any;
}
export type PopStateEventGlobal =  {
    prototype: PopStateEvent;
    new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
};
export interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}
export interface PositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}
export interface ProcessingInstruction extends CharacterData {
    readonly target: string;
}
export type ProcessingInstructionGlobal =  {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
};
export interface ProgressEvent extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly total: number;
}
export type ProgressEventGlobal =  {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};
export interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>;
    readonly reason: any;
}
export type PromiseRejectionEventGlobal =  {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};
export interface PushManager {
    getSubscription(): Promise<PushSubscription | null>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}
export type PushManagerGlobal =  {
    prototype: PushManager;
    new(): PushManager;
    readonly supportedContentEncodings: ReadonlyArray<string>;
};
export interface PushSubscription {
    readonly endpoint: string;
    readonly expirationTime: number | null;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    toJSON(): PushSubscriptionJSON;
    unsubscribe(): Promise<boolean>;
}
export type PushSubscriptionGlobal =  {
    prototype: PushSubscription;
    new(): PushSubscription;
};
export interface PushSubscriptionOptions {
    readonly applicationServerKey: ArrayBuffer | null;
    readonly userVisibleOnly: boolean;
}
export type PushSubscriptionOptionsGlobal =  {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};
export interface RTCCertificate {
    readonly expires: number;
    getFingerprints(): RTCDtlsFingerprint[];
}
export type RTCCertificateGlobal =  {
    prototype: RTCCertificate;
    new(): RTCCertificate;
    getSupportedAlgorithms(): AlgorithmIdentifier[];
};
export interface RTCDTMFSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}
export interface RTCDTMFSender extends EventTarget {
    readonly canInsertDTMF: boolean;
    ontonechange: ((this: RTCDTMFSender, ev: RTCDTMFToneChangeEvent) => any) | null;
    readonly toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCDTMFSenderGlobal =  {
    prototype: RTCDTMFSender;
    new(): RTCDTMFSender;
};
export interface RTCDTMFToneChangeEvent extends Event {
    readonly tone: string;
}
export type RTCDTMFToneChangeEventGlobal =  {
    prototype: RTCDTMFToneChangeEvent;
    new(type: string, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
};
export interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "error": RTCErrorEvent;
    "message": MessageEvent;
    "open": Event;
}
export interface RTCDataChannel extends EventTarget {
    binaryType: string;
    readonly bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    readonly id: number | null;
    readonly label: string;
    readonly maxPacketLifeTime: number | null;
    readonly maxRetransmits: number | null;
    readonly negotiated: boolean;
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    onerror: ((this: RTCDataChannel, ev: RTCErrorEvent) => any) | null;
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    readonly ordered: boolean;
    readonly priority: RTCPriorityType;
    readonly protocol: string;
    readonly readyState: RTCDataChannelState;
    close(): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCDataChannelGlobal =  {
    prototype: RTCDataChannel;
    new(): RTCDataChannel;
};
export interface RTCDataChannelEvent extends Event {
    readonly channel: RTCDataChannel;
}
export type RTCDataChannelEventGlobal =  {
    prototype: RTCDataChannelEvent;
    new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};
export interface RTCDtlsTransportEventMap {
    "error": RTCErrorEvent;
    "statechange": Event;
}
export interface RTCDtlsTransport extends EventTarget {
    onerror: ((this: RTCDtlsTransport, ev: RTCErrorEvent) => any) | null;
    onstatechange: ((this: RTCDtlsTransport, ev: Event) => any) | null;
    readonly state: RTCDtlsTransportState;
    readonly transport: RTCIceTransport;
    getRemoteCertificates(): ArrayBuffer[];
    addEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCDtlsTransportGlobal =  {
    prototype: RTCDtlsTransport;
    new(): RTCDtlsTransport;
};
export interface RTCDtlsTransportStateChangedEvent extends Event {
    readonly state: RTCDtlsTransportState;
}
export type RTCDtlsTransportStateChangedEventGlobal =  {
    prototype: RTCDtlsTransportStateChangedEvent;
    new(): RTCDtlsTransportStateChangedEvent;
};
export interface RTCDtmfSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}
export interface RTCDtmfSender extends EventTarget {
    readonly canInsertDTMF: boolean;
    readonly duration: number;
    readonly interToneGap: number;
    ontonechange: ((this: RTCDtmfSender, ev: RTCDTMFToneChangeEvent) => any) | null;
    readonly sender: RTCRtpSender;
    readonly toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDtmfSenderEventMap>(type: K, listener: (this: RTCDtmfSender, ev: RTCDtmfSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDtmfSenderEventMap>(type: K, listener: (this: RTCDtmfSender, ev: RTCDtmfSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCDtmfSenderGlobal =  {
    prototype: RTCDtmfSender;
    new(sender: RTCRtpSender): RTCDtmfSender;
};
export interface RTCError extends Error {
    errorDetail: string;
    httpRequestStatusCode: number;
    message: string;
    name: string;
    receivedAlert: number | null;
    sctpCauseCode: number;
    sdpLineNumber: number;
    sentAlert: number | null;
}
export type RTCErrorGlobal =  {
    prototype: RTCError;
    new(errorDetail?: string, message?: string): RTCError;
};
export interface RTCErrorEvent extends Event {
    readonly error: RTCError | null;
}
export type RTCErrorEventGlobal =  {
    prototype: RTCErrorEvent;
    new(type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent;
};
export interface RTCIceCandidate {
    readonly candidate: string;
    readonly component: RTCIceComponent | null;
    readonly foundation: string | null;
    readonly ip: string | null;
    readonly port: number | null;
    readonly priority: number | null;
    readonly protocol: RTCIceProtocol | null;
    readonly relatedAddress: string | null;
    readonly relatedPort: number | null;
    readonly sdpMLineIndex: number | null;
    readonly sdpMid: string | null;
    readonly tcpType: RTCIceTcpCandidateType | null;
    readonly type: RTCIceCandidateType | null;
    readonly usernameFragment: string | null;
    toJSON(): RTCIceCandidateInit;
}
export type RTCIceCandidateGlobal =  {
    prototype: RTCIceCandidate;
    new(candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;
};
export interface RTCIceCandidatePairChangedEvent extends Event {
    readonly pair: RTCIceCandidatePair;
}
export type RTCIceCandidatePairChangedEventGlobal =  {
    prototype: RTCIceCandidatePairChangedEvent;
    new(): RTCIceCandidatePairChangedEvent;
};
export interface RTCIceGathererEventMap {
    "error": Event;
    "localcandidate": RTCIceGathererEvent;
}
export interface RTCIceGatherer extends RTCStatsProvider {
    readonly component: RTCIceComponent;
    onerror: ((this: RTCIceGatherer, ev: Event) => any) | null;
    onlocalcandidate: ((this: RTCIceGatherer, ev: RTCIceGathererEvent) => any) | null;
    createAssociatedGatherer(): RTCIceGatherer;
    getLocalCandidates(): RTCIceCandidateDictionary[];
    getLocalParameters(): RTCIceParameters;
    addEventListener<K extends keyof RTCIceGathererEventMap>(type: K, listener: (this: RTCIceGatherer, ev: RTCIceGathererEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCIceGathererEventMap>(type: K, listener: (this: RTCIceGatherer, ev: RTCIceGathererEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCIceGathererGlobal =  {
    prototype: RTCIceGatherer;
    new(options: RTCIceGatherOptions): RTCIceGatherer;
};
export interface RTCIceGathererEvent extends Event {
    readonly candidate: RTCIceCandidateDictionary | RTCIceCandidateComplete;
}
export type RTCIceGathererEventGlobal =  {
    prototype: RTCIceGathererEvent;
    new(): RTCIceGathererEvent;
};
export interface RTCIceTransportEventMap {
    "gatheringstatechange": Event;
    "selectedcandidatepairchange": Event;
    "statechange": Event;
}
export interface RTCIceTransport extends EventTarget {
    readonly component: RTCIceComponent;
    readonly gatheringState: RTCIceGathererState;
    ongatheringstatechange: ((this: RTCIceTransport, ev: Event) => any) | null;
    onselectedcandidatepairchange: ((this: RTCIceTransport, ev: Event) => any) | null;
    onstatechange: ((this: RTCIceTransport, ev: Event) => any) | null;
    readonly role: RTCIceRole;
    readonly state: RTCIceTransportState;
    getLocalCandidates(): RTCIceCandidate[];
    getLocalParameters(): RTCIceParameters | null;
    getRemoteCandidates(): RTCIceCandidate[];
    getRemoteParameters(): RTCIceParameters | null;
    getSelectedCandidatePair(): RTCIceCandidatePair | null;
    addEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCIceTransportGlobal =  {
    prototype: RTCIceTransport;
    new(): RTCIceTransport;
};
export interface RTCIceTransportStateChangedEvent extends Event {
    readonly state: RTCIceTransportState;
}
export type RTCIceTransportStateChangedEventGlobal =  {
    prototype: RTCIceTransportStateChangedEvent;
    new(): RTCIceTransportStateChangedEvent;
};
export interface RTCIdentityAssertion {
    idp: string;
    name: string;
}
export type RTCIdentityAssertionGlobal =  {
    prototype: RTCIdentityAssertion;
    new(idp: string, name: string): RTCIdentityAssertion;
};
export interface RTCPeerConnectionEventMap {
    "connectionstatechange": Event;
    "datachannel": RTCDataChannelEvent;
    "icecandidate": RTCPeerConnectionIceEvent;
    "icecandidateerror": RTCPeerConnectionIceErrorEvent;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "negotiationneeded": Event;
    "signalingstatechange": Event;
    "statsended": RTCStatsEvent;
    "track": RTCTrackEvent;
}
export interface RTCPeerConnection extends EventTarget {
    readonly canTrickleIceCandidates: boolean | null;
    readonly connectionState: RTCPeerConnectionState;
    readonly currentLocalDescription: RTCSessionDescription | null;
    readonly currentRemoteDescription: RTCSessionDescription | null;
    readonly iceConnectionState: RTCIceConnectionState;
    readonly iceGatheringState: RTCIceGatheringState;
    readonly idpErrorInfo: string | null;
    readonly idpLoginUrl: string | null;
    readonly localDescription: RTCSessionDescription | null;
    onconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    ondatachannel: ((this: RTCPeerConnection, ev: RTCDataChannelEvent) => any) | null;
    onicecandidate: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any) | null;
    onicecandidateerror: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceErrorEvent) => any) | null;
    oniceconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onicegatheringstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onnegotiationneeded: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onsignalingstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onstatsended: ((this: RTCPeerConnection, ev: RTCStatsEvent) => any) | null;
    ontrack: ((this: RTCPeerConnection, ev: RTCTrackEvent) => any) | null;
    readonly peerIdentity: Promise<RTCIdentityAssertion>;
    readonly pendingLocalDescription: RTCSessionDescription | null;
    readonly pendingRemoteDescription: RTCSessionDescription | null;
    readonly remoteDescription: RTCSessionDescription | null;
    readonly sctp: RTCSctpTransport | null;
    readonly signalingState: RTCSignalingState;
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate): Promise<void>;
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    addTransceiver(trackOrKind: MediaStreamTrack | string, init?: RTCRtpTransceiverInit): RTCRtpTransceiver;
    close(): void;
    createAnswer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    getConfiguration(): RTCConfiguration;
    getIdentityAssertion(): Promise<string>;
    getReceivers(): RTCRtpReceiver[];
    getSenders(): RTCRtpSender[];
    getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    getTransceivers(): RTCRtpTransceiver[];
    removeTrack(sender: RTCRtpSender): void;
    setConfiguration(configuration: RTCConfiguration): void;
    setIdentityProvider(provider: string, options?: RTCIdentityProviderOptions): void;
    setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCPeerConnectionGlobal =  {
    prototype: RTCPeerConnection;
    new(configuration?: RTCConfiguration): RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
    getDefaultIceServers(): RTCIceServer[];
};
export interface RTCPeerConnectionIceErrorEvent extends Event {
    readonly errorCode: number;
    readonly errorText: string;
    readonly hostCandidate: string;
    readonly url: string;
}
export type RTCPeerConnectionIceErrorEventGlobal =  {
    prototype: RTCPeerConnectionIceErrorEvent;
    new(type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
};
export interface RTCPeerConnectionIceEvent extends Event {
    readonly candidate: RTCIceCandidate | null;
    readonly url: string | null;
}
export type RTCPeerConnectionIceEventGlobal =  {
    prototype: RTCPeerConnectionIceEvent;
    new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
};
export interface RTCRtpReceiver {
    readonly rtcpTransport: RTCDtlsTransport | null;
    readonly track: MediaStreamTrack;
    readonly transport: RTCDtlsTransport | null;
    getContributingSources(): RTCRtpContributingSource[];
    getParameters(): RTCRtpReceiveParameters;
    getStats(): Promise<RTCStatsReport>;
    getSynchronizationSources(): RTCRtpSynchronizationSource[];
}
export type RTCRtpReceiverGlobal =  {
    prototype: RTCRtpReceiver;
    new(): RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};
export interface RTCRtpSender {
    readonly dtmf: RTCDTMFSender | null;
    readonly rtcpTransport: RTCDtlsTransport | null;
    readonly track: MediaStreamTrack | null;
    readonly transport: RTCDtlsTransport | null;
    getParameters(): RTCRtpSendParameters;
    getStats(): Promise<RTCStatsReport>;
    replaceTrack(withTrack: MediaStreamTrack | null): Promise<void>;
    setParameters(parameters: RTCRtpSendParameters): Promise<void>;
    setStreams(...streams: MediaStream[]): void;
}
export type RTCRtpSenderGlobal =  {
    prototype: RTCRtpSender;
    new(): RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};
export interface RTCRtpTransceiver {
    readonly currentDirection: RTCRtpTransceiverDirection | null;
    direction: RTCRtpTransceiverDirection;
    readonly mid: string | null;
    readonly receiver: RTCRtpReceiver;
    readonly sender: RTCRtpSender;
    readonly stopped: boolean;
    setCodecPreferences(codecs: RTCRtpCodecCapability[]): void;
    stop(): void;
}
export type RTCRtpTransceiverGlobal =  {
    prototype: RTCRtpTransceiver;
    new(): RTCRtpTransceiver;
};
export interface RTCSctpTransportEventMap {
    "statechange": Event;
}
export interface RTCSctpTransport {
    readonly maxChannels: number | null;
    readonly maxMessageSize: number;
    onstatechange: ((this: RTCSctpTransport, ev: Event) => any) | null;
    readonly state: RTCSctpTransportState;
    readonly transport: RTCDtlsTransport;
    addEventListener<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCSctpTransportGlobal =  {
    prototype: RTCSctpTransport;
    new(): RTCSctpTransport;
};
export interface RTCSessionDescription {
    readonly sdp: string;
    readonly type: RTCSdpType;
    toJSON(): any;
}
export type RTCSessionDescriptionGlobal =  {
    prototype: RTCSessionDescription;
    new(descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
};
export interface RTCSrtpSdesTransportEventMap {
    "error": Event;
}
export interface RTCSrtpSdesTransport extends EventTarget {
    onerror: ((this: RTCSrtpSdesTransport, ev: Event) => any) | null;
    readonly transport: RTCIceTransport;
    addEventListener<K extends keyof RTCSrtpSdesTransportEventMap>(type: K, listener: (this: RTCSrtpSdesTransport, ev: RTCSrtpSdesTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCSrtpSdesTransportEventMap>(type: K, listener: (this: RTCSrtpSdesTransport, ev: RTCSrtpSdesTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type RTCSrtpSdesTransportGlobal =  {
    prototype: RTCSrtpSdesTransport;
    new(transport: RTCIceTransport, encryptParameters: RTCSrtpSdesParameters, decryptParameters: RTCSrtpSdesParameters): RTCSrtpSdesTransport;
    getLocalParameters(): RTCSrtpSdesParameters[];
};
export interface RTCSsrcConflictEvent extends Event {
    readonly ssrc: number;
}
export type RTCSsrcConflictEventGlobal =  {
    prototype: RTCSsrcConflictEvent;
    new(): RTCSsrcConflictEvent;
};
export interface RTCStatsEvent extends Event {
    readonly report: RTCStatsReport;
}
export type RTCStatsEventGlobal =  {
    prototype: RTCStatsEvent;
    new(type: string, eventInitDict: RTCStatsEventInit): RTCStatsEvent;
};
export interface RTCStatsProvider extends EventTarget {
    getStats(): Promise<RTCStatsReport>;
    msGetStats(): Promise<RTCStatsReport>;
}
export type RTCStatsProviderGlobal =  {
    prototype: RTCStatsProvider;
    new(): RTCStatsProvider;
};
export interface RTCStatsReport {
    forEach(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}
export type RTCStatsReportGlobal =  {
    prototype: RTCStatsReport;
    new(): RTCStatsReport;
};
export interface RTCTrackEvent extends Event {
    readonly receiver: RTCRtpReceiver;
    readonly streams: ReadonlyArray<MediaStream>;
    readonly track: MediaStreamTrack;
    readonly transceiver: RTCRtpTransceiver;
}
export type RTCTrackEventGlobal =  {
    prototype: RTCTrackEvent;
    new(type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
};
export interface RadioNodeList extends NodeList {
    value: string;
}
export type RadioNodeListGlobal =  {
    prototype: RadioNodeList;
    new(): RadioNodeList;
};
export interface RandomSource {
    getRandomValues<T extends Int8Array | Uint8ClampedArray | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array>(array: T): T;
}
export type RandomSourceGlobal =  {
    prototype: RandomSource;
    new(): RandomSource;
};
export interface Range extends AbstractRange {
    /**
     * Returns the node, furthest away from
     * the document, that is an ancestor of both range's start node and end node.
     */
    readonly commonAncestorContainer: Node;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    /**
     * Returns −1 if the point is before the range, 0 if the point is
     * in the range, and 1 if the point is after the range.
     */
    comparePoint(node: Node, offset: number): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    insertNode(node: Node): void;
    /**
     * Returns whether range intersects node.
     */
    intersectsNode(node: Node): boolean;
    isPointInRange(node: Node, offset: number): boolean;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setStart(node: Node, offset: number): void;
    setStartAfter(node: Node): void;
    setStartBefore(node: Node): void;
    surroundContents(newParent: Node): void;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
}
export type RangeGlobal =  {
    prototype: Range;
    new(): Range;
    readonly END_TO_END: number;
    readonly END_TO_START: number;
    readonly START_TO_END: number;
    readonly START_TO_START: number;
};
export interface ReadableByteStreamController {
    readonly byobRequest: ReadableStreamBYOBRequest | undefined;
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk: ArrayBufferView): void;
    error(error?: any): void;
}
export interface ReadableStream<R = any> {
    readonly locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    pipeThrough<T>({ writable, readable }: { writable: WritableStream<R>, readable: ReadableStream<T> }, options?: PipeOptions): ReadableStream<T>;
    pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
}
export type ReadableStreamGlobal =  {
    prototype: ReadableStream;
    new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStream<Uint8Array>;
    new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};
export interface ReadableStreamBYOBReader {
    readonly closed: Promise<void>;
    cancel(reason?: any): Promise<void>;
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    releaseLock(): void;
}
export type ReadableStreamBYOBReaderGlobal =  {
    prototype: ReadableStreamBYOBReader;
    new(stream: ReadableStream<Uint8Array>): ReadableStreamBYOBReader;
};
export interface ReadableStreamBYOBRequest {
    readonly view: ArrayBufferView;
    respond(bytesWritten: number): void;
    respondWithNewView(view: ArrayBufferView): void;
}
export interface ReadableStreamDefaultController<R = any> {
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk: R): void;
    error(error?: any): void;
}
export interface ReadableStreamDefaultReader<R = any> {
    readonly closed: Promise<void>;
    cancel(reason?: any): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}
export interface ReadableStreamReadResult<T> {
    done: boolean;
    value: T;
}
export interface ReadableStreamReader<R = any> {
    cancel(): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}
export type ReadableStreamReaderGlobal =  {
    prototype: ReadableStreamReader;
    new(): ReadableStreamReader;
};
export interface Request extends Body {
    /**
     * Returns the cache mode associated with request, which is a string indicating
     * how the request will interact with the browser's cache when fetching.
     */
    readonly cache: RequestCache;
    /**
     * Returns the credentials mode associated with request, which is a string
     * indicating whether credentials will be sent with the request always, never, or only when sent to a
     * same-origin URL.
     */
    readonly credentials: RequestCredentials;
    /**
     * Returns the kind of resource requested by request, e.g., "document" or
     * "script".
     */
    readonly destination: RequestDestination;
    /**
     * Returns a Headers object consisting of the headers associated with request.
     * Note that headers added in the network layer by the user agent will not be accounted for in this
     * object, e.g., the "Host" header.
     */
    readonly headers: Headers;
    /**
     * Returns request's subresource integrity metadata, which is a cryptographic hash of
     * the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
     */
    readonly integrity: string;
    /**
     * Returns a boolean indicating whether or not request is for a history
     * navigation (a.k.a. back-foward navigation).
     */
    readonly isHistoryNavigation: boolean;
    /**
     * Returns a boolean indicating whether or not request is for a reload navigation.
     */
    readonly isReloadNavigation: boolean;
    /**
     * Returns a boolean indicating whether or not request can outlive the global in which
     * it was created.
     */
    readonly keepalive: boolean;
    /**
     * Returns request's HTTP method, which is "GET" by default.
     */
    readonly method: string;
    /**
     * Returns the mode associated with request, which is a string indicating
     * whether the request will use CORS, or will be restricted to same-origin URLs.
     */
    readonly mode: RequestMode;
    /**
     * Returns the redirect mode associated with request, which is a string
     * indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
     */
    readonly redirect: RequestRedirect;
    /**
     * Returns the referrer of request. Its value can be a same-origin URL if
     * explicitly set in init, the empty string to indicate no referrer, and
     * "about:client" when defaulting to the global's default. This is used during
     * fetching to determine the value of the `Referer` header of the request being made.
     */
    readonly referrer: string;
    /**
     * Returns the referrer policy associated with request. This is used during
     * fetching to compute the value of the request's referrer.
     */
    readonly referrerPolicy: ReferrerPolicy;
    /**
     * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort
     * event handler.
     */
    readonly signal: AbortSignal;
    /**
     * Returns the URL of request as a string.
     */
    readonly url: string;
    clone(): Request;
}
export type RequestGlobal =  {
    prototype: Request;
    new(input: RequestInfo, init?: RequestInit): Request;
};
export interface Response extends Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly trailer: Promise<Headers>;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}
export type ResponseGlobal =  {
    prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
};
export interface SVGAElement extends SVGGraphicsElement, SVGURIReference {
    readonly target: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGAElementGlobal =  {
    prototype: SVGAElement;
    new(): SVGAElement;
};
export interface SVGAngle {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_GRAD: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
}
export type SVGAngleGlobal =  {
    prototype: SVGAngle;
    new(): SVGAngle;
    readonly SVG_ANGLETYPE_DEG: number;
    readonly SVG_ANGLETYPE_GRAD: number;
    readonly SVG_ANGLETYPE_RAD: number;
    readonly SVG_ANGLETYPE_UNKNOWN: number;
    readonly SVG_ANGLETYPE_UNSPECIFIED: number;
};
export interface SVGAnimateElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGAnimateElementGlobal =  {
    prototype: SVGAnimateElement;
    new(): SVGAnimateElement;
};
export interface SVGAnimateMotionElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGAnimateMotionElementGlobal =  {
    prototype: SVGAnimateMotionElement;
    new(): SVGAnimateMotionElement;
};
export interface SVGAnimateTransformElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGAnimateTransformElementGlobal =  {
    prototype: SVGAnimateTransformElement;
    new(): SVGAnimateTransformElement;
};
export interface SVGAnimatedAngle {
    readonly animVal: SVGAngle;
    readonly baseVal: SVGAngle;
}
export type SVGAnimatedAngleGlobal =  {
    prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
};
export interface SVGAnimatedBoolean {
    readonly animVal: boolean;
    baseVal: boolean;
}
export type SVGAnimatedBooleanGlobal =  {
    prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
};
export interface SVGAnimatedEnumeration {
    readonly animVal: number;
    baseVal: number;
}
export type SVGAnimatedEnumerationGlobal =  {
    prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
};
export interface SVGAnimatedInteger {
    readonly animVal: number;
    baseVal: number;
}
export type SVGAnimatedIntegerGlobal =  {
    prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
};
export interface SVGAnimatedLength {
    readonly animVal: SVGLength;
    readonly baseVal: SVGLength;
}
export type SVGAnimatedLengthGlobal =  {
    prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
};
export interface SVGAnimatedLengthList {
    readonly animVal: SVGLengthList;
    readonly baseVal: SVGLengthList;
}
export type SVGAnimatedLengthListGlobal =  {
    prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
};
export interface SVGAnimatedNumber {
    readonly animVal: number;
    baseVal: number;
}
export type SVGAnimatedNumberGlobal =  {
    prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
};
export interface SVGAnimatedNumberList {
    readonly animVal: SVGNumberList;
    readonly baseVal: SVGNumberList;
}
export type SVGAnimatedNumberListGlobal =  {
    prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
};
export interface SVGAnimatedPoints {
    readonly animatedPoints: SVGPointList;
    readonly points: SVGPointList;
}
export interface SVGAnimatedPreserveAspectRatio {
    readonly animVal: SVGPreserveAspectRatio;
    readonly baseVal: SVGPreserveAspectRatio;
}
export type SVGAnimatedPreserveAspectRatioGlobal =  {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
};
export interface SVGAnimatedRect {
    readonly animVal: DOMRectReadOnly;
    readonly baseVal: DOMRect;
}
export type SVGAnimatedRectGlobal =  {
    prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
};
export interface SVGAnimatedString {
    readonly animVal: string;
    baseVal: string;
}
export type SVGAnimatedStringGlobal =  {
    prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
};
export interface SVGAnimatedTransformList {
    readonly animVal: SVGTransformList;
    readonly baseVal: SVGTransformList;
}
export type SVGAnimatedTransformListGlobal =  {
    prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
};
export interface SVGAnimationElement extends SVGElement {
    readonly targetElement: SVGElement;
    getCurrentTime(): number;
    getSimpleDuration(): number;
    getStartTime(): number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGAnimationElementGlobal =  {
    prototype: SVGAnimationElement;
    new(): SVGAnimationElement;
};
export interface SVGCircleElement extends SVGGraphicsElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGCircleElementGlobal =  {
    prototype: SVGCircleElement;
    new(): SVGCircleElement;
};
export interface SVGClipPathElement extends SVGGraphicsElement {
    readonly clipPathUnits: SVGAnimatedEnumeration;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGClipPathElementGlobal =  {
    prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
};
export interface SVGComponentTransferFunctionElement extends SVGElement {
    readonly amplitude: SVGAnimatedNumber;
    readonly exponent: SVGAnimatedNumber;
    readonly intercept: SVGAnimatedNumber;
    readonly offset: SVGAnimatedNumber;
    readonly slope: SVGAnimatedNumber;
    readonly tableValues: SVGAnimatedNumberList;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGComponentTransferFunctionElementGlobal =  {
    prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
};
export interface SVGCursorElement extends SVGElement {
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGCursorElementGlobal =  {
    prototype: SVGCursorElement;
    new(): SVGCursorElement;
};
export interface SVGDefsElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGDefsElementGlobal =  {
    prototype: SVGDefsElement;
    new(): SVGDefsElement;
};
export interface SVGDescElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGDescElementGlobal =  {
    prototype: SVGDescElement;
    new(): SVGDescElement;
};
export interface SVGElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
}
export interface SVGElement extends Element, GlobalEventHandlers, DocumentAndElementEventHandlers, SVGElementInstance, HTMLOrSVGElement, ElementCSSInlineStyle {
    /** @deprecated */
    readonly className: any;
    readonly ownerSVGElement: SVGSVGElement | null;
    readonly viewportElement: SVGElement | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGElementGlobal =  {
    prototype: SVGElement;
    new(): SVGElement;
};
export interface SVGElementInstance extends EventTarget {
    readonly correspondingElement: SVGElement;
    readonly correspondingUseElement: SVGUseElement;
}
export type SVGElementInstanceGlobal =  {
    prototype: SVGElementInstance;
    new(): SVGElementInstance;
};
export interface SVGElementInstanceList {
    /** @deprecated */
    readonly length: number;
    /** @deprecated */
    item(index: number): SVGElementInstance;
}
export type SVGElementInstanceListGlobal =  {
    prototype: SVGElementInstanceList;
    new(): SVGElementInstanceList;
};
export interface SVGEllipseElement extends SVGGraphicsElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGEllipseElementGlobal =  {
    prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
};
export interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly mode: SVGAnimatedEnumeration;
    readonly SVG_FEBLEND_MODE_COLOR: number;
    readonly SVG_FEBLEND_MODE_COLOR_BURN: number;
    readonly SVG_FEBLEND_MODE_COLOR_DODGE: number;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_DIFFERENCE: number;
    readonly SVG_FEBLEND_MODE_EXCLUSION: number;
    readonly SVG_FEBLEND_MODE_HARD_LIGHT: number;
    readonly SVG_FEBLEND_MODE_HUE: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    readonly SVG_FEBLEND_MODE_LUMINOSITY: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_OVERLAY: number;
    readonly SVG_FEBLEND_MODE_SATURATION: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEBlendElementGlobal =  {
    prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    readonly SVG_FEBLEND_MODE_COLOR: number;
    readonly SVG_FEBLEND_MODE_COLOR_BURN: number;
    readonly SVG_FEBLEND_MODE_COLOR_DODGE: number;
    readonly SVG_FEBLEND_MODE_DARKEN: number;
    readonly SVG_FEBLEND_MODE_DIFFERENCE: number;
    readonly SVG_FEBLEND_MODE_EXCLUSION: number;
    readonly SVG_FEBLEND_MODE_HARD_LIGHT: number;
    readonly SVG_FEBLEND_MODE_HUE: number;
    readonly SVG_FEBLEND_MODE_LIGHTEN: number;
    readonly SVG_FEBLEND_MODE_LUMINOSITY: number;
    readonly SVG_FEBLEND_MODE_MULTIPLY: number;
    readonly SVG_FEBLEND_MODE_NORMAL: number;
    readonly SVG_FEBLEND_MODE_OVERLAY: number;
    readonly SVG_FEBLEND_MODE_SATURATION: number;
    readonly SVG_FEBLEND_MODE_SCREEN: number;
    readonly SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    readonly SVG_FEBLEND_MODE_UNKNOWN: number;
};
export interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly type: SVGAnimatedEnumeration;
    readonly values: SVGAnimatedNumberList;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEColorMatrixElementGlobal =  {
    prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
};
export interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEComponentTransferElementGlobal =  {
    prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
};
export interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly k1: SVGAnimatedNumber;
    readonly k2: SVGAnimatedNumber;
    readonly k3: SVGAnimatedNumber;
    readonly k4: SVGAnimatedNumber;
    readonly operator: SVGAnimatedEnumeration;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFECompositeElementGlobal =  {
    prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: number;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: number;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: number;
};
export interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly bias: SVGAnimatedNumber;
    readonly divisor: SVGAnimatedNumber;
    readonly edgeMode: SVGAnimatedEnumeration;
    readonly in1: SVGAnimatedString;
    readonly kernelMatrix: SVGAnimatedNumberList;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly orderX: SVGAnimatedInteger;
    readonly orderY: SVGAnimatedInteger;
    readonly preserveAlpha: SVGAnimatedBoolean;
    readonly targetX: SVGAnimatedInteger;
    readonly targetY: SVGAnimatedInteger;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEConvolveMatrixElementGlobal =  {
    prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    readonly SVG_EDGEMODE_DUPLICATE: number;
    readonly SVG_EDGEMODE_NONE: number;
    readonly SVG_EDGEMODE_UNKNOWN: number;
    readonly SVG_EDGEMODE_WRAP: number;
};
export interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly diffuseConstant: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEDiffuseLightingElementGlobal =  {
    prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
};
export interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly scale: SVGAnimatedNumber;
    readonly xChannelSelector: SVGAnimatedEnumeration;
    readonly yChannelSelector: SVGAnimatedEnumeration;
    readonly SVG_CHANNEL_A: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEDisplacementMapElementGlobal =  {
    prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    readonly SVG_CHANNEL_A: number;
    readonly SVG_CHANNEL_B: number;
    readonly SVG_CHANNEL_G: number;
    readonly SVG_CHANNEL_R: number;
    readonly SVG_CHANNEL_UNKNOWN: number;
};
export interface SVGFEDistantLightElement extends SVGElement {
    readonly azimuth: SVGAnimatedNumber;
    readonly elevation: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEDistantLightElementGlobal =  {
    prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
};
export interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEFloodElementGlobal =  {
    prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
};
export interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEFuncAElementGlobal =  {
    prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
};
export interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEFuncBElementGlobal =  {
    prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
};
export interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEFuncGElementGlobal =  {
    prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
};
export interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEFuncRElementGlobal =  {
    prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
};
export interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEGaussianBlurElementGlobal =  {
    prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
};
export interface SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEImageElementGlobal =  {
    prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
};
export interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEMergeElementGlobal =  {
    prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
};
export interface SVGFEMergeNodeElement extends SVGElement {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEMergeNodeElementGlobal =  {
    prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
};
export interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly operator: SVGAnimatedEnumeration;
    readonly radiusX: SVGAnimatedNumber;
    readonly radiusY: SVGAnimatedNumber;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEMorphologyElementGlobal =  {
    prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
};
export interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEOffsetElementGlobal =  {
    prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
};
export interface SVGFEPointLightElement extends SVGElement {
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFEPointLightElementGlobal =  {
    prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
};
export interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly specularConstant: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFESpecularLightingElementGlobal =  {
    prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
};
export interface SVGFESpotLightElement extends SVGElement {
    readonly limitingConeAngle: SVGAnimatedNumber;
    readonly pointsAtX: SVGAnimatedNumber;
    readonly pointsAtY: SVGAnimatedNumber;
    readonly pointsAtZ: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFESpotLightElementGlobal =  {
    prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
};
export interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFETileElementGlobal =  {
    prototype: SVGFETileElement;
    new(): SVGFETileElement;
};
export interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly baseFrequencyX: SVGAnimatedNumber;
    readonly baseFrequencyY: SVGAnimatedNumber;
    readonly numOctaves: SVGAnimatedInteger;
    readonly seed: SVGAnimatedNumber;
    readonly stitchTiles: SVGAnimatedEnumeration;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFETurbulenceElementGlobal =  {
    prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    readonly SVG_STITCHTYPE_NOSTITCH: number;
    readonly SVG_STITCHTYPE_STITCH: number;
    readonly SVG_STITCHTYPE_UNKNOWN: number;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: number;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: number;
};
export interface SVGFilterElement extends SVGElement, SVGURIReference {
    /** @deprecated */
    readonly filterResX: SVGAnimatedInteger;
    /** @deprecated */
    readonly filterResY: SVGAnimatedInteger;
    readonly filterUnits: SVGAnimatedEnumeration;
    readonly height: SVGAnimatedLength;
    readonly primitiveUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    /** @deprecated */
    setFilterRes(filterResX: number, filterResY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGFilterElementGlobal =  {
    prototype: SVGFilterElement;
    new(): SVGFilterElement;
};
export interface SVGFilterPrimitiveStandardAttributes {
    readonly height: SVGAnimatedLength;
    readonly result: SVGAnimatedString;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
}
export interface SVGFitToViewBox {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly viewBox: SVGAnimatedRect;
}
export interface SVGForeignObjectElement extends SVGGraphicsElement {
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGForeignObjectElementGlobal =  {
    prototype: SVGForeignObjectElement;
    new(): SVGForeignObjectElement;
};
export interface SVGGElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGGElementGlobal =  {
    prototype: SVGGElement;
    new(): SVGGElement;
};
export interface SVGGeometryElement extends SVGGraphicsElement {
    readonly pathLength: SVGAnimatedNumber;
    getPointAtLength(distance: number): DOMPoint;
    getTotalLength(): number;
    isPointInFill(point?: DOMPointInit): boolean;
    isPointInStroke(point?: DOMPointInit): boolean;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGGeometryElementGlobal =  {
    prototype: SVGGeometryElement;
    new(): SVGGeometryElement;
};
export interface SVGGradientElement extends SVGElement, SVGURIReference {
    readonly gradientTransform: SVGAnimatedTransformList;
    readonly gradientUnits: SVGAnimatedEnumeration;
    readonly spreadMethod: SVGAnimatedEnumeration;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGGradientElementGlobal =  {
    prototype: SVGGradientElement;
    new(): SVGGradientElement;
    readonly SVG_SPREADMETHOD_PAD: number;
    readonly SVG_SPREADMETHOD_REFLECT: number;
    readonly SVG_SPREADMETHOD_REPEAT: number;
    readonly SVG_SPREADMETHOD_UNKNOWN: number;
};
export interface SVGGraphicsElement extends SVGElement, SVGTests {
    readonly transform: SVGAnimatedTransformList;
    getBBox(options?: SVGBoundingBoxOptions): DOMRect;
    getCTM(): DOMMatrix | null;
    getScreenCTM(): DOMMatrix | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGGraphicsElementGlobal =  {
    prototype: SVGGraphicsElement;
    new(): SVGGraphicsElement;
};
export interface SVGImageElement extends SVGGraphicsElement, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGImageElementGlobal =  {
    prototype: SVGImageElement;
    new(): SVGImageElement;
};
export interface SVGLength {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PC: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
}
export type SVGLengthGlobal =  {
    prototype: SVGLength;
    new(): SVGLength;
    readonly SVG_LENGTHTYPE_CM: number;
    readonly SVG_LENGTHTYPE_EMS: number;
    readonly SVG_LENGTHTYPE_EXS: number;
    readonly SVG_LENGTHTYPE_IN: number;
    readonly SVG_LENGTHTYPE_MM: number;
    readonly SVG_LENGTHTYPE_NUMBER: number;
    readonly SVG_LENGTHTYPE_PC: number;
    readonly SVG_LENGTHTYPE_PERCENTAGE: number;
    readonly SVG_LENGTHTYPE_PT: number;
    readonly SVG_LENGTHTYPE_PX: number;
    readonly SVG_LENGTHTYPE_UNKNOWN: number;
};
export interface SVGLengthList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): void;
    getItem(index: number): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    [index: number]: SVGLength;
}
export type SVGLengthListGlobal =  {
    prototype: SVGLengthList;
    new(): SVGLengthList;
};
export interface SVGLineElement extends SVGGraphicsElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGLineElementGlobal =  {
    prototype: SVGLineElement;
    new(): SVGLineElement;
};
export interface SVGLinearGradientElement extends SVGGradientElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGLinearGradientElementGlobal =  {
    prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
};
export interface SVGMarkerElement extends SVGElement, SVGFitToViewBox {
    readonly markerHeight: SVGAnimatedLength;
    readonly markerUnits: SVGAnimatedEnumeration;
    readonly markerWidth: SVGAnimatedLength;
    readonly orientAngle: SVGAnimatedAngle;
    readonly orientType: SVGAnimatedEnumeration;
    readonly refX: SVGAnimatedLength;
    readonly refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGMarkerElementGlobal =  {
    prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    readonly SVG_MARKERUNITS_STROKEWIDTH: number;
    readonly SVG_MARKERUNITS_UNKNOWN: number;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: number;
    readonly SVG_MARKER_ORIENT_ANGLE: number;
    readonly SVG_MARKER_ORIENT_AUTO: number;
    readonly SVG_MARKER_ORIENT_UNKNOWN: number;
};
export interface SVGMaskElement extends SVGElement, SVGTests {
    readonly height: SVGAnimatedLength;
    readonly maskContentUnits: SVGAnimatedEnumeration;
    readonly maskUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGMaskElementGlobal =  {
    prototype: SVGMaskElement;
    new(): SVGMaskElement;
};
export interface SVGMetadataElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGMetadataElementGlobal =  {
    prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
};
export interface SVGNumber {
    value: number;
}
export type SVGNumberGlobal =  {
    prototype: SVGNumber;
    new(): SVGNumber;
};
export interface SVGNumberList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): void;
    getItem(index: number): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    [index: number]: SVGNumber;
}
export type SVGNumberListGlobal =  {
    prototype: SVGNumberList;
    new(): SVGNumberList;
};
export interface SVGPathElement extends SVGGraphicsElement {
    /** @deprecated */
    readonly pathSegList: SVGPathSegList;
    /** @deprecated */
    createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcAbs;
    /** @deprecated */
    createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcRel;
    /** @deprecated */
    createSVGPathSegClosePath(): SVGPathSegClosePath;
    /** @deprecated */
    createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;
    /** @deprecated */
    createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;
    /** @deprecated */
    createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;
    /** @deprecated */
    createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;
    /** @deprecated */
    createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;
    /** @deprecated */
    createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;
    /** @deprecated */
    createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;
    /** @deprecated */
    createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;
    /** @deprecated */
    createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;
    /** @deprecated */
    createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;
    /** @deprecated */
    createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;
    /** @deprecated */
    createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;
    /** @deprecated */
    getPathSegAtLength(distance: number): number;
    getPointAtLength(distance: number): SVGPoint;
    getTotalLength(): number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGPathElementGlobal =  {
    prototype: SVGPathElement;
    new(): SVGPathElement;
};
export interface SVGPathSeg {
    readonly pathSegType: number;
    readonly pathSegTypeAsLetter: string;
    readonly PATHSEG_ARC_ABS: number;
    readonly PATHSEG_ARC_REL: number;
    readonly PATHSEG_CLOSEPATH: number;
    readonly PATHSEG_CURVETO_CUBIC_ABS: number;
    readonly PATHSEG_CURVETO_CUBIC_REL: number;
    readonly PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    readonly PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    readonly PATHSEG_CURVETO_QUADRATIC_ABS: number;
    readonly PATHSEG_CURVETO_QUADRATIC_REL: number;
    readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
    readonly PATHSEG_LINETO_ABS: number;
    readonly PATHSEG_LINETO_HORIZONTAL_ABS: number;
    readonly PATHSEG_LINETO_HORIZONTAL_REL: number;
    readonly PATHSEG_LINETO_REL: number;
    readonly PATHSEG_LINETO_VERTICAL_ABS: number;
    readonly PATHSEG_LINETO_VERTICAL_REL: number;
    readonly PATHSEG_MOVETO_ABS: number;
    readonly PATHSEG_MOVETO_REL: number;
    readonly PATHSEG_UNKNOWN: number;
}
export type SVGPathSegGlobal =  {
    prototype: SVGPathSeg;
    new(): SVGPathSeg;
    readonly PATHSEG_ARC_ABS: number;
    readonly PATHSEG_ARC_REL: number;
    readonly PATHSEG_CLOSEPATH: number;
    readonly PATHSEG_CURVETO_CUBIC_ABS: number;
    readonly PATHSEG_CURVETO_CUBIC_REL: number;
    readonly PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    readonly PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    readonly PATHSEG_CURVETO_QUADRATIC_ABS: number;
    readonly PATHSEG_CURVETO_QUADRATIC_REL: number;
    readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
    readonly PATHSEG_LINETO_ABS: number;
    readonly PATHSEG_LINETO_HORIZONTAL_ABS: number;
    readonly PATHSEG_LINETO_HORIZONTAL_REL: number;
    readonly PATHSEG_LINETO_REL: number;
    readonly PATHSEG_LINETO_VERTICAL_ABS: number;
    readonly PATHSEG_LINETO_VERTICAL_REL: number;
    readonly PATHSEG_MOVETO_ABS: number;
    readonly PATHSEG_MOVETO_REL: number;
    readonly PATHSEG_UNKNOWN: number;
};
export interface SVGPathSegArcAbs extends SVGPathSeg {
    angle: number;
    largeArcFlag: boolean;
    r1: number;
    r2: number;
    sweepFlag: boolean;
    x: number;
    y: number;
}
export type SVGPathSegArcAbsGlobal =  {
    prototype: SVGPathSegArcAbs;
    new(): SVGPathSegArcAbs;
};
export interface SVGPathSegArcRel extends SVGPathSeg {
    angle: number;
    largeArcFlag: boolean;
    r1: number;
    r2: number;
    sweepFlag: boolean;
    x: number;
    y: number;
}
export type SVGPathSegArcRelGlobal =  {
    prototype: SVGPathSegArcRel;
    new(): SVGPathSegArcRel;
};
export interface SVGPathSegClosePath extends SVGPathSeg {
}
export type SVGPathSegClosePathGlobal =  {
    prototype: SVGPathSegClosePath;
    new(): SVGPathSegClosePath;
};
export interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
}
export type SVGPathSegCurvetoCubicAbsGlobal =  {
    prototype: SVGPathSegCurvetoCubicAbs;
    new(): SVGPathSegCurvetoCubicAbs;
};
export interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
}
export type SVGPathSegCurvetoCubicRelGlobal =  {
    prototype: SVGPathSegCurvetoCubicRel;
    new(): SVGPathSegCurvetoCubicRel;
};
export interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {
    x: number;
    x2: number;
    y: number;
    y2: number;
}
export type SVGPathSegCurvetoCubicSmoothAbsGlobal =  {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    new(): SVGPathSegCurvetoCubicSmoothAbs;
};
export interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    x: number;
    x2: number;
    y: number;
    y2: number;
}
export type SVGPathSegCurvetoCubicSmoothRelGlobal =  {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new(): SVGPathSegCurvetoCubicSmoothRel;
};
export interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {
    x: number;
    x1: number;
    y: number;
    y1: number;
}
export type SVGPathSegCurvetoQuadraticAbsGlobal =  {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    new(): SVGPathSegCurvetoQuadraticAbs;
};
export interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {
    x: number;
    x1: number;
    y: number;
    y1: number;
}
export type SVGPathSegCurvetoQuadraticRelGlobal =  {
    prototype: SVGPathSegCurvetoQuadraticRel;
    new(): SVGPathSegCurvetoQuadraticRel;
};
export interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    x: number;
    y: number;
}
export type SVGPathSegCurvetoQuadraticSmoothAbsGlobal =  {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new(): SVGPathSegCurvetoQuadraticSmoothAbs;
};
export interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {
    x: number;
    y: number;
}
export type SVGPathSegCurvetoQuadraticSmoothRelGlobal =  {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    new(): SVGPathSegCurvetoQuadraticSmoothRel;
};
export interface SVGPathSegLinetoAbs extends SVGPathSeg {
    x: number;
    y: number;
}
export type SVGPathSegLinetoAbsGlobal =  {
    prototype: SVGPathSegLinetoAbs;
    new(): SVGPathSegLinetoAbs;
};
export interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}
export type SVGPathSegLinetoHorizontalAbsGlobal =  {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new(): SVGPathSegLinetoHorizontalAbs;
};
export interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}
export type SVGPathSegLinetoHorizontalRelGlobal =  {
    prototype: SVGPathSegLinetoHorizontalRel;
    new(): SVGPathSegLinetoHorizontalRel;
};
export interface SVGPathSegLinetoRel extends SVGPathSeg {
    x: number;
    y: number;
}
export type SVGPathSegLinetoRelGlobal =  {
    prototype: SVGPathSegLinetoRel;
    new(): SVGPathSegLinetoRel;
};
export interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}
export type SVGPathSegLinetoVerticalAbsGlobal =  {
    prototype: SVGPathSegLinetoVerticalAbs;
    new(): SVGPathSegLinetoVerticalAbs;
};
export interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}
export type SVGPathSegLinetoVerticalRelGlobal =  {
    prototype: SVGPathSegLinetoVerticalRel;
    new(): SVGPathSegLinetoVerticalRel;
};
export interface SVGPathSegList {
    readonly numberOfItems: number;
    appendItem(newItem: SVGPathSeg): SVGPathSeg;
    clear(): void;
    getItem(index: number): SVGPathSeg;
    initialize(newItem: SVGPathSeg): SVGPathSeg;
    insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;
    removeItem(index: number): SVGPathSeg;
    replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;
}
export type SVGPathSegListGlobal =  {
    prototype: SVGPathSegList;
    new(): SVGPathSegList;
};
export interface SVGPathSegMovetoAbs extends SVGPathSeg {
    x: number;
    y: number;
}
export type SVGPathSegMovetoAbsGlobal =  {
    prototype: SVGPathSegMovetoAbs;
    new(): SVGPathSegMovetoAbs;
};
export interface SVGPathSegMovetoRel extends SVGPathSeg {
    x: number;
    y: number;
}
export type SVGPathSegMovetoRelGlobal =  {
    prototype: SVGPathSegMovetoRel;
    new(): SVGPathSegMovetoRel;
};
export interface SVGPatternElement extends SVGElement, SVGTests, SVGFitToViewBox, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly patternContentUnits: SVGAnimatedEnumeration;
    readonly patternTransform: SVGAnimatedTransformList;
    readonly patternUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGPatternElementGlobal =  {
    prototype: SVGPatternElement;
    new(): SVGPatternElement;
};
export interface SVGPointList {
    readonly numberOfItems: number;
    appendItem(newItem: SVGPoint): SVGPoint;
    clear(): void;
    getItem(index: number): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;
    removeItem(index: number): SVGPoint;
    replaceItem(newItem: SVGPoint, index: number): SVGPoint;
}
export type SVGPointListGlobal =  {
    prototype: SVGPointList;
    new(): SVGPointList;
};
export interface SVGPolygonElement extends SVGGraphicsElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGPolygonElementGlobal =  {
    prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
};
export interface SVGPolylineElement extends SVGGraphicsElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGPolylineElementGlobal =  {
    prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
};
export interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}
export type SVGPreserveAspectRatioGlobal =  {
    prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    readonly SVG_MEETORSLICE_MEET: number;
    readonly SVG_MEETORSLICE_SLICE: number;
    readonly SVG_MEETORSLICE_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_NONE: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
};
export interface SVGRadialGradientElement extends SVGGradientElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly fx: SVGAnimatedLength;
    readonly fy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGRadialGradientElementGlobal =  {
    prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
};
export interface SVGRectElement extends SVGGraphicsElement {
    readonly height: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGRectElementGlobal =  {
    prototype: SVGRectElement;
    new(): SVGRectElement;
};
export interface SVGSVGElementEventMap extends SVGElementEventMap {
    "SVGUnload": Event;
    "SVGZoom": SVGZoomEvent;
}
export interface SVGSVGElement extends SVGGraphicsElement, DocumentEvent, SVGFitToViewBox, SVGZoomAndPan {
    /** @deprecated */
    contentScriptType: string;
    /** @deprecated */
    contentStyleType: string;
    currentScale: number;
    readonly currentTranslate: SVGPoint;
    readonly height: SVGAnimatedLength;
    onunload: ((this: SVGSVGElement, ev: Event) => any) | null;
    onzoom: ((this: SVGSVGElement, ev: SVGZoomEvent) => any) | null;
    /** @deprecated */
    readonly pixelUnitToMillimeterX: number;
    /** @deprecated */
    readonly pixelUnitToMillimeterY: number;
    /** @deprecated */
    readonly screenPixelToMillimeterX: number;
    /** @deprecated */
    readonly screenPixelToMillimeterY: number;
    /** @deprecated */
    readonly viewport: SVGRect;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    checkEnclosure(element: SVGElement, rect: SVGRect): boolean;
    checkIntersection(element: SVGElement, rect: SVGRect): boolean;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): SVGMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): SVGPoint;
    createSVGRect(): SVGRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    deselectAll(): void;
    /** @deprecated */
    forceRedraw(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    /** @deprecated */
    getCurrentTime(): number;
    getElementById(elementId: string): Element;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    /** @deprecated */
    pauseAnimations(): void;
    /** @deprecated */
    setCurrentTime(seconds: number): void;
    /** @deprecated */
    suspendRedraw(maxWaitMilliseconds: number): number;
    /** @deprecated */
    unpauseAnimations(): void;
    /** @deprecated */
    unsuspendRedraw(suspendHandleID: number): void;
    /** @deprecated */
    unsuspendRedrawAll(): void;
    addEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGSVGElementGlobal =  {
    prototype: SVGSVGElement;
    new(): SVGSVGElement;
    readonly SVG_ZOOMANDPAN_DISABLE: number;
    readonly SVG_ZOOMANDPAN_MAGNIFY: number;
    readonly SVG_ZOOMANDPAN_UNKNOWN: number;
};
export interface SVGScriptElement extends SVGElement, SVGURIReference {
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGScriptElementGlobal =  {
    prototype: SVGScriptElement;
    new(): SVGScriptElement;
};
export interface SVGStopElement extends SVGElement {
    readonly offset: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGStopElementGlobal =  {
    prototype: SVGStopElement;
    new(): SVGStopElement;
};
export interface SVGStringList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: string): string;
    clear(): void;
    getItem(index: number): string;
    initialize(newItem: string): string;
    insertItemBefore(newItem: string, index: number): string;
    removeItem(index: number): string;
    replaceItem(newItem: string, index: number): string;
    [index: number]: string;
}
export type SVGStringListGlobal =  {
    prototype: SVGStringList;
    new(): SVGStringList;
};
export interface SVGStyleElement extends SVGElement {
    disabled: boolean;
    media: string;
    title: string;
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGStyleElementGlobal =  {
    prototype: SVGStyleElement;
    new(): SVGStyleElement;
};
export interface SVGSwitchElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGSwitchElementGlobal =  {
    prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
};
export interface SVGSymbolElement extends SVGElement, SVGFitToViewBox {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGSymbolElementGlobal =  {
    prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
};
export interface SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGTSpanElementGlobal =  {
    prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
};
export interface SVGTests {
    readonly requiredExtensions: SVGStringList;
    readonly systemLanguage: SVGStringList;
}
export interface SVGTextContentElement extends SVGGraphicsElement {
    readonly lengthAdjust: SVGAnimatedEnumeration;
    readonly textLength: SVGAnimatedLength;
    getCharNumAtPosition(point: SVGPoint): number;
    getComputedTextLength(): number;
    getEndPositionOfChar(charnum: number): SVGPoint;
    getExtentOfChar(charnum: number): SVGRect;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getStartPositionOfChar(charnum: number): SVGPoint;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    readonly LENGTHADJUST_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGTextContentElementGlobal =  {
    prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    readonly LENGTHADJUST_SPACING: number;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: number;
    readonly LENGTHADJUST_UNKNOWN: number;
};
export interface SVGTextElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGTextElementGlobal =  {
    prototype: SVGTextElement;
    new(): SVGTextElement;
};
export interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    readonly method: SVGAnimatedEnumeration;
    readonly spacing: SVGAnimatedEnumeration;
    readonly startOffset: SVGAnimatedLength;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGTextPathElementGlobal =  {
    prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    readonly TEXTPATH_METHODTYPE_ALIGN: number;
    readonly TEXTPATH_METHODTYPE_STRETCH: number;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: number;
    readonly TEXTPATH_SPACINGTYPE_AUTO: number;
    readonly TEXTPATH_SPACINGTYPE_EXACT: number;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number;
};
export interface SVGTextPositioningElement extends SVGTextContentElement {
    readonly dx: SVGAnimatedLengthList;
    readonly dy: SVGAnimatedLengthList;
    readonly rotate: SVGAnimatedNumberList;
    readonly x: SVGAnimatedLengthList;
    readonly y: SVGAnimatedLengthList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGTextPositioningElementGlobal =  {
    prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
};
export interface SVGTitleElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGTitleElementGlobal =  {
    prototype: SVGTitleElement;
    new(): SVGTitleElement;
};
export interface SVGTransform {
    readonly angle: number;
    readonly matrix: SVGMatrix;
    readonly type: number;
    setMatrix(matrix: SVGMatrix): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setScale(sx: number, sy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    setTranslate(tx: number, ty: number): void;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_UNKNOWN: number;
}
export type SVGTransformGlobal =  {
    prototype: SVGTransform;
    new(): SVGTransform;
    readonly SVG_TRANSFORM_MATRIX: number;
    readonly SVG_TRANSFORM_ROTATE: number;
    readonly SVG_TRANSFORM_SCALE: number;
    readonly SVG_TRANSFORM_SKEWX: number;
    readonly SVG_TRANSFORM_SKEWY: number;
    readonly SVG_TRANSFORM_TRANSLATE: number;
    readonly SVG_TRANSFORM_UNKNOWN: number;
};
export interface SVGTransformList {
    readonly numberOfItems: number;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): void;
    consolidate(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getItem(index: number): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
}
export type SVGTransformListGlobal =  {
    prototype: SVGTransformList;
    new(): SVGTransformList;
};
export interface SVGURIReference {
    readonly href: SVGAnimatedString;
}
export interface SVGUnitTypes {
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
}
export type SVGUnitTypesGlobal =  {
    prototype: SVGUnitTypes;
    new(): SVGUnitTypes;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    readonly SVG_UNIT_TYPE_UNKNOWN: number;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: number;
};
export interface SVGUseElement extends SVGGraphicsElement, SVGURIReference {
    readonly animatedInstanceRoot: SVGElementInstance | null;
    readonly height: SVGAnimatedLength;
    readonly instanceRoot: SVGElementInstance | null;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGUseElementGlobal =  {
    prototype: SVGUseElement;
    new(): SVGUseElement;
};
export interface SVGViewElement extends SVGElement, SVGFitToViewBox, SVGZoomAndPan {
    /** @deprecated */
    readonly viewTarget: SVGStringList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SVGViewElementGlobal =  {
    prototype: SVGViewElement;
    new(): SVGViewElement;
    readonly SVG_ZOOMANDPAN_DISABLE: number;
    readonly SVG_ZOOMANDPAN_MAGNIFY: number;
    readonly SVG_ZOOMANDPAN_UNKNOWN: number;
};
export interface SVGZoomAndPan {
    readonly zoomAndPan: number;
}
export type SVGZoomAndPanGlobal =  {
    readonly SVG_ZOOMANDPAN_DISABLE: number;
    readonly SVG_ZOOMANDPAN_MAGNIFY: number;
    readonly SVG_ZOOMANDPAN_UNKNOWN: number;
};
export interface SVGZoomEvent extends UIEvent {
    readonly newScale: number;
    readonly newTranslate: SVGPoint;
    readonly previousScale: number;
    readonly previousTranslate: SVGPoint;
    readonly zoomRectScreen: SVGRect;
}
export type SVGZoomEventGlobal =  {
    prototype: SVGZoomEvent;
    new(): SVGZoomEvent;
};
export interface ScopedCredential {
    readonly id: ArrayBuffer;
    readonly type: ScopedCredentialType;
}
export type ScopedCredentialGlobal =  {
    prototype: ScopedCredential;
    new(): ScopedCredential;
};
export interface ScopedCredentialInfo {
    readonly credential: ScopedCredential;
    readonly publicKey: CryptoKey;
}
export type ScopedCredentialInfoGlobal =  {
    prototype: ScopedCredentialInfo;
    new(): ScopedCredentialInfo;
};
export interface Screen {
    readonly availHeight: number;
    readonly availWidth: number;
    readonly colorDepth: number;
    readonly height: number;
    readonly orientation: ScreenOrientation;
    readonly pixelDepth: number;
    readonly width: number;
}
export type ScreenGlobal =  {
    prototype: Screen;
    new(): Screen;
};
export interface ScreenOrientationEventMap {
    "change": Event;
}
export interface ScreenOrientation extends EventTarget {
    readonly angle: number;
    onchange: ((this: ScreenOrientation, ev: Event) => any) | null;
    readonly type: OrientationType;
    lock(orientation: OrientationLockType): Promise<void>;
    unlock(): void;
    addEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ScreenOrientationGlobal =  {
    prototype: ScreenOrientation;
    new(): ScreenOrientation;
};
export interface ScriptProcessorNodeEventMap {
    "audioprocess": AudioProcessingEvent;
}
export interface ScriptProcessorNode extends AudioNode {
    /** @deprecated */
    readonly bufferSize: number;
    /** @deprecated */
    onaudioprocess: ((this: ScriptProcessorNode, ev: AudioProcessingEvent) => any) | null;
    addEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ScriptProcessorNodeGlobal =  {
    prototype: ScriptProcessorNode;
    new(): ScriptProcessorNode;
};
export interface SecurityPolicyViolationEvent extends Event {
    readonly blockedURI: string;
    readonly columnNumber: number;
    readonly documentURI: string;
    readonly effectiveDirective: string;
    readonly lineNumber: number;
    readonly originalPolicy: string;
    readonly referrer: string;
    readonly sourceFile: string;
    readonly statusCode: number;
    readonly violatedDirective: string;
}
export type SecurityPolicyViolationEventGlobal =  {
    prototype: SecurityPolicyViolationEvent;
    new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};
export interface Selection {
    readonly anchorNode: Node;
    readonly anchorOffset: number;
    readonly baseNode: Node;
    readonly baseOffset: number;
    readonly extentNode: Node;
    readonly extentOffset: number;
    readonly focusNode: Node;
    readonly focusOffset: number;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;
    readonly type: string;
    addRange(range: Range): void;
    collapse(parentNode: Node, offset: number): void;
    collapseToEnd(): void;
    collapseToStart(): void;
    containsNode(node: Node, partlyContained: boolean): boolean;
    deleteFromDocument(): void;
    empty(): void;
    extend(newNode: Node, offset: number): void;
    getRangeAt(index: number): Range;
    removeAllRanges(): void;
    removeRange(range: Range): void;
    selectAllChildren(parentNode: Node): void;
    setBaseAndExtent(baseNode: Node, baseOffset: number, extentNode: Node, extentOffset: number): void;
    setPosition(parentNode: Node, offset: number): void;
    toString(): string;
}
export type SelectionGlobal =  {
    prototype: Selection;
    new(): Selection;
};
export interface ServiceUIFrameContext {
    getCachedFrameMessage(key: string): string;
    postFrameMessage(key: string, data: string): void;
}
export type ServiceUIFrameContextGlobal =  ServiceUIFrameContext;
export interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}
export interface ServiceWorker extends EventTarget, AbstractWorker {
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    readonly scriptURL: string;
    readonly state: ServiceWorkerState;
    postMessage(message: any, transfer?: Transferable[]): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ServiceWorkerGlobal =  {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};
export interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
export interface ServiceWorkerContainer extends EventTarget {
    readonly controller: ServiceWorker | null;
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    readonly ready: Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | undefined>;
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ServiceWorkerContainerGlobal =  {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};
export interface ServiceWorkerMessageEvent extends Event {
    readonly data: any;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: ReadonlyArray<MessagePort> | null;
    readonly source: ServiceWorker | MessagePort | null;
}
export type ServiceWorkerMessageEventGlobal =  {
    prototype: ServiceWorkerMessageEvent;
    new(type: string, eventInitDict?: ServiceWorkerMessageEventInit): ServiceWorkerMessageEvent;
};
export interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}
export interface ServiceWorkerRegistration extends EventTarget {
    readonly active: ServiceWorker | null;
    readonly installing: ServiceWorker | null;
    readonly navigationPreload: NavigationPreloadManager;
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    readonly pushManager: PushManager;
    readonly scope: string;
    readonly sync: SyncManager;
    readonly updateViaCache: ServiceWorkerUpdateViaCache;
    readonly waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type ServiceWorkerRegistrationGlobal =  {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};
export interface ShadowRoot extends DocumentOrShadowRoot, DocumentFragment, DocumentOrShadowRoot {
    readonly host: Element;
    innerHTML: string;
    readonly mode: ShadowRootMode;
}
export interface ShadowRootInit {
    delegatesFocus?: boolean;
    mode: "open" | "closed";
}
export interface Slotable {
    readonly assignedSlot: HTMLSlotElement | null;
}
export interface SourceBuffer extends EventTarget {
    appendWindowEnd: number;
    appendWindowStart: number;
    readonly audioTracks: AudioTrackList;
    readonly buffered: TimeRanges;
    mode: AppendMode;
    readonly textTracks: TextTrackList;
    timestampOffset: number;
    readonly updating: boolean;
    readonly videoTracks: VideoTrackList;
    abort(): void;
    appendBuffer(data: ArrayBuffer | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null): void;
    appendStream(stream: MSStream, maxSize?: number): void;
    remove(start: number, end: number): void;
}
export type SourceBufferGlobal =  {
    prototype: SourceBuffer;
    new(): SourceBuffer;
};
export interface SourceBufferList extends EventTarget {
    readonly length: number;
    item(index: number): SourceBuffer;
    [index: number]: SourceBuffer;
}
export type SourceBufferListGlobal =  {
    prototype: SourceBufferList;
    new(): SourceBufferList;
};
export interface SpeechGrammar {
    src: string;
    weight: number;
}
export type SpeechGrammarGlobal =  {
    prototype: SpeechGrammar;
    new(): SpeechGrammar;
};
export interface SpeechGrammarList {
    readonly length: number;
    addFromString(string: string, weight?: number): void;
    addFromURI(src: string, weight?: number): void;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
}
export type SpeechGrammarListGlobal =  {
    prototype: SpeechGrammarList;
    new(): SpeechGrammarList;
};
export interface SpeechRecognitionEventMap {
    "audioend": Event;
    "audiostart": Event;
    "end": Event;
    "error": SpeechRecognitionError;
    "nomatch": SpeechRecognitionEvent;
    "result": SpeechRecognitionEvent;
    "soundend": Event;
    "soundstart": Event;
    "speechend": Event;
    "speechstart": Event;
    "start": Event;
}
export interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    grammars: SpeechGrammarList;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionError) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    serviceURI: string;
    abort(): void;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SpeechRecognitionGlobal =  {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};
export interface SpeechRecognitionAlternative {
    readonly confidence: number;
    readonly transcript: string;
}
export type SpeechRecognitionAlternativeGlobal =  {
    prototype: SpeechRecognitionAlternative;
    new(): SpeechRecognitionAlternative;
};
export interface SpeechRecognitionError extends Event {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
}
export type SpeechRecognitionErrorGlobal =  {
    prototype: SpeechRecognitionError;
    new(): SpeechRecognitionError;
};
export interface SpeechRecognitionEvent extends Event {
    readonly emma: Document | null;
    readonly interpretation: any;
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
}
export type SpeechRecognitionEventGlobal =  {
    prototype: SpeechRecognitionEvent;
    new(): SpeechRecognitionEvent;
};
export interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}
export type SpeechRecognitionResultGlobal =  {
    prototype: SpeechRecognitionResult;
    new(): SpeechRecognitionResult;
};
export interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}
export type SpeechRecognitionResultListGlobal =  {
    prototype: SpeechRecognitionResultList;
    new(): SpeechRecognitionResultList;
};
export interface SpeechSynthesisEventMap {
    "voiceschanged": Event;
}
export interface SpeechSynthesis extends EventTarget {
    onvoiceschanged: ((this: SpeechSynthesis, ev: Event) => any) | null;
    readonly paused: boolean;
    readonly pending: boolean;
    readonly speaking: boolean;
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    speak(utterance: SpeechSynthesisUtterance): void;
    addEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SpeechSynthesisGlobal =  {
    prototype: SpeechSynthesis;
    new(): SpeechSynthesis;
};
export interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    readonly error: SpeechSynthesisErrorCode;
}
export type SpeechSynthesisErrorEventGlobal =  {
    prototype: SpeechSynthesisErrorEvent;
    new(): SpeechSynthesisErrorEvent;
};
export interface SpeechSynthesisEvent extends Event {
    readonly charIndex: number;
    readonly elapsedTime: number;
    readonly name: string;
    readonly utterance: SpeechSynthesisUtterance;
}
export type SpeechSynthesisEventGlobal =  {
    prototype: SpeechSynthesisEvent;
    new(): SpeechSynthesisEvent;
};
export interface SpeechSynthesisUtteranceEventMap {
    "boundary": SpeechSynthesisEvent;
    "end": SpeechSynthesisEvent;
    "error": SpeechSynthesisErrorEvent;
    "mark": SpeechSynthesisEvent;
    "pause": SpeechSynthesisEvent;
    "resume": SpeechSynthesisEvent;
    "start": SpeechSynthesisEvent;
}
export interface SpeechSynthesisUtterance extends EventTarget {
    lang: string;
    onboundary: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onend: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onerror: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any) | null;
    onmark: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onpause: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onresume: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onstart: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    pitch: number;
    rate: number;
    text: string;
    voice: SpeechSynthesisVoice;
    volume: number;
    addEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type SpeechSynthesisUtteranceGlobal =  {
    prototype: SpeechSynthesisUtterance;
    new(): SpeechSynthesisUtterance;
    new(text: string): SpeechSynthesisUtterance;
};
export interface SpeechSynthesisVoice {
    readonly default: boolean;
    readonly lang: string;
    readonly localService: boolean;
    readonly name: string;
    readonly voiceURI: string;
}
export type SpeechSynthesisVoiceGlobal =  {
    prototype: SpeechSynthesisVoice;
    new(): SpeechSynthesisVoice;
};
export interface StaticRange extends AbstractRange {
}
export type StaticRangeGlobal =  {
    prototype: StaticRange;
    new(): StaticRange;
};
export interface StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
}
export type StereoPannerNodeGlobal =  {
    prototype: StereoPannerNode;
    new(context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
};
export interface Storage {
    /**
     * Returns the number of key/value pairs currently present in the list associated with the
     * object.
     */
    readonly length: number;
    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(): void;
    /**
     * value = storage[key]
     */
    getItem(key: string): string | null;
    /**
     * Returns the name of the nth key in the list, or null if n is greater
     * than or equal to the number of key/value pairs in the object.
     */
    key(index: number): string | null;
    /**
     * delete storage[key]
     */
    removeItem(key: string): void;
    /**
     * storage[key] = value
     */
    setItem(key: string, value: string): void;
    [name: string]: any;
}
export type StorageGlobal =  {
    prototype: Storage;
    new(): Storage;
};
export interface StorageEvent extends Event {
    /**
     * Returns the key of the storage item being changed.
     */
    readonly key: string | null;
    /**
     * Returns the new value of the key of the storage item whose value is being changed.
     */
    readonly newValue: string | null;
    /**
     * Returns the old value of the key of the storage item whose value is being changed.
     */
    readonly oldValue: string | null;
    /**
     * Returns the Storage object that was affected.
     */
    readonly storageArea: Storage | null;
    /**
     * Returns the URL of the document whose storage item changed.
     */
    readonly url: string;
}
export type StorageEventGlobal =  {
    prototype: StorageEvent;
    new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
};
export interface StorageManager {
    estimate(): Promise<StorageEstimate>;
    persist(): Promise<boolean>;
    persisted(): Promise<boolean>;
}
export type StorageManagerGlobal =  {
    prototype: StorageManager;
    new(): StorageManager;
};
export interface StyleMedia {
    readonly type: string;
    matchMedium(mediaquery: string): boolean;
}
export type StyleMediaGlobal =  {
    prototype: StyleMedia;
    new(): StyleMedia;
};
export interface StyleSheet {
    disabled: boolean;
    readonly href: string | null;
    readonly media: MediaList;
    readonly ownerNode: Node;
    readonly parentStyleSheet: StyleSheet | null;
    readonly title: string | null;
    readonly type: string;
}
export type StyleSheetGlobal =  {
    prototype: StyleSheet;
    new(): StyleSheet;
};
export interface StyleSheetList {
    readonly length: number;
    item(index: number): StyleSheet | null;
    [index: number]: StyleSheet;
}
export type StyleSheetListGlobal =  {
    prototype: StyleSheetList;
    new(): StyleSheetList;
};
export interface SubtleCrypto {
    decrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    deriveBits(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
    deriveKey(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: string | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    digest(algorithm: string | Algorithm, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    encrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>;
    exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): PromiseLike<ArrayBuffer>;
    exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
    generateKey(algorithm: string, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair | CryptoKey>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    importKey(format: "raw" | "pkcs8" | "spki", keyData: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    importKey(format: string, keyData: JsonWebKey | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    sign(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    unwrapKey(format: string, wrappedKey: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, unwrappingKey: CryptoKey, unwrapAlgorithm: string | Algorithm, unwrappedKeyAlgorithm: string | Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    verify(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<boolean>;
    wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: string | Algorithm): PromiseLike<ArrayBuffer>;
}
export type SubtleCryptoGlobal =  {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};
export interface SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}
export type SyncManagerGlobal =  {
    prototype: SyncManager;
    new(): SyncManager;
};
export interface Text extends CharacterData, Slotable {
    readonly assignedSlot: HTMLSlotElement | null;
    /**
     * Returns the combined data of all direct Text node siblings.
     */
    readonly wholeText: string;
    /**
     * Splits data at the given offset and returns the remainder as Text node.
     */
    splitText(offset: number): Text;
}
export type TextGlobal =  {
    prototype: Text;
    new(data?: string): Text;
};
export interface TextDecoder {
    /**
     * Returns encoding's name, lowercased.
     */
    readonly encoding: string;
    /**
     * Returns true if error mode is "fatal", and false
     * otherwise.
     */
    readonly fatal: boolean;
    /**
     * Returns true if ignore BOM flag is set, and false otherwise.
     */
    readonly ignoreBOM: boolean;
    /**
     * Returns the result of running encoding's decoder. The
     * method can be invoked zero or more times with options's stream set to
     * true, and then once without options's stream (or set to false), to process
     * a fragmented stream. If the invocation without options's stream (or set to
     * false) has no input, it's clearest to omit both arguments.
     * var string = "", decoder = new TextDecoder(encoding), buffer;
     * while(buffer = next_chunk()) {
     * string += decoder.decode(buffer, {stream:true});
     * }
     * string += decoder.decode(); // end-of-stream
     * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
     */
    decode(input?: BufferSource, options?: TextDecodeOptions): string;
}
export type TextDecoderGlobal =  {
    prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};
export interface TextEncoder {
    /**
     * Returns "utf-8".
     */
    readonly encoding: string;
    /**
     * Returns the result of running UTF-8's encoder.
     */
    encode(input?: string): Uint8Array;
}
export type TextEncoderGlobal =  {
    prototype: TextEncoder;
    new(): TextEncoder;
};
export interface TextEvent extends UIEvent {
    readonly data: string;
    initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;
    readonly DOM_INPUT_METHOD_DROP: number;
    readonly DOM_INPUT_METHOD_HANDWRITING: number;
    readonly DOM_INPUT_METHOD_IME: number;
    readonly DOM_INPUT_METHOD_KEYBOARD: number;
    readonly DOM_INPUT_METHOD_MULTIMODAL: number;
    readonly DOM_INPUT_METHOD_OPTION: number;
    readonly DOM_INPUT_METHOD_PASTE: number;
    readonly DOM_INPUT_METHOD_SCRIPT: number;
    readonly DOM_INPUT_METHOD_UNKNOWN: number;
    readonly DOM_INPUT_METHOD_VOICE: number;
}
export type TextEventGlobal =  {
    prototype: TextEvent;
    new(): TextEvent;
    readonly DOM_INPUT_METHOD_DROP: number;
    readonly DOM_INPUT_METHOD_HANDWRITING: number;
    readonly DOM_INPUT_METHOD_IME: number;
    readonly DOM_INPUT_METHOD_KEYBOARD: number;
    readonly DOM_INPUT_METHOD_MULTIMODAL: number;
    readonly DOM_INPUT_METHOD_OPTION: number;
    readonly DOM_INPUT_METHOD_PASTE: number;
    readonly DOM_INPUT_METHOD_SCRIPT: number;
    readonly DOM_INPUT_METHOD_UNKNOWN: number;
    readonly DOM_INPUT_METHOD_VOICE: number;
};
export interface TextMetrics {
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly alphabeticBaseline: number;
    readonly emHeightAscent: number;
    readonly emHeightDescent: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly hangingBaseline: number;
    /**
     * Returns the measurement described below.
     */
    readonly ideographicBaseline: number;
    readonly width: number;
}
export type TextMetricsGlobal =  {
    prototype: TextMetrics;
    new(): TextMetrics;
};
export interface TextTrackEventMap {
    "cuechange": Event;
    "error": Event;
    "load": Event;
}
export interface TextTrack extends EventTarget {
    readonly activeCues: TextTrackCueList;
    readonly cues: TextTrackCueList;
    readonly inBandMetadataTrackDispatchType: string;
    readonly kind: string;
    readonly label: string;
    readonly language: string;
    mode: TextTrackMode | number;
    oncuechange: ((this: TextTrack, ev: Event) => any) | null;
    onerror: ((this: TextTrack, ev: Event) => any) | null;
    onload: ((this: TextTrack, ev: Event) => any) | null;
    readonly readyState: number;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    readonly DISABLED: number;
    readonly ERROR: number;
    readonly HIDDEN: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    readonly SHOWING: number;
    addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type TextTrackGlobal =  {
    prototype: TextTrack;
    new(): TextTrack;
    readonly DISABLED: number;
    readonly ERROR: number;
    readonly HIDDEN: number;
    readonly LOADED: number;
    readonly LOADING: number;
    readonly NONE: number;
    readonly SHOWING: number;
};
export interface TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;
}
export interface TextTrackCue extends EventTarget {
    endTime: number;
    id: string;
    onenter: ((this: TextTrackCue, ev: Event) => any) | null;
    onexit: ((this: TextTrackCue, ev: Event) => any) | null;
    pauseOnExit: boolean;
    startTime: number;
    text: string;
    readonly track: TextTrack;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type TextTrackCueGlobal =  {
    prototype: TextTrackCue;
    new(startTime: number, endTime: number, text: string): TextTrackCue;
};
export interface TextTrackCueList {
    readonly length: number;
    getCueById(id: string): TextTrackCue;
    item(index: number): TextTrackCue;
    [index: number]: TextTrackCue;
}
export type TextTrackCueListGlobal =  {
    prototype: TextTrackCueList;
    new(): TextTrackCueList;
};
export interface TextTrackListEventMap {
    "addtrack": TrackEvent;
}
export interface TextTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
    item(index: number): TextTrack;
    addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: TextTrack;
}
export type TextTrackListGlobal =  {
    prototype: TextTrackList;
    new(): TextTrackList;
};
export interface TimeRanges {
    readonly length: number;
    end(index: number): number;
    start(index: number): number;
}
export type TimeRangesGlobal =  {
    prototype: TimeRanges;
    new(): TimeRanges;
};
export interface Touch {
    readonly altitudeAngle: number;
    readonly azimuthAngle: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly force: number;
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly radiusX: number;
    readonly radiusY: number;
    readonly rotationAngle: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: EventTarget;
    readonly touchType: TouchType;
}
export type TouchGlobal =  {
    prototype: Touch;
    new(touchInitDict: TouchInit): Touch;
};
export interface TouchEvent extends UIEvent {
    readonly altKey: boolean;
    readonly changedTouches: TouchList;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly shiftKey: boolean;
    readonly targetTouches: TouchList;
    readonly touches: TouchList;
}
export type TouchEventGlobal =  {
    prototype: TouchEvent;
    new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
};
export interface TouchList {
    readonly length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}
export type TouchListGlobal =  {
    prototype: TouchList;
    new(): TouchList;
};
export interface TrackEvent extends Event {
    readonly track: VideoTrack | AudioTrack | TextTrack | null;
}
export type TrackEventGlobal =  {
    prototype: TrackEvent;
    new(typeArg: string, eventInitDict?: TrackEventInit): TrackEvent;
};
export interface TransformStream<I = any, O = any> {
    readonly readable: ReadableStream<O>;
    readonly writable: WritableStream<I>;
}
export type TransformStreamGlobal =  {
    prototype: TransformStream;
    new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};
export interface TransformStreamDefaultController<O = any> {
    readonly desiredSize: number | null;
    enqueue(chunk: O): void;
    error(reason?: any): void;
    terminate(): void;
}
export interface TransitionEvent extends Event {
    readonly elapsedTime: number;
    readonly propertyName: string;
    readonly pseudoElement: string;
}
export type TransitionEventGlobal =  {
    prototype: TransitionEvent;
    new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
};
export interface TreeWalker {
    currentNode: Node;
    readonly filter: NodeFilter | null;
    readonly root: Node;
    readonly whatToShow: number;
    firstChild(): Node | null;
    lastChild(): Node | null;
    nextNode(): Node | null;
    nextSibling(): Node | null;
    parentNode(): Node | null;
    previousNode(): Node | null;
    previousSibling(): Node | null;
}
export type TreeWalkerGlobal =  {
    prototype: TreeWalker;
    new(): TreeWalker;
};
export interface UIEvent extends Event {
    readonly detail: number;
    readonly view: Window;
    initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number): void;
}
export type UIEventGlobal =  {
    prototype: UIEvent;
    new(typeArg: string, eventInitDict?: UIEventInit): UIEvent;
};
export interface URL {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    toJSON(): string;
}
export type URLGlobal =  {
    prototype: URL;
    new(url: string, base?: string | URL): URL;
    createObjectURL(object: any): string;
    revokeObjectURL(url: string): void;
};
export type webkitURL = URL;
export interface URLSearchParams {
    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: string, value: string): void;
    sort(): void;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}
export type URLSearchParamsGlobal =  {
    prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
};
export interface VRDisplay extends EventTarget {
    readonly capabilities: VRDisplayCapabilities;
    depthFar: number;
    depthNear: number;
    readonly displayId: number;
    readonly displayName: string;
    readonly isConnected: boolean;
    readonly isPresenting: boolean;
    readonly stageParameters: VRStageParameters | null;
    cancelAnimationFrame(handle: number): void;
    exitPresent(): Promise<void>;
    getEyeParameters(whichEye: string): VREyeParameters;
    getFrameData(frameData: VRFrameData): boolean;
    getLayers(): VRLayer[];
    /** @deprecated */
    getPose(): VRPose;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    requestPresent(layers: VRLayer[]): Promise<void>;
    resetPose(): void;
    submitFrame(pose?: VRPose): void;
}
export type VRDisplayGlobal =  {
    prototype: VRDisplay;
    new(): VRDisplay;
};
export interface VRDisplayCapabilities {
    readonly canPresent: boolean;
    readonly hasExternalDisplay: boolean;
    readonly hasOrientation: boolean;
    readonly hasPosition: boolean;
    readonly maxLayers: number;
}
export type VRDisplayCapabilitiesGlobal =  {
    prototype: VRDisplayCapabilities;
    new(): VRDisplayCapabilities;
};
export interface VRDisplayEvent extends Event {
    readonly display: VRDisplay;
    readonly reason: VRDisplayEventReason | null;
}
export type VRDisplayEventGlobal =  {
    prototype: VRDisplayEvent;
    new(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent;
};
export interface VREyeParameters {
    /** @deprecated */
    readonly fieldOfView: VRFieldOfView;
    readonly offset: Float32Array;
    readonly renderHeight: number;
    readonly renderWidth: number;
}
export type VREyeParametersGlobal =  {
    prototype: VREyeParameters;
    new(): VREyeParameters;
};
export interface VRFieldOfView {
    readonly downDegrees: number;
    readonly leftDegrees: number;
    readonly rightDegrees: number;
    readonly upDegrees: number;
}
export type VRFieldOfViewGlobal =  {
    prototype: VRFieldOfView;
    new(): VRFieldOfView;
};
export interface VRFrameData {
    readonly leftProjectionMatrix: Float32Array;
    readonly leftViewMatrix: Float32Array;
    readonly pose: VRPose;
    readonly rightProjectionMatrix: Float32Array;
    readonly rightViewMatrix: Float32Array;
    readonly timestamp: number;
}
export type VRFrameDataGlobal =  {
    prototype: VRFrameData;
    new(): VRFrameData;
};
export interface VRPose {
    readonly angularAcceleration: Float32Array | null;
    readonly angularVelocity: Float32Array | null;
    readonly linearAcceleration: Float32Array | null;
    readonly linearVelocity: Float32Array | null;
    readonly orientation: Float32Array | null;
    readonly position: Float32Array | null;
    readonly timestamp: number;
}
export type VRPoseGlobal =  {
    prototype: VRPose;
    new(): VRPose;
};
export interface VTTCue extends TextTrackCue {
    align: AlignSetting;
    line: LineAndPositionSetting;
    lineAlign: LineAlignSetting;
    position: LineAndPositionSetting;
    positionAlign: PositionAlignSetting;
    region: VTTRegion | null;
    size: number;
    snapToLines: boolean;
    text: string;
    vertical: DirectionSetting;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type VTTCueGlobal =  {
    prototype: VTTCue;
    new(startTime: number, endTime: number, text: string): VTTCue;
};
export interface VTTRegion {
    id: string;
    lines: number;
    regionAnchorX: number;
    regionAnchorY: number;
    scroll: ScrollSetting;
    viewportAnchorX: number;
    viewportAnchorY: number;
    width: number;
}
export type VTTRegionGlobal =  {
    prototype: VTTRegion;
    new(): VTTRegion;
};
export interface ValidityState {
    readonly badInput: boolean;
    readonly customError: boolean;
    readonly patternMismatch: boolean;
    readonly rangeOverflow: boolean;
    readonly rangeUnderflow: boolean;
    readonly stepMismatch: boolean;
    readonly tooLong: boolean;
    readonly tooShort: boolean;
    readonly typeMismatch: boolean;
    readonly valid: boolean;
    readonly valueMissing: boolean;
}
export type ValidityStateGlobal =  {
    prototype: ValidityState;
    new(): ValidityState;
};
export interface VideoPlaybackQuality {
    readonly corruptedVideoFrames: number;
    readonly creationTime: number;
    readonly droppedVideoFrames: number;
    readonly totalFrameDelay: number;
    readonly totalVideoFrames: number;
}
export type VideoPlaybackQualityGlobal =  {
    prototype: VideoPlaybackQuality;
    new(): VideoPlaybackQuality;
};
export interface VideoTrack {
    readonly id: string;
    kind: string;
    readonly label: string;
    language: string;
    selected: boolean;
    readonly sourceBuffer: SourceBuffer;
}
export type VideoTrackGlobal =  {
    prototype: VideoTrack;
    new(): VideoTrack;
};
export interface VideoTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}
export interface VideoTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null;
    onchange: ((this: VideoTrackList, ev: Event) => any) | null;
    onremovetrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null;
    readonly selectedIndex: number;
    getTrackById(id: string): VideoTrack | null;
    item(index: number): VideoTrack;
    addEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: VideoTrack;
}
export type VideoTrackListGlobal =  {
    prototype: VideoTrackList;
    new(): VideoTrackList;
};
export interface WEBGL_color_buffer_float {
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum;
    readonly RGBA32F_EXT: GLenum;
    readonly UNSIGNED_NORMALIZED_EXT: GLenum;
}
export interface WEBGL_compressed_texture_astc {
    getSupportedProfiles(): string[];
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: GLenum;
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: GLenum;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: GLenum;
}
export interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
}
export interface WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: GLenum;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: GLenum;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: GLenum;
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: GLenum;
}
export interface WEBGL_debug_renderer_info {
    readonly UNMASKED_RENDERER_WEBGL: GLenum;
    readonly UNMASKED_VENDOR_WEBGL: GLenum;
}
export interface WEBGL_debug_shaders {
    getTranslatedShaderSource(shader: WebGLShader): string;
}
export interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: GLenum;
}
export interface WEBGL_draw_buffers {
    drawBuffersWEBGL(buffers: GLenum[]): void;
    readonly COLOR_ATTACHMENT0_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT10_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT11_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT12_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT13_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT14_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT15_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT1_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT2_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT3_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT4_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT5_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT6_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT7_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT8_WEBGL: GLenum;
    readonly COLOR_ATTACHMENT9_WEBGL: GLenum;
    readonly DRAW_BUFFER0_WEBGL: GLenum;
    readonly DRAW_BUFFER10_WEBGL: GLenum;
    readonly DRAW_BUFFER11_WEBGL: GLenum;
    readonly DRAW_BUFFER12_WEBGL: GLenum;
    readonly DRAW_BUFFER13_WEBGL: GLenum;
    readonly DRAW_BUFFER14_WEBGL: GLenum;
    readonly DRAW_BUFFER15_WEBGL: GLenum;
    readonly DRAW_BUFFER1_WEBGL: GLenum;
    readonly DRAW_BUFFER2_WEBGL: GLenum;
    readonly DRAW_BUFFER3_WEBGL: GLenum;
    readonly DRAW_BUFFER4_WEBGL: GLenum;
    readonly DRAW_BUFFER5_WEBGL: GLenum;
    readonly DRAW_BUFFER6_WEBGL: GLenum;
    readonly DRAW_BUFFER7_WEBGL: GLenum;
    readonly DRAW_BUFFER8_WEBGL: GLenum;
    readonly DRAW_BUFFER9_WEBGL: GLenum;
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: GLenum;
    readonly MAX_DRAW_BUFFERS_WEBGL: GLenum;
}
export interface WEBGL_lose_context {
    loseContext(): void;
    restoreContext(): void;
}
export interface WaveShaperNode extends AudioNode {
    curve: Float32Array | null;
    oversample: OverSampleType;
}
export type WaveShaperNodeGlobal =  {
    prototype: WaveShaperNode;
    new(context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
};
export interface WebAuthentication {
    getAssertion(assertionChallenge: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, options?: AssertionOptions): Promise<WebAuthnAssertion>;
    makeCredential(accountInformation: Account, cryptoParameters: ScopedCredentialParameters[], attestationChallenge: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, options?: ScopedCredentialOptions): Promise<ScopedCredentialInfo>;
}
export type WebAuthenticationGlobal =  {
    prototype: WebAuthentication;
    new(): WebAuthentication;
};
export interface WebAuthnAssertion {
    readonly authenticatorData: ArrayBuffer;
    readonly clientData: ArrayBuffer;
    readonly credential: ScopedCredential;
    readonly signature: ArrayBuffer;
}
export type WebAuthnAssertionGlobal =  {
    prototype: WebAuthnAssertion;
    new(): WebAuthnAssertion;
};
export interface WebGLActiveInfo {
    readonly name: string;
    readonly size: GLint;
    readonly type: GLenum;
}
export type WebGLActiveInfoGlobal =  {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};
export interface WebGLBuffer extends WebGLObject {
}
export type WebGLBufferGlobal =  {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
};
export interface WebGLContextEvent extends Event {
    readonly statusMessage: string;
}
export type WebGLContextEventGlobal =  {
    prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};
export interface WebGLFramebuffer extends WebGLObject {
}
export type WebGLFramebufferGlobal =  {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};
export interface WebGLObject {
}
export type WebGLObjectGlobal =  {
    prototype: WebGLObject;
    new(): WebGLObject;
};
export interface WebGLProgram extends WebGLObject {
}
export type WebGLProgramGlobal =  {
    prototype: WebGLProgram;
    new(): WebGLProgram;
};
export interface WebGLRenderbuffer extends WebGLObject {
}
export type WebGLRenderbufferGlobal =  {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};
export interface WebGLRenderingContext extends WebGLRenderingContextBase {
}
export type WebGLRenderingContextGlobal =  {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALPHA: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly ALWAYS: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly BACK: GLenum;
    readonly BLEND: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly BYTE: GLenum;
    readonly CCW: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly CULL_FACE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly CW: GLenum;
    readonly DECR: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DITHER: GLenum;
    readonly DONT_CARE: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly EQUAL: GLenum;
    readonly FASTEST: GLenum;
    readonly FLOAT: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRONT: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly GEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly INCR: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly INT: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVERT: GLenum;
    readonly KEEP: GLenum;
    readonly LEQUAL: GLenum;
    readonly LESS: GLenum;
    readonly LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly NEVER: GLenum;
    readonly NICEST: GLenum;
    readonly NONE: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly NO_ERROR: GLenum;
    readonly ONE: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly POINTS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERER: GLenum;
    readonly REPEAT: GLenum;
    readonly REPLACE: GLenum;
    readonly RGB: GLenum;
    readonly RGB565: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGBA: GLenum;
    readonly RGBA4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly SHORT: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly VENDOR: GLenum;
    readonly VERSION: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly VIEWPORT: GLenum;
    readonly ZERO: GLenum;
};
export interface WebGLRenderingContextBase {
    readonly canvas: HTMLCanvasElement;
    readonly drawingBufferHeight: GLsizei;
    readonly drawingBufferWidth: GLsizei;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): GLenum;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: string): any;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isContextLost(): boolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly ACTIVE_ATTRIBUTES: GLenum;
    readonly ACTIVE_TEXTURE: GLenum;
    readonly ACTIVE_UNIFORMS: GLenum;
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    readonly ALPHA: GLenum;
    readonly ALPHA_BITS: GLenum;
    readonly ALWAYS: GLenum;
    readonly ARRAY_BUFFER: GLenum;
    readonly ARRAY_BUFFER_BINDING: GLenum;
    readonly ATTACHED_SHADERS: GLenum;
    readonly BACK: GLenum;
    readonly BLEND: GLenum;
    readonly BLEND_COLOR: GLenum;
    readonly BLEND_DST_ALPHA: GLenum;
    readonly BLEND_DST_RGB: GLenum;
    readonly BLEND_EQUATION: GLenum;
    readonly BLEND_EQUATION_ALPHA: GLenum;
    readonly BLEND_EQUATION_RGB: GLenum;
    readonly BLEND_SRC_ALPHA: GLenum;
    readonly BLEND_SRC_RGB: GLenum;
    readonly BLUE_BITS: GLenum;
    readonly BOOL: GLenum;
    readonly BOOL_VEC2: GLenum;
    readonly BOOL_VEC3: GLenum;
    readonly BOOL_VEC4: GLenum;
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    readonly BUFFER_SIZE: GLenum;
    readonly BUFFER_USAGE: GLenum;
    readonly BYTE: GLenum;
    readonly CCW: GLenum;
    readonly CLAMP_TO_EDGE: GLenum;
    readonly COLOR_ATTACHMENT0: GLenum;
    readonly COLOR_BUFFER_BIT: GLenum;
    readonly COLOR_CLEAR_VALUE: GLenum;
    readonly COLOR_WRITEMASK: GLenum;
    readonly COMPILE_STATUS: GLenum;
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    readonly CONSTANT_ALPHA: GLenum;
    readonly CONSTANT_COLOR: GLenum;
    readonly CONTEXT_LOST_WEBGL: GLenum;
    readonly CULL_FACE: GLenum;
    readonly CULL_FACE_MODE: GLenum;
    readonly CURRENT_PROGRAM: GLenum;
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    readonly CW: GLenum;
    readonly DECR: GLenum;
    readonly DECR_WRAP: GLenum;
    readonly DELETE_STATUS: GLenum;
    readonly DEPTH_ATTACHMENT: GLenum;
    readonly DEPTH_BITS: GLenum;
    readonly DEPTH_BUFFER_BIT: GLenum;
    readonly DEPTH_CLEAR_VALUE: GLenum;
    readonly DEPTH_COMPONENT: GLenum;
    readonly DEPTH_COMPONENT16: GLenum;
    readonly DEPTH_FUNC: GLenum;
    readonly DEPTH_RANGE: GLenum;
    readonly DEPTH_STENCIL: GLenum;
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    readonly DEPTH_TEST: GLenum;
    readonly DEPTH_WRITEMASK: GLenum;
    readonly DITHER: GLenum;
    readonly DONT_CARE: GLenum;
    readonly DST_ALPHA: GLenum;
    readonly DST_COLOR: GLenum;
    readonly DYNAMIC_DRAW: GLenum;
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    readonly EQUAL: GLenum;
    readonly FASTEST: GLenum;
    readonly FLOAT: GLenum;
    readonly FLOAT_MAT2: GLenum;
    readonly FLOAT_MAT3: GLenum;
    readonly FLOAT_MAT4: GLenum;
    readonly FLOAT_VEC2: GLenum;
    readonly FLOAT_VEC3: GLenum;
    readonly FLOAT_VEC4: GLenum;
    readonly FRAGMENT_SHADER: GLenum;
    readonly FRAMEBUFFER: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    readonly FRAMEBUFFER_BINDING: GLenum;
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    readonly FRONT: GLenum;
    readonly FRONT_AND_BACK: GLenum;
    readonly FRONT_FACE: GLenum;
    readonly FUNC_ADD: GLenum;
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    readonly FUNC_SUBTRACT: GLenum;
    readonly GENERATE_MIPMAP_HINT: GLenum;
    readonly GEQUAL: GLenum;
    readonly GREATER: GLenum;
    readonly GREEN_BITS: GLenum;
    readonly HIGH_FLOAT: GLenum;
    readonly HIGH_INT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    readonly INCR: GLenum;
    readonly INCR_WRAP: GLenum;
    readonly INT: GLenum;
    readonly INT_VEC2: GLenum;
    readonly INT_VEC3: GLenum;
    readonly INT_VEC4: GLenum;
    readonly INVALID_ENUM: GLenum;
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    readonly INVALID_OPERATION: GLenum;
    readonly INVALID_VALUE: GLenum;
    readonly INVERT: GLenum;
    readonly KEEP: GLenum;
    readonly LEQUAL: GLenum;
    readonly LESS: GLenum;
    readonly LINEAR: GLenum;
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    readonly LINES: GLenum;
    readonly LINE_LOOP: GLenum;
    readonly LINE_STRIP: GLenum;
    readonly LINE_WIDTH: GLenum;
    readonly LINK_STATUS: GLenum;
    readonly LOW_FLOAT: GLenum;
    readonly LOW_INT: GLenum;
    readonly LUMINANCE: GLenum;
    readonly LUMINANCE_ALPHA: GLenum;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_TEXTURE_SIZE: GLenum;
    readonly MAX_VARYING_VECTORS: GLenum;
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    readonly MAX_VIEWPORT_DIMS: GLenum;
    readonly MEDIUM_FLOAT: GLenum;
    readonly MEDIUM_INT: GLenum;
    readonly MIRRORED_REPEAT: GLenum;
    readonly NEAREST: GLenum;
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    readonly NEVER: GLenum;
    readonly NICEST: GLenum;
    readonly NONE: GLenum;
    readonly NOTEQUAL: GLenum;
    readonly NO_ERROR: GLenum;
    readonly ONE: GLenum;
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    readonly ONE_MINUS_DST_COLOR: GLenum;
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    readonly OUT_OF_MEMORY: GLenum;
    readonly PACK_ALIGNMENT: GLenum;
    readonly POINTS: GLenum;
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    readonly POLYGON_OFFSET_FILL: GLenum;
    readonly POLYGON_OFFSET_UNITS: GLenum;
    readonly RED_BITS: GLenum;
    readonly RENDERBUFFER: GLenum;
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    readonly RENDERBUFFER_BINDING: GLenum;
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    readonly RENDERBUFFER_HEIGHT: GLenum;
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    readonly RENDERBUFFER_WIDTH: GLenum;
    readonly RENDERER: GLenum;
    readonly REPEAT: GLenum;
    readonly REPLACE: GLenum;
    readonly RGB: GLenum;
    readonly RGB565: GLenum;
    readonly RGB5_A1: GLenum;
    readonly RGBA: GLenum;
    readonly RGBA4: GLenum;
    readonly SAMPLER_2D: GLenum;
    readonly SAMPLER_CUBE: GLenum;
    readonly SAMPLES: GLenum;
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    readonly SAMPLE_BUFFERS: GLenum;
    readonly SAMPLE_COVERAGE: GLenum;
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    readonly SCISSOR_BOX: GLenum;
    readonly SCISSOR_TEST: GLenum;
    readonly SHADER_TYPE: GLenum;
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    readonly SHORT: GLenum;
    readonly SRC_ALPHA: GLenum;
    readonly SRC_ALPHA_SATURATE: GLenum;
    readonly SRC_COLOR: GLenum;
    readonly STATIC_DRAW: GLenum;
    readonly STENCIL_ATTACHMENT: GLenum;
    readonly STENCIL_BACK_FAIL: GLenum;
    readonly STENCIL_BACK_FUNC: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_BACK_REF: GLenum;
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    readonly STENCIL_BITS: GLenum;
    readonly STENCIL_BUFFER_BIT: GLenum;
    readonly STENCIL_CLEAR_VALUE: GLenum;
    readonly STENCIL_FAIL: GLenum;
    readonly STENCIL_FUNC: GLenum;
    readonly STENCIL_INDEX8: GLenum;
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    readonly STENCIL_REF: GLenum;
    readonly STENCIL_TEST: GLenum;
    readonly STENCIL_VALUE_MASK: GLenum;
    readonly STENCIL_WRITEMASK: GLenum;
    readonly STREAM_DRAW: GLenum;
    readonly SUBPIXEL_BITS: GLenum;
    readonly TEXTURE: GLenum;
    readonly TEXTURE0: GLenum;
    readonly TEXTURE1: GLenum;
    readonly TEXTURE10: GLenum;
    readonly TEXTURE11: GLenum;
    readonly TEXTURE12: GLenum;
    readonly TEXTURE13: GLenum;
    readonly TEXTURE14: GLenum;
    readonly TEXTURE15: GLenum;
    readonly TEXTURE16: GLenum;
    readonly TEXTURE17: GLenum;
    readonly TEXTURE18: GLenum;
    readonly TEXTURE19: GLenum;
    readonly TEXTURE2: GLenum;
    readonly TEXTURE20: GLenum;
    readonly TEXTURE21: GLenum;
    readonly TEXTURE22: GLenum;
    readonly TEXTURE23: GLenum;
    readonly TEXTURE24: GLenum;
    readonly TEXTURE25: GLenum;
    readonly TEXTURE26: GLenum;
    readonly TEXTURE27: GLenum;
    readonly TEXTURE28: GLenum;
    readonly TEXTURE29: GLenum;
    readonly TEXTURE3: GLenum;
    readonly TEXTURE30: GLenum;
    readonly TEXTURE31: GLenum;
    readonly TEXTURE4: GLenum;
    readonly TEXTURE5: GLenum;
    readonly TEXTURE6: GLenum;
    readonly TEXTURE7: GLenum;
    readonly TEXTURE8: GLenum;
    readonly TEXTURE9: GLenum;
    readonly TEXTURE_2D: GLenum;
    readonly TEXTURE_BINDING_2D: GLenum;
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    readonly TEXTURE_MAG_FILTER: GLenum;
    readonly TEXTURE_MIN_FILTER: GLenum;
    readonly TEXTURE_WRAP_S: GLenum;
    readonly TEXTURE_WRAP_T: GLenum;
    readonly TRIANGLES: GLenum;
    readonly TRIANGLE_FAN: GLenum;
    readonly TRIANGLE_STRIP: GLenum;
    readonly UNPACK_ALIGNMENT: GLenum;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    readonly UNSIGNED_BYTE: GLenum;
    readonly UNSIGNED_INT: GLenum;
    readonly UNSIGNED_SHORT: GLenum;
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    readonly VALIDATE_STATUS: GLenum;
    readonly VENDOR: GLenum;
    readonly VERSION: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    readonly VERTEX_SHADER: GLenum;
    readonly VIEWPORT: GLenum;
    readonly ZERO: GLenum;
}
export interface WebGLShader extends WebGLObject {
}
export type WebGLShaderGlobal =  {
    prototype: WebGLShader;
    new(): WebGLShader;
};
export interface WebGLShaderPrecisionFormat {
    readonly precision: GLint;
    readonly rangeMax: GLint;
    readonly rangeMin: GLint;
}
export type WebGLShaderPrecisionFormatGlobal =  {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};
export interface WebGLTexture extends WebGLObject {
}
export type WebGLTextureGlobal =  {
    prototype: WebGLTexture;
    new(): WebGLTexture;
};
export interface WebGLUniformLocation {
}
export type WebGLUniformLocationGlobal =  {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};
export interface WebGLVertexArrayObjectOES extends WebGLObject {
}
export interface WebKitPoint {
    x: number;
    y: number;
}
export type WebKitPointGlobal =  {
    prototype: WebKitPoint;
    new(x?: number, y?: number): WebKitPoint;
};
export interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}
export interface WebSocket extends EventTarget {
    binaryType: BinaryType;
    readonly bufferedAmount: number;
    readonly extensions: string;
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    readonly protocol: string;
    readonly readyState: number;
    readonly url: string;
    close(code?: number, reason?: string): void;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type WebSocketGlobal =  {
    prototype: WebSocket;
    new(url: string, protocols?: string | string[]): WebSocket;
    readonly CLOSED: number;
    readonly CLOSING: number;
    readonly CONNECTING: number;
    readonly OPEN: number;
};
export interface WheelEvent extends MouseEvent {
    readonly deltaMode: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    getCurrentPoint(element: Element): void;
    initWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
}
export type WheelEventGlobal =  {
    prototype: WheelEvent;
    new(typeArg: string, eventInitDict?: WheelEventInit): WheelEvent;
    readonly DOM_DELTA_LINE: number;
    readonly DOM_DELTA_PAGE: number;
    readonly DOM_DELTA_PIXEL: number;
};
export interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
    "abort": UIEvent;
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "blur": FocusEvent;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "compassneedscalibration": Event;
    "contextmenu": MouseEvent;
    "dblclick": MouseEvent;
    "devicelight": DeviceLightEvent;
    "devicemotion": DeviceMotionEvent;
    "deviceorientation": DeviceOrientationEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "hashchange": HashChangeEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "message": MessageEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "mousewheel": Event;
    "MSGestureChange": Event;
    "MSGestureDoubleTap": Event;
    "MSGestureEnd": Event;
    "MSGestureHold": Event;
    "MSGestureStart": Event;
    "MSGestureTap": Event;
    "MSInertiaStart": Event;
    "MSPointerCancel": Event;
    "MSPointerDown": Event;
    "MSPointerEnter": Event;
    "MSPointerLeave": Event;
    "MSPointerMove": Event;
    "MSPointerOut": Event;
    "MSPointerOver": Event;
    "MSPointerUp": Event;
    "offline": Event;
    "online": Event;
    "orientationchange": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "popstate": PopStateEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "readystatechange": ProgressEvent;
    "reset": Event;
    "resize": UIEvent;
    "scroll": UIEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "stalled": Event;
    "storage": StorageEvent;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "unload": Event;
    "volumechange": Event;
    "vrdisplayactivate": Event;
    "vrdisplayblur": Event;
    "vrdisplayconnect": Event;
    "vrdisplaydeactivate": Event;
    "vrdisplaydisconnect": Event;
    "vrdisplayfocus": Event;
    "vrdisplaypointerrestricted": Event;
    "vrdisplaypointerunrestricted": Event;
    "vrdisplaypresentchange": Event;
    "waiting": Event;
}
export interface Window extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64, GlobalFetch, WindowOrWorkerGlobalScope, WindowEventHandlers {
    readonly applicationCache: ApplicationCache;
    readonly caches: CacheStorage;
    readonly clientInformation: Navigator;
    readonly closed: boolean;
    readonly crypto: Crypto;
    customElements: CustomElementRegistry;
    defaultStatus: string;
    readonly devicePixelRatio: number;
    readonly doNotTrack: string;
    readonly document: Document;
    readonly event: Event | undefined;
    /** @deprecated */
    readonly external: External;
    readonly frameElement: Element;
    readonly frames: Window;
    readonly history: History;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly isSecureContext: boolean;
    readonly length: number;
    location: Location;
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    readonly msContentScript: ExtensionScriptApis;
    name: string;
    readonly navigator: Navigator;
    offscreenBuffering: string | boolean;
    oncompassneedscalibration: ((this: Window, ev: Event) => any) | null;
    ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    onmousewheel: ((this: Window, ev: Event) => any) | null;
    onmsgesturechange: ((this: Window, ev: Event) => any) | null;
    onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null;
    onmsgestureend: ((this: Window, ev: Event) => any) | null;
    onmsgesturehold: ((this: Window, ev: Event) => any) | null;
    onmsgesturestart: ((this: Window, ev: Event) => any) | null;
    onmsgesturetap: ((this: Window, ev: Event) => any) | null;
    onmsinertiastart: ((this: Window, ev: Event) => any) | null;
    onmspointercancel: ((this: Window, ev: Event) => any) | null;
    onmspointerdown: ((this: Window, ev: Event) => any) | null;
    onmspointerenter: ((this: Window, ev: Event) => any) | null;
    onmspointerleave: ((this: Window, ev: Event) => any) | null;
    onmspointermove: ((this: Window, ev: Event) => any) | null;
    onmspointerout: ((this: Window, ev: Event) => any) | null;
    onmspointerover: ((this: Window, ev: Event) => any) | null;
    onmspointerup: ((this: Window, ev: Event) => any) | null;
    /** @deprecated */
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    onreadystatechange: ((this: Window, ev: ProgressEvent) => any) | null;
    onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
    onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
    opener: any;
    /** @deprecated */
    readonly orientation: string | number;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: Window;
    readonly performance: Performance;
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenLeft: number;
    readonly screenTop: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollX: number;
    readonly scrollY: number;
    readonly scrollbars: BarProp;
    readonly self: Window;
    readonly speechSynthesis: SpeechSynthesis;
    status: string;
    readonly statusbar: BarProp;
    readonly styleMedia: StyleMedia;
    readonly toolbar: BarProp;
    readonly top: Window;
    readonly window: Window;
    alert(message?: any): void;
    blur(): void;
    cancelAnimationFrame(handle: number): void;
    /** @deprecated */
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList;
    getSelection(): Selection;
    matchMedia(query: string): MediaQueryList;
    moveBy(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    msWriteProfilerMark(profilerMarkName: string): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window | null;
    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    /** @deprecated */
    releaseEvents(): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    resizeBy(x: number, y: number): void;
    resizeTo(x: number, y: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    stop(): void;
    webkitCancelAnimationFrame(handle: number): void;
    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type WindowGlobal =  {
    prototype: Window;
    new(): Window;
};
export interface WindowBase64 {
    atob(encodedString: string): string;
    btoa(rawString: string): string;
}
export interface WindowConsole {
    readonly console: Console;
}
export interface WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "hashchange": HashChangeEvent;
    "languagechange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "rejectionhandled": Event;
    "storage": StorageEvent;
    "unhandledrejection": PromiseRejectionEvent;
    "unload": Event;
}
export interface WindowEventHandlers {
    onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    onrejectionhandled: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export interface WindowLocalStorage {
    readonly localStorage: Storage;
}
export interface WindowOrWorkerGlobalScope {
    readonly caches: CacheStorage;
    readonly crypto: Crypto;
    readonly indexedDB: IDBFactory;
    readonly origin: string;
    readonly performance: Performance;
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(handle?: number): void;
    clearTimeout(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    queueMicrotask(callback: Function): void;
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
}
export interface WindowSessionStorage {
    readonly sessionStorage: Storage;
}
export interface WindowTimers {
}
export interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
}
export interface Worker extends EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => any) | null;
    postMessage(message: any, transfer?: Transferable[]): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type WorkerGlobal =  {
    prototype: Worker;
    new(stringUrl: string, options?: WorkerOptions): Worker;
};
export interface Worklet {
    addModule(moduleURL: string, options?: WorkletOptions): Promise<void>;
}
export type WorkletGlobal =  {
    prototype: Worklet;
    new(): Worklet;
};
export interface WritableStream<W = any> {
    readonly locked: boolean;
    abort(reason?: any): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}
export type WritableStreamGlobal =  {
    prototype: WritableStream;
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};
export interface WritableStreamDefaultController {
    error(error?: any): void;
}
export interface WritableStreamDefaultWriter<W = any> {
    readonly closed: Promise<void>;
    readonly desiredSize: number | null;
    readonly ready: Promise<void>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk: W): Promise<void>;
}
export interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type XMLDocumentGlobal =  {
    prototype: XMLDocument;
    new(): XMLDocument;
};
export interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}
export interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /**
     * Returns client's state.
     */
    readonly readyState: number;
    /**
     * Returns the response's body.
     */
    readonly response: any;
    /**
     * Returns the text response.
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     */
    readonly responseText: string;
    /**
     * Returns the response type.
     * Can be set to change the response type. Values are:
     * the empty string (default),
     * "arraybuffer",
     * "blob",
     * "document",
     * "json", and
     * "text".
     * When set: setting to "document" is ignored if current global object is not a Window object.
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    /**
     * Returns the document response.
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
     */
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the
     * request has not yet completed, and the synchronous flag is unset, a timeout event will then be dispatched, or a
     * "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    timeout: number;
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is
     * transferred to a server.
     */
    readonly upload: XMLHttpRequestUpload;
    /**
     * True when credentials are to be included in a cross-origin request. False when they are
     * to be excluded in a cross-origin request and when cookies are to be ignored in its response.
     * Initially false.
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     */
    withCredentials: boolean;
    /**
     * Cancels any network activity.
     */
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    /**
     * Sets the request method, request URL, and synchronous flag.
     * Throws a "SyntaxError" DOMException if either method is not a
     * valid HTTP method or url cannot be parsed.
     * Throws a "SecurityError" DOMException if method is a
     * case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     */
    open(method: string, url: string): void;
    open(method: string, url: string, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * Acts as if the `Content-Type` header value for response is mime.
     * (It does not actually change the header though.)
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     */
    overrideMimeType(mime: string): void;
    /**
     * Initiates the request. The optional argument provides the request body. The argument is ignored if request method is GET or HEAD.
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     */
    send(body?: Document | BodyInit | null): void;
    /**
     * Combines a header in author request headers.
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     * Throws a "SyntaxError" DOMException if name is not a header name
     * or if value is not a header value.
     */
    setRequestHeader(name: string, value: string): void;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type XMLHttpRequestGlobal =  {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly DONE: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly OPENED: number;
    readonly UNSENT: number;
};
export interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
    "timeout": ProgressEvent;
}
export interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type XMLHttpRequestEventTargetGlobal =  {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};
export interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type XMLHttpRequestUploadGlobal =  {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};
export interface XMLSerializer {
    serializeToString(root: Node): string;
}
export type XMLSerializerGlobal =  {
    prototype: XMLSerializer;
    new(): XMLSerializer;
};
export interface XPathEvaluator {
    createExpression(expression: string, resolver: XPathNSResolver): XPathExpression;
    createNSResolver(nodeResolver?: Node): XPathNSResolver;
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | ((prefix: string) => string | null) | null, type: number, result: XPathResult | null): XPathResult;
}
export type XPathEvaluatorGlobal =  {
    prototype: XPathEvaluator;
    new(): XPathEvaluator;
};
export interface XPathExpression {
    evaluate(contextNode: Node, type: number, result: XPathResult | null): XPathResult;
}
export type XPathExpressionGlobal =  {
    prototype: XPathExpression;
    new(): XPathExpression;
};
export interface XPathNSResolver {
    lookupNamespaceURI(prefix: string): string | null;
}
export type XPathNSResolverGlobal =  {
    prototype: XPathNSResolver;
    new(): XPathNSResolver;
};
export interface XPathResult {
    readonly booleanValue: boolean;
    readonly invalidIteratorState: boolean;
    readonly numberValue: number;
    readonly resultType: number;
    readonly singleNodeValue: Node;
    readonly snapshotLength: number;
    readonly stringValue: string;
    iterateNext(): Node;
    snapshotItem(index: number): Node;
    readonly ANY_TYPE: number;
    readonly ANY_UNORDERED_NODE_TYPE: number;
    readonly BOOLEAN_TYPE: number;
    readonly FIRST_ORDERED_NODE_TYPE: number;
    readonly NUMBER_TYPE: number;
    readonly ORDERED_NODE_ITERATOR_TYPE: number;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly STRING_TYPE: number;
    readonly UNORDERED_NODE_ITERATOR_TYPE: number;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
}
export type XPathResultGlobal =  {
    prototype: XPathResult;
    new(): XPathResult;
    readonly ANY_TYPE: number;
    readonly ANY_UNORDERED_NODE_TYPE: number;
    readonly BOOLEAN_TYPE: number;
    readonly FIRST_ORDERED_NODE_TYPE: number;
    readonly NUMBER_TYPE: number;
    readonly ORDERED_NODE_ITERATOR_TYPE: number;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: number;
    readonly STRING_TYPE: number;
    readonly UNORDERED_NODE_ITERATOR_TYPE: number;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: number;
};
export interface XSLTProcessor {
    clearParameters(): void;
    getParameter(namespaceURI: string, localName: string): any;
    importStylesheet(style: Node): void;
    removeParameter(namespaceURI: string, localName: string): void;
    reset(): void;
    setParameter(namespaceURI: string, localName: string, value: any): void;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, document: Document): DocumentFragment;
}
export type XSLTProcessorGlobal =  {
    prototype: XSLTProcessor;
    new(): XSLTProcessor;
};
export interface webkitRTCPeerConnection extends RTCPeerConnection {
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: webkitRTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: webkitRTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
export type webkitRTCPeerConnectionGlobal =  {
    prototype: webkitRTCPeerConnection;
    new(configuration: RTCConfiguration): webkitRTCPeerConnection;
};

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
export interface BlobCallback {
    (blob: Blob | null): void;
}
export interface DecodeErrorCallback {
    (error: DOMException): void;
}
export interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
export interface ErrorEventHandler {
    (event: Event | string, source?: string, fileno?: number, columnNumber?: number, error?: Error): void;
}
export interface EventHandlerNonNull {
    (event: Event): any;
}
export interface ForEachCallback {
    (keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, status: MediaKeyStatus): void;
}
export interface FrameRequestCallback {
    (time: number): void;
}
export interface FunctionStringCallback {
    (data: string): void;
}
export interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}
export interface MSLaunchUriCallback {
    (): void;
}
export interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}
export interface NavigatorUserMediaErrorCallback {
    (error: MediaStreamError): void;
}
export interface NavigatorUserMediaSuccessCallback {
    (stream: MediaStream): void;
}
export interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
export interface OnBeforeUnloadEventHandlerNonNull {
    (event: Event): string | null;
}
export interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: any): any;
}
export interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}
export interface PositionCallback {
    (position: Position): void;
}
export interface PositionErrorCallback {
    (positionError: PositionError): void;
}
export interface QueuingStrategySizeCallback<T = any> {
    (chunk: T): number;
}
export interface RTCPeerConnectionErrorCallback {
    (error: DOMException): void;
}
export interface RTCSessionDescriptionCallback {
    (description: RTCSessionDescriptionInit): void;
}
export interface RTCStatsCallback {
    (report: RTCStatsReport): void;
}
export interface ReadableByteStreamControllerCallback {
    (controller: ReadableByteStreamController): void | PromiseLike<void>;
}
export interface ReadableStreamDefaultControllerCallback<R> {
    (controller: ReadableStreamDefaultController<R>): void | PromiseLike<void>;
}
export interface ReadableStreamErrorCallback {
    (reason: any): void | PromiseLike<void>;
}
export interface TransformStreamDefaultControllerCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}
export interface TransformStreamDefaultControllerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}
export interface VoidFunction {
    (): void;
}
export interface WritableStreamDefaultControllerCloseCallback {
    (): void | PromiseLike<void>;
}
export interface WritableStreamDefaultControllerStartCallback {
    (controller: WritableStreamDefaultController): void | PromiseLike<void>;
}
export interface WritableStreamDefaultControllerWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}
export interface WritableStreamErrorCallback {
    (reason: any): void | PromiseLike<void>;
}
export interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "basefont": HTMLBaseFontElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableDataCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableHeaderCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}
export interface HTMLElementDeprecatedTagNameMap {
    "listing": HTMLPreElement;
    "xmp": HTMLPreElement;
}
export interface SVGElementTagNameMap {
    "circle": SVGCircleElement;
    "clipPath": SVGClipPathElement;
    "defs": SVGDefsElement;
    "desc": SVGDescElement;
    "ellipse": SVGEllipseElement;
    "feBlend": SVGFEBlendElement;
    "feColorMatrix": SVGFEColorMatrixElement;
    "feComponentTransfer": SVGFEComponentTransferElement;
    "feComposite": SVGFECompositeElement;
    "feConvolveMatrix": SVGFEConvolveMatrixElement;
    "feDiffuseLighting": SVGFEDiffuseLightingElement;
    "feDisplacementMap": SVGFEDisplacementMapElement;
    "feDistantLight": SVGFEDistantLightElement;
    "feFlood": SVGFEFloodElement;
    "feFuncA": SVGFEFuncAElement;
    "feFuncB": SVGFEFuncBElement;
    "feFuncG": SVGFEFuncGElement;
    "feFuncR": SVGFEFuncRElement;
    "feGaussianBlur": SVGFEGaussianBlurElement;
    "feImage": SVGFEImageElement;
    "feMerge": SVGFEMergeElement;
    "feMergeNode": SVGFEMergeNodeElement;
    "feMorphology": SVGFEMorphologyElement;
    "feOffset": SVGFEOffsetElement;
    "fePointLight": SVGFEPointLightElement;
    "feSpecularLighting": SVGFESpecularLightingElement;
    "feSpotLight": SVGFESpotLightElement;
    "feTile": SVGFETileElement;
    "feTurbulence": SVGFETurbulenceElement;
    "filter": SVGFilterElement;
    "foreignObject": SVGForeignObjectElement;
    "g": SVGGElement;
    "image": SVGImageElement;
    "line": SVGLineElement;
    "linearGradient": SVGLinearGradientElement;
    "marker": SVGMarkerElement;
    "mask": SVGMaskElement;
    "metadata": SVGMetadataElement;
    "path": SVGPathElement;
    "pattern": SVGPatternElement;
    "polygon": SVGPolygonElement;
    "polyline": SVGPolylineElement;
    "radialGradient": SVGRadialGradientElement;
    "rect": SVGRectElement;
    "stop": SVGStopElement;
    "svg": SVGSVGElement;
    "switch": SVGSwitchElement;
    "symbol": SVGSymbolElement;
    "text": SVGTextElement;
    "textPath": SVGTextPathElement;
    "tspan": SVGTSpanElement;
    "use": SVGUseElement;
    "view": SVGViewElement;
}

/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */
export interface ElementTagNameMap extends HTMLElementTagNameMap, SVGElementTagNameMap { }
export type Audio =  {
    new(src?: string): HTMLAudioElement;
};
export type Image =  {
    new(width?: number, height?: number): HTMLImageElement;
};
export type Option =  {
    new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement;
};
export type applicationCache =  ApplicationCache;
export type cachesGlobalv1 =  CacheStorage;
export type clientInformation =  Navigator;
export type closed =  boolean;
export type cryptoGlobalv1 =  Crypto;
export type customElements =  CustomElementRegistry;
export type defaultStatus =  string;
export type devicePixelRatio =  number;
export type doNotTrack =  string;
export type document =  Document;
export type event =  Event | undefined;
/** @deprecated */
export type external =  External;
export type frameElement =  Element;
export type frames =  Window;
export type history =  History;
export type innerHeight =  number;
export type innerWidth =  number;
export type isSecureContext =  boolean;
export type length =  number;
export type location =  Location;
export type locationbar =  BarProp;
export type menubar =  BarProp;
export type msContentScript =  ExtensionScriptApis;
export type name =  never;
export type navigator =  Navigator;
export type offscreenBuffering =  string | boolean;
export type oncompassneedscalibration =  ((this: Window, ev: Event) => any) | null;
export type ondevicelight =  ((this: Window, ev: DeviceLightEvent) => any) | null;
export type ondevicemotion =  ((this: Window, ev: DeviceMotionEvent) => any) | null;
export type ondeviceorientation =  ((this: Window, ev: DeviceOrientationEvent) => any) | null;
export type onmousewheel =  ((this: Window, ev: Event) => any) | null;
export type onmsgesturechange =  ((this: Window, ev: Event) => any) | null;
export type onmsgesturedoubletap =  ((this: Window, ev: Event) => any) | null;
export type onmsgestureend =  ((this: Window, ev: Event) => any) | null;
export type onmsgesturehold =  ((this: Window, ev: Event) => any) | null;
export type onmsgesturestart =  ((this: Window, ev: Event) => any) | null;
export type onmsgesturetap =  ((this: Window, ev: Event) => any) | null;
export type onmsinertiastart =  ((this: Window, ev: Event) => any) | null;
export type onmspointercancel =  ((this: Window, ev: Event) => any) | null;
export type onmspointerdown =  ((this: Window, ev: Event) => any) | null;
export type onmspointerenter =  ((this: Window, ev: Event) => any) | null;
export type onmspointerleave =  ((this: Window, ev: Event) => any) | null;
export type onmspointermove =  ((this: Window, ev: Event) => any) | null;
export type onmspointerout =  ((this: Window, ev: Event) => any) | null;
export type onmspointerover =  ((this: Window, ev: Event) => any) | null;
export type onmspointerup =  ((this: Window, ev: Event) => any) | null;
/** @deprecated */
export type onorientationchange =  ((this: Window, ev: Event) => any) | null;
export type onreadystatechange =  ((this: Window, ev: ProgressEvent) => any) | null;
export type onvrdisplayactivate =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplayblur =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplayconnect =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplaydeactivate =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplaydisconnect =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplayfocus =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplaypointerrestricted =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplaypointerunrestricted =  ((this: Window, ev: Event) => any) | null;
export type onvrdisplaypresentchange =  ((this: Window, ev: Event) => any) | null;
export type opener =  any;
/** @deprecated */
export type orientation =  string | number;
export type outerHeight =  number;
export type outerWidth =  number;
export type pageXOffset =  number;
export type pageYOffset =  number;
export type parent =  Window;
export type performanceGlobalv1 =  Performance;
export type personalbar =  BarProp;
export type screen =  Screen;
export type screenLeft =  number;
export type screenTop =  number;
export type screenX =  number;
export type screenY =  number;
export type scrollX =  number;
export type scrollY =  number;
export type scrollbars =  BarProp;
export type self =  Window;
export type speechSynthesis =  SpeechSynthesis;
export type status =  string;
export type statusbar =  BarProp;
export type styleMedia =  StyleMedia;
export type toolbar =  BarProp;
export type top =  Window;
export type window =  Window;
export type alert = (message?: any) =>  void;
export type blur = () =>  void;
export type cancelAnimationFrame = (handle: number) =>  void;
/** @deprecated */
export type captureEvents = () =>  void;
export type close = () =>  void;
export type confirm = (message?: string) =>  boolean;
export type departFocus = (navigationReason: NavigationReason, origin: FocusNavigationOrigin) =>  void;
export type focus = () =>  void;
export type getComputedStyle = (elt: Element, pseudoElt?: string | null) =>  CSSStyleDeclaration;
export type getMatchedCSSRules = (elt: Element, pseudoElt?: string | null) =>  CSSRuleList;
export type getSelection = () =>  Selection;
export type matchMedia = (query: string) =>  MediaQueryList;
export type moveBy = (x: number, y: number) =>  void;
export type moveTo = (x: number, y: number) =>  void;
export type msWriteProfilerMark = (profilerMarkName: string) =>  void;
export type open = (url?: string, target?: string, features?: string, replace?: boolean) =>  Window | null;
export type postMessage = (message: any, targetOrigin: string, transfer?: Transferable[]) =>  void;
export type print = () =>  void;
export type prompt = (message?: string, _default?: string) =>  string | null;
/** @deprecated */
export type releaseEvents = () =>  void;
export type requestAnimationFrame = (callback: FrameRequestCallback) =>  number;
export type resizeBy = (x: number, y: number) =>  void;
export type resizeTo = (x: number, y: number) =>  void;
export type scrollGlobalv1 = (options?: ScrollToOptions) =>  void;
export type scrollGlobalv2 = (x: number, y: number) =>  void;
export type scrollByGlobalv1 = (options?: ScrollToOptions) =>  void;
export type scrollByGlobalv2 = (x: number, y: number) =>  void;
export type scrollToGlobalv1 = (options?: ScrollToOptions) =>  void;
export type scrollToGlobalv2 = (x: number, y: number) =>  void;
export type stop = () =>  void;
export type webkitCancelAnimationFrame = (handle: number) =>  void;
export type webkitConvertPointFromNodeToPage = (node: Node, pt: WebKitPoint) =>  WebKitPoint;
export type webkitConvertPointFromPageToNode = (node: Node, pt: WebKitPoint) =>  WebKitPoint;
export type webkitRequestAnimationFrame = (callback: FrameRequestCallback) =>  number;
export type toString = () =>  string;
/**
 * Dispatches a synthetic event event to target and returns true
 * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
export type dispatchEvent = (event: Event) =>  boolean;
export type sessionStorageGlobalv1 =  Storage;
export type localStorageGlobalv1 =  Storage;
export type console =  Console;
/**
 * Fires when the user aborts the download.
 * @param ev The event.
 */
export type onabort =  ((this: Window, ev: UIEvent) => any) | null;
export type onanimationcancel =  ((this: Window, ev: AnimationEvent) => any) | null;
export type onanimationend =  ((this: Window, ev: AnimationEvent) => any) | null;
export type onanimationiteration =  ((this: Window, ev: AnimationEvent) => any) | null;
export type onanimationstart =  ((this: Window, ev: AnimationEvent) => any) | null;
export type onauxclick =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the object loses the input focus.
 * @param ev The focus event.
 */
export type onblur =  ((this: Window, ev: FocusEvent) => any) | null;
export type oncancel =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when playback is possible, but would require further buffering.
 * @param ev The event.
 */
export type oncanplay =  ((this: Window, ev: Event) => any) | null;
export type oncanplaythrough =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the contents of the object or selection have changed.
 * @param ev The event.
 */
export type onchange =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user clicks the left mouse button on the object
 * @param ev The mouse event.
 */
export type onclick =  ((this: Window, ev: MouseEvent) => any) | null;
export type onclose =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user clicks the right mouse button in the client area, opening the context menu.
 * @param ev The mouse event.
 */
export type oncontextmenu =  ((this: Window, ev: MouseEvent) => any) | null;
export type oncuechange =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user double-clicks the object.
 * @param ev The mouse event.
 */
export type ondblclick =  ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires on the source object continuously during a drag operation.
 * @param ev The event.
 */
export type ondrag =  ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the source object when the user releases the mouse at the close of a drag operation.
 * @param ev The event.
 */
export type ondragend =  ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the target element when the user drags the object to a valid drop target.
 * @param ev The drag event.
 */
export type ondragenter =  ((this: Window, ev: DragEvent) => any) | null;
export type ondragexit =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
 * @param ev The drag event.
 */
export type ondragleave =  ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the target element continuously while the user drags the object over a valid drop target.
 * @param ev The event.
 */
export type ondragover =  ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the source object when the user starts to drag a text selection or selected object.
 * @param ev The event.
 */
export type ondragstart =  ((this: Window, ev: DragEvent) => any) | null;
export type ondrop =  ((this: Window, ev: DragEvent) => any) | null;
/**
 * Occurs when the duration attribute is updated.
 * @param ev The event.
 */
export type ondurationchange =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the media element is reset to its initial state.
 * @param ev The event.
 */
export type onemptied =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the end of playback is reached.
 * @param ev The event
 */
export type onended =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when an error occurs during object loading.
 * @param ev The event.
 */
export type onerror =  ErrorEventHandler;
/**
 * Fires when the object receives focus.
 * @param ev The event.
 */
export type onfocus =  ((this: Window, ev: FocusEvent) => any) | null;
export type ongotpointercapture =  ((this: Window, ev: PointerEvent) => any) | null;
export type oninput =  ((this: Window, ev: Event) => any) | null;
export type oninvalid =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user presses a key.
 * @param ev The keyboard event
 */
export type onkeydown =  ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Fires when the user presses an alphanumeric key.
 * @param ev The event.
 */
export type onkeypress =  ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Fires when the user releases a key.
 * @param ev The keyboard event
 */
export type onkeyup =  ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Fires immediately after the browser loads the object.
 * @param ev The event.
 */
export type onload =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when media data is loaded at the current playback position.
 * @param ev The event.
 */
export type onloadeddata =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the duration and dimensions of the media have been determined.
 * @param ev The event.
 */
export type onloadedmetadata =  ((this: Window, ev: Event) => any) | null;
export type onloadend =  ((this: Window, ev: ProgressEvent) => any) | null;
/**
 * Occurs when Internet Explorer begins looking for media data.
 * @param ev The event.
 */
export type onloadstart =  ((this: Window, ev: Event) => any) | null;
export type onlostpointercapture =  ((this: Window, ev: PointerEvent) => any) | null;
/**
 * Fires when the user clicks the object with either mouse button.
 * @param ev The mouse event.
 */
export type onmousedown =  ((this: Window, ev: MouseEvent) => any) | null;
export type onmouseenter =  ((this: Window, ev: MouseEvent) => any) | null;
export type onmouseleave =  ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user moves the mouse over the object.
 * @param ev The mouse event.
 */
export type onmousemove =  ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user moves the mouse pointer outside the boundaries of the object.
 * @param ev The mouse event.
 */
export type onmouseout =  ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user moves the mouse pointer into the object.
 * @param ev The mouse event.
 */
export type onmouseover =  ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user releases a mouse button while the mouse is over the object.
 * @param ev The mouse event.
 */
export type onmouseup =  ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Occurs when playback is paused.
 * @param ev The event.
 */
export type onpause =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the play method is requested.
 * @param ev The event.
 */
export type onplay =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the audio or video has started playing.
 * @param ev The event.
 */
export type onplaying =  ((this: Window, ev: Event) => any) | null;
export type onpointercancel =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointerdown =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointerenter =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointerleave =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointermove =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointerout =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointerover =  ((this: Window, ev: PointerEvent) => any) | null;
export type onpointerup =  ((this: Window, ev: PointerEvent) => any) | null;
/**
 * Occurs to indicate progress while downloading media data.
 * @param ev The event.
 */
export type onprogress =  ((this: Window, ev: ProgressEvent) => any) | null;
/**
 * Occurs when the playback rate is increased or decreased.
 * @param ev The event.
 */
export type onratechange =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user resets a form.
 * @param ev The event.
 */
export type onreset =  ((this: Window, ev: Event) => any) | null;
export type onresize =  ((this: Window, ev: UIEvent) => any) | null;
/**
 * Fires when the user repositions the scroll box in the scroll bar on the object.
 * @param ev The event.
 */
export type onscroll =  ((this: Window, ev: UIEvent) => any) | null;
export type onsecuritypolicyviolation =  ((this: Window, ev: SecurityPolicyViolationEvent) => any) | null;
/**
 * Occurs when the seek operation ends.
 * @param ev The event.
 */
export type onseeked =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the current playback position is moved.
 * @param ev The event.
 */
export type onseeking =  ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the current selection changes.
 * @param ev The event.
 */
export type onselect =  ((this: Window, ev: UIEvent) => any) | null;
/**
 * Occurs when the download has stopped.
 * @param ev The event.
 */
export type onstalled =  ((this: Window, ev: Event) => any) | null;
export type onsubmit =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs if the load operation has been intentionally halted.
 * @param ev The event.
 */
export type onsuspend =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs to indicate the current playback position.
 * @param ev The event.
 */
export type ontimeupdate =  ((this: Window, ev: Event) => any) | null;
export type ontoggle =  ((this: Window, ev: Event) => any) | null;
export type ontouchcancel =  ((this: Window, ev: TouchEvent) => any) | null;
export type ontouchend =  ((this: Window, ev: TouchEvent) => any) | null;
export type ontouchmove =  ((this: Window, ev: TouchEvent) => any) | null;
export type ontouchstart =  ((this: Window, ev: TouchEvent) => any) | null;
export type ontransitioncancel =  ((this: Window, ev: TransitionEvent) => any) | null;
export type ontransitionend =  ((this: Window, ev: TransitionEvent) => any) | null;
export type ontransitionrun =  ((this: Window, ev: TransitionEvent) => any) | null;
export type ontransitionstart =  ((this: Window, ev: TransitionEvent) => any) | null;
/**
 * Occurs when the volume is changed, or playback is muted or unmuted.
 * @param ev The event.
 */
export type onvolumechange =  ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when playback stops because the next frame of a video resource is not available.
 * @param ev The event.
 */
export type onwaiting =  ((this: Window, ev: Event) => any) | null;
export type onwheel =  ((this: Window, ev: WheelEvent) => any) | null;
export type indexedDBGlobalv1 =  IDBFactory;
export type atobGlobalv1 = (encodedString: string) =>  string;
export type btoaGlobalv1 = (rawString: string) =>  string;
export type fetchGlobalv1 = (input: RequestInfo, init?: RequestInit) =>  Promise<Response>;
export type cachesGlobalv2 =  CacheStorage;
export type cryptoGlobalv2 =  Crypto;
export type indexedDBGlobalv2 =  IDBFactory;
export type origin =  string;
export type performanceGlobalv2 =  Performance;
export type atobGlobalv2 = (data: string) =>  string;
export type btoaGlobalv2 = (data: string) =>  string;
export type clearInterval = (handle?: number) =>  void;
export type clearTimeout = (handle?: number) =>  void;
export type createImageBitmapGlobalv1 = (image: ImageBitmapSource) =>  Promise<ImageBitmap>;
export type createImageBitmapGlobalv2 = (image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number) =>  Promise<ImageBitmap>;
export type fetchGlobalv2 = (input: RequestInfo, init?: RequestInit) =>  Promise<Response>;
export type queueMicrotask = (callback: Function) =>  void;
export type setInterval = (handler: TimerHandler, timeout?: number, ...arguments: any[]) =>  number;
export type setTimeout = (handler: TimerHandler, timeout?: number, ...arguments: any[]) =>  number;
export type sessionStorageGlobalv2 =  Storage;
export type localStorageGlobalv2 =  Storage;
export type onafterprint =  ((this: Window, ev: Event) => any) | null;
export type onbeforeprint =  ((this: Window, ev: Event) => any) | null;
export type onbeforeunload =  ((this: Window, ev: BeforeUnloadEvent) => any) | null;
export type onhashchange =  ((this: Window, ev: HashChangeEvent) => any) | null;
export type onlanguagechange =  ((this: Window, ev: Event) => any) | null;
export type onmessage =  ((this: Window, ev: MessageEvent) => any) | null;
export type onmessageerror =  ((this: Window, ev: MessageEvent) => any) | null;
export type onoffline =  ((this: Window, ev: Event) => any) | null;
export type ononline =  ((this: Window, ev: Event) => any) | null;
export type onpagehide =  ((this: Window, ev: PageTransitionEvent) => any) | null;
export type onpageshow =  ((this: Window, ev: PageTransitionEvent) => any) | null;
export type onpopstate =  ((this: Window, ev: PopStateEvent) => any) | null;
export type onrejectionhandled =  ((this: Window, ev: Event) => any) | null;
export type onstorage =  ((this: Window, ev: StorageEvent) => any) | null;
export type onunhandledrejection =  ((this: Window, ev: PromiseRejectionEvent) => any) | null;
export type onunload =  ((this: Window, ev: Event) => any) | null;
export type addEventListenerGlobalv1 = <K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions) =>  void;
export type addEventListenerGlobalv2 = (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) =>  void;
export type removeEventListenerGlobalv1 = <K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions) =>  void;
export type removeEventListenerGlobalv2 = (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) =>  void;
export type BlobPart = BufferSource | Blob | string;
export type HeadersInit = Headers | string[][] | Record<string, string>;
export type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;
export type RequestInfo = Request | string;
export type DOMHighResTimeStamp = number;
export type RenderingContext = CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext;
export type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;
export type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap;
export type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;
export type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;
export type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
export type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
export type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;
export type TimerHandler = string | Function;
export type PerformanceEntryList = PerformanceEntry[];
export type VibratePattern = number | number[];
export type AlgorithmIdentifier = string | Algorithm;
export type HashAlgorithmIdentifier = AlgorithmIdentifier;
export type BigInteger = Uint8Array;
export type NamedCurve = string;
export type GLenum = number;
export type GLboolean = boolean;
export type GLbitfield = number;
export type GLint = number;
export type GLsizei = number;
export type GLintptr = number;
export type GLsizeiptr = number;
export type GLuint = number;
export type GLfloat = number;
export type GLclampf = number;
export type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
export type Float32List = Float32Array | GLfloat[];
export type Int32List = Int32Array | GLint[];
export type BufferSource = ArrayBufferView | ArrayBuffer;
export type DOMTimeStamp = number;
export type LineAndPositionSetting = number | AutoKeyword;
export type FormDataEntryValue = File | string;
export type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
export type IDBValidKey = number | string | Date | BufferSource | IDBArrayKey;
export type MutationRecordType = "attributes" | "characterData" | "childList";
export type ConstrainBoolean = boolean | ConstrainBooleanParameters;
export type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;
export type ConstrainDouble = number | ConstrainDoubleRange;
export type ConstrainLong = number | ConstrainLongRange;
export type IDBKeyPath = string;
export type Transferable = ArrayBuffer | MessagePort | ImageBitmap;
export type RTCIceGatherCandidate = RTCIceCandidateDictionary | RTCIceCandidateComplete;
export type RTCTransport = RTCDtlsTransport | RTCSrtpSdesTransport;
/** @deprecated */
export type MouseWheelEvent = WheelEvent;
export type WindowProxy = Window;
export type AlignSetting = "start" | "center" | "end" | "left" | "right";
export type AnimationPlayState = "idle" | "running" | "paused" | "finished";
export type AppendMode = "segments" | "sequence";
export type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
export type AudioContextState = "suspended" | "running" | "closed";
export type AutoKeyword = "auto";
export type AutomationRate = "a-rate" | "k-rate";
export type BinaryType = "blob" | "arraybuffer";
export type BiquadFilterType = "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass";
export type CanPlayTypeResult = "" | "maybe" | "probably";
export type CanvasDirection = "ltr" | "rtl" | "inherit";
export type CanvasFillRule = "nonzero" | "evenodd";
export type CanvasLineCap = "butt" | "round" | "square";
export type CanvasLineJoin = "round" | "bevel" | "miter";
export type CanvasTextAlign = "start" | "end" | "left" | "right" | "center";
export type CanvasTextBaseline = "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
export type ChannelCountMode = "max" | "clamped-max" | "explicit";
export type ChannelInterpretation = "speakers" | "discrete";
export type ClientTypes = "window" | "worker" | "sharedworker" | "all";
export type CompositeOperation = "replace" | "add" | "accumulate";
export type CompositeOperationOrAuto = "replace" | "add" | "accumulate" | "auto";
export type DirectionSetting = "" | "rl" | "lr";
export type DisplayCaptureSurfaceType = "monitor" | "window" | "application" | "browser";
export type DistanceModelType = "linear" | "inverse" | "exponential";
export type DocumentReadyState = "loading" | "interactive" | "complete";
export type EndOfStreamError = "network" | "decode";
export type EndingType = "transparent" | "native";
export type FillMode = "none" | "forwards" | "backwards" | "both" | "auto";
export type GamepadHand = "" | "left" | "right";
export type GamepadHapticActuatorType = "vibration";
export type GamepadInputEmulationType = "mouse" | "keyboard" | "gamepad";
export type GamepadMappingType = "" | "standard";
export type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
export type IDBRequestReadyState = "pending" | "done";
export type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
export type ImageSmoothingQuality = "low" | "medium" | "high";
export type IterationCompositeOperation = "replace" | "accumulate";
export type KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
export type KeyType = "public" | "private" | "secret";
export type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
export type LineAlignSetting = "start" | "center" | "end";
export type ListeningState = "inactive" | "active" | "disambiguation";
export type MSCredentialType = "FIDO_2_0";
export type MSTransportType = "Embedded" | "USB" | "NFC" | "BT";
export type MSWebViewPermissionState = "unknown" | "defer" | "allow" | "deny";
export type MSWebViewPermissionType = "geolocation" | "unlimitedIndexedDBQuota" | "media" | "pointerlock" | "webnotifications";
export type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
export type MediaKeyMessageType = "license-request" | "license-renewal" | "license-release" | "individualization-request";
export type MediaKeySessionType = "temporary" | "persistent-license" | "persistent-release-message";
export type MediaKeyStatus = "usable" | "expired" | "output-downscaled" | "output-not-allowed" | "status-pending" | "internal-error";
export type MediaKeysRequirement = "required" | "optional" | "not-allowed";
export type MediaStreamTrackState = "live" | "ended";
export type NavigationReason = "up" | "down" | "left" | "right";
export type NavigationType = "navigate" | "reload" | "back_forward" | "prerender";
export type NotificationDirection = "auto" | "ltr" | "rtl";
export type NotificationPermission = "default" | "denied" | "granted";
export type OrientationLockType = "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
export type OrientationType = "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
export type OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";
export type OverSampleType = "none" | "2x" | "4x";
export type PanningModelType = "equalpower" | "HRTF";
export type PaymentComplete = "success" | "fail" | "unknown";
export type PaymentShippingType = "shipping" | "delivery" | "pickup";
export type PlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
export type PositionAlignSetting = "line-left" | "center" | "line-right" | "auto";
export type PushEncryptionKeyName = "p256dh" | "auth";
export type PushPermissionState = "denied" | "granted" | "prompt";
export type RTCBundlePolicy = "balanced" | "max-compat" | "max-bundle";
export type RTCDataChannelState = "connecting" | "open" | "closing" | "closed";
export type RTCDegradationPreference = "maintain-framerate" | "maintain-resolution" | "balanced";
export type RTCDtlsRole = "auto" | "client" | "server";
export type RTCDtlsTransportState = "new" | "connecting" | "connected" | "closed" | "failed";
export type RTCDtxStatus = "disabled" | "enabled";
export type RTCErrorDetailType = "data-channel-failure" | "dtls-failure" | "fingerprint-failure" | "idp-bad-script-failure" | "idp-execution-failure" | "idp-load-failure" | "idp-need-login" | "idp-timeout" | "idp-tls-failure" | "idp-token-expired" | "idp-token-invalid" | "sctp-failure" | "sdp-syntax-error" | "hardware-encoder-not-available" | "hardware-encoder-error";
export type RTCIceCandidateType = "host" | "srflx" | "prflx" | "relay";
export type RTCIceComponent = "rtp" | "rtcp";
export type RTCIceConnectionState = "new" | "checking" | "connected" | "completed" | "disconnected" | "failed" | "closed";
export type RTCIceCredentialType = "password" | "oauth";
export type RTCIceGatherPolicy = "all" | "nohost" | "relay";
export type RTCIceGathererState = "new" | "gathering" | "complete";
export type RTCIceGatheringState = "new" | "gathering" | "complete";
export type RTCIceProtocol = "udp" | "tcp";
export type RTCIceRole = "controlling" | "controlled";
export type RTCIceTcpCandidateType = "active" | "passive" | "so";
export type RTCIceTransportPolicy = "relay" | "all";
export type RTCIceTransportState = "new" | "checking" | "connected" | "completed" | "disconnected" | "failed" | "closed";
export type RTCPeerConnectionState = "new" | "connecting" | "connected" | "disconnected" | "failed" | "closed";
export type RTCPriorityType = "very-low" | "low" | "medium" | "high";
export type RTCRtcpMuxPolicy = "negotiate" | "require";
export type RTCRtpTransceiverDirection = "sendrecv" | "sendonly" | "recvonly" | "inactive";
export type RTCSctpTransportState = "connecting" | "connected" | "closed";
export type RTCSdpType = "offer" | "pranswer" | "answer" | "rollback";
export type RTCSignalingState = "stable" | "have-local-offer" | "have-remote-offer" | "have-local-pranswer" | "have-remote-pranswer" | "closed";
export type RTCStatsIceCandidatePairState = "frozen" | "waiting" | "inprogress" | "failed" | "succeeded" | "cancelled";
export type RTCStatsIceCandidateType = "host" | "serverreflexive" | "peerreflexive" | "relayed";
export type RTCStatsType = "inboundrtp" | "outboundrtp" | "session" | "datachannel" | "track" | "transport" | "candidatepair" | "localcandidate" | "remotecandidate";
export type ReadyState = "closed" | "open" | "ended";
export type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin-only" | "origin-when-cross-origin" | "unsafe-url";
export type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
export type RequestCredentials = "omit" | "same-origin" | "include";
export type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
export type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
export type RequestRedirect = "follow" | "error" | "manual";
export type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
export type ScopedCredentialType = "ScopedCred";
export type ScrollBehavior = "auto" | "smooth";
export type ScrollLogicalPosition = "start" | "center" | "end" | "nearest";
export type ScrollRestoration = "auto" | "manual";
export type ScrollSetting = "" | "up";
export type SelectionMode = "select" | "start" | "end" | "preserve";
export type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
export type ServiceWorkerUpdateViaCache = "imports" | "all" | "none";
export type ShadowRootMode = "open" | "closed";
export type SpeechRecognitionErrorCode = "no-speech" | "aborted" | "audio-capture" | "network" | "not-allowed" | "service-not-allowed" | "bad-grammar" | "language-not-supported";
export type SpeechSynthesisErrorCode = "canceled" | "interrupted" | "audio-busy" | "audio-hardware" | "network" | "synthesis-unavailable" | "synthesis-failed" | "language-unavailable" | "voice-unavailable" | "text-too-long" | "invalid-argument";
export type SupportedType = "text/html" | "text/xml" | "application/xml" | "application/xhtml+xml" | "image/svg+xml";
export type TextTrackKind = "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
export type TextTrackMode = "disabled" | "hidden" | "showing";
export type TouchType = "direct" | "stylus";
export type Transport = "usb" | "nfc" | "ble";
export type VRDisplayEventReason = "mounted" | "navigation" | "requested" | "unmounted";
export type VideoFacingModeEnum = "user" | "environment" | "left" | "right";
export type VisibilityState = "hidden" | "visible" | "prerender";
export type WebGLPowerPreference = "default" | "low-power" | "high-performance";
export type WorkerType = "classic" | "module";
export type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";

export type scrollGlobal = scrollGlobalv1 | scrollGlobalv2;
export type scrollByGlobal = scrollByGlobalv1 | scrollByGlobalv2;
export type scrollToGlobal = scrollToGlobalv1 | scrollToGlobalv2;
export type cachesGlobal = cachesGlobalv1 | cachesGlobalv2;
export type cryptoGlobal = cryptoGlobalv1 | cryptoGlobalv2;
export type indexedDBGlobal = indexedDBGlobalv1 | indexedDBGlobalv2;
export type performanceGlobal = performanceGlobalv1 | performanceGlobalv2;
export type atobGlobal = atobGlobalv1 | atobGlobalv2;
export type btoaGlobal = btoaGlobalv1 | btoaGlobalv2;
export type createImageBitmapGlobal = createImageBitmapGlobalv1 | createImageBitmapGlobalv2;
export type fetchGlobal = fetchGlobalv1 | fetchGlobalv2;
export type sessionStorageGlobal = sessionStorageGlobalv1 | sessionStorageGlobalv2;
export type localStorageGlobal = localStorageGlobalv1 | localStorageGlobalv2;
export type addEventListenerGlobal = addEventListenerGlobalv1 | addEventListenerGlobalv2;
export type removeEventListenerGlobal = removeEventListenerGlobalv1 | removeEventListenerGlobalv2;