/**
 * ログイン情報のオブジェクト定義です。
 */
export class LoginInfo {
    /**
     * ログイントークン
     *
     * フィールド: [loginToken]。
     * デフォルト: [&quot;&quot;]。
     */
    private fLoginToken: string = "";

    /**
     * 環境名
     *
     * フィールド: [environment]。
     * デフォルト: [&quot;&quot;]。
     */
    private fEnvironment: string = "";

    /**
     * フィールド [loginToken] の値を設定します。
     *
     * フィールドの説明: [ログイントークン]。
     *
     * @param argLoginToken フィールド[loginToken]に設定する値。
     */
    set loginToken(argLoginToken: string) {
        this.fLoginToken = argLoginToken;
    }

    /**
     * フィールド [loginToken] の値を取得します。
     *
     * フィールドの説明: [ログイントークン]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[loginToken]から取得した値。
     */
    get loginToken(): string {
        return this.fLoginToken;
    }

    /**
     * フィールド [environment] の値を設定します。
     *
     * フィールドの説明: [環境名]。
     *
     * @param argEnvironment フィールド[environment]に設定する値。
     */
    set environment(argEnvironment: string) {
        this.fEnvironment = argEnvironment;
    }

    /**
     * フィールド [environment] の値を取得します。
     *
     * フィールドの説明: [環境名]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[environment]から取得した値。
     */
    get environment(): string {
        return this.fEnvironment;
    }
}
