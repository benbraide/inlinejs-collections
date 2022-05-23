import { CollectionEntryType, CollectionIndexType, ICollectionImportParams, ICollectionOptions, ICollectionUpdateParams } from "../types";
export declare function BuildCollectionMethods(name: string): {
    setOptions: (options: ICollectionOptions) => void | undefined;
    setOption: (key: keyof ICollectionOptions, value: any) => void | undefined;
    getOptions: () => ICollectionOptions | undefined;
    getOption: (key: keyof ICollectionOptions) => any;
    getItems: () => CollectionEntryType[] | undefined;
    getCount: () => number | undefined;
    getKeyedItem: (index: CollectionIndexType) => CollectionEntryType | undefined;
    findItem: (index: CollectionIndexType) => CollectionEntryType | null | undefined;
    import: (params: ICollectionImportParams) => void | undefined;
    export: () => import("../types").ICollectionItem[] | undefined;
    updateItem: (params: ICollectionUpdateParams) => void | undefined;
    addItem: (entry: CollectionEntryType, quantity: number) => void | undefined;
    removeItem: (index: CollectionIndexType) => void | undefined;
    removeAll: () => void | undefined;
};
