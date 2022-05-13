import { RouteRecordRaw } from "vue-router";

/**
 * RouteRecordを定義します: [HelloVuetify]。
 */
export const helloVuetifyRouteRecord: RouteRecordRaw = {
    path: "/",
    name: "top",
    component: () => import("%/samples/pages/HelloVuetify/HelloVuetify.vue"),
    meta: {
        reload: false,
        authRequired: true
    }
};
