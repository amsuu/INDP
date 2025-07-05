"use strict";
const byte_dawg_1 = require("./byte_dawg");
class ByteCompletionDawg extends byte_dawg_1.ByteDawg {
    constructor(dictionary, guide) {
        super(dictionary);
        this.guide = guide;
    }
    hasBytesWithPrefix(prefix) {
        return !this.completionsBytes(prefix).next().done;
    }
    *completionsBytes(prefix) {
        let index = this.dictionary.followBytes(prefix);
        if (index === null) {
            return;
        }
        yield* completer(this.dictionary, this.guide, index);
    }
    completionsBytesArray(prefix) {
        let index = this.dictionary.followBytes(prefix);
        if (index === null) {
            return [];
        }
        return completerArray(this.dictionary, this.guide, index);
    }
}
exports.ByteCompletionDawg = ByteCompletionDawg;
//------------------------------------------------------------------------------
function* completer(dic, guide, index) {
    let completion = new Array();
    let indexStack = [index];
    while (indexStack.length) {
        // find terminal
        while (!dic.hasValue(index)) {
            let label = guide.child(index);
            index = dic.followByte(label, index);
            if (index === null) {
                return;
            }
            completion.push(label);
            indexStack.push(index);
        }
        yield completion;
        let childLabel = guide.child(index);
        if (childLabel) {
            if ((index = dic.followByte(childLabel, index)) === null) {
                return;
            }
            completion.push(childLabel);
            indexStack.push(index);
        }
        else {
            while (true) {
                // move up to previous
                indexStack.pop();
                if (!indexStack.length) {
                    return;
                }
                completion.pop();
                let siblingLabel = guide.sibling(index);
                index = indexStack[indexStack.length - 1];
                if (siblingLabel) {
                    if ((index = dic.followByte(siblingLabel, index)) === null) {
                        return;
                    }
                    completion.push(siblingLabel);
                    indexStack.push(index);
                    break;
                }
            }
        }
    }
}
//------------------------------------------------------------------------------
function completerArray(dic, guide, index) {
    let ret = new Array();
    let completion = new Array();
    let indexStack = [index];
    while (indexStack.length) {
        // find terminal
        while (!dic.hasValue(index)) {
            let label = guide.child(index);
            index = dic.followByte(label, index);
            if (index === null) {
                return ret;
            }
            completion.push(label);
            indexStack.push(index);
        }
        ret.push([...completion]);
        let childLabel = guide.child(index);
        if (childLabel) {
            if ((index = dic.followByte(childLabel, index)) === null) {
                return ret;
            }
            completion.push(childLabel);
            indexStack.push(index);
        }
        else {
            while (true) {
                // move up to previous
                indexStack.pop();
                if (!indexStack.length) {
                    return ret;
                }
                completion.pop();
                let siblingLabel = guide.sibling(index);
                index = indexStack[indexStack.length - 1];
                if (siblingLabel) {
                    if ((index = dic.followByte(siblingLabel, index)) === null) {
                        return ret;
                    }
                    completion.push(siblingLabel);
                    indexStack.push(index);
                    break;
                }
            }
        }
    }
    return ret;
}
//# sourceMappingURL=byte_completion_dawg.js.map