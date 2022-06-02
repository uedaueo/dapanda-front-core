import {LocaleLabels} from "@/i18n/LocaleLabels";;
import { ChartSampleJa } from "./ChartSampleJa";

/**
 * Labels Class for i18n
 */
export class LabelsJa extends LocaleLabels {
    /**
     * サンプル図ページで使用するラベルを定義します。
     *
     * フィールド: [ChartSample]。
     * デフォルト: [new ChartSampleJa()]。
     */
    private fChartSample: ChartSampleJa = new ChartSampleJa();

    /**
     * フィールド [ChartSample] の値を設定します。
     *
     * フィールドの説明: [サンプル図ページで使用するラベルを定義します。]。
     *
     * @param argChartSample フィールド[ChartSample]に設定する値。
     */
    set ChartSample(argChartSample: ChartSampleJa) {
        this.fChartSample = argChartSample;
    }

    /**
     * フィールド [ChartSample] の値を取得します。
     *
     * フィールドの説明: [サンプル図ページで使用するラベルを定義します。]。
     * デフォルト: [new ChartSampleJa()]。
     *
     * @return フィールド[ChartSample]から取得した値。
     */
    get ChartSample(): ChartSampleJa {
        return this.fChartSample;
    }
}
