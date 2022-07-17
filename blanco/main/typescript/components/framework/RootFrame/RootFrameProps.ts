import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface RootFrameInterface {
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
export declare type RootFrameProps = Readonly<LooseRequired<RootFrameInterface>>;

/**
 * propsの定義です
 */
export const rootFrameProps: ComponentPropsOptions<RootFrameInterface> = {
    componentId: {
        default: "RootFrame"
    },
    subject: {
        default: "ルートフレーム"
    },
    alias: {
        default: "ルートフレーム"
    }
};
