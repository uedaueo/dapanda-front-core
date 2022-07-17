import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface HelloInputInterface {
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
export declare type HelloInputProps = Readonly<LooseRequired<HelloInputInterface>>;

/**
 * propsの定義です
 */
export const helloInputProps: ComponentPropsOptions<HelloInputInterface> = {
    componentId: {
        default: "HelloInput"
    },
    subject: {
        default: "サンプルインプットコンポーネント"
    },
    alias: {
        default: "サンプルインプットコンポーネント"
    }
};
