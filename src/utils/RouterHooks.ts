import {NavigationGuardNext, RouteLocationNormalized, Router} from "vue-router";
import {LoginInfo} from "%/common/LoginInfo";

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
     */
    static beforeResolve(router: Router, to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext, nopagePath: string) {
        console.log(
            "RouterHooks#beforeResolve: from " + from.path + " to " + to.path
        );

        /*
         * to がrouterに登録済みかどうかチェックする。
         */
        let resolved = router.resolve(to);
        console.log("guard matched: " + resolved.matched.length);
        console.log("guard path: " + resolved.path);
        console.log("guard name: " + (resolved.name as string));
        console.log("guard href: " + resolved.href);

        /*
         * route が登録済み。
         */
        if (resolved.matched.length > 0) {
            next();
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
     * @param loginInfo
     * @param preparedFlg
     */
    static async beforeRouteLeave(
        router: Router,
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext,
        loginInfo: LoginInfo,
        preparedFlg: boolean,
        noAuthPath: string | undefined
    ) {
        console.log(
            "RouterHooks#beforeRouteLeave: from " + from.path + " to " + to.path
        );
        console.log(" to.matched = " + JSON.stringify(to.matched));

        /*
         * Login check
         */
        if (to.matched.some(record => record.meta.authRequired)) {
            if (!(preparedFlg && loginInfo.loginToken !== undefined && loginInfo.loginToken.length > 0)) {
                // Auth Error.
                console.log("!!! authRequired but not authenticated yet !!!" );
                // if (noAuthPath) {
                //     next({path: noAuthPath});
                // }
            }
        }

        /*
         * ここではページのリロードを行うかどうかのみチェックする。
         */
        if (to.matched.some(record => record.meta.reload)) {
            console.log(" reload!");
            window.location.href = to.path;
        } else {
            console.log(" next!");
            next();
        }
    }
}
