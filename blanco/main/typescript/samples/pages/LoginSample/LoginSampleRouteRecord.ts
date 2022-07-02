import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [LoginSample]。
 */
export const loginSampleRouteRecord: RouteRecordRaw = {
    path: "/login",
    name: "login",
    component: () => import("%/samples/pages/LoginSample/LoginSample.vue"),
    meta: {
        reload: false,
        authRequired: false
    }
};
