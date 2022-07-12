import {RestorePageTransitDataOptions} from "@/common/RestorePageTransitDataOptions";

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

    /**
     * ページリロード時にリストアを試みます
     */
    restoreFlg: boolean;

    /**
     * リストアの際に参照するオプション値
     */
    dataRestoreOptions: RestorePageTransitDataOptions | undefined;
}

/**
 * stateを定義します
 */
export const pageTransitDataStoreState: PageTransitDataStoreState = {
    location: "/",
    restoreFlg: false,
    dataRestoreOptions: undefined
};
