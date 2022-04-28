import {defineComponent, PropType} from "vue";
import {leafMenuItemPropsOptions} from "./LeafMenuItemPropsOptions";
import {leafMenuItemSetup} from "@/components/Menu/LeafMenuItemSetup";

export default defineComponent({
    name: 'LeafMenuItem',
    props: leafMenuItemPropsOptions,
    setup: (props, context) => {
        return leafMenuItemSetup(props, context);
    }
})
