import { CommonStatusStoreState } from "./CommonStatusStoreState";
import { UnwrapRef } from "vue";

/** actionsを定義します */
export declare type CommonStatusStoreActionsTree = {
    /**
     * processing stateを更新します
     *
     * @param showProcessing true で App 全体にoverlayを表示します。
     * @return void
     */
    changeProcessing(
            showProcessing: boolean
    ): void;
    /**
     * logout overley を更新します。
     *
     * @param show true で App 全体にlogoutOverleyを表示します。
     * @return void
     */
    changeLogout(
            show: boolean
    ): void;
}

/**
 * システムの動きを制御するためのフラグ類を集めたストアです。
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function defineCommonStatusStoreActions(actions: CommonStatusStoreActionsTree & ThisType<CommonStatusStoreActionsTree & UnwrapRef<CommonStatusStoreState>>): CommonStatusStoreActionsTree & ThisType<CommonStatusStoreActionsTree & UnwrapRef<CommonStatusStoreState>> {
    return actions;
}
