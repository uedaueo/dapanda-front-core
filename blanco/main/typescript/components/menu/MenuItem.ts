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
    description?: string;

    /**
     * icon
     *
     * フィールド: [icon]。
     */
    icon?: string;

    /**
     * vue-router の path
     *
     * フィールド: [path]。
     */
    path?: string;

    /**
     * 親メニュー項目
     *
     * フィールド: [parent]。
     */
    parent?: MenuItem;

    /**
     * 子メニュー項目たち
     *
     * フィールド: [children]。
     */
    children?: Array<MenuItem>;

    /**
     * このメニューを表示する事が許されたroleの配列
     *
     * フィールド: [permitTo]。
     */
    permitTo?: Array<string>;

    /**
     * 依存する画面ID（権限チェック用）
     *
     * フィールド: [screenId]。
     */
    screenId?: string;

    /**
     * 無効化の場合はTRUE
     *
     * フィールド: [disabled]。
     */
    disabled?: boolean;

    /**
     * 遷移先URLに付加するqueryとhash
     *
     * フィールド: [queryAndHash]。
     */
    queryAndHash?: RouteQueryAndHash;
}
