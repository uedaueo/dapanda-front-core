import { defineComponent } from "vue";
import { LeafMenuItemProps, leafMenuItemProps } from "./LeafMenuItemProps";
import { leafMenuItemSetup } from "@/components/menu/LeafMenuItem/LeafMenuItemSetup";

/**
 * メニューツリーのリーフのコンポーネントです。
 */
export default defineComponent({
    name: "LeafMenuItem",
    props: leafMenuItemProps,
    setup: (props, context) => {
        return leafMenuItemSetup(props as LeafMenuItemProps, context);
    }
});
