import {_GettersTree, defineStore, DefineStoreOptions, StateTree} from "pinia";
import { pageTransitDataStoreOptions } from "@/stores/PageTransitDataStore/PageTransitDataStoreOptions";

export interface PageTransitDataStoreState {
    location: string
}

export const pageTrasitDataStoreState: PageTransitDataStoreState = {
    location: "/"
}

export const usePageTransitDataStore = defineStore("pageTransitDataStore", pageTransitDataStoreOptions);

// export const usePageTransitDataStore = defineStore("pageTransitDataStore",{
//     state: () => pageTrasitDataStoreState,
//     getters: {
//         getDesc: (state: PageTransitDataStoreState) => {
//             console.log("Getters! " + state.location);
//             return (name: string) => {
//                 return "Desc!" + name;
//             };
//         }
//     },
//     actions: {
//         update(transitData: PageTransitDataStoreState) {
//             console.log("pageTransitDataStoreOptions.actions.update to : " + transitData.location);
//             this.location = transitData.location;
//         }
//     }
// });
