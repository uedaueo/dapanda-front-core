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
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    updateLocation(
            location: string,
            data?: PageTransitData,
            issuer?: string
    ): void;
    /**
     * ページリロード時にリストアを試みます
     *
     * @param options データをリストアする際のオプションです。
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    restore(
            options: RestorePageTransitDataOptions | undefined,
            issuer: string
    ): Promise<void>;
    /**
     * データの更新を試みます
     *
     * @param data 更新データ
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    updateData(
            data?: PageTransitData,
            issuer?: string
    ): void;
    /**
     * データの削除を試みます
     *
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    remove(
            issuer: string
    ): Promise<void>;
    /**
     * データ状態の更新を試みます。
     *
     * @param dataStatus データ状態です。
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    setDataStatus(
            dataStatus: string,
            issuer: string
    ): void;
    /**
     * issuerの値を変更します。
     *
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    setIssuer(
            issuer: string
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
