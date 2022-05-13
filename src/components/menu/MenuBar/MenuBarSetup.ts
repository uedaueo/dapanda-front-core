import {SetupContext} from "vue";
import {dummyMenuData} from "@/components/menu/DummyMenuData";
import {MenuBarProps} from "%/components/menu/MenuBar/MenuBarProps";
import {MenuItem} from "%/components/menu/MenuItem";

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
    return {
        dataPrepared,
        menuData,
        fAccountName,
        authRequired,
        isLeafItem
    }
}
