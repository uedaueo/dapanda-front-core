import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * サンプル図ページで使用するラベルを定義します。
 */
export class ChartSampleEn extends AbstractLocaleMessageObject {
    /**
     * フィールド: [text]。
     * デフォルト: [&quot;sample&quot;]。
     */
    text: string = "sample";

    /**
     * フィールド: [sLanguage]。
     * デフォルト: [&quot;language&quot;]。
     */
    sLanguage: string = "language";

    /**
     * フィールド: [sItemLangJa]。
     * デフォルト: [&quot;日本語&quot;]。
     */
    sItemLangJa: string = "日本語";

    /**
     * フィールド: [sItemLangEn]。
     * デフォルト: [&quot;English&quot;]。
     */
    sItemLangEn: string = "English";
}
