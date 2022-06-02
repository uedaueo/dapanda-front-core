import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * サンプル図ページで使用するラベルを定義します。
 */
export class ChartSampleJa extends AbstractLocaleMessageObject {
    /**
     * フィールド: [text]。
     * デフォルト: [&quot;やる気、元気、猪木&quot;]。
     */
    private fText: string = "やる気、元気、猪木";

    /**
     * フィールド [text] の値を設定します。
     *
     * @param argText フィールド[text]に設定する値。
     */
    set text(argText: string) {
        this.fText = argText;
    }

    /**
     * フィールド [text] の値を取得します。
     *
     * デフォルト: [&quot;やる気、元気、猪木&quot;]。
     *
     * @return フィールド[text]から取得した値。
     */
    get text(): string {
        return this.fText;
    }
}
