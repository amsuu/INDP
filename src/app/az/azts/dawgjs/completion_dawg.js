"use strict";
const dawg_1 = require("./dawg");
class CompletionDawg extends dawg_1.Dawg {
    constructor(dawg, keyEncoder, keyDecoder) {
        super(dawg, keyEncoder);
        this.dawg = dawg;
        this.keyDecoder = keyDecoder;
    }
    hasWithPrefix(prefix) {
        return this.dawg.hasBytesWithPrefix(this.keyEncoder(prefix));
    }
    *completions(prefix) {
        for (let completion of this.dawg.completionsBytes(this.keyEncoder(prefix))) {
            yield this.keyDecoder(completion);
        }
    }
}
exports.CompletionDawg = CompletionDawg;
//# sourceMappingURL=completion_dawg.js.map