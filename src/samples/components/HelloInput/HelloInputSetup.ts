import {ref, SetupContext} from "vue";
import {HelloInputEmits} from "%/samples/components/HelloInput/HelloInputEmits";
import {HelloInputProps} from "%/samples/components/HelloInput/HelloInputProps";

export const helloInputSetup = (props: HelloInputProps, context: SetupContext<HelloInputEmits>) => {
    const message = ref<string>("");
    const onSubmit = () => {
        context.emit('update', message.value);
        context.emit('downgrade', 0);
    }
    return {
        message,
        onSubmit
    }
}
