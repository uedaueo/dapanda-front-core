import { helloMessageSetup } from "@/samples/components/HelloMessage/HelloMessageSetup";
import { HelloMessageProps, helloMessageProps } from "./HelloMessageProps";
import { helloMessageEmits } from "./HelloMessageEmits";
import { defineComponent } from "vue";

/**
 * インプットコンポーネントのサンプルです。
 */
export default defineComponent({
    name: "HelloMessage",
    props: helloMessageProps,
    emits: helloMessageEmits,
    setup: (props, context) => {
        const myProps = props as HelloMessageProps;
        return helloMessageSetup(myProps, context);
    }
});
