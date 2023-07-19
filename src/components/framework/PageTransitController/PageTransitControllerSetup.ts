import {SetupContext, watch} from "vue";
import {storeToRefs} from "pinia";
import {RouteLocationRaw, useRouter} from "vue-router";
import {PageTransitControllerProps} from "%/components/framework/PageTransitController/PageTransitControllerProps";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {DapandaConst} from "@/common/DapandaGlobals";
import {RestorePageTransitDataOptions} from "@/common/RestorePageTransitDataOptions";

export const pageTransitControllerSetup = (props: PageTransitControllerProps, context: SetupContext) => {
    const pageTransitData = usePageTransitDataStore();
    const { location, dataStatus } = storeToRefs(pageTransitData);
    console.log("pageTransitControllerSetup: location = " + location.value);
    const router = useRouter();
    watch(location, () => {
        console.log("pageTransitControllerSetup toLocation " + location.value + ", query = " + JSON.stringify(pageTransitData.queryAndHash));
        const routeLocation: RouteLocationRaw = {
            path: location.value,
            query: undefined,
            hash: undefined
        };
        routeLocation.query = pageTransitData.queryAndHash?.query;
        routeLocation.hash = pageTransitData.queryAndHash?.hash;
        router.push(routeLocation);
    });
    watch(dataStatus, () => {
        console.log("pageTransitionControllerSetup: dataStatus = " + dataStatus.value + ", dataIssuer = " + pageTransitData.dataIssuer);
        if (dataStatus.value === DapandaConst.PageTransitDataStatusRestoring) {
            const restored = sessionStorage.getItem(DapandaConst.SessionStorageItemKey);
            const options: RestorePageTransitDataOptions | undefined = pageTransitData.dataRestoreOptions;
            pageTransitData.setDataStatus(DapandaConst.PageTransitDataStatusInvalid, pageTransitData.dataIssuer);
            if (restored && restored.length > 0) {
                const pageData = JSON.parse(restored);
                if (pageData) {
                    pageTransitData.updateData(pageData);
                    /* force to change status to updated because data is restored. */
                    pageTransitData.setDataStatus(DapandaConst.PageTransitDataStatusUpdated, pageTransitData.dataIssuer);
                } else {
                    console.log("pageTransitionControllerSetup#watch(dataStatus) pageData invalid.");
                    pageTransitData.updateData(undefined);
                    /* status is changed to invalid */
                }
            }
            if (options) {
                /* restore done. */
                options.callback(true);
            }
        } else if (dataStatus.value === DapandaConst.PageTransitDataStatusSaving) {
            const data = pageTransitData.data;
            if (data) {
                const jsonData = JSON.stringify(data);
                console.log(" watch saving: data = " + jsonData);
                sessionStorage.setItem(DapandaConst.SessionStorageItemKey, jsonData);
                pageTransitData.setDataStatus(DapandaConst.PageTransitDataStatusSaved, pageTransitData.dataIssuer);
            } else {
                console.log(" watch saving: data is empty");
            }
        } else if (dataStatus.value === DapandaConst.PageTransitDataStatusRemoving) {
            const jsonData = sessionStorage.getItem(DapandaConst.SessionStorageItemKey);
            if (jsonData && jsonData.length > 0) {
                sessionStorage.removeItem(DapandaConst.SessionStorageItemKey);
            }
            pageTransitData.setDataStatus(DapandaConst.PageTransitDataStatusRemoved, pageTransitData.dataIssuer);
        }
    });
};
