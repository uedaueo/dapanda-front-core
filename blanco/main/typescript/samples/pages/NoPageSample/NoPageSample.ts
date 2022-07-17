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
        const myProps = props as NoPageSampleProps;
        const noAuthPath = inject<string>('noAuthPath');
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, myProps.componentId, noAuthPath!);
        });
        return noPageSampleSetup(myProps, context);
    }
});
