import { ObjectEmitsOptions } from "vue";

/** emitsの型を定義します */
export declare type SnackbarMessageEmits = {
    "remove": (value: void) => boolean
} | ObjectEmitsOptions;

/**
 * emitsの定義です
 */
export const snackbarMessageEmits: SnackbarMessageEmits = {
    "remove": (value: void) => true
};
