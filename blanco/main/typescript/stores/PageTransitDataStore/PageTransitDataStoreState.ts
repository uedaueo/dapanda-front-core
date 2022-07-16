import {RestorePageTransitDataOptions} from "@/common/RestorePageTransitDataOptions";
import { PageTransitData } from "%/common/PageTransitData";

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
    data?: PageTransitData;

    /**
     * 遷移先ページに渡すデータの状態です。
     *
     * * valid : 有効なデータが存在します<br>
     * * invalid : データは存在しないか無効です<br>
     * * updated : データが更新されました。restore が完了した場合も含みます。<br>
     * * saving : データを sessionStorage に保管中です。<br>
     * * saved : データの保管が完了しました。<br>
     * * restoring : データを sessionStorage から読込中です。<br>
     * * removing : データを削除中です。<br>
     * * removed : データの削除が完了しました<br>
     */
    dataStatus: string;

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
    dataStatus: "invalid",
    dataRestoreOptions: undefined
};
