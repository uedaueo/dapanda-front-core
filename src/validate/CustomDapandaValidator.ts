import {isEmpty, SimpleValidationRuleFunction} from "@/validate/ValidateInitializer";

export const customDapandaValidator: SimpleValidationRuleFunction = (value: unknown, params) => {
    if (isEmpty(value) || isEmpty(params)) {
        return true;
    }
    const v = value as string;
    const p = Array.isArray(params) ? params[0] as string : params;
    console.log("value = " + v);
    console.log("param = " + p);
    if (v == p) {
        return true;
    }
    return false;
}
