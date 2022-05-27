import { Bar } from 'vue-chartjs';
import { ChartSampleProps, chartSampleProps } from "./ChartSampleProps";
import { defineComponent } from "vue";
import { chartSampleSetup } from "@/samples/pages/ChartSample/ChartSampleSetup";

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
        return chartSampleSetup(props as ChartSampleProps, context);
    }
});
