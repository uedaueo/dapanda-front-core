import {defineComponent} from "vue";
import {NodeMenuItemProps, nodeMenuItemProps} from "@/components/Menu/NodeMenuItemProps";
import LeafMenuItem from "@/components/Menu/LeafMenuItem.vue";
import {nodeMenuItemSetup} from "@/components/Menu/NodeMenuItemSetup";

export default defineComponent({
    name: 'NodeMenuItem',
    components: {
        LeafMenuItem
    },
    props: nodeMenuItemProps,
    setup: (props, context) => {
        return nodeMenuItemSetup(props as NodeMenuItemProps, context)
    }
})
