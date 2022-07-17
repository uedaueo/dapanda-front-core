import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

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
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;
}

/** propsの型を定義します */
export declare type LoginSampleProps = Readonly<LooseRequired<LoginSampleInterface>>;

/**
 * propsの定義です
 */
export const loginSampleProps: ComponentPropsOptions<LoginSampleInterface> = {
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
