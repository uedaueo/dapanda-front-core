import {
    defineSnackbarStoreGetters
} from "%/stores/SnackbarStore/DefineSnackbarStoreGetters";
import {SnackbarStoreState} from "%/stores/SnackbarStore/SnackbarStoreState";

export const snackbarStoreGetters = defineSnackbarStoreGetters(
    {
        snackbar: (state: SnackbarStoreState) => {
            return () => state.snackbarAttributes.length !== 0
        }
    }
);
