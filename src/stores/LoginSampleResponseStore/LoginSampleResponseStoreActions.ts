import {
    defineLoginSampleResponseStoreActions
} from "%/stores/LoginSampleResponseStore/DefineLoginSampleResponseStoreActions";
import {CommonResponse} from "%/blanco/restgenerator/valueobject/CommonResponse";

export const loginSampleResponseStoreActions = defineLoginSampleResponseStoreActions({
    setResponse(respnse: CommonResponse): void {
        this.response = respnse;
    }
});
