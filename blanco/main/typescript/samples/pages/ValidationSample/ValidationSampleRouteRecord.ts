import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [ValidationSample]。
 */
export const validationSampleRouteRecord: RouteRecordRaw = {
    path: "/validation",
    name: "validation",
    component: () => import("%/samples/pages/ValidationSample/ValidationSample.vue"),
    meta: {
        reload: true,
        authRequired: true
    },
    props: route => ({
        pname: route.query.qname
    })
};
