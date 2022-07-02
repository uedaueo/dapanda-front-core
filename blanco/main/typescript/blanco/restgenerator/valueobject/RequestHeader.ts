import { Locale } from "%/blanco/restgenerator/valueobject/Locale";

/**
 * 通信に関するメタ情報を表す型です
 */
export class RequestHeader {
    /**
     * ロケール
     *
     * フィールド: [locale]。
     * デフォルト: [new Locale()]。
     */
    private fLocale: Locale = new Locale();

    /**
     * バージョン
     *
     * フィールド: [version]。
     * デフォルト: [&quot;&quot;]。
     */
    private fVersion: string = "";

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
     * フィールド [version] の値を設定します。
     *
     * フィールドの説明: [バージョン]。
     *
     * @param argVersion フィールド[version]に設定する値。
     */
    set version(argVersion: string) {
        this.fVersion = argVersion;
    }

    /**
     * フィールド [version] の値を取得します。
     *
     * フィールドの説明: [バージョン]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[version]から取得した値。
     */
    get version(): string {
        return this.fVersion;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            locale: this.locale,
            version: this.version
        };
    }
}
