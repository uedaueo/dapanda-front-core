import { helloVuetifyRouteRecord } from "%/samples/pages/HelloVuetify/HelloVuetifyRouteRecord";
import { helloCompositionRouteRecord } from "%/samples/pages/HelloComposition/HelloCompositionRouteRecord";
import {chartSampleRouteRecord} from "@/samples/pages/ChartSample/ChartSampleRouteRecord";

/**
 * RouteRecordの配列を返します。
 */
export const routeSettings = () => {
    return [
        helloVuetifyRouteRecord,
        helloCompositionRouteRecord,
        chartSampleRouteRecord
    ]
};
