import {defineComponent, PropType} from "vue";
import {LeafMenuItemProps, leafMenuItemProps} from "./LeafMenuItemProps";
import {leafMenuItemSetup} from "@/components/Menu/LeafMenuItemSetup";

export default defineComponent({
    name: 'LeafMenuItem',
    props: leafMenuItemProps,
    setup: (props, context) => {
        return leafMenuItemSetup(props as LeafMenuItemProps, context);
    }
});