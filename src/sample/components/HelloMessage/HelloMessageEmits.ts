import {ObjectEmitsOptions} from "vue";

export declare type HelloMessageEmits = {
    'update:message': (value: string) => boolean
} | ObjectEmitsOptions

export const helloMessageEmits: HelloMessageEmits = {
    'update:message': (value: string) => true
}
