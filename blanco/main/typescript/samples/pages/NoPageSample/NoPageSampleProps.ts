import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface NoPageSampleInterface {
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
    subject: {
        default: "labels.noPageSample.componentId"
    },
    alias: {
        default: "NoPageサンプル"
    }
};
