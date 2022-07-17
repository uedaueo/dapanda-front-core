import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

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
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;
}

/** propsの型を定義します */
export declare type NoPageSampleProps = Readonly<LooseRequired<NoPageSampleInterface>>;

/**
 * propsの定義です
 */
export const noPageSampleProps: ComponentPropsOptions<NoPageSampleInterface> = {
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
