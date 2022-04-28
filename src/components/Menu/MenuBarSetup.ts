import {SetupContext} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";
import {dummyMenuData} from "@/components/Menu/DummyMenuData";

export const menuBarSetup = (props: any, context: SetupContext) => {
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
