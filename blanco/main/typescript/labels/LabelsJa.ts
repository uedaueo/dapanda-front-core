import {LocaleLabels} from "@/i18n/LocaleLabels";
import { LocaleSelectJa } from "./LocaleSelectJa";
import { ChartSampleJa } from "./ChartSampleJa";

/**
 * Labels Class for i18n
 */
export class LabelsJa extends LocaleLabels {
    /**
     * ロケール選択コンポーネントで使用するラベルを定義します。
     *
     * フィールド: [LocaleSelect]。
     * デフォルト: [new LocaleSelectJa()]。
     */
    private fLocaleSelect: LocaleSelectJa = new LocaleSelectJa();

    /**
     * サンプル図ページで使用するラベルを定義します。
     *
     * フィールド: [ChartSample]。
     * デフォルト: [new ChartSampleJa()]。
     */
    private fChartSample: ChartSampleJa = new ChartSampleJa();

    /**
     * フィールド [LocaleSelect] の値を設定します。
     *
     * フィールドの説明: [ロケール選択コンポーネントで使用するラベルを定義します。]。
     *
     * @param argLocaleSelect フィールド[LocaleSelect]に設定する値。
     */
    set LocaleSelect(argLocaleSelect: LocaleSelectJa) {
        this.fLocaleSelect = argLocaleSelect;
    }

    /**
     * フィールド [LocaleSelect] の値を取得します。
     *
     * フィールドの説明: [ロケール選択コンポーネントで使用するラベルを定義します。]。
     * デフォルト: [new LocaleSelectJa()]。
     *
     * @return フィールド[LocaleSelect]から取得した値。
     */
    get LocaleSelect(): LocaleSelectJa {
        return this.fLocaleSelect;
    }

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
