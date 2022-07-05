import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface AuthenticationControllerInterface {
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
export declare type AuthenticationControllerProps = Readonly<LooseRequired<AuthenticationControllerInterface>>;

/**
 * propsの定義です
 */
export const authenticationControllerProps: ComponentPropsOptions<AuthenticationControllerInterface> = {
    subject: {
        default: "認証情報制御コンポーネント"
    },
    alias: {
        default: "認証情報制御コンポーネント"
    }
};
