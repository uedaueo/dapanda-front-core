import { pageTransitControllerSetup } from "@/components/framework/PageTransitController/PageTransitControllerSetup";
import { pageTransitControllerRender } from "@/components/framework/PageTransitController/PageTransitControllerRender";
import { defineComponent } from "vue";
import { PageTransitControllerProps, pageTransitControllerProps } from "./PageTransitControllerProps";

/**
 * ページ遷移を制御するためのコンポーネントです。
 */
export default defineComponent({
    name: "PageTransitController",
    props: pageTransitControllerProps,
    setup: (props, context) => {
        return pageTransitControllerSetup(props as PageTransitControllerProps, context);
    },
    render: () => {
        return pageTransitControllerRender();
    }
});
