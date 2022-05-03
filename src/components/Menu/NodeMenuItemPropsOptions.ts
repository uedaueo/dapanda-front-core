import {MenuItem} from "@/components/Menu/MenuItem";
import {ComponentPropsOptions, PropType} from "vue";

export interface NodeMenuItemPropsOptions {
    menu: MenuItem,
    root?: boolean
}

export const nodeMenuItemPropsOptions: ComponentPropsOptions<NodeMenuItemPropsOptions> = {
    menu: {
        required: true
    },
    root: {
        required: false,
        default: false
    }
}
