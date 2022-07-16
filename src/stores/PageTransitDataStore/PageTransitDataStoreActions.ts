import {definePageTransitDataStoreActions} from "%/stores/PageTransitDataStore/DefinePageTransitDataStoreActions";
import {DapandaConst} from "@/common/DapandaGlobals";
import {PageTransitData} from "%/common/PageTransitData";

export const pageTransitDataStoreActions = definePageTransitDataStoreActions(
    {
        updateLocation(location: string, data?: PageTransitData) {
            console.log("current store.location is : " + this.location);
            console.log("pageTransitDataStoreOptions.actions.update to : " + location);
            this.location = location;
            if (data) {
                this.data = data;
                /* Store it into session storage */
                const mydata = JSON.stringify(data);
                console.log("store pageTransitData = " + mydata);
                // sessionStorage.setItem(DapandaConst.SessionStorageItemKey, mydata);
                this.dataStatus = DapandaConst.PageTransitDataStatusSaving;
            }
        },
        async restore(options) {
            console.log("PageTransitDataStoreActions#restore: current status = " +  this.dataStatus);
            this.dataRestoreOptions = options;
            this.dataStatus = DapandaConst.PageTransitDataStatusRestoring;
        },
        updateData(data?: PageTransitData) {
            console.log("PageTransitDataStoreActions#updateData: current status = " +  this.dataStatus);
            if (data) {
                console.log("PageTransitDataStoreActions#updateData: data = " + JSON.stringify(data));
                this.data = data;
                this.dataStatus = DapandaConst.PageTransitDataStatusSaving;
            } else {
                console.log("PageTransitDataStoreActions#updateData: Invalid Data.");
                this.data = undefined;
                this.dataStatus = DapandaConst.PageTransitDataStatusInvalid;
            }
        },
        async remove() {
            console.log("PageTransitDataStoreActions#remove: current status = " +  this.dataStatus);
            this.data = undefined;
            this.dataStatus = DapandaConst.PageTransitDataStatusRemoving;
        },
        setDataStatus(dataStatus: string) {
            console.log("PageTransitDataStoreActions#setDataStatus: current status = " +  this.dataStatus + ", new status = " + dataStatus);
            this.dataStatus = dataStatus;
        }
    }
);
