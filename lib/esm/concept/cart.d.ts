import { IComponent } from "@benbraide/inlinejs";
import { CartOffsetHandlerType, ICartCollectionConcept, ICollectionOptions } from "../types";
import { CollectionConcept } from "./collection";
export declare class CartCollectionConcept extends CollectionConcept implements ICartCollectionConcept {
    private offsets_;
    private offsetHandlers_;
    constructor(component?: IComponent, options?: ICollectionOptions);
    AddOffset(key: string, handler: CartOffsetHandlerType, initValue?: any): void;
    RemoveOffset(key: string): void;
    GetOffset(key: string): any;
    protected AlertUpdate_(): void;
}
