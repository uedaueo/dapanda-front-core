import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface HelloCompositionInterface {
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
     * メッセージのデフォルト値です。
     */
    msg: string;
}

/** propsの型を定義します */
export declare type HelloCompositionProps = Readonly<LooseRequired<HelloCompositionInterface>>;

/**
 * propsの定義です
 */
export const helloCompositionProps: ComponentPropsOptions<HelloCompositionInterface> = {
    componentId: {
        default: "HelloComposition"
    },
    subject: {
        default: "Composition APIサンプル"
    },
    alias: {
        default: "Composition APIサンプル"
    },
    msg: {
        default: "Default!"
    }
};
