import {RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";
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
     * ログイン状態です。&lt;br&gt;
     *
     * * valid : ログインが完了している状態です。<br>
     * * invlid : 未ログイン状態です。<br>
     * * restoring : localStorageに保管されたログイン情報をロード中です<br>
     * * updated : ログイン情報がが更新されました。restore が成功した場合もこの状態になります。<br>
     * * saving : ログイン情報をlocalStorageに保管中です<br>
     * * saved : ログイン情報の保管に成功しました。<br>
     * * removing : localStorage からログイン情報を削除します<br>
     * * removed : ログイン情報の削除に成功しました。<br>
     */
    status: string;

    /**
     * リストアの際に参照するオプション値
     */
    restoreOptions: RestoreLoginDataOptions | undefined;
}

/**
 * stateを定義します
 */
export const authenticationControllerStoreState: AuthenticationControllerStoreState = {
    loginInfo: new LoginInfo(),
    status: "invalid",
    restoreOptions: undefined
};
