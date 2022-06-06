/**
 * stateを定義します
 */
export interface LocalSettingStoreState {
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
export const localSettingStoreState: LocalSettingStoreState = {
    lang: "ja",
    tz: "Asia/Tokyo",
    country: "jpy"
};
