import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * ロケール選択コンポーネントで使用するラベルを定義します。
 */
export class LocaleSelectJa extends AbstractLocaleMessageObject {
    /**
     * フィールド: [sLanguage]。
     * デフォルト: [&quot;言語&quot;]。
     */
    private fSLanguage: string = "言語";

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
     * デフォルト: [&quot;言語&quot;]。
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
