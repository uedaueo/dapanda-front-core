import {ErrorMessage, Field, Form} from "vee-validate";
import { validationSampleSetup } from "@/samples/pages/ValidationSample/ValidationSampleSetup";
import { defineComponent } from "vue";
import { ValidationSampleProps, validationSampleProps } from "./ValidationSampleProps";

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
        return validationSampleSetup(props as ValidationSampleProps, context);
    }
});
