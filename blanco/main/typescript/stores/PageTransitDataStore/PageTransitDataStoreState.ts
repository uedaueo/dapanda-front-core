/**
 * stateを定義します
 */
export interface PageTransitDataStoreState {
    /**
     * 遷移先ページのURLです。
     */
    location: string;

    /**
     * 遷移先ページに渡すデータです。
     */
    data?: any;
}

/**
 * stateを定義します
 */
export const pageTransitDataStoreState: PageTransitDataStoreState = {
    location: "/"
};
