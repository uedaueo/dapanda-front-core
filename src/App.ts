import {defineComponent, provide} from "vue";
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

export default defineComponent({
    name: 'App',
    components: {
        MenuBar,
    },
    props: {
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

        /* Get OverlayStatus */
        const commonStatusStore = useCommonStatusStore();
        const { overlay } = storeToRefs(commonStatusStore);

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
        const pageTransitDataStore = usePageTransitDataStore();
        let restoreLoginDataCallback: RestoreLoginDataCallbackType = (
            loginInfo: LoginInfo | undefined
        ): void => {
            console.log("restored callback: loginInfo = " + loginInfo);
            let noAuth = false;
            if (resolved.meta.authRequired) {
                if (!loginInfo || loginInfo.loginToken.length === 0) {
                    /* Not Authenticated */
                    console.log("authRequired but authenticated");
                    pageTransitDataStore.updateLocation(props.noAuthPath);
                    noAuth = true;
                }
            }
            /* Restore PageTransitData...Fall into Callback HELL!  */
            if (!noAuth) {
                let pageDataRestoreCallback: RestorePageTransitDataCallbackType = (resutl): void => {
                    console.log("page data restore done with " + resutl);
                    if (resolved.matched.length == 0) {
                        // transit to nopage.
                        pageTransitDataStore.updateLocation(props.nopagePath);
                    } else {
                        pageTransitDataStore.updateLocation(resolved.path)
                    }
                }
                const pageDataOptions: RestorePageTransitDataOptions = {
                    callback: pageDataRestoreCallback
                }
                pageTransitDataStore.restore(true, pageDataOptions);
            }
        };
        const options: RestoreLoginDataOptions = {
            callback: restoreLoginDataCallback
        };
        /* async */
        authStore.restore(options);

        /* Provide next page on authentication failure */
        provide<string>('noAuthPath', props.noAuthPath);

        return {
            overlay
        }
    }
});
