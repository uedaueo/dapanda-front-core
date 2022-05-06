import {SetupContext, toRefs} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";
import {LeafMenuItemProps} from "@/components/Menu/LeafMenuItemProps";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";

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
