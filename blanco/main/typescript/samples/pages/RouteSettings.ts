import { helloVuetifyRouteRecord } from "%/samples/pages/HelloVuetify/HelloVuetifyRouteRecord";
import { chartSampleRouteRecord } from "%/samples/pages/ChartSample/ChartSampleRouteRecord";
import { helloCompositionRouteRecord } from "%/samples/pages/HelloComposition/HelloCompositionRouteRecord";

/**
 * RouteRecordの配列を返します。
 */
export const routeSettings = () => {
    return [
        helloVuetifyRouteRecord,
        chartSampleRouteRecord,
        helloCompositionRouteRecord
    ]
};
