import {MenuItem} from "@/components/Menu/MenuItem";
import {ComponentPropsOptions} from "vue";
import {LooseRequired} from "@vue/shared";

interface NodeMenuItemPropsInterface {
    menu: MenuItem,
    root?: boolean
}

export declare type NodeMenuItemProps = Readonly<LooseRequired<NodeMenuItemPropsInterface>>;

export const nodeMenuItemProps: ComponentPropsOptions<NodeMenuItemPropsInterface> = {
    menu: {
        required: true
    },
    root: {
        required: false,
        default: false
    }
};
