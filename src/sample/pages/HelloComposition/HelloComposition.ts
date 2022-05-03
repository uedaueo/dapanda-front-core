import { defineComponent } from 'vue'
import { helloCompositionSetup } from '@/sample/pages/HelloComposition/HelloCompositionSetup';
import HelloInput from "@/sample/components/HelloInput/HelloInput.vue";
import HelloMessage from "@/sample/components/HelloMessage/HelloMessage.vue";

export default defineComponent({
    name: "HelloComposition",
    props: {
        msg: {
            type: String,
            default: "Default!"
        }
    },
    components: {
        HelloInput,
        HelloMessage
    },
    setup: (props, context) => {
        return helloCompositionSetup(props, context);
    }
});
