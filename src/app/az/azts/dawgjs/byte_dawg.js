"use strict";
class ByteDawg {
    constructor(dictionary) {
        this.dictionary = dictionary;
    }
    hasBytes(value) {
        return this.dictionary.has(value);
    }
}
exports.ByteDawg = ByteDawg;
//# sourceMappingURL=byte_dawg.js.map