import {computed, reactive, ref, SetupContext, toRefs} from "vue";

export const helloCompositionSetup = (props: any, context: SetupContext) => {
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
