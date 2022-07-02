import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * Loginサンプルページで使用するラベルを定義します。
 */
export class LoginSampleJa extends AbstractLocaleMessageObject {
    /**
     * ページタイトルです
     *
     * フィールド: [componentId]。
     * デフォルト: [&quot;ログインページサンプル&quot;]。
     */
    componentId: string = "ログインページサンプル";

    /**
     * フォームのログインID項目です
     *
     * フィールド: [id]。
     * デフォルト: [&quot;ログインID&quot;]。
     */
    id: string = "ログインID";

    /**
     * フォームのパスワード項目です
     *
     * フィールド: [password]。
     * デフォルト: [&quot;パスワード&quot;]。
     */
    password: string = "パスワード";

    /**
     * フォームのログインボタンです
     *
     * フィールド: [submit]。
     * デフォルト: [&quot;ログイン&quot;]。
     */
    submit: string = "ログイン";
}
