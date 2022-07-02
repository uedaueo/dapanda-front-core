import { RequestHeader } from "%/blanco/restgenerator/valueobject/RequestHeader";
import { ApiTelegram } from "%/blanco/restgenerator/valueobject/ApiTelegram";

/**
 * 共通リクエストを表すオブジェクトです。
 */
export class CommonRequest {
    /**
     * 通信に関するメタ情報
     *
     * フィールド: [info]。
     * デフォルト: [new RequestHeader()]。
     */
    private fInfo: RequestHeader = new RequestHeader();

    /**
     * API毎の要求電文, ApiTelegramを継承してAPI毎に独自の型を指定
     *
     * フィールド: [telegram]。
     * デフォルト: [new ApiTelegram()]。
     */
    private fTelegram?: ApiTelegram = new ApiTelegram();

    /**
     * フィールド [info] の値を設定します。
     *
     * フィールドの説明: [通信に関するメタ情報]。
     *
     * @param argInfo フィールド[info]に設定する値。
     */
    set info(argInfo: RequestHeader) {
        this.fInfo = argInfo;
    }

    /**
     * フィールド [info] の値を取得します。
     *
     * フィールドの説明: [通信に関するメタ情報]。
     * デフォルト: [new RequestHeader()]。
     *
     * @return フィールド[info]から取得した値。
     */
    get info(): RequestHeader {
        return this.fInfo;
    }

    /**
     * フィールド [telegram] の値を設定します。
     *
     * フィールドの説明: [API毎の要求電文, ApiTelegramを継承してAPI毎に独自の型を指定]。
     *
     * @param argTelegram フィールド[telegram]に設定する値。
     */
    set telegram(argTelegram: ApiTelegram | undefined) {
        this.fTelegram = argTelegram;
    }

    /**
     * フィールド [telegram] の値を取得します。
     *
     * フィールドの説明: [API毎の要求電文, ApiTelegramを継承してAPI毎に独自の型を指定]。
     * デフォルト: [new ApiTelegram()]。
     *
     * @return フィールド[telegram]から取得した値。
     */
    get telegram(): ApiTelegram | undefined {
        return this.fTelegram;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            info: this.info,
            telegram: this.telegram
        };
    }
}
