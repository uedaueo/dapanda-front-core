import {
    CommunicationControllerProps
} from "%/components/framework/CommunicationController/CommunicationControllerProps";
import {provide, SetupContext} from "vue";
import {SendFunction, SetApiEndpoint} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import {DapandaConst} from "@/common/DapandaGlobals";
import {ApiConstructors} from "@/common/ApiConstructors";
import {ApiBase} from "@/common/ApiBase";
import {useCommonStatusStore} from "%/stores/CommonStatusStore/CommonStatusStore";
import {useSnackbarStore} from "%/stores/SnackbarStore/SnackbarStore";
import {SnackbarAttribute} from "%/components/snackbar/SnackbarAttribute";
import {SnackbarUtils} from "@/utils/SnackbarUtils";

export const communicationControllerSetup = (props: CommunicationControllerProps, context: SetupContext) => {
    /** API Endpoint */
    let apiEndpoint: string | undefined = undefined;
    const setApiEndpoint = (endpoint: string | undefined) => {
        apiEndpoint = endpoint;
    }

    /**
     * default send function
     * @param request
     * @param store
     * @param options
     */
    const send: SendFunction = async (request, store, issuer, options?) => {
        console.log('send called: ' + request);

        const commonStatusStore = useCommonStatusStore();
        const snackbarStore = useSnackbarStore();
        try {
            if (request === null || request === undefined) {
                throw new Error("communicationControllerSetup#send: ApiTelegram is not specified.");
            }

            trimStringRecursive(request);

            const requestObjClassName: string = request.telegramId;
            console.log(`requestObjClassName is ${requestObjClassName}`);
            // Make ProccessId (class name) from telegramId
            let processName, responseObjClassName, httpMethod;
            const length = requestObjClassName.length;
            if (requestObjClassName.endsWith(DapandaConst.PostRequestSuffix)) {
                processName = requestObjClassName.substring(
                    0,
                    length - DapandaConst.PostRequestSuffix.length
                );
                httpMethod = DapandaConst.HttpMethodPost;
            } else if (requestObjClassName.endsWith(DapandaConst.PutRequestSuffix)) {
                processName = requestObjClassName.substring(
                    0,
                    length - DapandaConst.PutRequestSuffix.length
                );
                httpMethod = DapandaConst.HttpMethodPut;
            } else if (requestObjClassName.endsWith(DapandaConst.GetRequestSuffix)) {
                processName = requestObjClassName.substring(
                    0,
                    length - DapandaConst.GetRequestSuffix.length
                );
                httpMethod = DapandaConst.HttpMethodGet;
            } else if (requestObjClassName.endsWith(DapandaConst.DeleteRequestSuffix)) {
                processName = requestObjClassName.substring(
                    0,
                    length - DapandaConst.DeleteRequestSuffix.length
                );
                httpMethod = DapandaConst.HttpMethodDelete;
            } else {
                throw new Error("Unexpected value. " + requestObjClassName);
            }
            const myConstructor = ApiConstructors.apiConstructors[processName];
            if (!myConstructor) {
                throw new Error("No such API [" + processName + "]");
            }
            const process: ApiBase = new ApiConstructors.apiConstructors[processName]();
            process.apiEndpoint = apiEndpoint;

            if (options) {
                if (options.showOverlay === true) {
                    commonStatusStore.changeProcessing(true);
                }
                if (typeof options.alterApiEndpoint !== 'undefined') {
                    process.apiEndpoint = options.alterApiEndpoint;
                }
            }
            const commonResponse = await process.send(request, processName, httpMethod, issuer, props.authHeader, props.useBearer, options);

            console.log("CommunicationController : return response = " + JSON.stringify(commonResponse));

            /*
             * Show error on snackbar
             */
            if ((!options || (options && !options.manualHandling)) && commonResponse && commonResponse.info) {
                const info = commonResponse.info;
                if (info.result !== DapandaConst.ResultSuccess) {
                    const messages = commonResponse.messages;
                    if (messages) {
                        SnackbarUtils.showErrors(snackbarStore, messages);
                    }
                }
            }
            store.setResponse(commonResponse);
        } catch (exception) {
            /* TODO handle exception */
            console.log("CommunicationController#Exception = " + JSON.stringify(exception));
        } finally {
            if (options) {
                if (options.showOverlay === true) {
                    commonStatusStore.changeProcessing(false);
                }
            }
        }
    }

    /**
     * Trim strings in object recursively
     * @param target
     */
    const trimStringRecursive = (target: any): void => {
        if (typeof target !== "object") {
            return;
        }
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
            if (typeof target[keys[i]] === "object") {
                trimStringRecursive(target[keys[i]]);
            } else if (typeof target[keys[i]] === "string") {
                target[keys[i]] = target[keys[i]].trim();
            }
        }
    }

    /* provide send function to application components. */
    provide<SendFunction>('send', send);
    provide<SetApiEndpoint>('setApiEndpoint', setApiEndpoint);
}
