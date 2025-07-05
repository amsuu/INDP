"use strict";
class Dictionary {
    constructor(units) {
        this.units = units;
    }
    has(bytes) {
        let index = this.followBytes(bytes);
        return index !== null && Unit.hasLeaf(this.units[index]);
    }
    hasValue(index) {
        return Unit.hasLeaf(this.units[index]);
    }
    value(index) {
        return Unit.value(this.units[index ^ Unit.offset(this.units[index])]);
    }
    followBytes(bytes, index = 0) {
        for (let byte of bytes) {
            if ((index = this.followByte(byte, index)) === null) {
                return null;
            }
        }
        return index;
    }
    followByte(label, index) {
        let offset = Unit.offset(this.units[index]);
        let nextIndex = index ^ offset ^ label;
        if (Unit.label(this.units[nextIndex]) !== label) {
            return null;
        }
        return nextIndex;
    }
}
exports.Dictionary = Dictionary;
var Unit;
(function (Unit) {
    const IS_LEAF_BIT = 1 << 31;
    const HAS_LEAF_BIT = 1 << 8;
    const EXTENSION_BIT = 1 << 9;
    function hasLeaf(unit) {
        return (unit & HAS_LEAF_BIT) ? true : false;
    }
    Unit.hasLeaf = hasLeaf;
    function value(unit) {
        return unit & ~HAS_LEAF_BIT;
    }
    Unit.value = value;
    function offset(unit) {
        return (unit >>> 10) << ((unit & EXTENSION_BIT) >>> 6);
    }
    Unit.offset = offset;
    function label(unit) {
        return unit & (IS_LEAF_BIT | 0xFF);
    }
    Unit.label = label;
})(Unit || (Unit = {}));
//# sourceMappingURL=dictionary.js.map
