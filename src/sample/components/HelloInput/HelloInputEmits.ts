import {ObjectEmitsOptions} from "vue";

export declare type HelloInputEmits = {
    'update': (value: string) => boolean,
    'downgrade': (value: number) => boolean
} | ObjectEmitsOptions

export const helloInputEmits: HelloInputEmits = {
    'update': (value: string) => true,
    'downgrade': (value: number) => true
}
