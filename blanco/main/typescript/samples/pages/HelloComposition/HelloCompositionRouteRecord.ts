import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [HelloComposition]。
 */
export const helloCompositionRouteRecord: RouteRecordRaw = {
    path: "/composition",
    name: "composition",
    component: () => import("%/samples/pages/HelloComposition/HelloComposition.vue"),
    meta: {
        breadCrumb: "Composition APIサンプル",
        componentId: "HelloComposition",
        reload: false,
        authRequired: true
    }
};
