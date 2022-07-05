import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import {routeSettings} from "%/samples/pages/RouteSettings";

let allRoute: RouteRecordRaw[] = routeSettings();

export function appendRouteRecords(routeRecords: RouteRecordRaw[]) {
    allRoute = allRoute.concat(routeRecords);
}

export const createAllRoute = (): Router => {
    return createRouter(
        {
            history: createWebHistory(),
            routes: allRoute
        }
    )
}
