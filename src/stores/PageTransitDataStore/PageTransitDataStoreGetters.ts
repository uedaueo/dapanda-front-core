import {PageTransitDataStoreState} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";
import {definePageTransitDataStoreGetters} from "@/stores/PageTransitDataStore/DefinePageTransitDataStoreGetters";

export const pageTransitDataStoreGetters = definePageTransitDataStoreGetters(
    {
        getDesc: (state: PageTransitDataStoreState) => {
            console.log("Getters! " + state.location);
            return (name: string) => {
                return "Desc! " + name;
                // return 0;
            };
        }
        // ,
        // dummyFunc: (state: PageTransitDataStoreState) => {
        //     console.log("Getters! " + state.location);
        //     return (name: string) => {
        //         // return "Desc!" + name;
        //         return 0;
        //     };
        // }
    }
);
