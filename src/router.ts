import {createRouter, createWebHistory} from "vue-router";
import routeSettings from "@/sample/pages/RouteSettings";

const router = createRouter({
    history: createWebHistory(),
    routes: routeSettings()
})

export default router;
