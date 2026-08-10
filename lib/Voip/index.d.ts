import { EventEmitter } from "node:events";
import { CallState, VoipSdkConfig, CallOptions, CallEvents, AudioConfig } from "./types";

export type { VoipSdkConfig, CallOptions, CallEvents, AudioConfig };
export { CallState };

export declare class ActiveCall extends EventEmitter {
    readonly callId: string;
    _audioSource: string;
    constructor(callId: string, engine: any, durationMs: number);
    get state(): CallState;
    end: () => void;
    mute: (muted: boolean) => void;
    waitForEnd: () => Promise<string>;
    _updateState: (state: number) => void;
    _emitAudio: (pcm: Float32Array) => void;
    _forceEnd: (reason: string) => void;
}

export declare class VoipClient {
    constructor(config?: VoipSdkConfig);
    connect: () => Promise<void>;
    initWithSocket: (sock: any) => Promise<void>;
    call: (phoneNumber: string, opts?: {
        audioSource?: string;
        durationMs?: number;
    }) => Promise<ActiveCall>;
    disconnect: () => void;
}
