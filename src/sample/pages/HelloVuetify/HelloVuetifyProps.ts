import {LooseRequired} from "@vue/shared";
import {ComponentPropsOptions} from "vue";

interface HelloVuetifyPropsInterface {
    title: string,
    alias: string
}

export declare type HelloVuetifyProps = Readonly<LooseRequired<HelloVuetifyPropsInterface>>;

export const helloVuetifyProps: ComponentPropsOptions<HelloVuetifyPropsInterface> = {
    title: {
        default: 'HelloVuetify'
    },
    alias: {
        default: 'こんにちは'
    }
}
