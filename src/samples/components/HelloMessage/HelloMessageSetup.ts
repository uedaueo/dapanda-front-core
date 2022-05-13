import {computed, ref, SetupContext, toRefs} from "vue";
import {HelloMessageProps} from "%/samples/components/HelloMessage/HelloMessageProps";
import {HelloMessageEmits} from "%/samples/components/HelloMessage/HelloMessageEmits";

export const helloMessageSetup = (props: HelloMessageProps, context: SetupContext<HelloMessageEmits>) => {
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
