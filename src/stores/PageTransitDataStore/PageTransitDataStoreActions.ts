import {definePageTransitDataStoreActions} from "%/stores/PageTransitDataStore/DefinePageTransitDataStoreActions";
import {DapandaConst} from "@/common/DapandaGlobals";
import {PageTransitData} from "%/common/PageTransitData";
import {RestorePageTransitDataOptions} from "@/common/RestorePageTransitDataOptions";
import {LocationQuery, RouteLocationRaw, RouteQueryAndHash} from "vue-router";

export const pageTransitDataStoreActions = definePageTransitDataStoreActions(
    {
        updateLocation(location: string, data?: PageTransitData, issuer?: string, queryAndHash?: RouteQueryAndHash) {
            console.log("current store.location is : " + this.location);
            console.log("pageTransitDataStoreOptions.actions.update to : " + location);
            this.location = location;
            if (queryAndHash) {
                console.log("query = " + JSON.stringify(queryAndHash.query));
                this.queryAndHash = queryAndHash;
            } else {
                this.queryAndHash = undefined;
            }
            if (data) {
                this.data = data;
                /* Store it into session storage */
                const mydata = JSON.stringify(data);
                console.log("store pageTransitData = " + mydata);
                // sessionStorage.setItem(DapandaConst.SessionStorageItemKey, mydata);
                this.dataStatus = DapandaConst.PageTransitDataStatusSaving;
                if (issuer) {
                    this.dataIssuer = issuer;
                }
            }
        },
        async restore(options: RestorePageTransitDataOptions | undefined, issuer: string) {
            console.log("PageTransitDataStoreActions#restore: current status = " +  this.dataStatus);
            this.dataRestoreOptions = options;
            this.dataStatus = DapandaConst.PageTransitDataStatusRestoring;
            this.dataIssuer = issuer;
        },
        updateData(data?: PageTransitData, issuer?: string) {
            console.log("PageTransitDataStoreActions#updateData: current status = " +  this.dataStatus);
            if (data) {
                console.log("PageTransitDataStoreActions#updateData: data = " + JSON.stringify(data));
                this.data = data;
                this.dataStatus = DapandaConst.PageTransitDataStatusSaving;
                if (issuer) {
                    this.dataIssuer = issuer;
                }
            } else {
                console.log("PageTransitDataStoreActions#updateData: Invalid Data.");
                this.data = undefined;
                this.dataStatus = DapandaConst.PageTransitDataStatusInvalid;
                this.dataIssuer = DapandaConst.PageTransitDataStatusIssuerDefault;
            }
        },
        async remove(issuer: string) {
            console.log("PageTransitDataStoreActions#remove: current status = " +  this.dataStatus);
            this.data = undefined;
            this.dataStatus = DapandaConst.PageTransitDataStatusRemoving;
            this.dataIssuer = issuer;
        },
        setDataStatus(dataStatus: string, issuer: string) {
            console.log("PageTransitDataStoreActions#setDataStatus: current status = " +  this.dataStatus + ", new status = " + dataStatus);
            this.dataStatus = dataStatus;
            this.dataIssuer = issuer;
        },
        setIssuer(issuer: string) {
            console.log("PageTransitDataStoreActions#setIssuer: current issuer = " +  this.dataIssuer + ", next = " + issuer);
            this.dataIssuer = issuer;
        }
    }
);
