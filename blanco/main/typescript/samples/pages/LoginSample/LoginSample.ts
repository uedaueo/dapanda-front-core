import { ErrorMessage, Field, Form } from "vee-validate";
import { RouterHooks } from "@/utils/RouterHooks";
import { LoginSampleProps, loginSampleProps } from "./LoginSampleProps";
import {defineComponent, inject} from "vue";
import { loginSampleSetup } from "@/samples/pages/LoginSample/LoginSampleSetup";
import { LoginSampleRequestFactory } from "./LoginSampleRequestFactory";
import { LoginSamplePostRequest } from "%/samples/api/LoginSamplePostRequest";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

/**
 * ログイン画面の画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "LoginSample",
    props: loginSampleProps,
    components: {
        Field,
        Form,
        ErrorMessage
    },
    setup: (props, context) => {
        const factory: LoginSampleRequestFactory = {
            createLoginSamplePostRequest(): LoginSamplePostRequest {
                return new LoginSamplePostRequest();
            }
        };
        /* Check it only in first time. */
        const authStore = useAuthenticationControllerStore();
        const loginInfo = authStore.loginInfo as LoginInfo;
        const preparedFlg = authStore.preparedFlg;
        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, loginInfo, preparedFlg, noAuthPath);
        });
        return loginSampleSetup(props as LoginSampleProps, context, factory);
    }
});
