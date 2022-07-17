import { Bar } from 'vue-chartjs';
import { RouterHooks } from "@/utils/RouterHooks";
import { ChartSampleProps, chartSampleProps } from "./ChartSampleProps";
import { defineComponent, inject } from "vue";
import { chartSampleSetup } from "@/samples/pages/ChartSample/ChartSampleSetup";
import { onBeforeRouteLeave, useRouter } from "vue-router";

/**
 * サンプル図のコンポーネントです。
 */
export default defineComponent({
    name: "ChartSample",
    props: chartSampleProps,
    components: {
        Bar
    },
    setup: (props, context) => {
        const myProps = props as ChartSampleProps;
        const noAuthPath = inject<string>('noAuthPath');
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, myProps.componentId, noAuthPath!);
        });
        return chartSampleSetup(myProps, context);
    }
});
