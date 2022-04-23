import {defineComponent} from "vue";
import {helloInputSetup} from "@/sample/components/HelloInput/HelloInputSetup";
import { HelloInputEmitsOptions } from "@/sample/components/HelloInput/HelloInputEmitsOptions";

export default defineComponent({
    name: 'HelloInput',
    props: {},
    emits: {
        'update': (value: String) => true,
        'downgrade': (value: number) => true
    } as HelloInputEmitsOptions,
    setup: (props, context) => {
        return helloInputSetup(props, context);
    }
});
