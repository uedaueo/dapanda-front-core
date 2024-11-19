import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";
import { SnackbarAttribute } from "%/components/snackbar/SnackbarAttribute";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface SnackbarMessageInterface {
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

    /**
     * Snackbar (toast) に関連づけられるデータです。
     */
    snackbarAttribute?: SnackbarAttribute | undefined | null;
}

/** propsの型を定義します */
export type SnackbarMessageProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<SnackbarMessageInterface>>> & Readonly<LooseRequired<SnackbarMessageInterface>> & {}>;

/**
 * propsの定義です
 */
export const snackbarMessageProps: ComponentObjectPropsOptions<SnackbarMessageInterface> = {
    componentId: {
        default: "SnackbarMessage"
    },
    subject: {
        default: "SnackbarMessageコンポーネント"
    },
    alias: {
        default: "SnackbarMessageコンポーネント"
    },
    snackbarAttribute: {
        default: undefined
    }
};
