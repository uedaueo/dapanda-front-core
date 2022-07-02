/**
 * ロケール情報
 */
export class Locale {
    /**
     * 言語コード．defaultはja
     *
     * フィールド: [lang]。
     * デフォルト: [&quot;ja&quot;]。
     */
    private fLang: string = "ja";

    /**
     * 時間帯
     *
     * フィールド: [tz]。
     * デフォルト: [&quot;Asia/Tokyo&quot;]。
     */
    private fTz: string = "Asia/Tokyo";

    /**
     * 通貨
     *
     * フィールド: [currency]。
     * デフォルト: [&quot;JPY&quot;]。
     */
    private fCurrency: string = "JPY";

    /**
     * フィールド [lang] の値を設定します。
     *
     * フィールドの説明: [言語コード．defaultはja]。
     *
     * @param argLang フィールド[lang]に設定する値。
     */
    set lang(argLang: string) {
        this.fLang = argLang;
    }

    /**
     * フィールド [lang] の値を取得します。
     *
     * フィールドの説明: [言語コード．defaultはja]。
     * デフォルト: [&quot;ja&quot;]。
     *
     * @return フィールド[lang]から取得した値。
     */
    get lang(): string {
        return this.fLang;
    }

    /**
     * フィールド [tz] の値を設定します。
     *
     * フィールドの説明: [時間帯]。
     *
     * @param argTz フィールド[tz]に設定する値。
     */
    set tz(argTz: string) {
        this.fTz = argTz;
    }

    /**
     * フィールド [tz] の値を取得します。
     *
     * フィールドの説明: [時間帯]。
     * デフォルト: [&quot;Asia/Tokyo&quot;]。
     *
     * @return フィールド[tz]から取得した値。
     */
    get tz(): string {
        return this.fTz;
    }

    /**
     * フィールド [currency] の値を設定します。
     *
     * フィールドの説明: [通貨]。
     *
     * @param argCurrency フィールド[currency]に設定する値。
     */
    set currency(argCurrency: string) {
        this.fCurrency = argCurrency;
    }

    /**
     * フィールド [currency] の値を取得します。
     *
     * フィールドの説明: [通貨]。
     * デフォルト: [&quot;JPY&quot;]。
     *
     * @return フィールド[currency]から取得した値。
     */
    get currency(): string {
        return this.fCurrency;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            lang: this.lang,
            tz: this.tz,
            currency: this.currency
        };
    }
}
