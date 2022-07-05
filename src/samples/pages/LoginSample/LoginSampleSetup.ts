import {inject, ref, SetupContext, watch} from "vue";
import {useI18n} from "vue-i18n";
import {LoginSampleProps} from "%/samples/pages/LoginSample/LoginSampleProps";
import {useLoginSampleResponseStore} from "%/stores/LoginSampleResponseStore/LoginSampleResponseStore";
import {SendFunction} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import {LoginSampleRequestFactory} from "%/samples/pages/LoginSample/LoginSampleRequestFactory";
import {RequestHeader} from "%/blanco/restgenerator/valueobject/RequestHeader";
import {LoginSamplePostResponse} from "%/samples/api/LoginSamplePostResponse";
import {DapandaConst} from "@/common/DapandaGlobals";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

export const loginSampleSetup = (props: LoginSampleProps, context: SetupContext, factory: LoginSampleRequestFactory) => {
    const { t } = useI18n();
    const title = ref(props.subject);

    const send = inject<SendFunction>('send')!;

    const responseStore = useLoginSampleResponseStore();
    const authStore = useAuthenticationControllerStore();
    const onSubmit = (values: any) => {
        console.log("Submitted : " + values.id + ", " + values.password);
        const postRequest = factory.createLoginSamplePostRequest();
        postRequest.id = values.id;
        postRequest.password = values.password;
        send(postRequest, responseStore)
    }
    watch(responseStore.response, () => {
        const header = responseStore.response.info;
        if (header) {
            if (header.result === DapandaConst.ResultSuccess) {
                const telegram = responseStore.response.telegram as LoginSamplePostResponse;
                const loginInfo = new LoginInfo();
                loginInfo.loginToken = telegram.token;
                loginInfo.environment = "development";
                authStore.update(loginInfo);
                // save loginInfo into LocalStorage
                authStore.persist();
            }
        }
        /* Errors are processed in CommunicationController#send */
    })
    return {
        t,
        title,
        onSubmit
    }
}
