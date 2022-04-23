import {computed, ref, SetupContext, toRefs} from "vue";
import {HelloMessageEmitsOptions} from "@/sample/components/HelloMessage/HelloMessageEmitsOptions";

export const helloMessageSetup = (props: any, context: SetupContext<HelloMessageEmitsOptions>) => {
    const { message } = toRefs(props);
    const messageComputed = computed({
        get: () => message.value,
        set: (value: String) => {
            context.emit('update:message', value);
        }
    });
    return {
        messageComputed
    }
}
