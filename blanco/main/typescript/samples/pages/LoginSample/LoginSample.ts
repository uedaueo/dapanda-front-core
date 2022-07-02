import {ErrorMessage, Field, Form} from "vee-validate";
import { LoginSampleProps, loginSampleProps } from "./LoginSampleProps";
import { defineComponent } from "vue";
import { loginSampleSetup } from "@/samples/pages/LoginSample/LoginSampleSetup";

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
        return loginSampleSetup(props as LoginSampleProps, context);
    }
});
