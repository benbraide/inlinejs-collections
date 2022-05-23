import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, BuildGetterProxyOptions, CreateInplaceProxy } from "@benbraide/inlinejs";
import { CartConceptName } from "../names";
import { BuildCollectionMethods } from "./collection";
function CreateCartProxy() {
    const getCollectionConcept = () => GetGlobal().GetConcept(CartConceptName);
    let methods = Object.assign(Object.assign({}, BuildCollectionMethods(CartConceptName)), { addOffset: (key, handler, initValue) => {
            var _a;
            (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.AddOffset(key, handler, initValue);
        }, removeOffset: (key) => {
            var _a;
            (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.RemoveOffset(key);
        }, getOffset: (key) => {
            var _a;
            return (_a = getCollectionConcept()) === null || _a === void 0 ? void 0 : _a.GetOffset(key);
        } });
    return CreateInplaceProxy(BuildGetterProxyOptions({
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
export const CartMagicHandler = CreateMagicHandlerCallback(CartConceptName, () => CartProxy);
export function CartMagicHandlerCompact() {
    AddMagicHandler(CartMagicHandler);
}
