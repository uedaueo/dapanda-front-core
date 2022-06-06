import { UnwrapRef } from "vue";
import { LocaleSettingStoreState } from "./LocaleSettingStoreState";

/** actionsを定義します */
export declare type LocaleSettingStoreActionsTree = {
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
export function defineLocaleSettingStoreActions(actions: LocaleSettingStoreActionsTree & ThisType<LocaleSettingStoreActionsTree & UnwrapRef<LocaleSettingStoreState>>): LocaleSettingStoreActionsTree & ThisType<LocaleSettingStoreActionsTree & UnwrapRef<LocaleSettingStoreState>> {
    return actions;
}
