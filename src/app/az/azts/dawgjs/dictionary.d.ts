export declare class Dictionary {
    private units;
    constructor(units: Uint32Array);
    has(bytes: Iterable<number>): boolean;
    hasValue(index: number): boolean;
    value(index: number): number;
    followBytes(bytes: Iterable<number>, index?: number): number;
    followByte(label: number, index: number): number;
}
