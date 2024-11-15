import { SnackbarStoreState } from "./SnackbarStoreState";
import { StateTree, _GettersTree } from "pinia";
import { UnwrapRef } from "vue";

/** gettersを定義します */
export interface SnackbarStoreGettersTree<S extends StateTree> extends _GettersTree<S> {
    snackbar: (state: UnwrapRef<S>) => {
        /**
         * snackbar情報が存在するかどうかを返します。
         *
         * @return boolean
         */
        (
        ): boolean
    }
}

/**
 * Snackbarを制御するためのストアです。&lt;br&gt;
 *
 * @param getters パラメータとしてGettersTree定義を渡して下さい。
 * @return 定義されたGettersTreeを返します。
 */
export function defineSnackbarStoreGetters(getters: SnackbarStoreGettersTree<SnackbarStoreState>): SnackbarStoreGettersTree<SnackbarStoreState> {
    return getters;
}
