import { RouteQueryAndHash } from "vue-router";

/**
 * メニュー項目を表すクラスです。
 */
export interface MenuItem {
    /**
     * メニューを識別する一意なID
     *
     * フィールド: [menuId]。
     */
    menuId: string;

    /**
     * vue-i18n のラベル
     *
     * フィールド: [nameId]。
     */
    nameId: string;

    /**
     * 開発者が識別するための説明
     *
     * フィールド: [description]。
     */
    description?: string | undefined | null;

    /**
     * icon
     *
     * フィールド: [icon]。
     */
    icon?: string | undefined | null;

    /**
     * vue-router の path
     *
     * フィールド: [path]。
     */
    path?: string | undefined | null;

    /**
     * 親メニュー項目
     *
     * フィールド: [parent]。
     */
    parent?: MenuItem | undefined | null;

    /**
     * 子メニュー項目たち
     *
     * フィールド: [children]。
     */
    children?: Array<MenuItem> | undefined | null;

    /**
     * このメニューを表示する事が許されたroleの配列
     *
     * フィールド: [permitTo]。
     */
    permitTo?: Array<string> | undefined | null;

    /**
     * 依存する画面ID（権限チェック用）
     *
     * フィールド: [screenId]。
     */
    screenId?: string | undefined | null;

    /**
     * 無効化の場合はTRUE
     *
     * フィールド: [disabled]。
     */
    disabled?: boolean | undefined | null;

    /**
     * 遷移先URLに付加するqueryとhash
     *
     * フィールド: [queryAndHash]。
     */
    queryAndHash?: RouteQueryAndHash | undefined | null;
}
