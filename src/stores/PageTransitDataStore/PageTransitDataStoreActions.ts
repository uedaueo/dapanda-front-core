import {PageTransitDataStoreState} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";
import {definePageTransitDataStoreActions} from "@/stores/PageTransitDataStore/DefinePageTransitDataStoreActions";

export const pageTransitDataStoreActions = definePageTransitDataStoreActions(
    {
        update(transitData: PageTransitDataStoreState) {
            console.log("current sotre.location is : " + this.location);
            console.log("pageTransitDataStoreOptions.actions.update to : " + transitData.location);
            this.location = transitData.location;
        },
        async download(): Promise<string> {
            const hoge: Array<string> = [];
            return new Promise((resolve) => resolve(""));
        }
        // ,
        // hoge: 'date'
    }
);
