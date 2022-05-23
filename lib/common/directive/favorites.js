"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesDirectiveHandlerCompact = exports.FavoritesDirectiveHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const names_1 = require("../names");
const collection_1 = require("./collection");
exports.FavoritesDirectiveHandler = (0, collection_1.CreateCollectionDirectiveHandler)(names_1.FavoritesConceptName);
function FavoritesDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.FavoritesDirectiveHandler);
}
exports.FavoritesDirectiveHandlerCompact = FavoritesDirectiveHandlerCompact;
