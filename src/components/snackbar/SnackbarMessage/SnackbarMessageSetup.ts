import {onMounted, ref, SetupContext, toRefs} from "vue";
import {SnackbarMessageEmits} from "%/components/snackbar/SnackbarMessage/SnackbarMessageEmits";
import {SnackbarMessageProps} from "%/components/snackbar/SnackbarMessage/SnackbarMessageProps";
import { mdiCloseCircleOutline, mdiClose } from '@mdi/js';

export const snackbarMessageSetup = (props: SnackbarMessageProps, context: SetupContext<SnackbarMessageEmits>) => {

    const color = ref("");
    const text = ref("");
    let activeTimeout = -1;

    onMounted(() => {
        console.log("SnackbarMessage is mounted. " + props.snackbarAttribute?.id);
        console.log("icon=" + mdiCloseCircleOutline);
        setTimeout();
    });

    const setTimeout = () => {
        if (activeTimeout !== -1) {
            window.clearTimeout(activeTimeout);
        }
        if (props.snackbarAttribute) {
            color.value = props.snackbarAttribute.color;
            text.value = props.snackbarAttribute.text;
            const timeout = props.snackbarAttribute.timeout;
            console.log("SnackbarMessage#setTimeout: timeout = " + timeout);
            // タイムアウト時間が設定されている場合は
            if (timeout) {
                // 指定時間後にremoveを呼び出す
                activeTimeout = window.setTimeout(() => {
                    remove();
                }, timeout);
            }
        }
    }

    const remove = () => {
        context.emit("remove")
    }
    return {
        remove,
        color,
        text,
        mdiCloseCircleOutline,
        mdiClose
    }
}
