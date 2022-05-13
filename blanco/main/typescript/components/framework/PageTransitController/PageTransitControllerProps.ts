import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
interface PageTransitControllerInterface {
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
export declare type PageTransitControllerProps = Readonly<LooseRequired<PageTransitControllerInterface>>;

/**
 * propsの定義です
 */
export const pageTransitControllerProps: ComponentPropsOptions<PageTransitControllerInterface> = {
    subject: {
        default: "ページ遷移制御コンポーネント"
    },
    alias: {
        default: "ページ遷移制御コンポーネント"
    }
};
