import {createRouter, createWebHistory} from "vue-router";
import {routeSettings} from "%/samples/pages/RouteSettings";

const router = createRouter({
    history: createWebHistory(),
    routes: routeSettings()
})

export default router;
