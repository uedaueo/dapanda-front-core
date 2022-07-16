import {RestorePageTransitDataOptions} from "@/common/RestorePageTransitDataOptions";
import { PageTransitDataStoreState } from "./PageTransitDataStoreState";
import { UnwrapRef } from "vue";
import { PageTransitData } from "%/common/PageTransitData";

/** actionsを定義します */
export declare type PageTransitDataStoreActionsTree = {
    /**
     * ページ遷移する場合に呼び出します。
     *
     * @param location null
     * @param data null
     * @return void
     */
    updateLocation(
            location: string,
            data?: PageTransitData
    ): void;
    /**
     * ページリロード時にリストアを試みます
     *
     * @param options データをリストアする際のオプションです。
     * @return void
     */
    restore(
            options: RestorePageTransitDataOptions | undefined
    ): Promise<void>;
    /**
     * データの更新を試みます
     *
     * @param data 更新データ
     * @return void
     */
    updateData(
            data?: PageTransitData
    ): void;
    /**
     * データの削除を試みます
     *
     * @return void
     */
    remove(
    ): Promise<void>;
    /**
     * データ状態の更新を試みます。
     *
     * @param dataStatus データ状態です。
     * @return void
     */
    setDataStatus(
            dataStatus: string
    ): void;
}

/**
 * ページ遷移を制御するためのストアです。&lt;br&gt;
 *
 * ページ遷移時に次ページに渡すデータもここに格納します。
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function definePageTransitDataStoreActions(actions: PageTransitDataStoreActionsTree & ThisType<PageTransitDataStoreActionsTree & UnwrapRef<PageTransitDataStoreState>>): PageTransitDataStoreActionsTree & ThisType<PageTransitDataStoreActionsTree & UnwrapRef<PageTransitDataStoreState>> {
    return actions;
}
