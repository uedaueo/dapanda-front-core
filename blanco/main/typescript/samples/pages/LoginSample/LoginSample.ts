import { ErrorMessage, Field, Form } from "vee-validate";
import { RouterHooks } from "@/utils/RouterHooks";
import { LoginSampleProps, loginSampleProps } from "./LoginSampleProps";
import { defineComponent } from "vue";
import { loginSampleSetup } from "@/samples/pages/LoginSample/LoginSampleSetup";
import { LoginSampleRequestFactory } from "./LoginSampleRequestFactory";
import { LoginSamplePostRequest } from "%/samples/api/LoginSamplePostRequest";
import { onBeforeRouteLeave, useRouter } from "vue-router";

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
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next);
        });
        return loginSampleSetup(props as LoginSampleProps, context, factory);
    }
});
