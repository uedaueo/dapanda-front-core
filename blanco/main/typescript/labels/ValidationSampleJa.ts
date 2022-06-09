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
    private fComponentId: string = "Validationサンプル";

    /**
     * フォームの名前項目です
     *
     * フィールド: [name]。
     * デフォルト: [&quot;名前&quot;]。
     */
    private fName: string = "名前";

    /**
     * フォームの年齢項目です
     *
     * フィールド: [age]。
     * デフォルト: [&quot;年齢&quot;]。
     */
    private fAge: string = "年齢";

    /**
     * フォームの実行ボタンラベルです
     *
     * フィールド: [submit]。
     * デフォルト: [&quot;実行&quot;]。
     */
    private fSubmit: string = "実行";

    /**
     * フィールド [componentId] の値を設定します。
     *
     * フィールドの説明: [ページタイトルです]。
     *
     * @param argComponentId フィールド[componentId]に設定する値。
     */
    set componentId(argComponentId: string) {
        this.fComponentId = argComponentId;
    }

    /**
     * フィールド [componentId] の値を取得します。
     *
     * フィールドの説明: [ページタイトルです]。
     * デフォルト: [&quot;Validationサンプル&quot;]。
     *
     * @return フィールド[componentId]から取得した値。
     */
    get componentId(): string {
        return this.fComponentId;
    }

    /**
     * フィールド [name] の値を設定します。
     *
     * フィールドの説明: [フォームの名前項目です]。
     *
     * @param argName フィールド[name]に設定する値。
     */
    set name(argName: string) {
        this.fName = argName;
    }

    /**
     * フィールド [name] の値を取得します。
     *
     * フィールドの説明: [フォームの名前項目です]。
     * デフォルト: [&quot;名前&quot;]。
     *
     * @return フィールド[name]から取得した値。
     */
    get name(): string {
        return this.fName;
    }

    /**
     * フィールド [age] の値を設定します。
     *
     * フィールドの説明: [フォームの年齢項目です]。
     *
     * @param argAge フィールド[age]に設定する値。
     */
    set age(argAge: string) {
        this.fAge = argAge;
    }

    /**
     * フィールド [age] の値を取得します。
     *
     * フィールドの説明: [フォームの年齢項目です]。
     * デフォルト: [&quot;年齢&quot;]。
     *
     * @return フィールド[age]から取得した値。
     */
    get age(): string {
        return this.fAge;
    }

    /**
     * フィールド [submit] の値を設定します。
     *
     * フィールドの説明: [フォームの実行ボタンラベルです]。
     *
     * @param argSubmit フィールド[submit]に設定する値。
     */
    set submit(argSubmit: string) {
        this.fSubmit = argSubmit;
    }

    /**
     * フィールド [submit] の値を取得します。
     *
     * フィールドの説明: [フォームの実行ボタンラベルです]。
     * デフォルト: [&quot;実行&quot;]。
     *
     * @return フィールド[submit]から取得した値。
     */
    get submit(): string {
        return this.fSubmit;
    }
}
