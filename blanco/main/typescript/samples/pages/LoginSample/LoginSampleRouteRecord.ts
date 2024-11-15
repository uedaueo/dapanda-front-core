import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [LoginSample]。
 */
export const loginSampleRouteRecord: RouteRecordRaw = {
    path: "/loginSample",
    name: "loginSample",
    component: () => import("%/samples/pages/LoginSample/LoginSample.vue"),
    meta: {
        breadCrumb: "ログインページサンプル",
        componentId: "LoginSample",
        reload: false,
        authRequired: false
    }
};
