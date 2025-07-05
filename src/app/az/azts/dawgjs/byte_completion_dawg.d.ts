import { Dictionary } from './dictionary';
import { Guide } from './guide';
import { ByteDawg } from './byte_dawg';
export declare class ByteCompletionDawg extends ByteDawg {
    protected guide: Guide;
    constructor(dictionary: Dictionary, guide: Guide);
    hasBytesWithPrefix(prefix: Iterable<number>): boolean;
    completionsBytes(prefix: Iterable<number>): IterableIterator<number[]>;
    completionsBytesArray(prefix: Iterable<number>): number[][];
}
