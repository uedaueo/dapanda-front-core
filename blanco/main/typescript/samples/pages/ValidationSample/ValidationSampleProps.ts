import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface ValidationSampleInterface {
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
     */
    pname?: string;
}

/** propsの型を定義します */
export declare type ValidationSampleProps = Readonly<LooseRequired<ValidationSampleInterface>>;

/**
 * propsの定義です
 */
export const validationSampleProps: ComponentPropsOptions<ValidationSampleInterface> = {
    componentId: {
        default: "ValidationSample"
    },
    subject: {
        default: "labels.validationSample.componentId"
    },
    alias: {
        default: "Validationサンプル"
    },
    pname: {
        default: ""
    }
};
