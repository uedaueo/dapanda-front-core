import {definePageTransitDataStoreActions} from "%/stores/PageTransitDataStore/DefinePageTransitDataStoreActions";
import {DapandaConst} from "@/common/DapandaGlobals";

export const pageTransitDataStoreActions = definePageTransitDataStoreActions(
    {
        updateLocation(location: string, data?: any) {
            console.log("current store.location is : " + this.location);
            console.log("pageTransitDataStoreOptions.actions.update to : " + location);
            this.location = location;
            if (data) {
                this.data = data;
                /* Store it into session storage */
                const mydata = JSON.stringify(data);
                console.log("store pageTransitData = " + mydata);
                sessionStorage.setItem(DapandaConst.SessionStorageItemKey, mydata);
            }
        },
        restore(flag, options) {
            this.restoreFlg = flag;
            this.dataRestoreOptions = options;
        },
        updateData(data: any) {
            this.data = data;
        }
    }
);
