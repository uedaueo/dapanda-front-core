import {ComponentPropsOptions} from "vue";

export interface HelloMessagePropsOptions {
    message?: string
}

export const helloMessageProps: ComponentPropsOptions<HelloMessagePropsOptions> = {
    message: {
        // type: Object as PropType<string>,
        required: true,
        default: "Default Message!"
    }
}
