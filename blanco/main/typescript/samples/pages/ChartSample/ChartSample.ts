import { Bar } from 'vue-chartjs';
import { RouterHooks } from "@/utils/RouterHooks";
import { ChartSampleProps, chartSampleProps } from "./ChartSampleProps";
import {defineComponent, inject} from "vue";
import { chartSampleSetup } from "@/samples/pages/ChartSample/ChartSampleSetup";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import {storeToRefs} from "pinia";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

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

        /* Check it only in first time. */
        const authStore = useAuthenticationControllerStore();
        const loginInfo = authStore.loginInfo as LoginInfo;
        const preparedFlg = authStore.preparedFlg;
        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, loginInfo, preparedFlg, noAuthPath);
        });
        return chartSampleSetup(props as ChartSampleProps, context);
    }
});
