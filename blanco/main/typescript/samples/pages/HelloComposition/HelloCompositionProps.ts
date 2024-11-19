import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

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
    subject?: string | undefined | null;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string | undefined | null;

    /**
     * メッセージのデフォルト値です。
     */
    msg: string;
}

/** propsの型を定義します */
export type HelloCompositionProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<HelloCompositionInterface>>> & Readonly<LooseRequired<HelloCompositionInterface>> & {}>;

/**
 * propsの定義です
 */
export const helloCompositionProps: ComponentObjectPropsOptions<HelloCompositionInterface> = {
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
