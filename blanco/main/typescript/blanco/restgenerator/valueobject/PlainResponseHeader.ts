import { ResponseHeader } from "%/blanco/restgenerator/valueobject/ResponseHeader";

/**
 * 電文タイプ plain な APIが返すレスポンスのヘッダを表す型です。Typescript  専用です。
 */
export class PlainResponseHeader extends ResponseHeader {
    /**
     * AXIOS から取得した status を格納します
     *
     * フィールド: [status]。
     * デフォルト: [200]。
     */
    private fStatus: number = 200;

    /**
     * AXIOS から取得した status 文字情報を格納します
     *
     * フィールド: [statusText]。
     * デフォルト: [&quot;&quot;]。
     */
    private fStatusText: string = "";

    /**
     * フィールド [status] の値を設定します。
     *
     * フィールドの説明: [AXIOS から取得した status を格納します]。
     *
     * @param argStatus フィールド[status]に設定する値。
     */
    set status(argStatus: number) {
        this.fStatus = argStatus;
    }

    /**
     * フィールド [status] の値を取得します。
     *
     * フィールドの説明: [AXIOS から取得した status を格納します]。
     * デフォルト: [200]。
     *
     * @return フィールド[status]から取得した値。
     */
    get status(): number {
        return this.fStatus;
    }

    /**
     * フィールド [statusText] の値を設定します。
     *
     * フィールドの説明: [AXIOS から取得した status 文字情報を格納します]。
     *
     * @param argStatusText フィールド[statusText]に設定する値。
     */
    set statusText(argStatusText: string) {
        this.fStatusText = argStatusText;
    }

    /**
     * フィールド [statusText] の値を取得します。
     *
     * フィールドの説明: [AXIOS から取得した status 文字情報を格納します]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[statusText]から取得した値。
     */
    get statusText(): string {
        return this.fStatusText;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return Object.assign(super.toJSON(), {
            status: this.status,
            statusText: this.statusText
        });
    }
}
