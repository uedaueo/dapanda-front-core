import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * Validationサンプルページで使用するラベルを定義します。
 */
export class ValidationSampleEn extends AbstractLocaleMessageObject {
    /**
     * ページタイトルです
     *
     * フィールド: [componentId]。
     * デフォルト: [&quot;Validation Sample&quot;]。
     */
    componentId: string = "Validation Sample";

    /**
     * フォームの名前項目です
     *
     * フィールド: [name]。
     * デフォルト: [&quot;name&quot;]。
     */
    name: string = "name";

    /**
     * フォームの年齢項目です
     *
     * フィールド: [age]。
     * デフォルト: [&quot;age&quot;]。
     */
    age: string = "age";

    /**
     * フォームの実行ボタンラベルです
     *
     * フィールド: [submit]。
     * デフォルト: [&quot;submit&quot;]。
     */
    submit: string = "submit";

    /**
     * 駄パンダ
     *
     * フィールド: [dapanda]。
     * デフォルト: [&quot;dapanda!&quot;]。
     */
    dapanda: string = "dapanda!";

    /**
     * 子パンダ
     *
     * フィールド: [kopanda]。
     * デフォルト: [&quot;kopanda!&quot;]。
     */
    kopanda: string = "kopanda!";
}
