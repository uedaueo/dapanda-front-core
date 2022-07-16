import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * Validationサンプルページで使用するラベルを定義します。
 */
export class ValidationSampleJa extends AbstractLocaleMessageObject {
    /**
     * ページタイトルです
     *
     * フィールド: [componentId]。
     * デフォルト: [&quot;Validationサンプル&quot;]。
     */
    componentId: string = "Validationサンプル";

    /**
     * フォームの名前項目です
     *
     * フィールド: [name]。
     * デフォルト: [&quot;名前&quot;]。
     */
    name: string = "名前";

    /**
     * フォームの年齢項目です
     *
     * フィールド: [age]。
     * デフォルト: [&quot;年齢&quot;]。
     */
    age: string = "年齢";

    /**
     * フォームの実行ボタンラベルです
     *
     * フィールド: [submit]。
     * デフォルト: [&quot;実行&quot;]。
     */
    submit: string = "実行";

    /**
     * 駄パンダ
     *
     * フィールド: [dapanda]。
     * デフォルト: [&quot;駄パンダ&quot;]。
     */
    dapanda: string = "駄パンダ";

    /**
     * 子パンダ
     *
     * フィールド: [kopanda]。
     * デフォルト: [&quot;子パンダ&quot;]。
     */
    kopanda: string = "子パンダ";

    /**
     * チャート番号
     *
     * フィールド: [chartnum]。
     * デフォルト: [&quot;チャート番号を選択 (1 or 2)&quot;]。
     */
    chartnum: string = "チャート番号を選択 (1 or 2)";
}
