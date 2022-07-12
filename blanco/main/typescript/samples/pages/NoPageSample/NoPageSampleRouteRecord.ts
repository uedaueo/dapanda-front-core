import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [NoPageSample]。
 */
export const noPageSampleRouteRecord: RouteRecordRaw = {
    path: "/nopageSample",
    name: "nopgeSample",
    component: () => import("%/samples/pages/NoPageSample/NoPageSample.vue"),
    meta: {
        reload: true,
        authRequired: false
    }
};
