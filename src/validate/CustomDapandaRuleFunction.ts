import {customDapandaValidator} from "@/validate/CustomDapandaValidator";
import {SimpleValidationRuleFunction} from "@/validate/types";

/**
 *
 * @param value
 * @param params
 */
export const customDapandaRuleFunction: SimpleValidationRuleFunction = (value, params) => {
    return customDapandaValidator(value, params);
}
