import { defineComponent } from "vue";
import { helloVuetifyData } from "@/samples/pages/HelloVuetify/HelloVuetifyData";
import { HelloVuetifyProps, helloVuetifyProps } from "./HelloVuetifyProps";
import { helloVuetifySetup } from "@/samples/pages/HelloVuetify/HelloVuetifySetup";

/**
 * Vuetify画面のサンプルです。<br>
 * 改行も入れておく<br>
 * いかが？
 */
export default defineComponent({
    name: "HelloVuetify",
    props: helloVuetifyProps,
    setup: (props, context) => {
        return helloVuetifySetup(props as HelloVuetifyProps, context);
    },
    data: () => {
        return helloVuetifyData();
    }
});
