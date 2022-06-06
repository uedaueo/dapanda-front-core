/**
 * stateを定義します
 */
export interface LocaleSettingStoreState {
    /**
     * 言語の指定です。
     */
    lang: string;

    /**
     * タイムゾーンです。
     */
    tz: string;

    /**
     * 通過です。
     */
    country: string;
}

/**
 * stateを定義します
 */
export const localeSettingStoreState: LocaleSettingStoreState = {
    lang: "ja",
    tz: "Asia/Tokyo",
    country: "jpy"
};
