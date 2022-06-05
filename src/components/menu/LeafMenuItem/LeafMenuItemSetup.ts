import {SetupContext, toRefs} from "vue";
import {LeafMenuItemProps} from "%/components/menu/LeafMenuItem/LeafMenuItemProps";
import {MenuItem} from "%/components/menu/MenuItem";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";

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
        pageTransitDataStore.update("" + menu.path);
    }
    return {
        color,
        klass,
        onClickMenu
    }
}
