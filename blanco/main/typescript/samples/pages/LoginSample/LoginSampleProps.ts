import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface LoginSampleInterface {
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
export type LoginSampleProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<LoginSampleInterface>>> & Readonly<LooseRequired<LoginSampleInterface>> & {}>;

/**
 * propsの定義です
 */
export const loginSampleProps: ComponentObjectPropsOptions<LoginSampleInterface> = {
    componentId: {
        default: "LoginSample"
    },
    subject: {
        default: "labels.loginSample.componentId"
    },
    alias: {
        default: "ログインページサンプル"
    }
};
