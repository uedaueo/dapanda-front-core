/*
 * This source code has been generated by blanco Framework.
 */
import { ApiDeleteTelegram } from "%/blanco/restgenerator/valueobject/ApiDeleteTelegram";

/**
 * blancoRestのサンプルAPIの応答電文です。
 */
export class ApiPlainCommonDeleteError extends ApiDeleteTelegram {
    /**
     * エラーコード
     *
     * 規定値   [&quot;&quot;]
     */
    private fCode: string = "";

    /**
     * エラーメッセージ
     *
     * 規定値   [&quot;&quot;]
     */
    private fMessage: string = "";

    /**
     * 規定値   [null]
     */
    private _additionalPath: string | undefined = undefined;

    /**
     * 規定値   [&quot;500&quot;]
     */
    private _statusCode: string = "500";

    /**
     * フィールド [code]のセッターメソッド
     *
     * 項目の型 [エラーコード]
     *
     * @param argCode フィールド[code]に格納したい値
     */
    set code(argCode: string) {
        this.fCode = argCode;
    }

    /**
     * フィールド[code]のゲッターメソッド
     *
     * 項目の型 [エラーコード]
     * 規定値   [&quot;&quot;]
     *
     * @return フィールド[code]に格納されている値
     */
    get code(): string {
        return this.fCode;
    }

    /**
     * フィールド[code]のゲッターメソッド
     *
     * 項目の型 [string]
     * エラーコード
     *
     * @return フィールド[code]の型名文字列
     */
    static typeCode(): string | undefined {
        return "string";
    }

    /**
     * フィールド [message]のセッターメソッド
     *
     * 項目の型 [エラーメッセージ]
     *
     * @param argMessage フィールド[message]に格納したい値
     */
    set message(argMessage: string) {
        this.fMessage = argMessage;
    }

    /**
     * フィールド[message]のゲッターメソッド
     *
     * 項目の型 [エラーメッセージ]
     * 規定値   [&quot;&quot;]
     *
     * @return フィールド[message]に格納されている値
     */
    get message(): string {
        return this.fMessage;
    }

    /**
     * フィールド[message]のゲッターメソッド
     *
     * 項目の型 [string]
     * エラーメッセージ
     *
     * @return フィールド[message]の型名文字列
     */
    static typeMessage(): string | undefined {
        return "string";
    }

    /**
     * Returns the name of this telegram class as a string.
     *
     * @return The class name of this telegram.
     */
    get telegramId(): string {
        return "ApiPlainCommonDeleteError";
    }

    /**
     * Returns the kind of this telegram as a string.
     *
     * @return The kind of this telegram.
     */
    get telegramType(): string {
        return "Error";
    }

    /**
     * Returns the method of this telegram as a string.
     *
     * @return The method of this telegram.
     */
    get telegramMethod(): string {
        return "DELETE";
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
     * フィールド [_statusCode]のセッターメソッド
     *
     * 項目の型 [string]
     *
     * @param argStatusCode フィールド[_statusCode]に格納したい値
     */
    set statusCode(argStatusCode: string) {
        this._statusCode = argStatusCode;
    }

    /**
     * フィールド[_statusCode]のゲッターメソッド
     *
     * 項目の型 [string]
     *
     * @return フィールド[_statusCode]に格納されている値
     */
    get statusCode(): string {
        return this._statusCode;
    }

    /**
     * Gets the properties to be written to JSON from this telegram.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            code: this.code,
            message: this.message
        };
    }
}
