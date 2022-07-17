import { AuthenticationControllerProps, authenticationControllerProps } from "./AuthenticationControllerProps";
import { defineComponent } from "vue";
import { authenticationControllerRender } from "@/components/framework/AuthenticationController/AuthenticationControllerRender";
import { authenticationControllerSetup } from "@/components/framework/AuthenticationController/AuthenticationControllerSetup";

/**
 * 認証情報を制御するためのコンポーネントです。
 */
export default defineComponent({
    name: "AuthenticationController",
    props: authenticationControllerProps,
    setup: (props, context) => {
        const myProps = props as AuthenticationControllerProps;
        return authenticationControllerSetup(myProps, context);
    },
    render: () => {
        return authenticationControllerRender();
    }
});
