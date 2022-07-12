import { RouterHooks } from "@/utils/RouterHooks";
import { NoPageSampleProps, noPageSampleProps } from "./NoPageSampleProps";
import {defineComponent, inject} from "vue";
import { noPageSampleSetup } from "@/samples/pages/NoPageSample/NoPageSampleSetup";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

/**
 * NoPageを表示するための画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "NoPageSample",
    props: noPageSampleProps,
    setup: (props, context) => {
        /* Check it only in first time. */
        const authStore = useAuthenticationControllerStore();
        const loginInfo = authStore.loginInfo as LoginInfo;
        const preparedFlg = authStore.preparedFlg;
        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, loginInfo, preparedFlg, noAuthPath);
        });
        return noPageSampleSetup(props as NoPageSampleProps, context);
    }
});
