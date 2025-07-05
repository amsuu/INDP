import { Dawg } from './dawg';
import { ByteCompletionDawg } from './byte_completion_dawg';
export declare class CompletionDawg<K> extends Dawg<K> {
    protected dawg: ByteCompletionDawg;
    protected keyDecoder: (bytes: Array<number>) => K;
    constructor(dawg: ByteCompletionDawg, keyEncoder: (key: K) => Iterable<number>, keyDecoder: (bytes: Array<number>) => K);
    hasWithPrefix(prefix: K): boolean;
    completions(prefix: K): IterableIterator<K>;
}
