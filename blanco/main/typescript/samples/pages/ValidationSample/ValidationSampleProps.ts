import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
interface ValidationSampleInterface {
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
export declare type ValidationSampleProps = Readonly<LooseRequired<ValidationSampleInterface>>;

/**
 * propsの定義です
 */
export const validationSampleProps: ComponentPropsOptions<ValidationSampleInterface> = {
    subject: {
        default: "labels.validationSample.componentId"
    },
    alias: {
        default: "Validationサンプル"
    }
};
