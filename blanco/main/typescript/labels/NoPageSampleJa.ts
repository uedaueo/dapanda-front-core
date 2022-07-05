import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * NoPgeサンプルページで使用するラベルを定義します。
 */
export class NoPageSampleJa extends AbstractLocaleMessageObject {
    /**
     * ページタイトルです
     *
     * フィールド: [componentId]。
     * デフォルト: [&quot;NoPageサンプル&quot;]。
     */
    componentId: string = "NoPageサンプル";

    /**
     * 画面に表示するメッセージです
     *
     * フィールド: [noPageMsg]。
     * デフォルト: [&quot;ページが存在しません&quot;]。
     */
    noPageMsg: string = "ページが存在しません";
}
