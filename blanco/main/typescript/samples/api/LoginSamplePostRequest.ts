/*
 * This source code has been generated by blanco Framework.
 */
import { ApiPostTelegram } from "%/blanco/restgenerator/valueobject/ApiPostTelegram";

/**
 * blancoRestのサンプルAPIの要求電文です。
 */
export class LoginSamplePostRequest extends ApiPostTelegram {
    /**
     * ログインIDです
     *
     * 規定値   [&quot;&quot;]
     */
    private fId: string = "";

    /**
     * パスワードです
     *
     * 規定値   [&quot;&quot;]
     */
    private fPassword: string = "";

    /**
     * フィールド [id]のセッターメソッド
     *
     * 項目の型 [ログインIDです]
     *
     * @param argId フィールド[id]に格納したい値
     */
    set id(argId: string) {
        this.fId = argId;
    }

    /**
     * フィールド[id]のゲッターメソッド
     *
     * 項目の型 [ログインIDです]
     * 規定値   [&quot;&quot;]
     *
     * @return フィールド[id]に格納されている値
     */
    get id(): string {
        return this.fId;
    }

    /**
     * フィールド[id]のゲッターメソッド
     *
     * 項目の型 [string]
     * ログインIDです
     *
     * @return フィールド[id]の型名文字列
     */
    static typeId(): string | undefined {
        return "string";
    }

    /**
     * フィールド [password]のセッターメソッド
     *
     * 項目の型 [パスワードです]
     *
     * @param argPassword フィールド[password]に格納したい値
     */
    set password(argPassword: string) {
        this.fPassword = argPassword;
    }

    /**
     * フィールド[password]のゲッターメソッド
     *
     * 項目の型 [パスワードです]
     * 規定値   [&quot;&quot;]
     *
     * @return フィールド[password]に格納されている値
     */
    get password(): string {
        return this.fPassword;
    }

    /**
     * フィールド[password]のゲッターメソッド
     *
     * 項目の型 [string]
     * パスワードです
     *
     * @return フィールド[password]の型名文字列
     */
    static typePassword(): string | undefined {
        return "string";
    }

    /**
     * Returns the name of this telegram class as a string.
     *
     * @return The class name of this telegram.
     */
    get telegramId(): string {
        return "LoginSamplePostRequest";
    }

    /**
     * Gets the properties to be written to JSON from this telegram.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            id: this.id,
            password: this.password
        };
    }
}
