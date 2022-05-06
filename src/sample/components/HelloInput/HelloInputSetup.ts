import {ref, SetupContext} from "vue";
import {HelloInputEmits} from "@/sample/components/HelloInput/HelloInputEmits";

export const helloInputSetup = (props: any, context: SetupContext<HelloInputEmits>) => {
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
