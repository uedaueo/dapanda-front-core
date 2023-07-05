/*
 * This source code has been generated by blanco Framework.
 */
import { ApiPutTelegram } from "%/blanco/restgenerator/valueobject/ApiPutTelegram";

/**
 * 共通エラーResponseを定義するためのダミーAPIの応答電文です。
 */
export class ApiPlainCommonPutResponse extends ApiPutTelegram {
    /**
     * 規定値   [null]
     */
    private _additionalPath: string | undefined = undefined;

    /**
     * Returns the name of this telegram class as a string.
     *
     * @return The class name of this telegram.
     */
    get telegramId(): string {
        return "ApiPlainCommonPutResponse";
    }

    /**
     * Returns the kind of this telegram as a string.
     *
     * @return The kind of this telegram.
     */
    get telegramType(): string {
        return "Output";
    }

    /**
     * Returns the method of this telegram as a string.
     *
     * @return The method of this telegram.
     */
    get telegramMethod(): string {
        return "PUT";
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
}