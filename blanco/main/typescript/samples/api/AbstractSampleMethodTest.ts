/*
 * This source code has been generated by blanco Framework.
 */
import { ApiBase } from "@/common/ApiBase";

/**
 * Methodテスト用API&lt;br&gt;
 */
export abstract class AbstractSampleMethodTest extends ApiBase {
    /**
     * 規定値   [/sample_methods]
     */
    private _locationURL: string = "/sample_methods";

    /**
     * APIが認証を必要とするかどうかのフラグです．必要な場合はtrueです．
     *
     * @return APIが認証を必要とするかどうかのフラグです．必要な場合はtrueです．
     */
    isAuthenticationRequired(): boolean | undefined {
        return false;
    }

    /**
     * フィールド [_locationURL]のセッターメソッド
     *
     * 項目の型 [string]
     *
     * @param argLocationURL フィールド[_locationURL]に格納したい値
     */
    set locationURL(argLocationURL: string) {
        this._locationURL = argLocationURL;
    }

    /**
     * フィールド[_locationURL]のゲッターメソッド
     *
     * 項目の型 [string]
     *
     * @return フィールド[_locationURL]に格納されている値
     */
    get locationURL(): string {
        return this._locationURL;
    }
}