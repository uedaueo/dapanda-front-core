import {computed, onMounted, ref, SetupContext, toRefs} from "vue";
import {HelloCompositionProps} from "%/samples/pages/HelloComposition/HelloCompositionProps";

export const helloCompositionSetup = (props: HelloCompositionProps, context: SetupContext) => {
    const count = ref(0);
    const { subject } = toRefs(props);
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
    });
    console.log("subject = " + subject.value);
    onMounted(() => {
        console.log("HelloComposition is mounted!");
    });
    return {
        count,
        headline,
        onMessageChanged,
        messageComputed
    };
}
