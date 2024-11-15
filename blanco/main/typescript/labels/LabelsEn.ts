import {LocaleLabels} from "@/i18n/LocaleLabels";
import { NoPageSampleEn } from "./NoPageSampleEn";
import { ChartSampleEn } from "./ChartSampleEn";
import { DapandaCommonEn } from "./DapandaCommonEn";
import { LocaleSelectEn } from "./LocaleSelectEn";
import { LoginSampleEn } from "./LoginSampleEn";
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
    ChartSample: ChartSampleEn = new ChartSampleEn();

    /**
     * dapanda framework 全体で共通に使用するラベルを定義します。
     *
     * フィールド: [DapandaCommon]。
     * デフォルト: [new DapandaCommonEn()]。
     */
    DapandaCommon: DapandaCommonEn = new DapandaCommonEn();

    /**
     * ロケール選択コンポーネントで使用するラベルを定義します。
     *
     * フィールド: [LocaleSelect]。
     * デフォルト: [new LocaleSelectEn()]。
     */
    LocaleSelect: LocaleSelectEn = new LocaleSelectEn();

    /**
     * Loginサンプルページで使用するラベルを定義します。
     *
     * フィールド: [loginSample]。
     * デフォルト: [new LoginSampleEn()]。
     */
    loginSample: LoginSampleEn = new LoginSampleEn();

    /**
     * NoPageサンプルページで使用するラベルを定義します。
     *
     * フィールド: [noPageSample]。
     * デフォルト: [new NoPageSampleEn()]。
     */
    noPageSample: NoPageSampleEn = new NoPageSampleEn();

    /**
     * Validationサンプルページで使用するラベルを定義します。
     *
     * フィールド: [validationSample]。
     * デフォルト: [new ValidationSampleEn()]。
     */
    validationSample: ValidationSampleEn = new ValidationSampleEn();
}
