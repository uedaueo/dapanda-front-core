import LeafMenuItem from "%/components/menu/LeafMenuItem/LeafMenuItem.vue";
import NodeMenuItem from "%/components/menu/NodeMenuItem/NodeMenuItem.vue";
import LocaleSelect from "%/components/LocaleSelect/LocaleSelect.vue";
import { defineComponent } from "vue";
import { MenuBarProps, menuBarProps } from "./MenuBarProps";
import { menuBarSetup } from "@/components/menu/MenuBar/MenuBarSetup";

/**
 * メニューバーのコンポーネントです。
 */
export default defineComponent({
    name: "MenuBar",
    props: menuBarProps,
    components: {
        LeafMenuItem,
        NodeMenuItem,
        LocaleSelect
    },
    setup: (props, context) => {
        const myProps = props as MenuBarProps;
        return menuBarSetup(myProps, context);
    }
});
