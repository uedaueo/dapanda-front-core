import { RouterHooks } from "@/utils/RouterHooks";
import {defineComponent, inject} from "vue";
import { helloVuetifyData } from "@/samples/pages/HelloVuetify/HelloVuetifyData";
import { HelloVuetifyProps, helloVuetifyProps } from "./HelloVuetifyProps";
import { helloVuetifySetup } from "@/samples/pages/HelloVuetify/HelloVuetifySetup";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import {useAuthenticationControllerStore} from "%/stores/AuthenticationControllerStore/AuthenticationControllerStore";
import {LoginInfo} from "%/common/LoginInfo";

/**
 * Vuetify画面のサンプルです。<br>
 * 改行も入れておく<br>
 * いかが？
 */
export default defineComponent({
    name: "HelloVuetify",
    props: helloVuetifyProps,
    setup: (props, context) => {

        const noAuthPath = inject<string>('noAuthPath');

        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, noAuthPath!);
        });
        return helloVuetifySetup(props as HelloVuetifyProps, context);
    },
    data: () => {
        return helloVuetifyData();
    }
});
