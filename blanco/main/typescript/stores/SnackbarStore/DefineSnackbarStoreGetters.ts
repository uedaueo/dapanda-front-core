import { SnackbarStoreState } from "./SnackbarStoreState";
import { StateTree } from "pinia";

/** gettersを定義します */
export declare type SnackbarStoreGettersTree<S extends StateTree> = {
    snackbar(state: S): {
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
