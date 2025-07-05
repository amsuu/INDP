"use strict";
class Guide {
    constructor(units) {
        this.units = units;
    }
    child(index) {
        return this.units[index * 2];
    }
    sibling(index) {
        return this.units[index * 2 + 1];
    }
}
exports.Guide = Guide;
//# sourceMappingURL=guide.js.map
