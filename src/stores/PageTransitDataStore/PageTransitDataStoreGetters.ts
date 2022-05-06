import {defineStoreGetters} from "@/stores/StoreUtils";
import {
    pageTransitDataSoreState,
    PageTransitDataStoreState
} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";

export const pageTransitDataStoreGetters = defineStoreGetters(
    pageTransitDataSoreState,
    {
        getDesc: (state: PageTransitDataStoreState) => {
            console.log("Getters! " + state.location);
            return (name: string) => {
                return "Desc!" + name;
            };
        }
    }
);
