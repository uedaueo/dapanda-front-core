import {SnackbarExProps} from "%/components/snackbar/SnackbarEx/SnackbarExProps";
import {onMounted, ref, SetupContext, toRefs, watch} from "vue";
import {useSnackbarStore} from "%/stores/SnackbarStore/SnackbarStore";
import {storeToRefs} from "pinia";
import {DapandaConst} from "@/common/DapandaGlobals";
import {SnackbarAttribute} from "%/components/snackbar/SnackbarAttribute";

export const snackbarExSetup = (props: SnackbarExProps, context: SetupContext) => {
    const snackbarStore = useSnackbarStore();
    const { status } = storeToRefs(snackbarStore);
    const snackbarAttributes = ref(snackbarStore.snackbarAttributes);
    const lastIndex = ref(snackbarStore.snackbarAttributes.length - 1);
    const snackbar = ref(false);

    onMounted(() => {
        console.log("Snackbar is mounted with status = " + status.value);
    })

    const removeMessage = (snackbarAttribute: SnackbarAttribute) => {
        console.log("Snackbar is going to remove..." + snackbarAttribute.id);
        snackbarStore.hideSnackbar(snackbarAttribute);
    }

    watch(status, () => {
        console.log("SnackbarExSetup#watch(snackbarStatus) " + status.value);
        if (status.value === DapandaConst.SnackbarStatusInvalid) {
            snackbarAttributes.value = JSON.parse(JSON.stringify(snackbarStore.snackbarAttributes)) as Array<SnackbarAttribute>;
            snackbarStore.setStatus(DapandaConst.SnackbarStatusValid);
            console.log("num attributes = " + snackbarAttributes.value.length);
            if (snackbarAttributes.value.length > 0) {
                snackbar.value = true;
            } else {
                snackbar.value = false;
            }
            lastIndex.value = snackbarStore.snackbarAttributes.length - 1;
        }
    });

    return {
        snackbarAttributes,
        snackbar,
        lastIndex,
        removeMessage
    }
};
