import { ResponseHeader } from "%/blanco/restgenerator/valueobject/ResponseHeader";
import { ApiTelegram } from "%/blanco/restgenerator/valueobject/ApiTelegram";
import { ErrorItem } from "%/blanco/restgenerator/valueobject/ErrorItem";

/**
 * 共通レスポンスを表すオブジェクトです。
 */
export class CommonResponse {
    /**
     * 通信に関するメタ情報
     *
     * フィールド: [info]。
     * デフォルト: [new ResponseHeader()]。
     */
    private fInfo?: ResponseHeader = new ResponseHeader();

    /**
     * API毎の応答電文, ApiTelegramを継承してAPI毎に独自の型を指定
     *
     * フィールド: [telegram]。
     * デフォルト: [new ApiTelegram()]。
     */
    private fTelegram?: ApiTelegram = new ApiTelegram();

    /**
     * エラー情報
     *
     * フィールド: [errors]。
     * デフォルト: [new Array&lt;ErrorItem&gt;()]。
     */
    private fErrors?: Array<ErrorItem> = new Array<ErrorItem>();

    /**
     * フィールド [info] の値を設定します。
     *
     * フィールドの説明: [通信に関するメタ情報]。
     *
     * @param argInfo フィールド[info]に設定する値。
     */
    set info(argInfo: ResponseHeader | undefined) {
        this.fInfo = argInfo;
    }

    /**
     * フィールド [info] の値を取得します。
     *
     * フィールドの説明: [通信に関するメタ情報]。
     * デフォルト: [new ResponseHeader()]。
     *
     * @return フィールド[info]から取得した値。
     */
    get info(): ResponseHeader | undefined {
        return this.fInfo;
    }

    /**
     * フィールド [telegram] の値を設定します。
     *
     * フィールドの説明: [API毎の応答電文, ApiTelegramを継承してAPI毎に独自の型を指定]。
     *
     * @param argTelegram フィールド[telegram]に設定する値。
     */
    set telegram(argTelegram: ApiTelegram | undefined) {
        this.fTelegram = argTelegram;
    }

    /**
     * フィールド [telegram] の値を取得します。
     *
     * フィールドの説明: [API毎の応答電文, ApiTelegramを継承してAPI毎に独自の型を指定]。
     * デフォルト: [new ApiTelegram()]。
     *
     * @return フィールド[telegram]から取得した値。
     */
    get telegram(): ApiTelegram | undefined {
        return this.fTelegram;
    }

    /**
     * フィールド [errors] の値を設定します。
     *
     * フィールドの説明: [エラー情報]。
     *
     * @param argErrors フィールド[errors]に設定する値。
     */
    set errors(argErrors: Array<ErrorItem> | undefined) {
        this.fErrors = argErrors;
    }

    /**
     * フィールド [errors] の値を取得します。
     *
     * フィールドの説明: [エラー情報]。
     * デフォルト: [new Array&lt;ErrorItem&gt;()]。
     *
     * @return フィールド[errors]から取得した値。
     */
    get errors(): Array<ErrorItem> | undefined {
        return this.fErrors;
    }

    /**
     * Gets the properties to be written to JSON from this value object.
     *
     * @return An object returned by toJSON
     */
    toJSON(): any {
        return {
            info: this.info,
            telegram: this.telegram,
            errors: this.errors
        };
    }
}
