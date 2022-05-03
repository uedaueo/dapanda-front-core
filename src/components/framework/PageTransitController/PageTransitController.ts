import {defineComponent} from "vue";
import {pageTransitControllerRender} from "@/components/framework/PageTransitController/PageTransitControllerRender";
import {pageTransitControllerSetup} from "@/components/framework/PageTransitController/PageTransitControllerSetup";

export default defineComponent({
    name: 'PageTransitController',
    setup: (props, context) => {
        return pageTransitControllerSetup(props, context);
    },
    render: () => {
        return pageTransitControllerRender();
    }
})
