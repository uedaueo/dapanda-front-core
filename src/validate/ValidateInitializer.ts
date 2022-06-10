import {configure, defineRule} from "vee-validate";
import {between, required} from "@vee-validate/rules";
import {customDapandaValidator} from "@/validate/CustomDapandaValidator";
import {i18n} from "@/i18n";
import {useLocaleSettingStore} from "%/stores/LocaleSettingStore/LocaleSettingStore";
import {LocaleMessageDictionary} from "@intlify/core-base";

export type ValidationMessageTemplate = ValidationMessageGenerator | string;

export interface FieldValidationMetaInfo {
    /**
     * The field's name or label (see next section)
     */
    field: string;
    /**
     * the field's current value
     */
    value: unknown;
    /**
     * other values in the form
     */
    form: Record<string, unknown>;
    rule?: {
        /**
         * the rule name
         */
        name: string;
        /**
         * any params sent to it
         */
        params?: Record<string, unknown> | unknown[];
    };
}

export declare type ValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams, ctx: FieldValidationMetaInfo) => boolean | string | Promise<boolean | string>;

export declare type SimpleValidationRuleFunction<TValue = unknown, TParams = unknown[] | Record<string, unknown>> = (value: TValue, params: TParams) => boolean | string | Promise<boolean | string>;

export declare type ValidationMessageGenerator = (ctx: FieldValidationMetaInfo) => string;

export interface VeeValidateConfig {
    bails: boolean;
    generateMessage: ValidationMessageGenerator;
    validateOnInput: boolean;
    validateOnChange: boolean;
    validateOnBlur: boolean;
    validateOnModelUpdate: boolean;
}

/**
 * VeeValidateを初期化するためのクラスです。
 */
export class ValidateInitializer {
    /**
     * VeeValidateの初期化を実行します。
     */
    static init(): void {
        configure(validateConfig);

        /* builtin rules */
        defineRule('required', required);
        defineRule('between', between);

        /* custom rules */
        defineRule('dapanda', customDapandaValidator);

    }
}

/**
 * the reason why that returning field value on error is meaningless
 * otherwise we can do any other can-do's for these errors.
 */
export const validateConfig: Partial<VeeValidateConfig> = {
    generateMessage: (ctx) => {

        const {field, rule, form} = ctx;
        const fieldName = i18n.global.t(field);

        if (rule === undefined) {
            return field;
        }

        /**
         * Because of t function translates placeholder into param values,
         * we get raw messages from dictionary and pass it to interpolator
         * to replace vue-i18n style placeholders to real values.
         */
        const localeSettings = useLocaleSettingStore();
        const localeMessages = i18n.global.getLocaleMessage(localeSettings.lang) as LocaleMessageDictionary;
        if (localeMessages === undefined) {
            console.log("Cannot get localeMessages for " + localeSettings.lang);
            return field;
        }
        let message = (localeMessages.validations as LocaleMessageDictionary)[rule.name] as string;
        console.log("rule = " + rule.name);
        console.log("generateMessage: " + message);

        if (message === undefined) {
            message = (localeMessages.validations as LocaleMessageDictionary)["_default"] as string;
        }

        return interpolate(message, {...form, field: fieldName, params: rule.params});
    }
}

/**
 * Replaces placeholder values in a string with their actual values
 *
 * copied from @vee-validate/i18n
 */
export function interpolate(template: string, values: Record<string, any>): string {
    return template.replace(/(\d:)?{([^}]+)}/g, function (_, param, placeholder): string {
        if (!param || !values.params) {
            return placeholder in values
                ? values[placeholder]
                : values.params && placeholder in values.params
                    ? values.params[placeholder]
                    : `{${placeholder}}`;
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
