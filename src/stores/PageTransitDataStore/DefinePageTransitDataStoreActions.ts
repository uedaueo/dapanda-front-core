import {UnwrapRef} from "vue";
import {PageTransitDataStoreState} from "@/stores/PageTransitDataStore/PageTransitDataSoreState";

export declare type _PageTransitDataStoreActionTree = {
    update(transitData: PageTransitDataStoreState): void;
    download(): string;
}

export function definePageTransitDataStoreActions(
    actions: _PageTransitDataStoreActionTree & ThisType<_PageTransitDataStoreActionTree & UnwrapRef<PageTransitDataStoreState>>
) {
    return actions;
}
