import { Locale } from "%/blanco/restgenerator/valueobject/Locale";

/**
 * APIが返すレスポンスのヘッダを表す型です
 */
export class ResponseHeader {
    /**
     * ロケール
     *
     * フィールド: [locale]。
     * デフォルト: [new Locale()]。
     */
    private fLocale: Locale = new Locale();

    /**
     * 処理時間（ミリ秒）
     *
     * フィールド: [time]。
     * デフォルト: [0]。
     */
    private fTime: number = 0;

    /**
     * 処理結果（success/error）
     *
     * フィールド: [result]。
     * デフォルト: [&quot;&quot;]。
     */
    private fResult: string = "";

    /**
     * フィールド [locale] の値を設定します。
     *
     * フィールドの説明: [ロケール]。
     *
     * @param argLocale フィールド[locale]に設定する値。
     */
    set locale(argLocale: Locale) {
        this.fLocale = argLocale;
    }

    /**
     * フィールド [locale] の値を取得します。
     *
     * フィールドの説明: [ロケール]。
     * デフォルト: [new Locale()]。
     *
     * @return フィールド[locale]から取得した値。
     */
    get locale(): Locale {
        return this.fLocale;
    }

    /**
     * フィールド [time] の値を設定します。
     *
     * フィールドの説明: [処理時間（ミリ秒）]。
     *
     * @param argTime フィールド[time]に設定する値。
     */
    set time(argTime: number) {
        this.fTime = argTime;
    }

    /**
     * フィールド [time] の値を取得します。
     *
     * フィールドの説明: [処理時間（ミリ秒）]。
     * デフォルト: [0]。
     *
     * @return フィールド[time]から取得した値。
     */
    get time(): number {
        return this.fTime;
    }

    /**
     * フィールド [result] の値を設定します。
     *
     * フィールドの説明: [処理結果（success/error）]。
     *
     * @param argResult フィールド[result]に設定する値。
     */
    set result(argResult: string) {
        this.fResult = argResult;
    }

    /**
     * フィールド [result] の値を取得します。
     *
     * フィールドの説明: [処理結果（success/error）]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[result]から取得した値。
     */
    get result(): string {
        return this.fResult;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            locale: this.locale,
            time: this.time,
            result: this.result
        };
    }
}
