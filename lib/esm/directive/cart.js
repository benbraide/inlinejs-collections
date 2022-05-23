import { AddDirectiveHandler } from "@benbraide/inlinejs";
import { CartConceptName } from "../names";
import { CreateCollectionDirectiveHandler } from "./collection";
export const CartDirectiveHandler = CreateCollectionDirectiveHandler(CartConceptName);
export function CartDirectiveHandlerCompact() {
    AddDirectiveHandler(CartDirectiveHandler);
}
