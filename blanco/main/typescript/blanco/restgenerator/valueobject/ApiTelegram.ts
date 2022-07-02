/**
 * APIの電文を表すクラスです．全てのRequest, Responseオブジェクトが継承する必要があります．
 */
export class ApiTelegram {
    /**
     * 電文クラス名を文字列として返却します。各電文クラス実装でオーバーライドされることを期待しています。
     *
     * フィールド: [telegramId]。
     * デフォルト: [&quot;&quot;]。
     */
    private fTelegramId: string = "";

    /**
     * 画面APIの権限を設定します。各電文クラスでオーバーライドされる前提です。
     *
     * フィールド: [permissionKind]。
     * デフォルト: [&quot;&quot;]。
     */
    private readonly fPermissionKind: string = "";

    /**
     * フィールド [telegramId] の値を設定します。
     *
     * フィールドの説明: [電文クラス名を文字列として返却します。各電文クラス実装でオーバーライドされることを期待しています。]。
     *
     * @param argTelegramId フィールド[telegramId]に設定する値。
     */
    set telegramId(argTelegramId: string) {
        this.fTelegramId = argTelegramId;
    }

    /**
     * フィールド [telegramId] の値を取得します。
     *
     * フィールドの説明: [電文クラス名を文字列として返却します。各電文クラス実装でオーバーライドされることを期待しています。]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[telegramId]から取得した値。
     */
    get telegramId(): string {
        return this.fTelegramId;
    }

    /**
     * フィールド [permissionKind] の値を取得します。
     *
     * フィールドの説明: [画面APIの権限を設定します。各電文クラスでオーバーライドされる前提です。]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[permissionKind]から取得した値。
     */
    get permissionKind(): string {
        return this.fPermissionKind;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
        };
    }
}
