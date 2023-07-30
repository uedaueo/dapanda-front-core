import { LoginSamplePostRequest } from "%/samples/api/LoginSamplePostRequest";
import { SampleMethodTestPostRequest } from "%/samples/api/SampleMethodTestPostRequest";
import { SampleMethodTestPutRequest } from "%/samples/api/SampleMethodTestPutRequest";
import { SampleMethodTestGetRequest } from "%/samples/api/SampleMethodTestGetRequest";

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

    /**
     * SampleMethodTestPutRequest クラスを生成します。
     *
     * @return SampleMethodTestPutRequest クラスを返却します。
     */
    createSampleMethodTestPutRequest(): SampleMethodTestPutRequest;

    /**
     * SampleMethodTestGetRequest クラスを生成します。
     *
     * @return SampleMethodTestGetRequest クラスを返却します。
     */
    createSampleMethodTestGetRequest(): SampleMethodTestGetRequest;
}
