import {ObjectEmitsOptions} from "vue";

export declare type HelloInputEmitsOptions = {
    'update': (value: string) => boolean,
    'downgrade': (value: number) => boolean
} | ObjectEmitsOptions

export const helloInputEmitsOptions: HelloInputEmitsOptions = {
    'update': (value: string) => true,
    'downgrade': (value: number) => true
}
