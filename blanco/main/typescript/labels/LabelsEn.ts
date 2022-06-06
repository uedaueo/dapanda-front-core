import {LocaleLabels} from "@/i18n/LocaleLabels";
import { ChartSampleEn } from "./ChartSampleEn";

/**
 * Labels Class for i18n
 */
export class LabelsEn extends LocaleLabels {
    /**
     * サンプル図ページで使用するラベルを定義します。
     *
     * フィールド: [ChartSample]。
     * デフォルト: [new ChartSampleEn()]。
     */
    private fChartSample: ChartSampleEn = new ChartSampleEn();

    /**
     * フィールド [ChartSample] の値を設定します。
     *
     * フィールドの説明: [サンプル図ページで使用するラベルを定義します。]。
     *
     * @param argChartSample フィールド[ChartSample]に設定する値。
     */
    set ChartSample(argChartSample: ChartSampleEn) {
        this.fChartSample = argChartSample;
    }

    /**
     * フィールド [ChartSample] の値を取得します。
     *
     * フィールドの説明: [サンプル図ページで使用するラベルを定義します。]。
     * デフォルト: [new ChartSampleEn()]。
     *
     * @return フィールド[ChartSample]から取得した値。
     */
    get ChartSample(): ChartSampleEn {
        return this.fChartSample;
    }
}
