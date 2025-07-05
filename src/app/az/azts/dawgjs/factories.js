"use strict";
const dictionary_1 = require("./dictionary");
const guide_1 = require("./guide");
const byte_map_dawg_1 = require("./byte_map_dawg");
const byte_completion_dawg_1 = require("./byte_completion_dawg");
const completion_dawg_1 = require("./completion_dawg");
const map_dawg_1 = require("./map_dawg");
const codec_1 = require("./codec");
////////////////////////////////////////////////////////////////////////////////
function readByteCompletionDawg(buffer) {
    let view = new DataView(buffer);
    let dictSize = view.getUint32(0, true);
    // console.error(buffer.byteLength)
    let dictData = new Uint32Array(buffer, 4, dictSize);
    let offset = 4 + dictSize * 4;
    let guideSize = view.getUint32(offset, true) * 2;
    let guideData = new Uint8Array(buffer, offset + 4, guideSize);
    return new byte_completion_dawg_1.ByteCompletionDawg(new dictionary_1.Dictionary(dictData), new guide_1.Guide(guideData));
}
exports.readByteCompletionDawg = readByteCompletionDawg;
////////////////////////////////////////////////////////////////////////////////
function readStringCompletionDawg(buffer) {
    return new completion_dawg_1.CompletionDawg(readByteCompletionDawg(buffer), codec_1.encodeUtf8, codec_1.decodeUtf8);
}
exports.readStringCompletionDawg = readStringCompletionDawg;
////////////////////////////////////////////////////////////////////////////////
function readStringMapDawg(buffer, deserializer, payloadSeparator = 1, binasciiWorkaround = false) {
    let byteMapDawg = new byte_map_dawg_1.ByteMapDawg(readByteCompletionDawg(buffer), payloadSeparator, binasciiWorkaround);
    return new map_dawg_1.MapDawg(byteMapDawg, codec_1.encodeUtf8, deserializer);
}
exports.readStringMapDawg = readStringMapDawg;
//# sourceMappingURL=factories.js.map
