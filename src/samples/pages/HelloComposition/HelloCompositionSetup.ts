import {computed, ref, SetupContext} from "vue";
import {HelloCompositionProps} from "%/samples/pages/HelloComposition/HelloCompositionProps";

export const helloCompositionSetup = (props: HelloCompositionProps, context: SetupContext) => {
    const count = ref(0);
    const headline = ref(props.msg);

    const onMessageChanged = (evt: String) => {
        console.log("evt = " + evt);
        headline.value = evt as string;
    };
    const messageComputed = computed({
        get: () => headline.value,
        set: (value) => {
            headline.value = value;
        }
    })
    return {
        count,
        headline,
        onMessageChanged,
        messageComputed
    };
}
