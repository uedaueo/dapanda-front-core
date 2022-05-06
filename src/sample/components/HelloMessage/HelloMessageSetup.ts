import {computed, ref, SetupContext, toRefs} from "vue";
import {HelloMessageEmits} from "@/sample/components/HelloMessage/HelloMessageEmits";

export const helloMessageSetup = (props: any, context: SetupContext<HelloMessageEmits>) => {
    const { message } = toRefs(props);
    const messageComputed = computed({
        get: () => message.value,
        set: (value: string) => {
            context.emit('update:message', value);
        }
    });
    return {
        messageComputed
    }
}
