"use strict";
class MapDawg {
    constructor(dawg, keyEncoder, valueDeserializer) {
        this.dawg = dawg;
        this.keyEncoder = keyEncoder;
        this.valueDeserializer = valueDeserializer;
    }
    has(key) {
        return this.dawg.hasBytes(this.keyEncoder(key));
    }
    *get(key) {
        for (let value of this.dawg.getBytes(this.keyEncoder(key))) {
            yield this.valueDeserializer(value);
        }
    }
    getArray(key) {
        return this.dawg.getBytesArray(this.keyEncoder(key)).map(x => this.valueDeserializer(x));
    }
}
exports.MapDawg = MapDawg;
//# sourceMappingURL=map_dawg.js.map