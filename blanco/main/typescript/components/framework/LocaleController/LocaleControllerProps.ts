import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface LocaleControllerInterface {
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
export declare type LocaleControllerProps = Readonly<LooseRequired<LocaleControllerInterface>>;

/**
 * propsの定義です
 */
export const localeControllerProps: ComponentPropsOptions<LocaleControllerInterface> = {
    subject: {
        default: "ロケール制御コンポーネント"
    },
    alias: {
        default: "ロケール制御コンポーネント"
    }
};
