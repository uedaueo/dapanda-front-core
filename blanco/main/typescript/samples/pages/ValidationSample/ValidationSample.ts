import {ErrorMessage, Field, Form} from "vee-validate";
import { RouterHooks } from "@/utils/RouterHooks";
import { validationSampleSetup } from "@/samples/pages/ValidationSample/ValidationSampleSetup";
import { defineComponent, inject } from "vue";
import { ValidationSampleProps, validationSampleProps } from "./ValidationSampleProps";
import { onBeforeRouteLeave, useRouter } from "vue-router";

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
        const myProps = props as ValidationSampleProps;
        const noAuthPath = inject<string>('noAuthPath');
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, myProps.componentId, noAuthPath!);
        });
        return validationSampleSetup(myProps, context);
    }
});
