import {
    defineSampleMethodTestPostResponseStoreActions
} from "%/stores/SampleMethodTestPostResponseStore/DefineSampleMethodTestPostResponseStoreActions";
import {CommonResponse} from "%/blanco/restgenerator/valueobject/CommonResponse";

export const sampleMethodTestPostResponseStoreActions = defineSampleMethodTestPostResponseStoreActions({
    setResponse(respnse: CommonResponse) {
        this.response = respnse;
    }
});
