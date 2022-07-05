import {defineStore} from "pinia";
import { commonStatusStoreState } from "%/stores/CommonStatusStore/CommonStatusStoreState";
import { commonStatusStoreActions } from "@/stores/CommonStatusStore/CommonStatusStoreActions";

/**
 * システムの動きを制御するためのフラグ類を集めたストアです。
 */
export const useCommonStatusStore = defineStore("commonStatusStore", {
    state: () => commonStatusStoreState,
    actions: commonStatusStoreActions
});
