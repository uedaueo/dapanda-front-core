import {defineStore} from "pinia";
import { localeSettingStoreState } from "%/stores/LocaleSettingStore/LocaleSettingStoreState";
import { localeSettingStoreActions } from "@/stores/LocaleSettingStore/LocaleSettingStoreActions";

/**
 * 多言語対応のロケールを制御するためのストアです。
 */
export const useLocaleSettingStore = defineStore("localeSettingStore", {
    state: () => localeSettingStoreState,
    actions: localeSettingStoreActions
});
