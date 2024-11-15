import { chartSampleRouteRecord } from "%/samples/pages/ChartSample/ChartSampleRouteRecord";
import { helloCompositionRouteRecord } from "%/samples/pages/HelloComposition/HelloCompositionRouteRecord";
import { helloVuetifyRouteRecord } from "%/samples/pages/HelloVuetify/HelloVuetifyRouteRecord";
import { loginSampleRouteRecord } from "%/samples/pages/LoginSample/LoginSampleRouteRecord";
import { noPageSampleRouteRecord } from "%/samples/pages/NoPageSample/NoPageSampleRouteRecord";
import { validationSampleRouteRecord } from "%/samples/pages/ValidationSample/ValidationSampleRouteRecord";

/**
 * RouteRecordの配列を返します。
 */
export const routeSettings = () => {
    return [
        chartSampleRouteRecord,
        helloCompositionRouteRecord,
        helloVuetifyRouteRecord,
        loginSampleRouteRecord,
        noPageSampleRouteRecord,
        validationSampleRouteRecord
    ]
};
