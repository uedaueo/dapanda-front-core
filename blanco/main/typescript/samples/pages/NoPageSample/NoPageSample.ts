import { RouterHooks } from "@/utils/RouterHooks";
import { NoPageSampleProps, noPageSampleProps } from "./NoPageSampleProps";
import { defineComponent, inject } from "vue";
import { noPageSampleSetup } from "@/samples/pages/NoPageSample/NoPageSampleSetup";
import { onBeforeRouteLeave, useRouter } from "vue-router";

/**
 * NoPageを表示するための画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "NoPageSample",
    props: noPageSampleProps,
    setup: (props, context) => {
        const noAuthPath = inject<string>('noAuthPath');
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, noAuthPath!);
        });
        return noPageSampleSetup(props as NoPageSampleProps, context);
    }
});
