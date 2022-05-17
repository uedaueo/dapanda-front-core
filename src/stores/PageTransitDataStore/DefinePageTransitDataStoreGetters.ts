import {PageTransitDataStoreState} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";
import {StateTree} from "pinia";

declare type _PageTransitDataStoreGettersTree<S extends StateTree>  = {
    /**
     *
     * @param name
     * @return 文字列
     */
    getDesc(state: S): { (name: string): string }
}

export function definePageTransitDataStoreGetters(
    getters: _PageTransitDataStoreGettersTree<PageTransitDataStoreState>
) {
    return getters;
}
