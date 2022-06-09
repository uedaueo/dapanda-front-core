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
    private fComponentId: string = "Validation Sample";

    /**
     * フォームの名前項目です
     *
     * フィールド: [name]。
     * デフォルト: [&quot;name&quot;]。
     */
    private fName: string = "name";

    /**
     * フォームの年齢項目です
     *
     * フィールド: [age]。
     * デフォルト: [&quot;age&quot;]。
     */
    private fAge: string = "age";

    /**
     * フォームの実行ボタンラベルです
     *
     * フィールド: [submit]。
     * デフォルト: [&quot;submit&quot;]。
     */
    private fSubmit: string = "submit";

    /**
     * 駄パンダ
     *
     * フィールド: [dapanda]。
     * デフォルト: [&quot;dapanda!&quot;]。
     */
    private fDapanda: string = "dapanda!";

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
     * デフォルト: [&quot;Validation Sample&quot;]。
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
     * デフォルト: [&quot;name&quot;]。
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
     * デフォルト: [&quot;age&quot;]。
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
     * デフォルト: [&quot;submit&quot;]。
     *
     * @return フィールド[submit]から取得した値。
     */
    get submit(): string {
        return this.fSubmit;
    }

    /**
     * フィールド [dapanda] の値を設定します。
     *
     * フィールドの説明: [駄パンダ]。
     *
     * @param argDapanda フィールド[dapanda]に設定する値。
     */
    set dapanda(argDapanda: string) {
        this.fDapanda = argDapanda;
    }

    /**
     * フィールド [dapanda] の値を取得します。
     *
     * フィールドの説明: [駄パンダ]。
     * デフォルト: [&quot;dapanda!&quot;]。
     *
     * @return フィールド[dapanda]から取得した値。
     */
    get dapanda(): string {
        return this.fDapanda;
    }
}
