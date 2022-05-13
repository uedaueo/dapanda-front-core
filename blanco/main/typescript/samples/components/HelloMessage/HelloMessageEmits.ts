import { ObjectEmitsOptions } from "vue";

/** emitsの型を定義します */
export declare type HelloMessageEmits = {
    "update:message": (value: string) => boolean
} | ObjectEmitsOptions;

/**
 * emitsの定義です
 */
export const helloMessageEmits: HelloMessageEmits = {
    "update:message": (value: string) => true
};
