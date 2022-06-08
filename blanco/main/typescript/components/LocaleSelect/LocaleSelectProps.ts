import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
interface LocaleSelectInterface {
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
    subject: {
        default: "ロケール選択コンポーネント"
    },
    alias: {
        default: "ロケール選択コンポーネント"
    }
};
