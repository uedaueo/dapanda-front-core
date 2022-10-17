import {ApiTelegram} from "%/blanco/restgenerator/valueobject/ApiTelegram";
import {CommonResponse} from "%/blanco/restgenerator/valueobject/CommonResponse";
import {Store} from "pinia";

/**
 * Options for communication
 */
export interface CommunicationOptions {
    manualHandling?: boolean;
    showOverlay?: boolean;
    noSnackbarOnSuccess?: boolean;
    showInfoOnlyOnException?: boolean;
    additionalHeaders?: { [key: string]: string };
}

/**
 * CommonResponse を格納する ActionsTree が実装すべき型です。
 */
export declare type CommonResponseActionsTree = {
    /**
     * APIの戻り値をセットします
     *
     * @param respnse API の戻り値です
     * @return void
     */
    setResponse(
        respnse: CommonResponse
    ): void;
}

/**
 * send関数の型を設定します。
 */
export declare type SendFunction = (
    request: ApiTelegram,
    store: Store<string, any, any, CommonResponseActionsTree>,
    issuer: string,
    options?: CommunicationOptions
) => void;
