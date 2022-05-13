import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
interface RootFrameInterface {
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
    subject: {
        default: "ルートフレーム"
    },
    alias: {
        default: "ルートフレーム"
    }
};
