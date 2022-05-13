import {SetupContext, toRefs} from "vue";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import {LeafMenuItemProps} from "%/components/menu/LeafMenuItem/LeafMenuItemProps";
import {MenuItem} from "%/components/menu/MenuItem";

export const leafMenuItemSetup = (props: LeafMenuItemProps, context: SetupContext) => {
    const { root } = toRefs(props);
    const pageTransitDataStore = usePageTransitDataStore();

    const color = () => {
        let color = "white";
        if (root.value === true) {
            color = "blue";
        }
        return color;
    };
    const klass = () => {
        let klass = "black--text align-center pa-0";
        if (root.value == true) {
            klass = "white--text align-center pa-0";
        }
        return klass;
    };
    const onClickMenu = (menu: MenuItem) => {
        console.log("Clicked!");
        pageTransitDataStore.update({location: "" + menu.path});
    }
    return {
        color,
        klass,
        onClickMenu
    }
}
