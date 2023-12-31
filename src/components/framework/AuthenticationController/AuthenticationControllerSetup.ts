import {SetupContext, watch} from "vue";
import {
    AuthenticationControllerProps
} from "%/components/framework/AuthenticationController/AuthenticationControllerProps";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {storeToRefs} from "pinia";
import {DapandaConst} from "@/common/DapandaGlobals";
import {LoginInfo} from "%/common/LoginInfo";

export const authenticationControllerSetup = (props: AuthenticationControllerProps, context: SetupContext) => {

    const authStore = useAuthenticationControllerStore();
    const { status } = storeToRefs(authStore);

    watch(status, () => {
        console.log("AuthenticationControllerSetup#watch status = " + status.value + ", issuer = " + authStore.issuer);
        if (status.value === DapandaConst.AuthenticationStatusSaving) {
            /* Save */
            if (authStore.loginInfo && authStore.loginInfo.loginToken != "") {
                const jsonInfo = JSON.stringify(authStore.loginInfo);
                console.log("authenticationControllerSetup#watch(saveFlg) jsonInfo = " + jsonInfo);
                localStorage.setItem(DapandaConst.LocalStorageItemKey, jsonInfo);
                authStore.setStatus(DapandaConst.AuthenticationStatusSaved, authStore.issuer);
            } else {
                console.log("authenticationControllerSetup#watch(saveFlg) Clear");
                authStore.remove(authStore.issuer);
            }
        } else if (status.value === DapandaConst.AuthenticationStatusRestoring) {
            /* Restore */
            const jsonInfo = localStorage.getItem(DapandaConst.LocalStorageItemKey);
            console.log("jsonInfo = " + jsonInfo);
            let restored: LoginInfo = new LoginInfo();
            if (jsonInfo && jsonInfo.length > 0) {
                restored = JSON.parse(jsonInfo);
            }
            const currentToken = authStore.loginInfo.loginToken;
            /* Be care, it's not thread safe. */
            const options = authStore.restoreOptions;
            if (!(restored && restored.loginToken && restored.loginToken != "")
                || (currentToken != "" && currentToken != restored.loginToken))  {
                /* TODO Transit to Login */
                console.log("transit to login");
                if (options) {
                    options.callback(undefined, options.authRequired, false, "");
                }
                authStore.setStatus(DapandaConst.AuthenticationStatusInvalid, authStore.issuer);
            } else {
                authStore.update(restored, authStore.issuer); // status changed to updated.
                if (options) {
                    options.callback(restored, options.authRequired, options.restoreTransitData, options.transitTo, options.queryAndHash);
                }
            }
        } else if (status.value === DapandaConst.AuthenticationStatusRemoving) {
            /* Remove */
            localStorage.removeItem(DapandaConst.LocalStorageItemKey);
            authStore.setStatus(DapandaConst.AuthenticationStatusRemoved, authStore.issuer);
        }
    });
};
