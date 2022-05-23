"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesCollectionConcept = void 0;
const names_1 = require("../names");
const collection_1 = require("./collection");
class FavoritesCollectionConcept extends collection_1.CollectionConcept {
    constructor(component, options) {
        super(names_1.FavoritesConceptName, component, options);
    }
}
exports.FavoritesCollectionConcept = FavoritesCollectionConcept;
