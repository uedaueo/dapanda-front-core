import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface CommunicationControllerInterface {
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
export declare type CommunicationControllerProps = Readonly<LooseRequired<CommunicationControllerInterface>>;

/**
 * propsの定義です
 */
export const communicationControllerProps: ComponentPropsOptions<CommunicationControllerInterface> = {
    subject: {
        default: "通信制御コンポーネント"
    },
    alias: {
        default: "通信制御コンポーネント"
    }
};
