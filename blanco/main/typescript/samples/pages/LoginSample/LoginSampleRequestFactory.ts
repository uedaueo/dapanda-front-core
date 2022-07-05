import { LoginSamplePostRequest } from "%/samples/api/LoginSamplePostRequest";

/**
 * LoginSampleRequestFactoryRequestFactoryを生成します。
 */
export interface LoginSampleRequestFactory {
    /**
     * LoginSamplePostRequest クラスを生成します。
     *
     * @return LoginSamplePostRequest クラスを返却します。
     */
    createLoginSamplePostRequest(): LoginSamplePostRequest;
}
