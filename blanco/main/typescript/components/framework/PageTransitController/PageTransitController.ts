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
        const myProps = props as PageTransitControllerProps;
        return pageTransitControllerSetup(myProps, context);
    },
    render: () => {
        return pageTransitControllerRender();
    }
});
