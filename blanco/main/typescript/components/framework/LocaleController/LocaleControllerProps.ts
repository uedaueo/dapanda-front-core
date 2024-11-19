import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface LocaleControllerInterface {
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
export type LocaleControllerProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<LocaleControllerInterface>>> & Readonly<LooseRequired<LocaleControllerInterface>> & {}>;

/**
 * propsの定義です
 */
export const localeControllerProps: ComponentObjectPropsOptions<LocaleControllerInterface> = {
    componentId: {
        default: "LocaleController"
    },
    subject: {
        default: "ロケール制御コンポーネント"
    },
    alias: {
        default: "ロケール制御コンポーネント"
    }
};
