import {configure, defineRule} from "vee-validate";
import {between, required} from "@vee-validate/rules";
import {validateConfig} from "@/validate/validateUtil";

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
        // defineRule('dapanda', customDapandaRuleFunction);

    }
}
