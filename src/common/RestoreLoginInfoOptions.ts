import {LoginInfo} from "%/common/LoginInfo";

export interface RestoreLoginDataCallbackType {
    (loginInfo: LoginInfo | undefined): void;
}

/**
 * EVENT_RESTORE_LOGIN_DATA で呼び出す処理のオプション定義
 * @param callback データが準備出来た際のコールバック
 */
export interface RestoreLoginDataOptions {
    callback: RestoreLoginDataCallbackType;
}
