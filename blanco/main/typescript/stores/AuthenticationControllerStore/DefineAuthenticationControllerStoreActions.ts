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
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    update(
            loginInfo: LoginInfo,
            issuer: string
    ): void;
    /**
     * 認証情報を LocalStorage に保存します。
     *
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    persist(
            issuer: string
    ): Promise<void>;
    /**
     * 認証情報を LocalStorage からロードします。
     *
     * @param options ログインデータをリストアする際のオプションです。
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    restore(
            options: RestoreLoginDataOptions | undefined,
            issuer: string
    ): Promise<void>;
    /**
     * 認証情報を LocalStorage から削除します。
     *
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    remove(
            issuer: string
    ): Promise<void>;
    /**
     * statusの値を変更します。
     *
     * @param status ログイン状態
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    setStatus(
            status: string,
            issuer: string
    ): void;
    /**
     * issuerの値を変更します。
     *
     * @param issuer 更新を発行したコンポーネントです
     * @return void
     */
    setIssuer(
            issuer: string
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
