/**
 * Snackbar (toast) に関連づけられるデータを表すクラスです。
 */
export interface SnackbarAttribute {
    /**
     * snackbarの色です。&amp;quot;success&amp;quot;, &amp;quot;info&amp;quot;, &amp;quot;error&amp;quot; などを指定します。
     *
     * フィールド: [color]。
     */
    color: string;

    /**
     * multi-line または vertical を指定します。
     *
     * フィールド: [mode]。
     */
    mode: string;

    /**
     * snackbarを表示する場合はtrueを指定します。
     *
     * フィールド: [snackbar]。
     */
    snackbar: boolean;

    /**
     * snackbarに表示するテキストをしていします。
     *
     * フィールド: [text]。
     */
    text: string;

    /**
     * snackbarが自動的に消えるまでの時間（ミリ秒）
     *
     * フィールド: [timeout]。
     */
    timeout: number;

    /**
     * snackbarの水平方向配置。&amp;quot;left&amp;quot;, &amp;quot;right&amp;quot; 以外の場合に中央寄せとなります。
     *
     * フィールド: [x]。
     */
    x: string;

    /**
     * snackbarの垂直方向配置。&amp;quot;top&amp;quot;, &amp;quot;bottom&amp;quot;が指定できます。
     *
     * フィールド: [y]。
     */
    y: string;

    /**
     * 複数メッセージを区別するためにuuidを付与します。
     *
     * フィールド: [id]。
     */
    id: string;
}
