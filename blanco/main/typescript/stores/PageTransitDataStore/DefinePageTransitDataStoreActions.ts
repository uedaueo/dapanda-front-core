import {RestorePageTransitDataOptions} from "@/common/RestorePageTransitDataOptions";
import { PageTransitDataStoreState } from "./PageTransitDataStoreState";
import { UnwrapRef } from "vue";

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
            data?: any
    ): void;
    /**
     * ページリロード時にリストアを試みます
     *
     * @param flag trueでリストア指示
     * @param options ページ間データのロード時のオプションです
     * @return void
     */
    restore(
            flag: boolean,
            options?: RestorePageTransitDataOptions | undefined
    ): void;
    /**
     * データの更新を試みます
     *
     * @param data 更新データ
     * @return void
     */
    updateData(
            data: any
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
