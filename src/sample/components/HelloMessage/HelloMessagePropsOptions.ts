import {ComponentPropsOptions, PropType} from "vue";

export interface HelloMessagePropsOptions {
    message?: string
}

export const helloMessagePropsOptions: ComponentPropsOptions<HelloMessagePropsOptions> = {
    message: {
        // type: Object as PropType<string>,
        required: true,
        default: "Default Message!"
    }
}
