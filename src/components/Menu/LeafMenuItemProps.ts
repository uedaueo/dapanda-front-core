import {ComponentPropsOptions, PropType} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";
import {LooseRequired} from "@vue/shared";

interface LeafMenuItemPropsInterface {
    menu: MenuItem,
    root?: boolean
}

export declare type LeafMenuItemProps = Readonly<LooseRequired<LeafMenuItemPropsInterface>>;

export const leafMenuItemProps: ComponentPropsOptions<LeafMenuItemPropsInterface> = {
    menu: {
        required: true
    },
    root: {
        required: false,
        default: false
    }
}
