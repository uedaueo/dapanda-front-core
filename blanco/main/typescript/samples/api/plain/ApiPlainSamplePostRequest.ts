/*
 * This source code has been generated by blanco Framework.
 */
import { ApiPostTelegram } from "%/blanco/restgenerator/valueobject/ApiPostTelegram";
import { ApiSampleOptions } from "%/samples/api/ApiSampleOptions";

/**
 * blancoRestのサンプルAPIの要求電文です。
 */
export class ApiPlainSamplePostRequest extends ApiPostTelegram {
    /**
     * 種別
     *
     * 規定値   [&quot;&quot;]
     */
    private fKind: string = "";

    /**
     * オプション
     *
     * 規定値   [new Array&lt;ApiSampleOptions&gt;()]
     */
    private fOptions: Array<ApiSampleOptions> = new Array<ApiSampleOptions>();

    /**
     * 備考
     *
     * 規定値   [new Array&lt;string&gt;()]
     */
    private fMemo: Array<string> = new Array<string>();

    /**
     * 規定値   [null]
     */
    private _additionalPath: string | undefined = undefined;

    /**
     * フィールド [kind]のセッターメソッド
     *
     * 項目の型 [種別]
     *
     * @param argKind フィールド[kind]に格納したい値
     */
    set kind(argKind: string) {
        this.fKind = argKind;
    }

    /**
     * フィールド[kind]のゲッターメソッド
     *
     * 項目の型 [種別]
     * 規定値   [&quot;&quot;]
     *
     * @return フィールド[kind]に格納されている値
     */
    get kind(): string {
        return this.fKind;
    }

    /**
     * フィールド[kind]のゲッターメソッド
     *
     * 項目の型 [string]
     * 種別
     *
     * @return フィールド[kind]の型名文字列
     */
    static typeKind(): string | undefined {
        return "string";
    }

    /**
     * フィールド [options]のセッターメソッド
     *
     * 項目の型 [オプション]
     *
     * @param argOptions フィールド[options]に格納したい値
     */
    set options(argOptions: Array<ApiSampleOptions>) {
        this.fOptions = argOptions;
    }

    /**
     * フィールド[options]のゲッターメソッド
     *
     * 項目の型 [オプション]
     * 規定値   [new Array&lt;ApiSampleOptions&gt;()]
     *
     * @return フィールド[options]に格納されている値
     */
    get options(): Array<ApiSampleOptions> {
        return this.fOptions;
    }

    /**
     * フィールド[options]のゲッターメソッド
     *
     * 項目の型 [Array]
     * オプション
     *
     * @return フィールド[options]の型名文字列
     */
    static typeOptions(): string | undefined {
        return "Array";
    }

    /**
     * フィールド[options]のゲッターメソッド
     *
     * 項目の型 [samples.api.ApiSampleOptions]
     * オプション
     *
     * @return フィールド[options]の型名文字列
     */
    static genericOptions(): string | undefined {
        return "ApiSampleOptions";
    }

    /**
     * フィールド [memo]のセッターメソッド
     *
     * 項目の型 [備考]
     *
     * @param argMemo フィールド[memo]に格納したい値
     */
    set memo(argMemo: Array<string>) {
        this.fMemo = argMemo;
    }

    /**
     * フィールド[memo]のゲッターメソッド
     *
     * 項目の型 [備考]
     * 規定値   [new Array&lt;string&gt;()]
     *
     * @return フィールド[memo]に格納されている値
     */
    get memo(): Array<string> {
        return this.fMemo;
    }

    /**
     * フィールド[memo]のゲッターメソッド
     *
     * 項目の型 [Array]
     * 備考
     *
     * @return フィールド[memo]の型名文字列
     */
    static typeMemo(): string | undefined {
        return "Array";
    }

    /**
     * フィールド[memo]のゲッターメソッド
     *
     * 項目の型 [string]
     * 備考
     *
     * @return フィールド[memo]の型名文字列
     */
    static genericMemo(): string | undefined {
        return "string";
    }

    /**
     * Returns the name of this telegram class as a string.
     *
     * @return The class name of this telegram.
     */
    get telegramId(): string {
        return "ApiPlainSamplePostRequest";
    }

    /**
     * Returns the kind of this telegram as a string.
     *
     * @return The kind of this telegram.
     */
    get telegramType(): string {
        return "Input";
    }

    /**
     * Returns the method of this telegram as a string.
     *
     * @return The method of this telegram.
     */
    get telegramMethod(): string {
        return "POST";
    }

    /**
     * フィールド [_additionalPath]のセッターメソッド
     *
     * 項目の型 [string | undefined]
     *
     * @param argAdditionalPath フィールド[_additionalPath]に格納したい値
     */
    set additionalPath(argAdditionalPath: string | undefined) {
        this._additionalPath = argAdditionalPath;
    }

    /**
     * フィールド[_additionalPath]のゲッターメソッド
     *
     * 項目の型 [string|undefined]
     *
     * @return フィールド[_additionalPath]に格納されている値
     */
    get additionalPath(): string | undefined {
        return this._additionalPath;
    }

    /**
     * Get the path parameters from this telegram.
     *
     * @return A string returned by getPathParams
     */
    getPathParams(): string | undefined {
        let pathParams = "";
        if (typeof this.get_sample !== 'undefined') {
            pathParams += ("/" + this.get_sample);
        } else {
            throw 'Invalid PathParam, get_sample is undefined.';
        }
        return pathParams;
    }

    /**
     * Get the query parameters from this telegram.
     *
     * @return A string returned by getQueryParams
     */
    getQueryParams(): any {
        return {
            get_option: this.options
        };
    }

    /**
     * Get the body parameters from this telegram.
     *
     * @return A string returned by getBodyParams
     */
    getBodyParams(): any {
        return {
            memo: this.memo
        };
    }

    /**
     * Gets the properties to be written to JSON from this telegram.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            get_sample: this.kind,
            get_option: this.options,
            memo: this.memo
        };
    }
}
