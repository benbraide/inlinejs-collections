import { AddDirectiveHandler } from "@benbraide/inlinejs";
import { FavoritesConceptName } from "../names";
import { CreateCollectionDirectiveHandler } from "./collection";
export const FavoritesDirectiveHandler = CreateCollectionDirectiveHandler(FavoritesConceptName);
export function FavoritesDirectiveHandlerCompact() {
    AddDirectiveHandler(FavoritesDirectiveHandler);
}
