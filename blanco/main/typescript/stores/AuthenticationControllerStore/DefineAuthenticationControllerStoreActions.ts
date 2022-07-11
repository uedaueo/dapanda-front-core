import {RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";
import { AuthenticationControllerStoreState } from "./AuthenticationControllerStoreState";
import { UnwrapRef } from "vue";
import { LoginInfo } from "%/common/LoginInfo";

/** actionsを定義します */
export declare type AuthenticationControllerStoreActionsTree = {
    /**
     * LoginInfoをLocalStorageに保存します。
     *
     * @param loginInfo 認証情報です。
     * @return void
     */
    update(
            loginInfo: LoginInfo
    ): void;
    /**
     * 認証情報を LocalStorage に保存します。
     *
     * @return void
     */
    persist(
    ): Promise<void>;
    /**
     * 認証情報を LocalStorage からロードします。
     *
     * @param options ログインデータをリストアする際のオプションです。
     * @return void
     */
    restore(
            options: RestoreLoginDataOptions | undefined
    ): Promise<void>;
    /**
     * 認証情報を LocalStorage から削除します。
     *
     * @return void
     */
    remove(
    ): Promise<void>;
    /**
     * preparedFlg を true にします。
     *
     * @return void
     */
    prepared(
    ): void;
}

/**
 * 認証情報を制御するためのフラグ類を集めたストアです。
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function defineAuthenticationControllerStoreActions(actions: AuthenticationControllerStoreActionsTree & ThisType<AuthenticationControllerStoreActionsTree & UnwrapRef<AuthenticationControllerStoreState>>): AuthenticationControllerStoreActionsTree & ThisType<AuthenticationControllerStoreActionsTree & UnwrapRef<AuthenticationControllerStoreState>> {
    return actions;
}
