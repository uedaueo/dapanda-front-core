import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface MenuBarInterface {
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
export type MenuBarProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<MenuBarInterface>>> & Readonly<LooseRequired<MenuBarInterface>> & {}>;

/**
 * propsの定義です
 */
export const menuBarProps: ComponentObjectPropsOptions<MenuBarInterface> = {
    componentId: {
        default: "MenuBar"
    },
    subject: {
        default: "メニューバーコンポーネント"
    },
    alias: {
        default: "メニューバーコンポーネント"
    }
};
