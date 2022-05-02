import {SetupContext, toRefs} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";
import {
    PageTransitDataStoreState,
    usePageTransitDataStore
} from "../../stores/PageTransitDataStore/PageTransitDataStore";

export const leafMenuItemSetup = (props: any, context: SetupContext) => {
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
        console.log(pageTransitDataStore.getDesc("myname"));
    }
    return {
        color,
        klass,
        onClickMenu
    }
}
