import {SetupContext} from "vue";
import {dummyMenuData} from "@/components/menu/DummyMenuData";
import {MenuBarProps} from "%/components/menu/MenuBar/MenuBarProps";
import {MenuItem} from "%/components/menu/MenuItem";
import {useCommonStatusStore} from "%/stores/CommonStatusStore/CommonStatusStore";
import {storeToRefs} from "pinia";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {DapandaConst} from "@/common/DapandaGlobals";

export const menuBarSetup = (props: MenuBarProps, context: SetupContext) => {
    const dataPrepared: boolean = true;
    const menuData: Array<MenuItem> = dummyMenuData;
    const fAccountName: string = 'DummyAccount';
    const authRequired = (): boolean => {
        return true;
    };
    const isLeafItem = (child: MenuItem): boolean => {
        return child.children === undefined || child.children.length === 0;
    }

    const commonStatusStore = useCommonStatusStore();
    const authStore = useAuthenticationControllerStore();
    const onLogout = () => {
        console.log("MenuBar#onLogout START");
        if (authStore.status === DapandaConst.AuthenticationStatusValid) {
            commonStatusStore.changeLogout(true);
        }
    }
    return {
        dataPrepared,
        menuData,
        fAccountName,
        authRequired,
        isLeafItem,
        onLogout
    }
}
