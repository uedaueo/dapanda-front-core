import {CommonResponse} from "%/blanco/restgenerator/valueobject/CommonResponse";

/**
 * stateを定義します
 */
export interface LoginSampleResponseStoreState {
    /**
     * API の戻り値です
     */
    response: CommonResponse;
}

/**
 * stateを定義します
 */
export const loginSampleResponseStoreState: LoginSampleResponseStoreState = {
    response: new CommonResponse()
};
