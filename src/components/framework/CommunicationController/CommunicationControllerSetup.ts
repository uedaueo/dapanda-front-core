import {
    CommunicationControllerProps
} from "%/components/framework/CommunicationController/CommunicationControllerProps";
import {provide, SetupContext} from "vue";
import {SendFunction} from "@/components/framework/CommunicationController/CommunicatoinTypes";

export const communicationControllerSetup = (props: CommunicationControllerProps, context: SetupContext) => {
    const send: SendFunction = async (request, options?) => {
        console.log('send called: ' + request.telegramId);
    }
    provide<SendFunction>('send', send);
}
