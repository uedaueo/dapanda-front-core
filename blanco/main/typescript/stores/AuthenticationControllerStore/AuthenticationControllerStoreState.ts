import { LoginInfo } from "%/common/LoginInfo";

/**
 * stateを定義します
 */
export interface AuthenticationControllerStoreState {
    /**
     * ログイン情報です。
     */
    loginInfo: LoginInfo;

    /**
     * toggleすることでtore 上の loginInfo を LocalStorage に保管します。
     */
    saveFlg: boolean;

    /**
     * toggleすることで loginInfo を LocalStorage から store にロードします。
     */
    restoreFlg: boolean;

    /**
     * loginInfo が有効である事を示します。
     */
    preparedFlg: boolean;

    /**
     * loginInfor LocalStorage から削除し、store には空の LoginInfo をセットします。
     */
    removeFlg: boolean;
}

/**
 * stateを定義します
 */
export const authenticationControllerStoreState: AuthenticationControllerStoreState = {
    loginInfo: new LoginInfo(),
    saveFlg: false,
    restoreFlg: false,
    preparedFlg: false,
    removeFlg: false
};
