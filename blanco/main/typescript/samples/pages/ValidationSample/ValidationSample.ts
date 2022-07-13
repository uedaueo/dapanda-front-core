import {ErrorMessage, Field, Form} from "vee-validate";
import { RouterHooks } from "@/utils/RouterHooks";
import { validationSampleSetup } from "@/samples/pages/ValidationSample/ValidationSampleSetup";
import {defineComponent, inject} from "vue";
import { ValidationSampleProps, validationSampleProps } from "./ValidationSampleProps";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

/**
 * Validationを用いた画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "ValidationSample",
    props: validationSampleProps,
    components: {
        Field,
        Form,
        ErrorMessage
    },
    setup: (props, context) => {
        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, noAuthPath!);
        });
        return validationSampleSetup(props as ValidationSampleProps, context);
    }
});
