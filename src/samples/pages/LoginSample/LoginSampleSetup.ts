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
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {storeToRefs} from "pinia";

export const loginSampleSetup = (props: LoginSampleProps, context: SetupContext, factory: LoginSampleRequestFactory) => {
    const { t } = useI18n();
    const title = ref(props.subject);

    const send = inject<SendFunction>('send')!;

    const responseStore = useLoginSampleResponseStore();
    const { response } = storeToRefs(responseStore);
    const authStore = useAuthenticationControllerStore();
    const { preparedFlg } = storeToRefs(authStore);
    const onSubmit = (values: any) => {
        console.log("Submitted : " + values.id + ", " + values.password);
        const postRequest = factory.createLoginSamplePostRequest();
        postRequest.id = values.id;
        postRequest.password = values.password;
        send(postRequest, responseStore)
    }
    watch(response, () => {
        console.log("LoginSample#watch(responseStore : " + JSON.stringify(response));
        const header = response.value.info;
        if (header) {
            if (header.result === DapandaConst.ResultSuccess) {
                const telegram = response.value.telegram as LoginSamplePostResponse;
                const loginInfo = new LoginInfo();
                loginInfo.loginToken = telegram.token;
                loginInfo.environment = "development";
                authStore.update(loginInfo);
                // save loginInfo into LocalStorage
                authStore.persist(); // preparedFlg will be down.
            } else {
                // remove loginInfo
                authStore.remove();
            }
        }
        /* Errors are processed in CommunicationController#send */
    });
    /* watch preparedFlg and goto next page, BE CARE THREAD CONFLICT. */
    watch(preparedFlg, () => {
        console.log("login watch(preparedFlg): preparedFlg = " + preparedFlg.value);
        if (preparedFlg.value === true) {
            // Go to toppage
            const pageStore = usePageTransitDataStore();
            // TODO it may be better to transit to next page.
            pageStore.updateLocation("/");
        }
    });
    return {
        t,
        title,
        onSubmit
    }
}
