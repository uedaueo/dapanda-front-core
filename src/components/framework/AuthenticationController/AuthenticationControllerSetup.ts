import {SetupContext, watch} from "vue";
import {
    AuthenticationControllerProps
} from "%/components/framework/AuthenticationController/AuthenticationControllerProps";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {storeToRefs} from "pinia";
import {DapandaConst} from "@/common/DapandaGlobals";
import {LoginInfo} from "%/common/LoginInfo";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {loginSampleRouteRecord} from "%/samples/pages/LoginSample/LoginSampleRouteRecord";

export const authenticationControllerSetup = (props: AuthenticationControllerProps, context: SetupContext) => {

    const authStore = useAuthenticationControllerStore();
    const { saveFlg, restoreFlg, removeFlg } = storeToRefs(authStore);
    const pageTransitDataStore = usePageTransitDataStore();

    /**
     * Save LoginInfo into LocalStorage
     */
    watch(saveFlg, () => {
        console.log("authenticationControllerSetup#watch(saveFlg) Start");
        if (authStore.loginInfo && authStore.loginInfo.loginToken != "") {
            const jsonInfo = JSON.stringify(authStore.loginInfo);
            console.log("authenticationControllerSetup#watch(saveFlg) jsonInfo = " + jsonInfo);
            localStorage.setItem(DapandaConst.LocalStorageItemKey, jsonInfo);
            authStore.prepared();
        } else {
            console.log("authenticationControllerSetup#watch(saveFlg) Clear");
            authStore.remove();
        }
    });

    /**
     * Restore LoginInfo from localStorage
     */
    watch(restoreFlg, () => {
        console.log("authenticationControllerSetup#watch(restoreFlg) Start");
        const jsonInfo = localStorage.getItem(DapandaConst.LocalStorageItemKey);
        let restored: LoginInfo = new LoginInfo();
        if (jsonInfo) {
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
                options.callback(undefined);
            }
            pageTransitDataStore.update(loginSampleRouteRecord.path);
        } else {
            authStore.update(restored); // update is not async.
            if (options) {
                options.callback(restored);
            }
        }
    });

    /**
     * Remove LoginInfo from LocalStorage
     */
    watch(removeFlg, () => {
        console.log("authenticationControllerSetup#watch(removeFlg) Start");
        localStorage.removeItem(DapandaConst.LocalStorageItemKey);
        authStore.prepared();
    });
};
