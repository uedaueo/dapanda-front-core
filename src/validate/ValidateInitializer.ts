import {configure, defineRule} from "vee-validate";
import {required} from "@vee-validate/rules";
import {customDapandaRuleFunction} from "@/validate/CustomDapandaRuleFunction";

/**
 * VeeValidateを初期化するためのクラスです。
 */
export class ValidateInitializer {
    /**
     * VeeValidateの初期化を実行します。
     */
    static init(): void {
        configure(
            {
                generateMessage: (ctx) => {
                    ctx.form
                    ctx.rule
                    return ""
                }
            }
        );

        /* builtin rules */
        defineRule('required', required);

        /* custom rules */
        defineRule('dapanda', customDapandaRuleFunction);
    }
}
