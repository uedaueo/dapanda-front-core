import { LocalSettingStoreState } from "./LocalSettingStoreState";
import { UnwrapRef } from "vue";

/** actionsを定義します */
export declare type LocalSettingStoreActionsTree = {
    /**
     * 言語を変更する場合に呼び出します。
     *
     * @param lang 言語を指定します。
     * @return void
     */
    changeLang(
            lang: string
    ): void;
}

/**
 * 多言語対応のロケールを制御するためのストアです。
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function defineLocalSettingStoreActions(actions: LocalSettingStoreActionsTree & ThisType<LocalSettingStoreActionsTree & UnwrapRef<LocalSettingStoreState>>): LocalSettingStoreActionsTree & ThisType<LocalSettingStoreActionsTree & UnwrapRef<LocalSettingStoreState>> {
    return actions;
}
