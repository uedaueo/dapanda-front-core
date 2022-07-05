import {defineStore} from "pinia";
import { authenticationControllerStoreState } from "%/stores/AuthenticationControllerStore/AuthenticationControllerStoreState";
import { authenticationControllerStoreActions } from "@/stores/AuthenticationControllerStore/AuthenticationControllerStoreActions";

/**
 * 認証情報を制御するためのフラグ類を集めたストアです。
 */
export const useAuthenticationControllerStore = defineStore("authenticationControllerStore", {
    state: () => authenticationControllerStoreState,
    actions: authenticationControllerStoreActions
});
