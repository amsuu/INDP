"use strict";
class Dawg {
    constructor(dawg, keyEncoder) {
        this.dawg = dawg;
        this.keyEncoder = keyEncoder;
    }
    has(value) {
        return this.dawg.hasBytes(this.keyEncoder(value));
    }
}
exports.Dawg = Dawg;
//# sourceMappingURL=dawg.js.map