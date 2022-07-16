/**
 * ChartSampleの初期値情報です
 */
export class ChartSampleInitData {
    /**
     * データセット番号の初期値
     *
     * フィールド: [dataSet]。
     * デフォルト: [0]。
     */
    private fDataSet: number = 0;

    /**
     * フィールド [dataSet] の値を設定します。
     *
     * フィールドの説明: [データセット番号の初期値]。
     *
     * @param argDataSet フィールド[dataSet]に設定する値。
     */
    set dataSet(argDataSet: number) {
        this.fDataSet = argDataSet;
    }

    /**
     * フィールド [dataSet] の値を取得します。
     *
     * フィールドの説明: [データセット番号の初期値]。
     * デフォルト: [0]。
     *
     * @return フィールド[dataSet]から取得した値。
     */
    get dataSet(): number {
        return this.fDataSet;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            dataSet: this.dataSet
        };
    }
}
