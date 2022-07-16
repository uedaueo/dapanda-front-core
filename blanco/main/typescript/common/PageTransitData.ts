/**
 * ページ間で持ち回るデータを格納します。
 */
export class PageTransitData {
    /**
     * 格納されているデータの型名です
     *
     * フィールド: [type]。
     * デフォルト: [&quot;&quot;]。
     */
    private fType: string = "";

    /**
     * 格納するデータです。
     *
     * フィールド: [data]。
     * デフォルト: [{}]。
     */
    private fData: any = {};

    /**
     * フィールド [type] の値を設定します。
     *
     * フィールドの説明: [格納されているデータの型名です]。
     *
     * @param argType フィールド[type]に設定する値。
     */
    set type(argType: string) {
        this.fType = argType;
    }

    /**
     * フィールド [type] の値を取得します。
     *
     * フィールドの説明: [格納されているデータの型名です]。
     * デフォルト: [&quot;&quot;]。
     *
     * @return フィールド[type]から取得した値。
     */
    get type(): string {
        return this.fType;
    }

    /**
     * フィールド [data] の値を設定します。
     *
     * フィールドの説明: [格納するデータです。]。
     *
     * @param argData フィールド[data]に設定する値。
     */
    set data(argData: any) {
        this.fData = argData;
    }

    /**
     * フィールド [data] の値を取得します。
     *
     * フィールドの説明: [格納するデータです。]。
     * デフォルト: [{}]。
     *
     * @return フィールド[data]から取得した値。
     */
    get data(): any {
        return this.fData;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            type: this.type,
            data: this.data
        };
    }
}
