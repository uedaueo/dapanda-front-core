import {defineStore} from "pinia";
import { loginSampleResponseStoreState } from "%/stores/LoginSampleResponseStore/LoginSampleResponseStoreState";
import { loginSampleResponseStoreActions } from "@/stores/LoginSampleResponseStore/LoginSampleResponseStoreActions";

/**
 * LoginSample API の Response を格納するためのストアです。<br>
 * ページ遷移時に次ページに渡すデータもここに格納します。
 */
export const useLoginSampleResponseStore = defineStore("loginSampleResponseStore", {
    state: () => loginSampleResponseStoreState,
    actions: loginSampleResponseStoreActions
});
