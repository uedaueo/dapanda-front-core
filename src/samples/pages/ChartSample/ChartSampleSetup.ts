import {computed, reactive, ref, SetupContext, watch, watchEffect, WritableComputedRef} from 'vue'
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'
import {ChartSampleProps} from "%/samples/pages/ChartSample/ChartSampleProps";
import {useI18n} from "vue-i18n";
import {ChartSampleConst} from "@/samples/pages/ChartSample/ChartSampleConst";
import {i18n} from "@/i18n";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface BarDataSet {
    labels: Array<string>,
    datasets: Array<{
        label: string,
        data: Array<number>,
        backgroundColor?: string
    }>
}

export const chartSampleSetup = (props: ChartSampleProps, context: SetupContext) => {

    /**
     * i18n
     * 多言語対応
     * このページで表示するメッセージを Excel ファイルで定義
     */
    const { t } = useI18n();

    const msg = computed(() => t('labels.ChartSample.text'));

    console.log("msg = " + msg);
    console.log("msg = " + msg.value);

    const sLanguage = computed(() => t('labels.ChartSample.sLanguage'));
    const sItemLangJa = computed(() => t('labels.ChartSample.sItemLangJa'));
    const sItemLangEn = computed(() => t('labels.ChartSample.sItemLangEn'));

    /**
     * BarChart のデータ
     */
    const chartData1: BarDataSet = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { label: 'A', data: [40, 20, 12], backgroundColor: "red" }, { label: 'B', data: [50, 10, 30], backgroundColor: "blue" } ]
    };

    const chartData2: BarDataSet = {
        labels: [ 'April', 'May', 'June' ],
        datasets: [ { label: 'A', data: [100, 10, 50] }, { label: 'B', data: [60, 40, 50], backgroundColor: "blue" } ]
    };
    // ラベルで色とかの指定されていない情報を引き継ぐみたい
    // const chartData1: BarDataSet = {
    //     labels: [ 'January', 'February', 'March' ],
    //     datasets: [ { label: 'A', data: [40, 20, 12], backgroundColor: "red" } ]
    // };
    //
    // const chartData2: BarDataSet = {
    //     labels: [ 'April', 'May', 'June' ],
    //     datasets: [ { label: 'B', data: [100, 10, 50] } ]
    // };

    var chartData = ref<BarDataSet>(chartData1);

    /**
     * 更新ボタン押下後、データを更新
     */
    const updateSample = () => {
        console.log("!!! updateSample !!!");
        console.log("original chartData = " + JSON.stringify(chartData));
        console.log("chartData2 = " + JSON.stringify(chartData2));
        chartData.value = chartData2;
        console.log("update chartData = " + JSON.stringify(chartData));
    };

    const chartId = ref(props.chartId);
    // const width = ref(props.width);
    const width = 200;
    // const height = ref(props.height);
    const height = 50;
    const cssClasses = ref(props.cssClasses);
    // const styles: Partial<CSSStyleDeclaration> = {};
    // const plugins = ref(props.plugins);

    const languageItems = [
        {lLabel: sItemLangJa.value, lValue: ChartSampleConst.languageJa},
        {lLabel: sItemLangEn.value, lValue: ChartSampleConst.languageEn}
    ];

    const msg2 = msg;

    let language = ref<{lLabel: string, lValue: string}>(languageItems[0]);
    console.log("default language = " + language.value.lLabel);

    watch(language, () => {
        console.log("language = " + language.value.lValue);
        console.log("msg.value = " + msg.value);
        if (language.value.lValue === ChartSampleConst.languageJa) {
            console.log("ja original i18n.global.locale.value = " + i18n.global.locale.value);
            i18n.global.locale.value = "ja";
            console.log("language = " + language.value.lValue);
            console.log("ja new i18n.global.locale.value = " + i18n.global.locale.value);
        } else if (language.value.lValue === ChartSampleConst.languageEn) {
            console.log("en original i18n.global.locale.value = " + i18n.global.locale.value);
            i18n.global.locale.value = "en";
            console.log("language = " + language.value.lValue);
            console.log("en new i18n.global.locale.value = " + i18n.global.locale.value);
        }
        chartOptions.plugins.title.text = msg.value;
        console.log("msg.value 2 = " + msg.value);
    });

    /**
     * BarChart のオプション設定
     */
    const chartOptions = reactive({
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                // text: "やる気、元気、猪木",
                text: msg.value,
                color: "black",
                font: {
                    size: 14
                },
                position: "bottom"
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Month",
                    color: "black",
                    font: {
                        size: 14
                    },
                    align: "end"
                }
            },
            y: {
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    stepSize:10
                },
                title: {
                    display: true,
                    text: "%",
                    color: "black",
                    font: {
                        size: 14
                    },
                    align: "end"
                }
            }
        }
    });

    return {
        chartData,
        chartOptions,
        chartId,
        width,
        height,
        cssClasses,
        // styles,
        // plugins,
        updateSample,
        t,
        msg,
        language,
        languageItems,
        msg2,
        sLanguage
    };
};