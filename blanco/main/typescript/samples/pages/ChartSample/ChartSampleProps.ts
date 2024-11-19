import { LooseRequired } from "@vue/shared";
import { ComponentObjectPropsOptions, ExtractPropTypes } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface ChartSampleInterface {
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
     * 図の識別子です
     */
    chartId: string;

    /**
     * 表の幅のサイズです
     */
    width: number;

    /**
     * 表の高さのサイズです
     */
    height: number;

    /**
     */
    cssClasses: string;

    /**
     */
    styles: Partial<CSSStyleDeclaration>;

    /**
     */
    datasetIdKey: string;

    /**
     */
    plugins: any;
}

/** propsの型を定義します */
export type ChartSampleProps = LooseRequired<Readonly<ExtractPropTypes<ComponentObjectPropsOptions<ChartSampleInterface>>> & Readonly<LooseRequired<ChartSampleInterface>> & {}>;

/**
 * propsの定義です
 */
export const chartSampleProps: ComponentObjectPropsOptions<ChartSampleInterface> = {
    componentId: {
        default: "ChartSample"
    },
    subject: {
        default: "サンプル図コンポーネント"
    },
    alias: {
        default: "サンプル図コンポーネント"
    },
    chartId: {
        default: "bar-chart"
    },
    width: {
        default: 400
    },
    height: {
        default: 400
    },
    cssClasses: {
        default: ""
    },
    styles: {
        default: {color: "red"}
    },
    datasetIdKey: {
        default: "label"
    },
    plugins: {
        default: () => {}
    }
};
