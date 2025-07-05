import { Dictionary } from './dictionary';
export declare class ByteDawg {
    public dictionary: Dictionary;
// I, amsuu, made this ↑ public instead of protected
// this is why I needed to copy the whole library manually

    constructor(dictionary: Dictionary);
    hasBytes(value: Iterable<number>): boolean;
}
