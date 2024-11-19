import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

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
    subject?: string | undefined | null;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string | undefined | null;
}

/** propsの型を定義します */
export type HelloInputProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<HelloInputInterface>>> & Readonly<LooseRequired<HelloInputInterface>> & {}>;

/**
 * propsの定義です
 */
export const helloInputProps: ComponentObjectPropsOptions<HelloInputInterface> = {
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
