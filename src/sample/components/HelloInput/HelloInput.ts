import {defineComponent} from "vue";
import {helloInputSetup} from "@/sample/components/HelloInput/HelloInputSetup";
import {helloInputEmits} from "@/sample/components/HelloInput/HelloInputEmits";

export default defineComponent({
    name: 'HelloInput',
    props: {},
    emits: helloInputEmits,
    setup: (props, context) => {
        return helloInputSetup(props, context);
    }
});
