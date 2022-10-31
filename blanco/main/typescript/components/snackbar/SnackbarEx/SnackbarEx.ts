import SnackbarMessage from "%/components/snackbar/SnackbarMessage/SnackbarMessage.vue";
import { defineComponent } from "vue";
import { snackbarExSetup } from "@/components/snackbar/SnackbarEx/SnackbarExSetup";
import { SnackbarExProps, snackbarExProps } from "./SnackbarExProps";

/**
 * Snackbarのコンポーネントです。
 */
export default defineComponent({
    name: "SnackbarEx",
    props: snackbarExProps,
    components: {
        SnackbarMessage
    },
    setup: (props, context) => {
        const myProps = props as SnackbarExProps;
        return snackbarExSetup(myProps, context);
    }
});
