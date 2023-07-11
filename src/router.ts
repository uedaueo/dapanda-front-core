import {createRouter, createWebHashHistory, createWebHistory, Router, RouteRecordRaw, RouterHistory} from "vue-router";
import {routeSettings} from "%/samples/pages/RouteSettings";

let allRoute: RouteRecordRaw[] = routeSettings();

export function appendRouteRecords(routeRecords: RouteRecordRaw[]) {
    allRoute = allRoute.concat(routeRecords);
}

export const createAllRoute = (historyType: string = "history"): Router => {
    let baseUrl = "/";
    if ("VITE_APP_ROUTE_BASE" in import.meta.env) {
        baseUrl = import.meta.env.VITE_APP_ROUTE_BASE;
    }
    let myHistory = createWebHistory(baseUrl);
    if (historyType === "hash") {
        myHistory = createWebHashHistory(baseUrl);
    }
    return createAllRouteWithHistory(myHistory);
}

export const createAllRouteWithHistory = (history: RouterHistory): Router => {
    return createRouter(
        {
            history: history,
            routes: allRoute
        }
    )
}
