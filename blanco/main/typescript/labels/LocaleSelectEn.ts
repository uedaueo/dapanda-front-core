import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * ロケール選択コンポーネントで使用するラベルを定義します。
 */
export class LocaleSelectEn extends AbstractLocaleMessageObject {
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
