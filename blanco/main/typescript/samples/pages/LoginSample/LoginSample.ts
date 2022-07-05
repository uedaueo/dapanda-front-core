import {ErrorMessage, Field, Form} from "vee-validate";
import { LoginSampleProps, loginSampleProps } from "./LoginSampleProps";
import { defineComponent } from "vue";
import { loginSampleSetup } from "@/samples/pages/LoginSample/LoginSampleSetup";
import { LoginSampleRequestFactory } from "./LoginSampleRequestFactory";
import { LoginSamplePostRequest } from "%/samples/api/LoginSamplePostRequest";

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
        }
        return loginSampleSetup(props as LoginSampleProps, context, factory);
    }
});
