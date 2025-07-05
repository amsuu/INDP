"use strict";
const codec_1 = require("./codec");
class ByteMapDawg {
    constructor(dawg, payloadSeparator = 1, binasciiWorkaround = false) {
        this.dawg = dawg;
        this.payloadSeparator = payloadSeparator;
        this.binasciiWorkaround = binasciiWorkaround;
    }
    hasBytes(key) {
        return this.dawg.hasBytesWithPrefix([...key, this.payloadSeparator]);
    }
    *getBytes(key) {
        for (let completed of this.dawg.completionsBytes([...key, this.payloadSeparator])) {
            if (this.binasciiWorkaround) {
                completed = completed.slice(0, -1);
            }
            yield codec_1.b64decodeFromArray(completed);
        }
    }
    getBytesArray(key) {
        let ret = new Array();
        let completions = this.dawg.completionsBytesArray([...key, this.payloadSeparator]);
        for (let i = 0; i < completions.length; ++i) {
            let completed = completions[i];
            if (this.binasciiWorkaround) {
                completed = completed.slice(0, -1);
            }
            ret.push(codec_1.b64decodeFromArray(completed));
        }
        return ret;
    }
}
exports.ByteMapDawg = ByteMapDawg;
//# sourceMappingURL=byte_map_dawg.js.map