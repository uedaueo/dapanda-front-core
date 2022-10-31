import { snackbarMessageEmits } from "./SnackbarMessageEmits";
import { snackbarMessageSetup } from "@/components/snackbar/SnackbarMessage/SnackbarMessageSetup";
import { SnackbarMessageProps, snackbarMessageProps } from "./SnackbarMessageProps";
import { defineComponent } from "vue";

/**
 * このコンポーネントはsnackbarのメッセージ領域です。
 */
export default defineComponent({
    name: "SnackbarMessage",
    props: snackbarMessageProps,
    emits: snackbarMessageEmits,
    setup: (props, context) => {
        const myProps = props as SnackbarMessageProps;
        return snackbarMessageSetup(myProps, context);
    }
});
