import {LoginInfo} from "%/common/LoginInfo";

/**
 * LoginInfo を restore した後に呼ばれる callback の型定義
 */
export interface RestoreLoginDataCallbackType {
    (loginInfo: LoginInfo | undefined, authRequired: boolean, restoreTransitData: boolean, transitTo: string): void;
}

/**
 * EVENT_RESTORE_LOGIN_DATA で呼び出す処理のオプション定義
 * @param callback データが準備出来た際のコールバック
 */
export interface RestoreLoginDataOptions {
    callback: RestoreLoginDataCallbackType,
    authRequired: boolean,
    restoreTransitData: boolean,
    transitTo: string
}
