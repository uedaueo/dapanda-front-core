import {LocaleLabels} from "@/i18n/LocaleLabels";
import { ChartSampleEn } from "./ChartSampleEn";
import { LoginSampleEn } from "./LoginSampleEn";
import { LocaleSelectEn } from "./LocaleSelectEn";
import { ValidationSampleEn } from "./ValidationSampleEn";

/**
 * Labels Class for i18n
 */
export class LabelsEn extends LocaleLabels {
    /**
     * Loginサンプルページで使用するラベルを定義します。
     *
     * フィールド: [loginSample]。
     * デフォルト: [new LoginSampleEn()]。
     */
    loginSample: LoginSampleEn = new LoginSampleEn();

    /**
     * サンプル図ページで使用するラベルを定義します。
     *
     * フィールド: [ChartSample]。
     * デフォルト: [new ChartSampleEn()]。
     */
    ChartSample: ChartSampleEn = new ChartSampleEn();

    /**
     * ロケール選択コンポーネントで使用するラベルを定義します。
     *
     * フィールド: [LocaleSelect]。
     * デフォルト: [new LocaleSelectEn()]。
     */
    LocaleSelect: LocaleSelectEn = new LocaleSelectEn();

    /**
     * Validationサンプルページで使用するラベルを定義します。
     *
     * フィールド: [validationSample]。
     * デフォルト: [new ValidationSampleEn()]。
     */
    validationSample: ValidationSampleEn = new ValidationSampleEn();
}
