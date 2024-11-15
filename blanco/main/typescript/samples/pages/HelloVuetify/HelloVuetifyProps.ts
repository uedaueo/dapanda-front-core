import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface HelloVuetifyInterface {
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
     * ダミー的なプロパティ定義
     */
    dumm?: boolean | undefined | null;
}

/** propsの型を定義します */
export declare type HelloVuetifyProps = Readonly<LooseRequired<HelloVuetifyInterface>>;

/**
 * propsの定義です
 */
export const helloVuetifyProps: ComponentPropsOptions<HelloVuetifyInterface> = {
    componentId: {
        default: "HelloVuetify"
    },
    subject: {
        default: "トップページサンプル"
    },
    alias: {
        default: "トップページサンプル"
    }
};
