import {defineComponent} from "vue";
import {helloMessageSetup} from "@/sample/components/HelloMessage/HelloMessageSetup";
import {helloMessageEmitsOptions} from "@/sample/components/HelloMessage/HelloMessageEmitsOptions";
import {helloMessagePropsOptions} from "@/sample/components/HelloMessage/HelloMessagePropsOptions";

export default defineComponent({
    name: 'HelloMessage',
    props: helloMessagePropsOptions,
    emits: helloMessageEmitsOptions,
    setup: (props, context) => {
        return helloMessageSetup(props, context);
    }
});
