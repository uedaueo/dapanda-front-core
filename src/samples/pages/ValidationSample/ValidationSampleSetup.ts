import {ValidationSampleProps} from "%/samples/pages/ValidationSample/ValidationSampleProps";
import {inject, ref, SetupContext} from "vue";
import {useI18n} from "vue-i18n";
import {ChartSampleInitData} from "%/samples/pages/ChartSample/ChartSampleInitData";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {PageTransitData} from "%/common/PageTransitData";

export const validationSampleSetup = (props: ValidationSampleProps, context: SetupContext) => {
    const { t } = useI18n();
    const title = ref(props.subject);

    const send = inject('send');

    const pageStore = usePageTransitDataStore();
    const onSubmit = (values: any) => {
        console.log("Submitted : " + values.chartnum);
        const chartData = new ChartSampleInitData();
        chartData.dataSet = values.chartnum - 1;
        const data = new PageTransitData();
        data.type = "ChartSampleInitData";
        data.data = chartData;
        pageStore.updateLocation("/chartSample", data);
    }
    return {
        t,
        title,
        onSubmit
    }
}
