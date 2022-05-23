import { FavoritesConceptName } from "../names";
import { CollectionConcept } from "./collection";
export class FavoritesCollectionConcept extends CollectionConcept {
    constructor(component, options) {
        super(FavoritesConceptName, component, options);
    }
}
