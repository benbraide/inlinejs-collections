"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesMagicHandlerCompact = exports.FavoritesMagicHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const names_1 = require("../names");
const collection_1 = require("./collection");
function CreateFavoritesProxy() {
    let methods = (0, collection_1.BuildCollectionMethods)(names_1.FavoritesConceptName);
    const getCollectionConcept = () => (0, inlinejs_1.GetGlobal)().GetConcept(names_1.FavoritesConceptName);
    return (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
        getter: (prop) => {
            var _a, _b, _c;
            if (prop && methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            if (prop === 'keyed') {
                return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetKeyedProxy();
            }
            if (prop === 'items') {
                return (_b = getCollectionConcept()) === null || _b === void 0 ? void 0 : _b.GetItemProxies();
            }
            if (prop === 'count') {
                return (_c = getCollectionConcept()) === null || _c === void 0 ? void 0 : _c.GetCount();
            }
        },
        lookup: [...Object.keys(methods), 'keyed', 'items', 'count'],
    }));
}
const FavoritesProxy = CreateFavoritesProxy();
exports.FavoritesMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)(names_1.FavoritesConceptName, () => FavoritesProxy);
function FavoritesMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.FavoritesMagicHandler);
}
exports.FavoritesMagicHandlerCompact = FavoritesMagicHandlerCompact;
