import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * NoPageサンプルページで使用するラベルを定義します。
 */
export class NoPageSampleEn extends AbstractLocaleMessageObject {
    /**
     * ページタイトルです
     *
     * フィールド: [componentId]。
     * デフォルト: [&quot;NoPage Sample&quot;]。
     */
    componentId: string = "NoPage Sample";

    /**
     * 画面に表示するメッセージです
     *
     * フィールド: [noPageMsg]。
     * デフォルト: [&quot;No Such Page Exists&quot;]。
     */
    noPageMsg: string = "No Such Page Exists";
}
