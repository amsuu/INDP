"use strict";
const factories_1 = require("./factories");
const fs_1 = require("fs");
////////////////////////////////////////////////////////////////////////////////
function readByteCompletionDawgSync(filename) {
    return factories_1.readByteCompletionDawg(fs_1.readFileSync(filename).buffer);
}
exports.readByteCompletionDawgSync = readByteCompletionDawgSync;
////////////////////////////////////////////////////////////////////////////////
function readStringCompletionDawgSync(filename) {
    return factories_1.readStringCompletionDawg(fs_1.readFileSync(filename).buffer);
}
exports.readStringCompletionDawgSync = readStringCompletionDawgSync;
////////////////////////////////////////////////////////////////////////////////
function readStringMapDawgSync(filename, deserializer) {
    return factories_1.readStringMapDawg(fs_1.readFileSync(filename).buffer, deserializer, 1, true);
}
exports.readStringMapDawgSync = readStringMapDawgSync;
//# sourceMappingURL=factories.node.js.map