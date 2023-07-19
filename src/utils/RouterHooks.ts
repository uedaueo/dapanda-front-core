import {NavigationGuardNext, RouteLocationNormalized, RouteQueryAndHash, Router} from "vue-router";
import {LoginInfo} from "%/common/LoginInfo";
import {RestoreLoginDataCallbackType, RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {DapandaConst} from "@/common/DapandaGlobals";
import {PageTransitData} from "%/common/PageTransitData";

/**
 * VueRouter の共通 hook はここに実装します。
 *
 */
export class RouterHooks {
    /**
     * routeが解決される前に呼ばれる Global Guard の実装
     * @param router
     * @param to
     * @param from
     * @param next
     * @param nopagePath
     * @param queryAndHash to には query 情報がないので明示的に
     */
    static beforeResolve(router: Router, to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext, nopagePath: string) {
        console.log(
            "RouterHooks#beforeResolve: from " + from.path + " to " + to.path + " to.query = " + JSON.stringify(to.query)
        );

        /*
         * to がrouterに登録済みかどうかチェックする。
         */
        let resolved = router.resolve(to);
        console.log("guard matched: " + resolved.matched.length);
        console.log("guard path: " + resolved.path);
        console.log("guard name: " + (resolved.name as string));
        console.log("guard href: " + resolved.href);
        console.log("guard query: " + JSON.stringify(resolved.query));

        const query = resolved.query;
        const hash = resolved.hash;
        let hashAndQuery: RouteQueryAndHash|undefined = undefined;
        if (query || hash) {
            hashAndQuery = {
                query: query,
                hash: hash
            }
        }

        /*
         * route が登録済み。
         */
        if (resolved.matched.length > 0) {
            /*
             * PageTransitData store の状態をチェック
             */
            const pageStore = usePageTransitDataStore();
            console.log("matched!  current location = " + pageStore.location);
            if (resolved.path === pageStore.location) {
                next();
            } else {
                if (pageStore.data) {
                    pageStore.updateLocation(resolved.path, pageStore.data as PageTransitData, undefined, hashAndQuery);
                } else {
                    pageStore.updateLocation(resolved.path, undefined, undefined, hashAndQuery);
                }
            }
            return;
        }

        /*
         * 無いのでnopageに遷移する。nopage は必ず登録されていなければならない。
         */
        next({path: nopagePath});
    }

    /**
     * VueRouter で画面遷移をする直前に呼ばれる共通hookの実装。
     * @param router VueRouterのインスタンスです
     * @param to 遷移先routeのインスタンスです
     * @param from 現在のrouteのインスタンスです
     * @param next 遷移を実行するために呼び出す関数です
     * @param noAuthPath
     */
    static async beforeRouteLeave(
        router: Router,
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext,
        componentId: string,
        noAuthPath: string
    ) {
        console.log(
            "RouterHooks#beforeRouteLeave: from " + from.path + " to " + to.path
        );
        console.log(" to.matched = " + JSON.stringify(to.matched));

        const isReload = to.matched.some(record => record.meta.reload);
        const goToNext = () => {
            /*
             * ここではページのリロードを行うかどうかのみチェックする。
             */
            if (isReload) {
                const location = router.resolve(to);
                console.log(" reload! href = " + location.href);
                window.location.href = location.href;
            } else {
                console.log(" next!");
                next();
            }
        }
        /*
         * Login check and Transit
         */
        if (to.matched.some(record => record.meta.authRequired)) {
            const authStore = useAuthenticationControllerStore();
            const restoreLoginDataCallback: RestoreLoginDataCallbackType = (
                loginInfo: LoginInfo | undefined,
                authRequired: boolean,
                restoreTransitData: boolean,
                transitTo: string
            ): void => {
                console.log("RouterHooks: Auth Restore callback: loginInfo = " + loginInfo + ", authRequired = " + authRequired);
                if (!loginInfo || loginInfo.loginToken.length === 0) {
                    /* Not Authenticated. authStatus is already invalidated. */
                    if (authRequired) {
                        console.log("RouterHooks: authRequired but authenticated");
                        window.location.href = noAuthPath;
                    }
                } else {
                    /* Authenticated. authStatus change to valid. */
                    authStore.setStatus(DapandaConst.AuthenticationStatusValid, componentId);
                    goToNext();
                }
            }
            const options: RestoreLoginDataOptions = {
                callback: restoreLoginDataCallback,
                authRequired: true,
                restoreTransitData: false,
                transitTo: ""
            }
            authStore.restore(options, componentId);
        } else {
            goToNext();
        }
    }
}
