import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

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
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;
}

/** propsの型を定義します */
export declare type MenuBarProps = Readonly<LooseRequired<MenuBarInterface>>;

/**
 * propsの定義です
 */
export const menuBarProps: ComponentPropsOptions<MenuBarInterface> = {
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
