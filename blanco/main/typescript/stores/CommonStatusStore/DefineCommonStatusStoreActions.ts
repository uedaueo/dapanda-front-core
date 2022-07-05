import { CommonStatusStoreState } from "./CommonStatusStoreState";
import { UnwrapRef } from "vue";

/** actionsを定義します */
export declare type CommonStatusStoreActionsTree = {
    /**
     * isOverlay stateを更新します
     *
     * @param showOverlay true で App 全体にoverlayを表示します。
     * @return void
     */
    changeOverlay(
            showOverlay: boolean
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
