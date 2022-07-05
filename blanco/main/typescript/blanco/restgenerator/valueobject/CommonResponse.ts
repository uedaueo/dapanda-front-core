import { ResponseHeader } from "%/blanco/restgenerator/valueobject/ResponseHeader";
import { ApiTelegram } from "%/blanco/restgenerator/valueobject/ApiTelegram";
import { MessageItem } from "%/blanco/restgenerator/valueobject/MessageItem";

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
     * メッセージ・エラー情報
     *
     * フィールド: [messages]。
     * デフォルト: [new Array&lt;MessageItem&gt;()]。
     */
    private fMessages?: Array<MessageItem> = new Array<MessageItem>();

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
     * フィールド [messages] の値を設定します。
     *
     * フィールドの説明: [メッセージ・エラー情報]。
     *
     * @param argMessages フィールド[messages]に設定する値。
     */
    set messages(argMessages: Array<MessageItem> | undefined) {
        this.fMessages = argMessages;
    }

    /**
     * フィールド [messages] の値を取得します。
     *
     * フィールドの説明: [メッセージ・エラー情報]。
     * デフォルト: [new Array&lt;MessageItem&gt;()]。
     *
     * @return フィールド[messages]から取得した値。
     */
    get messages(): Array<MessageItem> | undefined {
        return this.fMessages;
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
            messages: this.messages
        };
    }
}
