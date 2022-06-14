import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface HelloVuetifyInterface {
    /**
     * コンポーネントのsubjectプロパティです
     */
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;

    /**
     * ダミー的なプロパティ定義
     */
    dumm?: boolean;
}

/** propsの型を定義します */
export declare type HelloVuetifyProps = Readonly<LooseRequired<HelloVuetifyInterface>>;

/**
 * propsの定義です
 */
export const helloVuetifyProps: ComponentPropsOptions<HelloVuetifyInterface> = {
    subject: {
        default: "トップページサンプル"
    },
    alias: {
        default: "トップページサンプル"
    }
};
