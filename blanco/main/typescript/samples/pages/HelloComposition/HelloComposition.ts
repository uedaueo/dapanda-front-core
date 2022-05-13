import HelloInput from "%/samples/components/HelloInput/HelloInput.vue";
import HelloMessage from "%/samples/components/HelloMessage/HelloMessage.vue";
import { helloCompositionSetup } from "@/samples/pages/HelloComposition/HelloCompositionSetup";
import { defineComponent } from "vue";
import { HelloCompositionProps, helloCompositionProps } from "./HelloCompositionProps";

/**
 * Composition APIを用いた画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "HelloComposition",
    props: helloCompositionProps,
    components: {
        HelloInput,
        HelloMessage
    },
    setup: (props, context) => {
        return helloCompositionSetup(props as HelloCompositionProps, context);
    }
});
