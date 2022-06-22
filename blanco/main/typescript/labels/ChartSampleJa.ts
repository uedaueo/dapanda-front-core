import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * サンプル図ページで使用するラベルを定義します。
 */
export class ChartSampleJa extends AbstractLocaleMessageObject {
    /**
     * フィールド: [text]。
     * デフォルト: [&quot;やる気、元気、猪木&quot;]。
     */
    text: string = "やる気、元気、猪木";

    /**
     * フィールド: [sLanguage]。
     * デフォルト: [&quot;言語&quot;]。
     */
    sLanguage: string = "言語";

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
