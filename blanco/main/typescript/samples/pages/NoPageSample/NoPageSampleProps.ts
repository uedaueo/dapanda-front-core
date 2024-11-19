import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface NoPageSampleInterface {
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
export type NoPageSampleProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<NoPageSampleInterface>>> & Readonly<LooseRequired<NoPageSampleInterface>> & {}>;

/**
 * propsの定義です
 */
export const noPageSampleProps: ComponentObjectPropsOptions<NoPageSampleInterface> = {
    componentId: {
        default: "NoPageSample"
    },
    subject: {
        default: "labels.noPageSample.componentId"
    },
    alias: {
        default: "NoPageサンプル"
    }
};
