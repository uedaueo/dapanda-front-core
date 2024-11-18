import {Component, h, Prop} from "vue";
import PageTransitController from "%/components/framework/PageTransitController/PageTransitController";
import LocaleController from "%/components/framework/LocaleController/LocaleController";
import CommunicationController from "%/components/framework/CommunicationController/CommunicationController";
import AuthenticationController from "%/components/framework/AuthenticationController/AuthenticationController";
import App from "@/App.vue";
import {DapandaConst} from "@/common/DapandaGlobals";
import {
    CommunicationControllerInterface, CommunicationControllerProps
} from "%/components/framework/CommunicationController/CommunicationControllerProps";

export const rootFrameRender = () => {
    return h("div", { class: "root-frame-component" },
        [
            /*
             * 画面を持たないUtilityコンポーネントはここに追加していく。
             * App は一番最後がよい。
             */
            h(PageTransitController),
            h(LocaleController),
            h(AuthenticationController),
            /* App は CommunicationController の子コンポーネントとする */
            h(CommunicationController, {appComponent: App, nopagePath: "/nopageSample" as Prop<string, string>, noAuthPath: "/loginSample" as Prop<string, string>, authHeader: DapandaConst.DapandaAccessTokenHeader as Prop<string, string>, useBearer: false as unknown as Prop<boolean, boolean>})
        ]);
}
