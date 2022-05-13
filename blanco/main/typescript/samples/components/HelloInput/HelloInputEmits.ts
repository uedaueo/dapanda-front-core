import { ObjectEmitsOptions } from "vue";

/** emitsの型を定義します */
export declare type HelloInputEmits = {
    "update": (value: string) => boolean,
    "downgrade": (value: number) => boolean
} | ObjectEmitsOptions;

/**
 * emitsの定義です
 */
export const helloInputEmits: HelloInputEmits = {
    "update": (value: string) => true,
    "downgrade": (value: number) => true
};
