import { LoginSamplePostRequest } from "%/samples/api/LoginSamplePostRequest";
import { SampleMethodTestPostRequest } from "%/samples/api/SampleMethodTestPostRequest";

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

    /**
     * SampleMethodTestPostRequest クラスを生成します。
     *
     * @return SampleMethodTestPostRequest クラスを返却します。
     */
    createSampleMethodTestPostRequest(): SampleMethodTestPostRequest;
}
