export declare class AudioFeeder {
    droppedChunks: number;
    underflowChunks: number;
    bytesProduced: number;
    chunksEmitted: number;

    constructor(
        sampleRate: number,
        channels: number,
        framesPerChunk: number,
        onChunk: (chunk: Float32Array) => void,
        source?: string
    );

    start: () => void;
    stop: () => void;
}
