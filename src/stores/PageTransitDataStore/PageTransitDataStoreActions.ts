import {defineStoreActions} from "@/stores/StoreUtils";
import {
    pageTransitDataSoreState,
    PageTransitDataStoreState
} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";
import {pageTransitDataStoreGetters} from "@/stores/PageTransitDataStore/PageTransitDataStoreGetters";

export const pageTransitDataStoreActions = defineStoreActions(
    pageTransitDataSoreState,
    pageTransitDataStoreGetters,
    {
    update(transitData: PageTransitDataStoreState) {
        console.log("pageTransitDataStoreOptions.actions.update to : " + transitData.location);
        this.location = transitData.location;
    }
})
