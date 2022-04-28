import {ComponentPropsOptions, PropType} from "vue";
import {MenuItem} from "@/components/Menu/MenuItem";

export interface LeafMenuItemPropsOptions {
    menu: MenuItem,
    root?: boolean
}

export const leafMenuItemPropsOptions: ComponentPropsOptions<LeafMenuItemPropsOptions> = {
    menu: {
        type: Object as PropType<MenuItem>,
        required: true
    },
    root: {
        type: true,
        required: false,
        default: false
    }
}
