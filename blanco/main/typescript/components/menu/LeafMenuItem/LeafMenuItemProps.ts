import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";
import { MenuItem } from "%/components/menu/MenuItem";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface LeafMenuItemInterface {
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
     * このノードに割り当てられるMenuItemを指定します。
     */
    menu: MenuItem;

    /**
     * ルートノードの場合はtrueを指定染ます。
     */
    root?: boolean | undefined | null;
}

/** propsの型を定義します */
export type LeafMenuItemProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<LeafMenuItemInterface>>> & Readonly<LooseRequired<LeafMenuItemInterface>> & {}>;

/**
 * propsの定義です
 */
export const leafMenuItemProps: ComponentObjectPropsOptions<LeafMenuItemInterface> = {
    componentId: {
        default: "LeafMenuItem"
    },
    subject: {
        default: "リーフメニューコンポーネント"
    },
    alias: {
        default: "リーフメニューコンポーネント"
    },
    menu: {
        required: true
    },
    root: {
        default: false
    }
};
