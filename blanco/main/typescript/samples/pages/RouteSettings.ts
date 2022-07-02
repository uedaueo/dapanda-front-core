import { helloVuetifyRouteRecord } from "%/samples/pages/HelloVuetify/HelloVuetifyRouteRecord";
import { loginSampleRouteRecord } from "%/samples/pages/LoginSample/LoginSampleRouteRecord";
import { validationSampleRouteRecord } from "%/samples/pages/ValidationSample/ValidationSampleRouteRecord";
import { chartSampleRouteRecord } from "%/samples/pages/ChartSample/ChartSampleRouteRecord";
import { helloCompositionRouteRecord } from "%/samples/pages/HelloComposition/HelloCompositionRouteRecord";

/**
 * RouteRecordの配列を返します。
 */
export const routeSettings = () => {
    return [
        helloVuetifyRouteRecord,
        loginSampleRouteRecord,
        validationSampleRouteRecord,
        chartSampleRouteRecord,
        helloCompositionRouteRecord
    ]
};
