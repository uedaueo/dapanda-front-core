import {i18n} from "@/i18n";
import {VeeValidateConfig} from "@/validate/types";
import {useLocaleSettingStore} from "%/stores/LocaleSettingStore/LocaleSettingStore";

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

export const validateConfig: Partial<VeeValidateConfig> = {
    generateMessage: (ctx) => {

        const { field, rule, form } = ctx;
        const fieldName = i18n.global.t(field);

        console.log("field = " + field);
        console.log("fieldName = " + fieldName);

        if (rule === undefined) {
            return field;
        }

        console.log("rule.name = " + rule.name);
        if (Array.isArray(rule.params)) {
            for (let i in rule.params) {
                console.log("param = " + rule.params[i]);
            }
        }

        // let message: ValidationMessageTemplate = i18n.global.t(`validations.${rule.name}`);
        const localeSettings = useLocaleSettingStore();
        const localeMessages = i18n.global.getLocaleMessage(localeSettings.lang);
        if (localeMessages === undefined) {
            console.log("Cannot get localeMessages for " + localeSettings.lang);
            return field;
        }
        let message = localeMessages.validations[rule.name];

        return interpolate(message, { ...form, field: fieldName, params: rule.params });
    }
}
