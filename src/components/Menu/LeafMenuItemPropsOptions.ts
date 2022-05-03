import {ComponentPropsOptions, PropType} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";

export interface LeafMenuItemPropsOptions {
    menu: MenuItem,
    root?: boolean
}

export const leafMenuItemPropsOptions: ComponentPropsOptions<LeafMenuItemPropsOptions> = {
    menu: {
        required: true
    },
    root: {
        required: false,
        default: false
    }
}
