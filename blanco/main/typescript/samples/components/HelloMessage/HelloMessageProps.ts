import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

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
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;

    /**
     * 入力メッセージを受け取るためのプロパティ
     */
    message: string;
}

/** propsの型を定義します */
export declare type HelloMessageProps = Readonly<LooseRequired<HelloMessageInterface>>;

/**
 * propsの定義です
 */
export const helloMessageProps: ComponentPropsOptions<HelloMessageInterface> = {
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
