import { SnackbarStoreState } from "./SnackbarStoreState";
import { UnwrapRef } from "vue";
import { SnackbarAttribute } from "%/components/snackbar/SnackbarAttribute";

/** actionsを定義します */
export declare type SnackbarStoreActionsTree = {
    /**
     * 新規Snackbaを追加します。
     *
     * @param obj Snackbar情報
     * @return void
     */
    showSnackbar(
            obj: SnackbarAttribute
    ): void;
    /**
     * 指定のSnackbarを削除します。
     *
     * @param obj IDが一致するSnackbarが削除されます。
     * @return void
     */
    hideSnackbar(
            obj: SnackbarAttribute
    ): void;
    /**
     * 表示されているSnackbarを全てflushします。
     *
     * @return void
     */
    flushSnackbar(
    ): Promise<void>;
    /**
     * statusを設定します。
     *
     * @param status statusです。
     * @return void
     */
    setStatus(
            status: string
    ): Promise<void>;
}

/**
 * Snackbarを制御するためのストアです。&lt;br&gt;
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function defineSnackbarStoreActions(actions: SnackbarStoreActionsTree & ThisType<SnackbarStoreActionsTree & UnwrapRef<SnackbarStoreState>>): SnackbarStoreActionsTree & ThisType<SnackbarStoreActionsTree & UnwrapRef<SnackbarStoreState>> {
    return actions;
}
