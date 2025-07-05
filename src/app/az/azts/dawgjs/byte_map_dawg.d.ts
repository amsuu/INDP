import { ByteCompletionDawg } from './byte_completion_dawg';
export declare class ByteMapDawg {
    protected dawg: ByteCompletionDawg;
    protected payloadSeparator: number;
    protected binasciiWorkaround: boolean;
    constructor(dawg: ByteCompletionDawg, payloadSeparator?: number, binasciiWorkaround?: boolean);
    hasBytes(key: Iterable<number>): boolean;
    getBytes(key: Iterable<number>): IterableIterator<Uint8Array>;
    getBytesArray(key: Iterable<number>): Uint8Array[];
}
