import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

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
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;
}

/** propsの型を定義します */
export declare type LocaleSelectProps = Readonly<LooseRequired<LocaleSelectInterface>>;

/**
 * propsの定義です
 */
export const localeSelectProps: ComponentPropsOptions<LocaleSelectInterface> = {
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
