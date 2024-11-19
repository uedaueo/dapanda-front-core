import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface AuthenticationControllerInterface {
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
export type AuthenticationControllerProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<AuthenticationControllerInterface>>> & Readonly<LooseRequired<AuthenticationControllerInterface>> & {}>;

/**
 * propsの定義です
 */
export const authenticationControllerProps: ComponentObjectPropsOptions<AuthenticationControllerInterface> = {
    componentId: {
        default: "AuthenticationController"
    },
    subject: {
        default: "認証情報制御コンポーネント"
    },
    alias: {
        default: "認証情報制御コンポーネント"
    }
};
