import {defineStore} from "pinia";
import { snackbarStoreState } from "%/stores/SnackbarStore/SnackbarStoreState";
import { snackbarStoreGetters } from "@/stores/SnackbarStore/SnackbarStoreGetters";
import { snackbarStoreActions } from "@/stores/SnackbarStore/SnackbarStoreActions";

/**
 * Snackbarを制御するためのストアです。<br>
 */
export const useSnackbarStore = defineStore("snackbarStore", {
    state: () => snackbarStoreState,
    getters: snackbarStoreGetters,
    actions: snackbarStoreActions
});
