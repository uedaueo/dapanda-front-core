import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface PageTransitControllerInterface {
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
export type PageTransitControllerProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<PageTransitControllerInterface>>> & Readonly<LooseRequired<PageTransitControllerInterface>> & {}>;

/**
 * propsの定義です
 */
export const pageTransitControllerProps: ComponentObjectPropsOptions<PageTransitControllerInterface> = {
    componentId: {
        default: "PageTransitController"
    },
    subject: {
        default: "ページ遷移制御コンポーネント"
    },
    alias: {
        default: "ページ遷移制御コンポーネント"
    }
};
