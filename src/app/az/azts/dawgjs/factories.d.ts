import { ByteCompletionDawg } from './byte_completion_dawg';
import { CompletionDawg } from './completion_dawg';
import { MapDawg, ValueDeserializer } from './map_dawg';
export declare function readByteCompletionDawg(buffer: ArrayBuffer): ByteCompletionDawg;
export declare function readStringCompletionDawg(buffer: ArrayBuffer): CompletionDawg<string>;
export declare function readStringMapDawg<T>(buffer: ArrayBuffer, deserializer: ValueDeserializer<T>, payloadSeparator?: number, binasciiWorkaround?: boolean): MapDawg<string, T>;
