import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, BuildGetterProxyOptions, CreateInplaceProxy } from "@benbraide/inlinejs";
import { FavoritesConceptName } from "../names";
import { BuildCollectionMethods } from "./collection";
function CreateFavoritesProxy() {
    let methods = BuildCollectionMethods(FavoritesConceptName);
    const getCollectionConcept = () => GetGlobal().GetConcept(FavoritesConceptName);
    return CreateInplaceProxy(BuildGetterProxyOptions({
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
export const FavoritesMagicHandler = CreateMagicHandlerCallback(FavoritesConceptName, () => FavoritesProxy);
export function FavoritesMagicHandlerCompact() {
    AddMagicHandler(FavoritesMagicHandler);
}
