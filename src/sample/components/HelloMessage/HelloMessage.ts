import {defineComponent} from "vue";
import {helloMessageSetup} from "@/sample/components/HelloMessage/HelloMessageSetup";
import {helloMessageEmits} from "@/sample/components/HelloMessage/HelloMessageEmits";
import {helloMessageProps} from "@/sample/components/HelloMessage/HelloMessageProps";

export default defineComponent({
    name: 'HelloMessage',
    props: helloMessageProps,
    emits: helloMessageEmits,
    setup: (props, context) => {
        return helloMessageSetup(props, context);
    }
});
