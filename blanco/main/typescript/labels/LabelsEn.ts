import {LocaleLabels} from "@/i18n/LocaleLabels";
import { ChartSampleEn } from "./ChartSampleEn";
import { LocaleSelectEn } from "./LocaleSelectEn";
import { ValidationSampleEn } from "./ValidationSampleEn";

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
     * ロケール選択コンポーネントで使用するラベルを定義します。
     *
     * フィールド: [LocaleSelect]。
     * デフォルト: [new LocaleSelectEn()]。
     */
    private fLocaleSelect: LocaleSelectEn = new LocaleSelectEn();

    /**
     * Validationサンプルページで使用するラベルを定義します。
     *
     * フィールド: [validationSample]。
     * デフォルト: [new ValidationSampleEn()]。
     */
    private fValidationSample: ValidationSampleEn = new ValidationSampleEn();

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

    /**
     * フィールド [LocaleSelect] の値を設定します。
     *
     * フィールドの説明: [ロケール選択コンポーネントで使用するラベルを定義します。]。
     *
     * @param argLocaleSelect フィールド[LocaleSelect]に設定する値。
     */
    set LocaleSelect(argLocaleSelect: LocaleSelectEn) {
        this.fLocaleSelect = argLocaleSelect;
    }

    /**
     * フィールド [LocaleSelect] の値を取得します。
     *
     * フィールドの説明: [ロケール選択コンポーネントで使用するラベルを定義します。]。
     * デフォルト: [new LocaleSelectEn()]。
     *
     * @return フィールド[LocaleSelect]から取得した値。
     */
    get LocaleSelect(): LocaleSelectEn {
        return this.fLocaleSelect;
    }

    /**
     * フィールド [validationSample] の値を設定します。
     *
     * フィールドの説明: [Validationサンプルページで使用するラベルを定義します。]。
     *
     * @param argValidationSample フィールド[validationSample]に設定する値。
     */
    set validationSample(argValidationSample: ValidationSampleEn) {
        this.fValidationSample = argValidationSample;
    }

    /**
     * フィールド [validationSample] の値を取得します。
     *
     * フィールドの説明: [Validationサンプルページで使用するラベルを定義します。]。
     * デフォルト: [new ValidationSampleEn()]。
     *
     * @return フィールド[validationSample]から取得した値。
     */
    get validationSample(): ValidationSampleEn {
        return this.fValidationSample;
    }
}
