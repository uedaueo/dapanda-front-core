import { communicationControllerSetup } from "@/components/framework/CommunicationController/CommunicationControllerSetup";
import { communicationControllerRender } from "@/components/framework/CommunicationController/CommunicationControllerRender";
import { defineComponent } from "vue";
import { CommunicationControllerProps, communicationControllerProps } from "./CommunicationControllerProps";

/**
 * 通信を制御するためのコンポーネントです。
 */
export default defineComponent({
    name: "CommunicationController",
    props: communicationControllerProps,
    setup: (props, context) => {
        const myProps = props as CommunicationControllerProps;
        return communicationControllerSetup(myProps, context);
    },
    render: () => {
        return communicationControllerRender();
    }
});
