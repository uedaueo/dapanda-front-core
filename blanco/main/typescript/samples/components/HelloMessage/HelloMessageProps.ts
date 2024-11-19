import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface HelloMessageInterface {
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
     * 入力メッセージを受け取るためのプロパティ
     */
    message: string;
}

/** propsの型を定義します */
export type HelloMessageProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<HelloMessageInterface>>> & Readonly<LooseRequired<HelloMessageInterface>> & {}>;

/**
 * propsの定義です
 */
export const helloMessageProps: ComponentObjectPropsOptions<HelloMessageInterface> = {
    componentId: {
        default: "HelloMessage"
    },
    subject: {
        default: "サンプルメッセージコンポーネント"
    },
    alias: {
        default: "サンプルメッセージコンポーネント"
    },
    message: {
        required: true,
        default: "Default Message!"
    }
};
