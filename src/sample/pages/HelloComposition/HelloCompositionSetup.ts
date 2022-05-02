import {computed, reactive, ref, SetupContext, toRefs} from "vue";
import {useLocaleSettingStore} from "@/stores/LocaleSettingStore/LocaleSettingStore";
import {_StoreWithState, Store, StoreDefinition, storeToRefs} from "pinia";

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
