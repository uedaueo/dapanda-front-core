import HelloInput from "%/samples/components/HelloInput/HelloInput.vue";
import HelloMessage from "%/samples/components/HelloMessage/HelloMessage.vue";
import { RouterHooks } from "@/utils/RouterHooks";
import { helloCompositionSetup } from "@/samples/pages/HelloComposition/HelloCompositionSetup";
import {defineComponent, inject} from "vue";
import { HelloCompositionProps, helloCompositionProps } from "./HelloCompositionProps";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

/**
 * Composition APIを用いた画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "HelloComposition",
    props: helloCompositionProps,
    components: {
        HelloInput,
        HelloMessage
    },
    setup: (props, context) => {
        /* Check it only in first time. */
        const authStore = useAuthenticationControllerStore();
        const loginInfo = authStore.loginInfo as LoginInfo;
        const preparedFlg = authStore.preparedFlg;
        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, loginInfo, preparedFlg, noAuthPath);
        });
        return helloCompositionSetup(props as HelloCompositionProps, context);
    }
});
