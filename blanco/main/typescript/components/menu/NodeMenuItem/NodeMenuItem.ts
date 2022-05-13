import LeafMenuItem from "%/components/menu/LeafMenuItem/LeafMenuItem.vue";
import { defineComponent } from "vue";
import { nodeMenuItemSetup } from "@/components/menu/NodeMenuItem/NodeMenuItemSetup";
import { NodeMenuItemProps, nodeMenuItemProps } from "./NodeMenuItemProps";

/**
 * メニューツリーのノードのコンポーネントです。
 */
export default defineComponent({
    name: "NodeMenuItem",
    props: nodeMenuItemProps,
    components: {
        LeafMenuItem
    },
    setup: (props, context) => {
        return nodeMenuItemSetup(props as NodeMenuItemProps, context);
    }
});
