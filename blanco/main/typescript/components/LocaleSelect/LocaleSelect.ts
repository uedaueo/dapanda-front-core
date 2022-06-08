import { defineComponent } from "vue";
import { LocaleSelectProps, localeSelectProps } from "./LocaleSelectProps";
import { localeSelectSetup } from "@/components/LocaleSelect/LocaleSelectSetup";

/**
 * ロケール選択コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "LocaleSelect",
    props: localeSelectProps,
    setup: (props, context) => {
        return localeSelectSetup(props as LocaleSelectProps, context);
    }
});
