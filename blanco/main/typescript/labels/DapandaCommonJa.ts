import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * dapanda framework 全体で共通に使用するラベルを定義します。
 */
export class DapandaCommonJa extends AbstractLocaleMessageObject {
    /**
     * ログアウトメッセージです
     *
     * フィールド: [logoutMessage]。
     * デフォルト: [&quot;ログアウトしますか?&quot;]。
     */
    logoutMessage: string = "ログアウトしますか?";

    /**
     * yesボタンのキャプションです
     *
     * フィールド: [yes]。
     * デフォルト: [&quot;はい&quot;]。
     */
    yes: string = "はい";

    /**
     * noボタンのキャプションです
     *
     * フィールド: [no]。
     * デフォルト: [&quot;いいえ&quot;]。
     */
    no: string = "いいえ";

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
