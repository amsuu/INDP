import { ByteDawg } from './byte_dawg';
export declare class Dawg<K> {
    protected dawg: ByteDawg;
    protected keyEncoder: (key: K) => Iterable<number>;
    constructor(dawg: ByteDawg, keyEncoder: (key: K) => Iterable<number>);
    has(value: K): boolean;
}
