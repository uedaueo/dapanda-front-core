import {createRouter, createWebHashHistory, createWebHistory, Router, RouteRecordRaw} from "vue-router";
import {routeSettings} from "%/samples/pages/RouteSettings";

let allRoute: RouteRecordRaw[] = routeSettings();

export function appendRouteRecords(routeRecords: RouteRecordRaw[]) {
    allRoute = allRoute.concat(routeRecords);
}

export const createAllRoute = (historyType: string = "history"): Router => {
    let myHistory = createWebHistory();
    if (historyType === "hash") {
        myHistory = createWebHashHistory();
    }
    return createRouter(
        {
            history: myHistory,
            routes: allRoute
        }
    )
}
