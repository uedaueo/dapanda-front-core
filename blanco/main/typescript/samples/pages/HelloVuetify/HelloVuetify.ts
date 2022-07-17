import { RouterHooks } from "@/utils/RouterHooks";
import { defineComponent, inject } from "vue";
import { helloVuetifyData } from "@/samples/pages/HelloVuetify/HelloVuetifyData";
import { HelloVuetifyProps, helloVuetifyProps } from "./HelloVuetifyProps";
import { helloVuetifySetup } from "@/samples/pages/HelloVuetify/HelloVuetifySetup";
import { onBeforeRouteLeave, useRouter } from "vue-router";

/**
 * Vuetify画面のサンプルです。<br>
 * 改行も入れておく<br>
 * いかが？
 */
export default defineComponent({
    name: "HelloVuetify",
    props: helloVuetifyProps,
    setup: (props, context) => {
        const myProps = props as HelloVuetifyProps;
        const noAuthPath = inject<string>('noAuthPath');
        onBeforeRouteLeave((to, from, next) => {
            RouterHooks.beforeRouteLeave(useRouter(), to, from, next, myProps.componentId, noAuthPath!);
        });
        return helloVuetifySetup(myProps, context);
    },
    data: () => {
        return helloVuetifyData();
    }
});
