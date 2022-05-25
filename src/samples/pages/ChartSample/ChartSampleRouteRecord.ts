import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [HelloComposition]。
 */
export const chartSampleRouteRecord: RouteRecordRaw = {
    path: "/chartSample",
    name: "chartSample",
    component: () => import("./ChartSample.vue"),
    meta: {
        reload: false,
        authRequired: true
    }
};
