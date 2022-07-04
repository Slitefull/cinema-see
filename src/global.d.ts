declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    devToolsExtension: any;
    isWeb: boolean;
    prc: RTCPeerConnection | null;
    prcRec: RTCPeerConnection | null;
}

declare module '*.svg';
declare module '*.png';

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

declare module '*.svg';
declare module '*.png';
