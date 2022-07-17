import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * dapanda framework 全体で共通に使用するラベルを定義します。
 */
export class DapandaCommonEn extends AbstractLocaleMessageObject {
    /**
     * ログアウトメッセージです
     *
     * フィールド: [logoutMessage]。
     * デフォルト: [&quot;Do you want to logout?&quot;]。
     */
    logoutMessage: string = "Do you want to logout?";

    /**
     * yesボタンのキャプションです
     *
     * フィールド: [yes]。
     * デフォルト: [&quot;YES&quot;]。
     */
    yes: string = "YES";

    /**
     * noボタンのキャプションです
     *
     * フィールド: [no]。
     * デフォルト: [&quot;NO&quot;]。
     */
    no: string = "NO";

    /**
     * OKボタンのキャプションです
     *
     * フィールド: [ok]。
     * デフォルト: [&quot;OK&quot;]。
     */
    ok: string = "OK";

    /**
     * CANCELボタンのキャプションです
     *
     * フィールド: [cancel]。
     * デフォルト: [&quot;CANCEL&quot;]。
     */
    cancel: string = "CANCEL";
}
