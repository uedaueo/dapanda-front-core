import HelloInput from "%/samples/components/HelloInput/HelloInput.vue";
import HelloMessage from "%/samples/components/HelloMessage/HelloMessage.vue";
import { RouterHooks } from "@/utils/RouterHooks";
import { helloCompositionSetup } from "@/samples/pages/HelloComposition/HelloCompositionSetup";
import { defineComponent, inject } from "vue";
import { HelloCompositionProps, helloCompositionProps } from "./HelloCompositionProps";
import { onBeforeRouteLeave, useRouter } from "vue-router";

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
        const noAuthPath = inject<string>('noAuthPath');
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, noAuthPath!);
        });
        return helloCompositionSetup(props as HelloCompositionProps, context);
    }
});
