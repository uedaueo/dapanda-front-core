import {Bar} from 'vue-chartjs';
import {RouterHooks} from "@/utils/RouterHooks";
import {ChartSampleProps, chartSampleProps} from "./ChartSampleProps";
import {defineComponent, inject} from "vue";
import {chartSampleSetup} from "@/samples/pages/ChartSample/ChartSampleSetup";
import {onBeforeRouteLeave, useRouter} from "vue-router";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {RestoreLoginDataCallbackType} from "@/common/RestoreLoginInfoOptions";
import {_GettersTree, Store} from "pinia";
import {
    AuthenticationControllerStoreState
} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStoreState";
import {
    AuthenticationControllerStoreActionsTree
} from "%/stores/AuthenticationControllerStore/DefineAuthenticationControllerStoreActions";

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

        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, noAuthPath!);
        });
        return chartSampleSetup(props as ChartSampleProps, context);
    }
});
