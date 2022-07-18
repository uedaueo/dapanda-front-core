import {inject, ref, SetupContext, watch} from "vue";
import {useI18n} from "vue-i18n";
import {LoginSampleProps} from "%/samples/pages/LoginSample/LoginSampleProps";
import {useLoginSampleResponseStore} from "%/stores/LoginSampleResponseStore/LoginSampleResponseStore";
import {SendFunction} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import {LoginSampleRequestFactory} from "%/samples/pages/LoginSample/LoginSampleRequestFactory";
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
    const postRequest = factory.createLoginSamplePostRequest();

    const responseStore = useLoginSampleResponseStore();
    const { response } = storeToRefs(responseStore);
    const authStore = useAuthenticationControllerStore();
    const { status } = storeToRefs(authStore);
    const onSubmit = (values: any) => {
        console.log("Submitted : " + values.id + ", " + values.password);
        postRequest.id = values.id;
        postRequest.password = values.password;
        /* remove loginInfo from store and localStorage */
        authStore.remove(props.componentId); // wait removed
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
                authStore.update(loginInfo, props.componentId);
                // save loginInfo into LocalStorage
                authStore.persist(props.componentId); // preparedFlg will be down.
            } else {
                // remove loginInfo
                authStore.remove(props.componentId);
            }
        }
        /* Errors are processed in CommunicationController#send */
    });
    /* watch preparedFlg and goto next page, BE CARE THREAD CONFLICT. */
    watch(status, () => {
        console.log("login watch status = " + status.value);
        if (status.value === DapandaConst.AuthenticationStatusSaved) {
            authStore.setStatus(DapandaConst.AuthenticationStatusValid, props.componentId);
            // Go to toppage
            const pageStore = usePageTransitDataStore();
            // TODO it may be better to transit to next page.
            pageStore.updateLocation("/");
        } else if (status.value === DapandaConst.AuthenticationStatusRemoved) {
            authStore.setStatus(DapandaConst.AuthenticationStatusValid, props.componentId);
            send(postRequest, responseStore, props.componentId);
        }
    });
    return {
        t,
        title,
        onSubmit
    }
}
