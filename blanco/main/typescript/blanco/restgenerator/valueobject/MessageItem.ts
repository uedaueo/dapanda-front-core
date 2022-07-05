/**
 * APIが返すメッセージ（エラー他）を定義します
 */
export class MessageItem {
    /**
     * エラーコード
     *
     * フィールド: [code]。
     * デフォルト: [null]。
     */
    private fCode?: string;

    /**
     * エラーメッセージの配列
     *
     * フィールド: [messages]。
     * デフォルト: [null]。
     */
    private fMessages?: string;

    /**
     * フィールド [code] の値を設定します。
     *
     * フィールドの説明: [エラーコード]。
     *
     * @param argCode フィールド[code]に設定する値。
     */
    set code(argCode: string | undefined) {
        this.fCode = argCode;
    }

    /**
     * フィールド [code] の値を取得します。
     *
     * フィールドの説明: [エラーコード]。
     *
     * @return フィールド[code]から取得した値。
     */
    get code(): string | undefined {
        return this.fCode;
    }

    /**
     * フィールド [messages] の値を設定します。
     *
     * フィールドの説明: [エラーメッセージの配列]。
     *
     * @param argMessages フィールド[messages]に設定する値。
     */
    set messages(argMessages: string | undefined) {
        this.fMessages = argMessages;
    }

    /**
     * フィールド [messages] の値を取得します。
     *
     * フィールドの説明: [エラーメッセージの配列]。
     *
     * @return フィールド[messages]から取得した値。
     */
    get messages(): string | undefined {
        return this.fMessages;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            code: this.code,
            messages: this.messages
        };
    }
}
