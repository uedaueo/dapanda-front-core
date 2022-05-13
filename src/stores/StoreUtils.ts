import {
    _GettersTree,
    _StoreWithGetters,
    _StoreWithState,
    DefineStoreOptions,
    PiniaCustomProperties,
    StateTree
} from "pinia";
import {UnwrapRef} from "vue";

export function defineStoreOptions<Id extends string, S extends StateTree = {}, G extends _GettersTree<S> = {}, A = {}>(
    options: Omit<DefineStoreOptions<Id, S, G, A>, 'id'>
): Omit<DefineStoreOptions<Id, S, G, A>, 'id'> {
    return options;
}

export function defineStoreGetters<S extends StateTree = {}, G extends _GettersTree<S> = {}>(
    state: S,
    getters: G & ThisType<UnwrapRef<S> & _StoreWithGetters<G> & PiniaCustomProperties> & _GettersTree<S>
): G & ThisType<UnwrapRef<S> & _StoreWithGetters<G> & PiniaCustomProperties> & _GettersTree<S> {
    return getters;
}

export function defineStoreActions<Id extends string, S extends StateTree, G = {}, A = {}>(
    state: S,
    getters: G,
    actions: A & ThisType<A & UnwrapRef<S> & Omit<_StoreWithState<Id, S, G, A>, 'id'> & _StoreWithGetters<G> & PiniaCustomProperties>
): A & ThisType<A & UnwrapRef<S> & Omit<_StoreWithState<Id, S, G, A>, 'id'> & _StoreWithGetters<G> & PiniaCustomProperties> {
    return actions;
}
