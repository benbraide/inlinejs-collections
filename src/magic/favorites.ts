import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, BuildGetterProxyOptions, CreateInplaceProxy } from "@benbraide/inlinejs";

import { ICollectionConcept } from "../types";
import { FavoritesConceptName } from "../names";
import { BuildCollectionMethods } from "./collection";

function CreateFavoritesProxy(){
    let methods = BuildCollectionMethods(FavoritesConceptName);

    const getCollectionConcept = () => GetGlobal().GetConcept<ICollectionConcept>(FavoritesConceptName);

    return CreateInplaceProxy(BuildGetterProxyOptions({
        getter: (prop) => {
            if (prop && methods.hasOwnProperty(prop)){
                return methods[prop];
            }

            if (prop === 'keyed'){
                return getCollectionConcept()?.GetKeyedProxy();
            }

            if (prop === 'items'){
                return getCollectionConcept()?.GetItemProxies();
            }

            if (prop === 'count'){
                return getCollectionConcept()?.GetCount();
            }
        },
        lookup: [...Object.keys(methods), 'keyed', 'items', 'count'],
    }));
}

const FavoritesProxy = CreateFavoritesProxy();

export const FavoritesMagicHandler = CreateMagicHandlerCallback(FavoritesConceptName, () => FavoritesProxy);

export function FavoritesMagicHandlerCompact(){
    AddMagicHandler(FavoritesMagicHandler);
}
