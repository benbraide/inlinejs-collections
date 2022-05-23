"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartMagicHandlerCompact = exports.CartMagicHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const names_1 = require("../names");
const collection_1 = require("./collection");
function CreateCartProxy() {
    const getCollectionConcept = () => (0, inlinejs_1.GetGlobal)().GetConcept(names_1.CartConceptName);
    let methods = Object.assign(Object.assign({}, (0, collection_1.BuildCollectionMethods)(names_1.CartConceptName)), { addOffset: (key, handler, initValue) => {
            var _a;
            (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.AddOffset(key, handler, initValue);
        }, removeOffset: (key) => {
            var _a;
            (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.RemoveOffset(key);
        }, getOffset: (key) => {
            var _a;
            return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetOffset(key);
        } });
    return (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
        getter: (prop) => {
            var _a, _b, _c, _d;
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
            if (prop) {
                return (_d = getCollectionConcept()) === null || _d === void 0 ? void 0 : _d.GetOffset(prop);
            }
        },
        lookup: [...Object.keys(methods), 'keyed', 'items', 'count', 'subTotal', 'total'],
    }));
}
const CartProxy = CreateCartProxy();
exports.CartMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)(names_1.CartConceptName, () => CartProxy);
function CartMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.CartMagicHandler);
}
exports.CartMagicHandlerCompact = CartMagicHandlerCompact;
