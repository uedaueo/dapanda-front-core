import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [ChartSample]。
 */
export const chartSampleRouteRecord: RouteRecordRaw = {
    path: "/chartSample",
    name: "chartSample",
    component: () => import("%/samples/pages/ChartSample/ChartSample.vue"),
    meta: {
        reload: false,
        authRequired: true
    }
};
