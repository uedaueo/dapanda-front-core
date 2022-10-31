import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface SnackbarExInterface {
    /**
     * コンポーネントのcomponentIdプロパティです
     */
    componentId: string;

    /**
     * コンポーネントのsubjectプロパティです
     */
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;
}

/** propsの型を定義します */
export declare type SnackbarExProps = Readonly<LooseRequired<SnackbarExInterface>>;

/**
 * propsの定義です
 */
export const snackbarExProps: ComponentPropsOptions<SnackbarExInterface> = {
    componentId: {
        default: "SnackbarEx"
    },
    subject: {
        default: "Snackbarコンポーネント"
    },
    alias: {
        default: "Snackbarコンポーネント"
    }
};
