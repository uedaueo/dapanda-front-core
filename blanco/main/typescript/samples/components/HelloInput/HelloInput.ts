import { helloInputSetup } from "@/samples/components/HelloInput/HelloInputSetup";
import { defineComponent } from "vue";
import { helloInputEmits } from "./HelloInputEmits";
import { HelloInputProps, helloInputProps } from "./HelloInputProps";

/**
 * インプットコンポーネントのサンプルです。
 */
export default defineComponent({
    name: "HelloInput",
    props: helloInputProps,
    emits: helloInputEmits,
    setup: (props, context) => {
        return helloInputSetup(props as HelloInputProps, context);
    }
});
