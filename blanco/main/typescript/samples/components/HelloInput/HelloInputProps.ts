import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
interface HelloInputInterface {
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
    subject: {
        default: "サンプルインプットコンポーネント"
    },
    alias: {
        default: "サンプルインプットコンポーネント"
    }
};
