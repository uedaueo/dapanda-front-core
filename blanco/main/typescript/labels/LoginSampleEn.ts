import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * Loginサンプルページで使用するラベルを定義します。
 */
export class LoginSampleEn extends AbstractLocaleMessageObject {
    /**
     * ページタイトルです
     *
     * フィールド: [componentId]。
     * デフォルト: [&quot;Login Page Sample&quot;]。
     */
    componentId: string = "Login Page Sample";

    /**
     * フォームのログインID項目です
     *
     * フィールド: [id]。
     * デフォルト: [&quot;LOGIN ID&quot;]。
     */
    id: string = "LOGIN ID";

    /**
     * フォームのパスワード項目です
     *
     * フィールド: [password]。
     * デフォルト: [&quot;PASSWORD&quot;]。
     */
    password: string = "PASSWORD";

    /**
     * フォームのログインボタンです
     *
     * フィールド: [submit]。
     * デフォルト: [&quot;LOGIN&quot;]。
     */
    submit: string = "LOGIN";
}
