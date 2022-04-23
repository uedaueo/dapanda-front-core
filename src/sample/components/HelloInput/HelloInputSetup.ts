import {ref, SetupContext} from "vue";
import {HelloInputEmitsOptions} from "@/sample/components/HelloInput/HelloInputEmitsOptions";

export const helloInputSetup = (props: any, context: SetupContext<HelloInputEmitsOptions>) => {
    const message = ref<String>("");
    const onSubmit = () => {
        context.emit('update', message.value);
        context.emit('downgrade', 0);
    }
    return {
        message,
        onSubmit
    }
}
