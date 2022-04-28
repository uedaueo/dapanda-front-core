import {SetupContext, toRefs} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";

export const nodeMenuItemSetup = (props: any, context: SetupContext) => {
    const { root } = toRefs(props);
    const color = (): string => {
        let color2 = "white";
        if (root.value === true) {
            color2 = "blue";
        }
        return color2;
    };
    const klass = (): string => {
        let klass2 = "black--text align-center pa-0";
        if (root.value == true) {
            klass2 = "white--text align-center pa-0";
        }
        return klass2;
    };
    const isLeafItem = (child: MenuItem): boolean => {
        return child.children === undefined || child.children.length === 0;
    }
    const offsety = (): boolean => {
        return root.value === true;
    }
    const offsetx = (): boolean => {
        return root.value === undefined || root.value !== true;
    }
    return {
        color,
        klass,
        isLeafItem,
        offsety,
        offsetx
    }
}
