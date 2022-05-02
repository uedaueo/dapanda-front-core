import {
    PageTransitDataStoreState,
    pageTrasitDataStoreState
} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import { defineStoreOptions } from "@/stores/StoreUtils";

export const pageTransitDataStoreOptions = defineStoreOptions({
    state: () => pageTrasitDataStoreState,
    getters: {
        getDesc: (state: PageTransitDataStoreState) => {
            console.log("Getters! " + state.location);
            return (name: string) => {
                return "Desc!" + name;
            };
        }
    },
    actions: {
        update(transitData: PageTransitDataStoreState) {
            console.log("pageTransitDataStoreOptions.actions.update to : " + transitData.location);
            this.location = transitData.location;
        }
    }
});
