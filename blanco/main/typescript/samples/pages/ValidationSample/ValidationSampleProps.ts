import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

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
    subject?: string | undefined | null;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string | undefined | null;

    /**
     */
    pname?: string | undefined | null;
}

/** propsの型を定義します */
export type ValidationSampleProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<ValidationSampleInterface>>> & Readonly<LooseRequired<ValidationSampleInterface>> & {}>;

/**
 * propsの定義です
 */
export const validationSampleProps: ComponentObjectPropsOptions<ValidationSampleInterface> = {
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
