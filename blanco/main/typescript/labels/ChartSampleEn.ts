import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * サンプル図ページで使用するラベルを定義します。
 */
export class ChartSampleEn extends AbstractLocaleMessageObject {
    /**
     * フィールド: [text]。
     * デフォルト: [&quot;sample&quot;]。
     */
    private fText: string = "sample";

    /**
     * フィールド: [sLanguage]。
     * デフォルト: [&quot;language&quot;]。
     */
    private fSLanguage: string = "language";

    /**
     * フィールド: [sItemLangJa]。
     * デフォルト: [&quot;日本語&quot;]。
     */
    private fSItemLangJa: string = "日本語";

    /**
     * フィールド: [sItemLangEn]。
     * デフォルト: [&quot;English&quot;]。
     */
    private fSItemLangEn: string = "English";

    /**
     * フィールド [text] の値を設定します。
     *
     * @param argText フィールド[text]に設定する値。
     */
    set text(argText: string) {
        this.fText = argText;
    }

    /**
     * フィールド [text] の値を取得します。
     *
     * デフォルト: [&quot;sample&quot;]。
     *
     * @return フィールド[text]から取得した値。
     */
    get text(): string {
        return this.fText;
    }

    /**
     * フィールド [sLanguage] の値を設定します。
     *
     * @param argSLanguage フィールド[sLanguage]に設定する値。
     */
    set sLanguage(argSLanguage: string) {
        this.fSLanguage = argSLanguage;
    }

    /**
     * フィールド [sLanguage] の値を取得します。
     *
     * デフォルト: [&quot;language&quot;]。
     *
     * @return フィールド[sLanguage]から取得した値。
     */
    get sLanguage(): string {
        return this.fSLanguage;
    }

    /**
     * フィールド [sItemLangJa] の値を設定します。
     *
     * @param argSItemLangJa フィールド[sItemLangJa]に設定する値。
     */
    set sItemLangJa(argSItemLangJa: string) {
        this.fSItemLangJa = argSItemLangJa;
    }

    /**
     * フィールド [sItemLangJa] の値を取得します。
     *
     * デフォルト: [&quot;日本語&quot;]。
     *
     * @return フィールド[sItemLangJa]から取得した値。
     */
    get sItemLangJa(): string {
        return this.fSItemLangJa;
    }

    /**
     * フィールド [sItemLangEn] の値を設定します。
     *
     * @param argSItemLangEn フィールド[sItemLangEn]に設定する値。
     */
    set sItemLangEn(argSItemLangEn: string) {
        this.fSItemLangEn = argSItemLangEn;
    }

    /**
     * フィールド [sItemLangEn] の値を取得します。
     *
     * デフォルト: [&quot;English&quot;]。
     *
     * @return フィールド[sItemLangEn]から取得した値。
     */
    get sItemLangEn(): string {
        return this.fSItemLangEn;
    }
}
