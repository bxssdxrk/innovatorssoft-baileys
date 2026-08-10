"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoipClient = exports.ActiveCall = exports.CallState = void 0;

const types_1 = require("./types");
Object.defineProperty(exports, "CallState", { enumerable: true, get: function () { return types_1.CallState; } });

let voipModulePromise = null;
const getVoipModule = async () => {
    if (!voipModulePromise) {
        voipModulePromise = import("./index.mjs");
    }
    return voipModulePromise;
};

class ActiveCall {
    constructor(...args) {
        throw new Error("ActiveCall instances are created during call initialization.");
    }
}
exports.ActiveCall = ActiveCall;

class VoipClient {
    constructor(config) {
        this.config = config;
        this.clientPromise = (async () => {
            const mod = await getVoipModule();
            return new mod.VoipClient(config);
        })();
    }

    async connect() {
        const client = await this.clientPromise;
        return client.connect();
    }

    async initWithSocket(sock) {
        const client = await this.clientPromise;
        return client.initWithSocket(sock);
    }

    async call(phoneNumber, opts) {
        const client = await this.clientPromise;
        return client.call(phoneNumber, opts);
    }

    async disconnect() {
        const client = await this.clientPromise;
        return client.disconnect();
    }
}
exports.VoipClient = VoipClient;
