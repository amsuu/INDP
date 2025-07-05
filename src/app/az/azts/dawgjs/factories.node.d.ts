import { ValueDeserializer, MapDawg } from './map_dawg';
import { ByteCompletionDawg } from './byte_completion_dawg';
import { CompletionDawg } from './completion_dawg';
export declare function readByteCompletionDawgSync(filename: string): ByteCompletionDawg;
export declare function readStringCompletionDawgSync(filename: string): CompletionDawg<string>;
export declare function readStringMapDawgSync<T>(filename: string, deserializer: ValueDeserializer<T>): MapDawg<string, T>;
