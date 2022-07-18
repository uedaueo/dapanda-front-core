import {defineComponent, provide, ref, watch} from "vue";
import MenuBar from "%/components/menu/MenuBar/MenuBar.vue";
import {useRouter} from "vue-router";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {useCommonStatusStore} from "%/stores/CommonStatusStore/CommonStatusStore";
import {storeToRefs} from "pinia";
import {RouterHooks} from "@/utils/RouterHooks";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {RestoreLoginDataCallbackType, RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";
import {LoginInfo} from "%/common/LoginInfo";
import {
    RestorePageTransitDataCallbackType,
    RestorePageTransitDataOptions
} from "@/common/RestorePageTransitDataOptions";
import {DapandaConst} from "@/common/DapandaGlobals";
import {useI18n} from "vue-i18n";

let logoutProcessCount = 0;

export default defineComponent({
    name: 'App',
    components: {
        MenuBar,
    },
    props: {
        componentId: {
            type: String,
            default: 'App',
        },
        nopagePath: {
            type: String,
            default: "/nopageSample",
            required: true
        },
        noAuthPath: {
            type: String,
            default: "/login",
            requied: true
        }
    },
    setup: (props, context) => {
        console.log("process.env.VUE_APP_DEPLOY_ENVIRONMENT is", process.env.VUE_APP_DEPLOY_ENVIRONMENT
        );

        /* i18n */
        const { t } = useI18n();

        /* Get processing status */
        const commonStatusStore = useCommonStatusStore();
        const { showProcessing, logout } = storeToRefs(commonStatusStore);

        /* remove baseUrl from current pathname */
        const baseUrl = process.env.BASE_URL;
        let targetPath = window.location.pathname;
        if (baseUrl) {
            targetPath = targetPath.slice(baseUrl.length);
        }
        console.log("targetPath: " + targetPath);

        /* Check page exist on directly specified with GET method */
        const router = useRouter();

        /* Set Global guards */
        router.beforeResolve((to, from, next) => {
            RouterHooks.beforeResolve(router, to, from, next, props.nopagePath);
        });

        let resolved = router.resolve({path: targetPath});
        console.log("matched: " + resolved.matched.length);
        console.log("path: " + resolved.path);
        console.log("name: " + (resolved.name as string));
        console.log("href: " + resolved.href);

        /* Restore Authentication Info. */
        const authStore = useAuthenticationControllerStore();
        const { status } = storeToRefs(authStore);
        const pageTransitDataStore = usePageTransitDataStore();
        const { dataStatus } = storeToRefs(pageTransitDataStore);

        /* Callback for restore authentication info. */
        const restoreLoginDataCallback: RestoreLoginDataCallbackType = (
            loginInfo: LoginInfo | undefined,
            authRequired: boolean,
            restoreTransitData: boolean,
            transitTo: string
        ): void => {
            console.log("Auth Restore callback: loginInfo = " + loginInfo + ", authRequired = " + authRequired);
            let noAuth = false;
            if (!loginInfo || loginInfo.loginToken.length === 0) {
                /* Not Authenticated. authStatus is already invalidated. */
                if (authRequired) {
                    console.log("authRequired but authenticated");
                    pageTransitDataStore.updateLocation(props.noAuthPath);
                    noAuth = true;
                }
            } else {
                /* Authenticated. change authStatus to valid */
                authStore.setStatus(DapandaConst.AuthenticationStatusValid, props.componentId);
            }
            /* Restore PageTransitData...Fall into Callback HELL!  */
            if (!noAuth && restoreTransitData) {
                let pageDataRestoreCallback: RestorePageTransitDataCallbackType = (resutl): void => {
                    console.log("page data restore done with " + resutl);
                    if (pageTransitDataStore.dataStatus === DapandaConst.PageTransitDataStatusUpdated) {
                        pageTransitDataStore.setDataStatus(DapandaConst.PageTransitDataStatusValid, props.componentId);
                    }
                    pageTransitDataStore.updateLocation(transitTo);
                }
                const pageDataOptions: RestorePageTransitDataOptions = {
                    callback: pageDataRestoreCallback
                }
                pageTransitDataStore.restore(pageDataOptions, props.componentId);
            }
        };
        const options: RestoreLoginDataOptions = {
            callback: restoreLoginDataCallback,
            authRequired: resolved.meta.authRequired as boolean,
            restoreTransitData: true,
            transitTo: resolved.matched.length == 0 ? props.nopagePath : resolved.path
        };
        /* async */
        authStore.restore(options, props.componentId);

        /*
         * Logout handler
         */
        let logoutFlg = ref(false);
        const onLogout = () => {
            console.log("AppSetup#onLogout START " + props.componentId);
            if (authStore.status === DapandaConst.AuthenticationStatusValid) {
                authStore.remove(props.componentId);
            }
            if (pageTransitDataStore.dataStatus === DapandaConst.PageTransitDataStatusValid || DapandaConst.PageTransitDataStatusSaved) {
                pageTransitDataStore.remove(props.componentId);
            }
        }
        const onLogoutCancel = () => {
            console.log("AppSetup#onLogoutCancel START");
            commonStatusStore.changeLogout(false);
        }

        /*
         * watch logout.
         */
        watch(logout, () => {
            console.log("AppSetup#watch logout = " + logout.value);
            logoutFlg.value = logout.value;
        })

        /*
         * watch remove status
         */
        watch([status, dataStatus], () => {
            const isIssuer = authStore.issuer === props.componentId;
            const isDataIssuer = pageTransitDataStore.dataIssuer === props.componentId;
            console.log("AppSetup#watch status. status = " + status.value + "(" + authStore.issuer + "), dataStatus = " + dataStatus.value + "(" + pageTransitDataStore.dataIssuer + "), logoutProcessCOunt = " + logoutProcessCount);
            if ((isIssuer || isDataIssuer) && logoutProcessCount > 1) {
                logoutProcessCount = 0;
                commonStatusStore.changeLogout(false);
                pageTransitDataStore.updateLocation(props.noAuthPath);
                return;
            }
            if (isDataIssuer && DapandaConst.PageTransitDataStatusInvalid) {
                logoutProcessCount++;
            }
            if (isIssuer && status.value === DapandaConst.AuthenticationStatusRemoved) {
                logoutProcessCount++;
                authStore.setStatus(DapandaConst.AuthenticationStatusInvalid, props.componentId);
            }
            if (isDataIssuer && dataStatus.value === DapandaConst.PageTransitDataStatusRemoved) {
                logoutProcessCount++;
                pageTransitDataStore.setDataStatus(DapandaConst.PageTransitDataStatusInvalid, props.componentId);
            }
        });

        /* Provide next page on authentication failure */
        provide<string>('noAuthPath', props.noAuthPath);

        return {
            t,
            showProcessing,
            onLogout,
            onLogoutCancel,
            logoutFlg
        }
    }
});
