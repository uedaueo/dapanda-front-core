import { SnackbarAttribute } from "%/components/snackbar/SnackbarAttribute";

/**
 * stateを定義します
 */
export interface SnackbarStoreState {
    /**
     * Snackbar情報の配列です。
     */
    snackbarAttributes: Array<SnackbarAttribute>;

    /**
     * invalidの場合、Snackbarを表示してvalidに遷移する。
     */
    status: string;
}

/**
 * stateを定義します
 */
export const snackbarStoreState: SnackbarStoreState = {
    snackbarAttributes: new Array<SnackbarAttribute>(),
    status: "valid"
};
