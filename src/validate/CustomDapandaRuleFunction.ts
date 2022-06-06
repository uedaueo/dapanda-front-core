import {SimpleValidationRuleFunction} from "@/validate/validateUtil";
import {customDapandaValidator} from "@/validate/CustomDapandaValidator";

export const customDapandaRuleFunction: SimpleValidationRuleFunction = (value, params) => {
    return customDapandaValidator(value, params);
}
