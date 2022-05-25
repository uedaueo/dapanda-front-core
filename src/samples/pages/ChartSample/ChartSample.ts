import {defineComponent, PropType, reactive, ref, toRefs} from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PluginOptionsByType } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// const name = 'BarChart';
// const components =  { Bar };
// const props = withDefaults(defineProps<{
//     chartId?: string,
//     width?: number,
//     height?: number,
//     cssClasses?: string
// }>(), {
//     chartId: 'bar-chart',
//     width: 400,
//     height: 400,
//     cssClasses: ''
// });
//
// const chartData1 = {
//     labels: [ 'January', 'February', 'March' ],
//     datasets: [ { label: 'sample', data: [40, 20, 12] } ]
// };
//
// const chartData2 = {
//     labels: [ 'April', 'May', 'June' ],
//     datasets: [ { label: 'updateSample', data: [100, 10, 50] } ]
// };
//
// var chartData = chartData1;
//
// const updateSample = () => {
//     console.log("!!! updateSample !!!");
//     chartData = chartData2;
// };
//
// const chartOptions = { responsive: true }

interface BarDataSet {
    labels: Array<string>,
    datasets: [{label: string, data: Array<number>}]
}

export default defineComponent({
    name: 'BarChart',
    components: { Bar },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object as PropType<Partial<CSSStyleDeclaration>>,
            default: () => {}
        },
        plugins: {
            // type: Array as PropType<Plugin<'bar'>[]>,
            default: () => []
        }
    },
    setup(props) {
        const chartData1: BarDataSet = {
            labels: [ 'January', 'February', 'March' ],
            datasets: [ { label: 'sample', data: [40, 20, 12] } ]
        }

        const chartData2: BarDataSet = {
            labels: [ 'April', 'May', 'June' ],
            datasets: [ { label: 'updateSample', data: [100, 10, 50] } ]
        }

        var chartData = ref<BarDataSet>(chartData1);

        const updateSample = () => {
            console.log("!!! updateSample !!!");
            // chartData.datasets = chartData2.datasets;
            // chartData.labels = chartData2.labels;
            console.log("original chartData = " + JSON.stringify(chartData));
            console.log("chartData2 = " + JSON.stringify(chartData2));
            chartData.value = chartData2;
            console.log("update chartData = " + JSON.stringify(chartData));
        }

        const chartOptions = { responsive: true }

        const chartId = ref(props.chartId);
        const width = ref(props.width);
        const height = ref(props.height);
        const cssClasses = ref(props.cssClasses);
        const styles = ref(props.styles);
        const plugins = ref(props.plugins);

        return {
            chartData,
            chartOptions,
            chartId,
            width,
            height,
            cssClasses,
            styles,
            plugins,
            updateSample
        };
        // return () =>
        //     h(Bar, {
        //         chartData,
        //         chartOptions,
        //         chartId: props.chartId,
        //         width: props.width,
        //         height: props.height,
        //         cssClasses: props.cssClasses,
        //         styles: props.styles,
        //         plugins: props.plugins
        //     })
    }
})