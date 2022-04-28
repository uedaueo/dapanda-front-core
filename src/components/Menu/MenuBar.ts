import {defineComponent} from "vue";
import LeafMenuItem from "@/components/Menu/LeafMenuItem.vue";
import NodeMenuItem from "@/components/Menu/NodeMenuItem.vue";
import {menuBarSetup} from "@/components/Menu/MenuBarSetup";

export default defineComponent({
    name: 'MenuBar',
    components: {
        LeafMenuItem,
        NodeMenuItem
    },
    setup: (props, context) => {
        return menuBarSetup(props, context)
    }
})
