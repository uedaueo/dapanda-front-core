import {SimpleValidationRuleFunction} from "%/validators/ValidateConfig";

function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined || value === '') {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    return false;
}

export const dapandaValidator: SimpleValidationRuleFunction = (value: unknown, params) => {
    if (isEmpty(value) || isEmpty(params)) {
        return true;
    }
    const v = value as string;
    const p = Array.isArray(params) ? params[0] as string : params;
    console.log("value = " + v);
    console.log("param = " + p);
    const ps = params as Record<string, unknown>;
    console.log("params.name = " + ps.name);
    if (v == p) {
        return true;
    }
    return false;
}
