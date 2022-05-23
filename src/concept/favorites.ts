import { IComponent } from "@benbraide/inlinejs";

import { ICollectionOptions } from "../types";
import { FavoritesConceptName } from "../names";
import { CollectionConcept } from "./collection";

export class FavoritesCollectionConcept extends CollectionConcept{
    public constructor(component?: IComponent, options?: ICollectionOptions){
        super(FavoritesConceptName, component, options);
    }
}
