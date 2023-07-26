import {CommonResponse} from "%/blanco/restgenerator/valueobject/CommonResponse";

/**
 * stateを定義します
 */
export interface SampleMethodTestPostResponseStoreState {
    /**
     * API の戻り値です
     */
    response: CommonResponse;
}

/**
 * stateを定義します
 */
export const sampleMethodTestPostResponseStoreState: SampleMethodTestPostResponseStoreState = {
    response: new CommonResponse()
};
