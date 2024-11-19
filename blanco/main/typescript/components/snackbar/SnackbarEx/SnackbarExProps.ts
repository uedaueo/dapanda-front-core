import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

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
    subject?: string | undefined | null;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string | undefined | null;
}

/** propsの型を定義します */
export type SnackbarExProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<SnackbarExInterface>>> & Readonly<LooseRequired<SnackbarExInterface>> & {}>;

/**
 * propsの定義です
 */
export const snackbarExProps: ComponentObjectPropsOptions<SnackbarExInterface> = {
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
