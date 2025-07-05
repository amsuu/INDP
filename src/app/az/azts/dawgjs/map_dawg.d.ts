import { ByteMapDawg } from './byte_map_dawg';
export interface ValueDeserializer<V> {
    (bytes: Uint8Array): V;
}
export declare class MapDawg<K, V> {
    protected dawg: ByteMapDawg;
    protected keyEncoder: (key: K) => Iterable<number>;
    protected valueDeserializer: ValueDeserializer<V>;
    constructor(dawg: ByteMapDawg, keyEncoder: (key: K) => Iterable<number>, valueDeserializer: ValueDeserializer<V>);
    has(key: K): boolean;
    get(key: K): IterableIterator<V>;
    getArray(key: K): V[];
}
