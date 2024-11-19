import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

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
    subject?: string | undefined | null;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string | undefined | null;
}

/** propsの型を定義します */
export type RootFrameProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<RootFrameInterface>>> & Readonly<LooseRequired<RootFrameInterface>> & {}>;

/**
 * propsの定義です
 */
export const rootFrameProps: ComponentObjectPropsOptions<RootFrameInterface> = {
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
