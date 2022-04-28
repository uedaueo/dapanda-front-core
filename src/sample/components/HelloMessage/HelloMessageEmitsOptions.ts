import {EmitsOptions, ObjectEmitsOptions} from "vue";

export declare type HelloMessageEmitsOptions = {
    'update:message': (value: string) => boolean
} | ObjectEmitsOptions

export const helloMessageEmitsOptions: HelloMessageEmitsOptions = {
    'update:message': (value: string) => true
}
