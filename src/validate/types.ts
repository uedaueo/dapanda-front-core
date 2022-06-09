
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
