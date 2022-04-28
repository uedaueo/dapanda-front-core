import {defineComponent} from "vue";
import {helloInputSetup} from "@/sample/components/HelloInput/HelloInputSetup";
import {helloInputEmitsOptions} from "@/sample/components/HelloInput/HelloInputEmitsOptions";

export default defineComponent({
    name: 'HelloInput',
    props: {},
    emits: helloInputEmitsOptions,
    setup: (props, context) => {
        return helloInputSetup(props, context);
    }
});
