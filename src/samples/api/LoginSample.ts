import {AbstractLoginSample} from "%/samples/api/AbstractLoginSample";
import {ApiTelegram} from "%/blanco/restgenerator/valueobject/ApiTelegram";
import {CommunicationOptions} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import {LoginSamplePostRequest} from "%/samples/api/LoginSamplePostRequest";

export class LoginSample extends AbstractLoginSample {
    protected getJsonFileName(
        request: ApiTelegram,
        processName: string,
        method: string,
        options: CommunicationOptions | undefined = undefined
    ): string {
        const loginSampleRequest = request as LoginSamplePostRequest;
        let suffix = "OK";
        if (loginSampleRequest.id !== "hoge") {
            suffix = "NG";
        }
        return "/jsons/api/" + processName + "/" + method + "CommonResponse" + suffix + ".json";
    }
}
