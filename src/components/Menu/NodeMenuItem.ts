import {defineComponent} from "vue";
import {nodeMenuItemPropsOptions} from "@/components/Menu/NodeMenuItemPropsOptions";
import LeafMenuItem from "@/components/Menu/LeafMenuItem.vue";
import {nodeMenuItemSetup} from "@/components/Menu/NodeMenuItemSetup";

export default defineComponent({
    name: 'NodeMenuItem',
    components: {
        LeafMenuItem
    },
    props: nodeMenuItemPropsOptions,
    setup: (props, context) => {
        return nodeMenuItemSetup(props, context)
    }
})
