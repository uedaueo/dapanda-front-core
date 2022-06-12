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

export const kopandaValidator: SimpleValidationRuleFunction = (value: unknown, params) => {
    if (isEmpty(value) || isEmpty(params)) {
        return true;
    }
    if (!(Array.isArray(params) && params.length === 3)) {
        return true;
    }
    const v = value as string;
    const pa = params[0] as string;
    const ag = params[1] as number;
    const ko = params[2] as string;
    console.log("value = " + v);
    console.log("param = " + ko);
    console.log("param = " + pa);
    console.log("param = " + ag);
    if (ag < 20) {
        return false;
    }
    if (v == ko) {
        return true;
    }
    return false;
}
