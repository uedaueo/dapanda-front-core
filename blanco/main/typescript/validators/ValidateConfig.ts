/*
 * This source code was created by blanco Framework.
 */
import { configure, defineRule } from "vee-validate";
import { LocaleMessageDictionary, LocaleMessages } from "@intlify/core-base";
import { I18n } from "vue-i18n";
import { useLocaleSettingStore } from "%/stores/LocaleSettingStore/LocaleSettingStore";
import { DapandaI18nResources } from "@/i18n/DapandaMessages";
import { 
    between,
    required
} from "@vee-validate/rules";
import { dapandaValidator } from "@/validators/DapandaValidator";
import { kopandaValidator } from "@/validators/KopandaValidator";

/**
 * この型はVeeValidate内で定義されていますがexportされていないので再定義しています。
 */
export interface FieldValidationMetaInfo {
    /**
     * FIELD の項目名（name）またはラベル（label）
     */
    field: string;

    /**
     * FIELD の現在の値
     */
    value: unknown;

    /**
     * FIELD の現在の値
     */
    form: Record<string, unknown>;

    /**
     * ルールの名前とパラメータを表すインタフェイスです。
     */
    rule?: MetaInfoRule;
}
/**
 * ルールの名前とパラメータを表すインタフェイスです。
 */
interface MetaInfoRule {
    /**
     * ルール名
     */
    name: string;

    /**
     * ルールのパラメータ
     */
    params?: Record<string, unknown> | Array<unknown>;
}
/**
 * この型はVeeValidate内で定義されていますがexportされていないので再定義しています。
 */
export interface VeeValidateConfig {
    /**
     */
    bails: boolean;

    /**
     */
    generateMessage: ValidationMessageGenerator;

    /**
     */
    validateOnInput: boolean;

    /**
     */
    validateOnChange: boolean;

    /**
     */
    validateOnBlur: boolean;

    /**
     */
    validateOnModelUpdate: boolean;
}
/**
 * VeeValidateの設定クラスのサンプルです。&lt;br&gt;
 *
 * 主にクラス名とパッケージ名を定義するためだけに使用します。
 */
export class ValidateConfig {
    /**
     * vue-i18nのインスタンスを保持します。
     */
    static i18n?: I18n<LocaleMessages<DapandaI18nResources>, unknown, unknown, string, false>;

    /**
     * VeeValidateの初期化を実行します。
     */
    static init(): void {
        configure(validateConfig);

        /* builtin rules */
        defineRule("between", between);
        defineRule("required", required);

        /* custom rules */
        defineRule("dapanda", dapandaValidator);
        defineRule("kopanda", kopandaValidator);
    }
}

/*
 * この型はVeeValidate内で定義されていますがexportされていないので再定義しています。
 */
export declare type ValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams, ctx: FieldValidationMetaInfo) => boolean | string | Promise<boolean | string>

export declare type SimpleValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams) => boolean | string | Promise<boolean | string>

export declare type ValidationMessageGenerator = (ctx: FieldValidationMetaInfo) => string

/**
 * configure 関数に渡すオプションの定義です。
 */
export const validateConfig: Partial<VeeValidateConfig> = {
    generateMessage: (ctx) => {
        const {field, rule, form} = ctx;
        if (!ValidateConfig.i18n) {
            return field;
        }
        const fieldName = ValidateConfig.i18n.global.t(field);
        if (rule === undefined) {
            return field;
        }

        /*
         * we get raw messages from dictionary and pass it to interpolator
         */
        const localeSettings = useLocaleSettingStore();
        const localeMessages = ValidateConfig.i18n.global.getLocaleMessage(localeSettings.lang) as LocaleMessageDictionary<DapandaI18nResources>;
        if (localeMessages === undefined) {
            return field;
        }
        let message = (localeMessages.validations as LocaleMessageDictionary<DapandaI18nResources>)[rule.name] as string;

        if (message === undefined) {
            message = (localeMessages.validations as LocaleMessageDictionary<DapandaI18nResources>)["_default"] as string;
        }
        return interpolate(message, {...form, field: fieldName, params: rule.params});
    }
}
;

/**
 * vee-validate/i18n で定義されたメッセージテンプレートのプレースホルダを値に置き換えます。
 *
 * @param template メッセージのテンプレートです。
 * @param values プレースホルダと置換される値です。
 * @return プレースホルダ置換後のメッセージを返します。
 */
export function interpolate(template: string, values: Record<string, any>): string {
    return template.replace(/(\d:)?{([^}]+)}/g, function (_, param, placeholder): string {
        if (!param || !values.params) {
            return placeholder in values ? values[placeholder] : values.params && placeholder in values.params ? values.params[placeholder] : `{${placeholder}}`;
        }

        // Handles extended object params format
        if (!Array.isArray(values.params)) {
            return placeholder in values.params ? values.params[placeholder] : `{${placeholder}}`;
        }
        // Extended Params exit in the format of `paramIndex:{paramName}` where the index is optional
        const paramIndex = Number(param.replace(':', ''));

        return paramIndex in values.params ? values.params[paramIndex] : `${param}{${placeholder}}`;
    });
}
