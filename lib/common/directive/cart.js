"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDirectiveHandlerCompact = exports.CartDirectiveHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const names_1 = require("../names");
const collection_1 = require("./collection");
exports.CartDirectiveHandler = (0, collection_1.CreateCollectionDirectiveHandler)(names_1.CartConceptName);
function CartDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.CartDirectiveHandler);
}
exports.CartDirectiveHandlerCompact = CartDirectiveHandlerCompact;
