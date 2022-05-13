import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
interface HelloMessageInterface {
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
