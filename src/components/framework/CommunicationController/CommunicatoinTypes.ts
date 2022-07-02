import {ApiTelegram} from "%/blanco/restgenerator/valueobject/ApiTelegram";

/**
 * 通信のオプションを指定します。
 */
export interface CommunicationOptions {
    manualHandling?: boolean;
    showOverlay?: boolean;
    noSnackbarOnSuccess?: boolean;
    showInfoOnlyOnException?: boolean;
}

/**
 * send関数の型を設定します。
 */
export declare type SendFunction = (req: ApiTelegram, options?: CommunicationOptions) => void;
