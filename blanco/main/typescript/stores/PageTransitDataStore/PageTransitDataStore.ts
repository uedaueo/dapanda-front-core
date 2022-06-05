import {defineStore} from "pinia";
import { pageTransitDataStoreState } from "%/stores/PageTransitDataStore/PageTransitDataStoreState";
import { pageTransitDataStoreActions } from "@/stores/PageTransitDataStore/PageTransitDataStoreActions";

/**
 * ページ遷移を制御するためのストアです。<br>
 * ページ遷移時に次ページに渡すデータもここに格納します。
 */
export const usePageTransitDataStore = defineStore("pageTransitDataStore", {
    state: () => pageTransitDataStoreState,
    actions: pageTransitDataStoreActions
});
