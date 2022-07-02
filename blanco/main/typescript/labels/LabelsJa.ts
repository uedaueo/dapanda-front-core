import {LocaleLabels} from "@/i18n/LocaleLabels";
import { LocaleSelectJa } from "./LocaleSelectJa";
import { ValidationSampleJa } from "./ValidationSampleJa";
import { ChartSampleJa } from "./ChartSampleJa";
import { LoginSampleJa } from "./LoginSampleJa";

/**
 * Labels Class for i18n
 */
export class LabelsJa extends LocaleLabels {
    /**
     * Loginサンプルページで使用するラベルを定義します。
     *
     * フィールド: [loginSample]。
     * デフォルト: [new LoginSampleJa()]。
     */
    loginSample: LoginSampleJa = new LoginSampleJa();

    /**
     * ロケール選択コンポーネントで使用するラベルを定義します。
     *
     * フィールド: [LocaleSelect]。
     * デフォルト: [new LocaleSelectJa()]。
     */
    LocaleSelect: LocaleSelectJa = new LocaleSelectJa();

    /**
     * サンプル図ページで使用するラベルを定義します。
     *
     * フィールド: [ChartSample]。
     * デフォルト: [new ChartSampleJa()]。
     */
    ChartSample: ChartSampleJa = new ChartSampleJa();

    /**
     * Validationサンプルページで使用するラベルを定義します。
     *
     * フィールド: [validationSample]。
     * デフォルト: [new ValidationSampleJa()]。
     */
    validationSample: ValidationSampleJa = new ValidationSampleJa();
}
