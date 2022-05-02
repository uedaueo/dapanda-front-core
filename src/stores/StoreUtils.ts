import {_GettersTree, DefineStoreOptions, StateTree} from "pinia";

export function defineStoreOptions<Id extends string, S extends StateTree = {}, G extends _GettersTree<S> = {}, A = {}>(
    options: Omit<DefineStoreOptions<Id, S, G, A>, 'id'>
): Omit<DefineStoreOptions<Id, S, G, A>, 'id'> {
    return options;
}
