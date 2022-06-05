import {definePageTransitDataStoreActions} from "%/stores/PageTransitDataStore/DefinePageTransitDataStoreActions";

export const pageTransitDataStoreActions = definePageTransitDataStoreActions(
    {
        update(location: string, data?: any) {
            console.log("current sotre.location is : " + this.location);
            console.log("pageTransitDataStoreOptions.actions.update to : " + location);
            this.location = location;
        }
    }
);
