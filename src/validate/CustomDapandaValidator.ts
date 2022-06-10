import {SimpleValidationRuleFunction} from "@/validate/ValidateInitializer";

function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined || value === '') {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    return false;
}

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
