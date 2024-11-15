import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";
import { MenuItem } from "%/components/menu/MenuItem";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface NodeMenuItemInterface {
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
export declare type NodeMenuItemProps = Readonly<LooseRequired<NodeMenuItemInterface>>;

/**
 * propsの定義です
 */
export const nodeMenuItemProps: ComponentPropsOptions<NodeMenuItemInterface> = {
    componentId: {
        default: "NodeMenuItem"
    },
    subject: {
        default: "ノードメニューコンポーネント"
    },
    alias: {
        default: "ノードメニューコンポーネント"
    },
    menu: {
        required: true
    },
    root: {
        default: false
    }
};
