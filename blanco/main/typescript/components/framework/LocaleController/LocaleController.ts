import { localeControllerRender } from "@/components/framework/LocaleController/LocaleControllerRender";
import { localeControllerSetup } from "@/components/framework/LocaleController/LocaleControllerSetup";
import { defineComponent } from "vue";
import { LocaleControllerProps, localeControllerProps } from "./LocaleControllerProps";

/**
 * ロケールを制御するためのコンポーネントです。
 */
export default defineComponent({
    name: "LocaleController",
    props: localeControllerProps,
    setup: (props, context) => {
        const myProps = props as LocaleControllerProps;
        return localeControllerSetup(myProps, context);
    },
    render: () => {
        return localeControllerRender();
    }
});
