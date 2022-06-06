import {defineStore} from "pinia";
import { localSettingStoreState } from "%/stores/LocalSettingStore/LocalSettingStoreState";
import { localSettingStoreActions } from "@/stores/LocalSettingStore/LocalSettingStoreActions";

/**
 * 多言語対応のロケールを制御するためのストアです。
 */
export const useLocalSettingStore = defineStore("localSettingStore", {
    state: () => localSettingStoreState,
    actions: localSettingStoreActions
});
