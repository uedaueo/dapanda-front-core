import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface LocaleSelectInterface {
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
export type LocaleSelectProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<LocaleSelectInterface>>> & Readonly<LooseRequired<LocaleSelectInterface>> & {}>;

/**
 * propsの定義です
 */
export const localeSelectProps: ComponentObjectPropsOptions<LocaleSelectInterface> = {
    componentId: {
        default: "LocaleSelect"
    },
    subject: {
        default: "ロケール選択コンポーネント"
    },
    alias: {
        default: "ロケール選択コンポーネント"
    }
};
