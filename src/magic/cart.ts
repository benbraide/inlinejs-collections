import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, BuildGetterProxyOptions, CreateInplaceProxy } from "@benbraide/inlinejs";

import { CartOffsetHandlerType, ICartCollectionConcept, ICollectionConcept } from "../types";
import { CartConceptName } from "../names";
import { BuildCollectionMethods } from "./collection";

function CreateCartProxy(){
    const getCollectionConcept = () => GetGlobal().GetConcept<ICartCollectionConcept>(CartConceptName);
    let methods = {
        ...BuildCollectionMethods(CartConceptName),
        addOffset: (key: string, handler: CartOffsetHandlerType, initValue?: any) => {
            getCollectionConcept()?.AddOffset(key, handler, initValue);
        },
        removeOffset: (key: string) => {
            getCollectionConcept()?.RemoveOffset(key);
        },
        getOffset: (key: string) => {
            return getCollectionConcept()?.GetOffset(key);
        },
    };

    return CreateInplaceProxy(BuildGetterProxyOptions({
        getter: (prop) => {
            if (prop && methods.hasOwnProperty(prop)){
                return methods[prop];
            }

            if (prop === 'keyed'){
                return (getCollectionConcept() as ICollectionConcept | null)?.GetKeyedProxy();
            }

            if (prop === 'items'){
                return (getCollectionConcept() as ICollectionConcept | null)?.GetItemProxies();
            }

            if (prop === 'count'){
                return (getCollectionConcept() as ICollectionConcept | null)?.GetCount();
            }

            if(prop){
                return getCollectionConcept()?.GetOffset(prop);
            }
        },
        lookup: [...Object.keys(methods), 'keyed', 'items', 'count', 'subTotal', 'total'],
    }));
}

const CartProxy = CreateCartProxy();

export const CartMagicHandler = CreateMagicHandlerCallback(CartConceptName, () => CartProxy);

export function CartMagicHandlerCompact(){
    AddMagicHandler(CartMagicHandler);
}
