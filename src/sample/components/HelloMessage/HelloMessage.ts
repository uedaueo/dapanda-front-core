import {defineComponent} from "vue";
import {helloMessageSetup} from "@/sample/components/HelloMessage/HelloMessageSetup";
import { HelloMessageEmitsOptions } from "@/sample/components/HelloMessage/HelloMessageEmitsOptions";

export default defineComponent({
    name: 'HelloMessage',
    props: {
        message: String
    },
    emits: {
        'update:message': (value: String) => true,
    } as HelloMessageEmitsOptions,
    setup: (props, context) => {
        return helloMessageSetup(props, context);
    }
});
