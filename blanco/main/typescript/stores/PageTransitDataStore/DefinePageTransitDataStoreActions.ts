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
    update(
            location: string,
            data?: any
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
