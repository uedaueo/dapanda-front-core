import {PageTransitDataStoreState} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";
import {StateTree} from "pinia";

export declare type _PageTransitDataStoreGettersTree<S extends StateTree>  = {
    /**
     *
     * @param state
     */
    getDesc(state: S): {
        /**
         *
         * @param name
         */
        (name: string): string
    }
}

export function definePageTransitDataStoreGetters(
    getters: _PageTransitDataStoreGettersTree<PageTransitDataStoreState>
) {
    return getters;
}
