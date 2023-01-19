"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineJSCollections = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const cart_1 = require("./concept/cart");
const favorites_1 = require("./concept/favorites");
const cart_2 = require("./directive/cart");
const favorites_2 = require("./directive/favorites");
const cart_3 = require("./magic/cart");
const favorites_3 = require("./magic/favorites");
function InlineJSCollections() {
    (0, inlinejs_1.WaitForGlobal)().then(() => {
        const cartCollection = new cart_1.CartCollectionConcept((0, inlinejs_1.GetGlobal)().CreateComponent(document.createElement('template')));
        const favCollection = new favorites_1.FavoritesCollectionConcept((0, inlinejs_1.GetGlobal)().CreateComponent(document.createElement('template')));
        (0, inlinejs_1.GetGlobal)().SetConcept(cartCollection.GetName(), cartCollection);
        (0, inlinejs_1.GetGlobal)().SetConcept(favCollection.GetName(), favCollection);
        (0, cart_2.CartDirectiveHandlerCompact)();
        (0, favorites_2.FavoritesDirectiveHandlerCompact)();
        (0, cart_3.CartMagicHandlerCompact)();
        (0, favorites_3.FavoritesMagicHandlerCompact)();
    });
}
exports.InlineJSCollections = InlineJSCollections;
