import {defineStore} from "pinia";
import {pageTransitDataSoreState} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";
import {pageTransitDataStoreGetters} from "@/stores/PageTransitDataStore/PageTransitDataStoreGetters";
import {pageTransitDataStoreActions} from "@/stores/PageTransitDataStore/PageTransitDataStoreActions";

export const usePageTransitDataStore = defineStore("pageTransitDataStore", {
    state: () => pageTransitDataSoreState,
    getters: pageTransitDataStoreGetters,
    actions: pageTransitDataStoreActions
});
