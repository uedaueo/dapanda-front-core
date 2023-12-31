import {h} from "vue";
import PageTransitController from "%/components/framework/PageTransitController/PageTransitController";
import LocaleController from "%/components/framework/LocaleController/LocaleController";
import CommunicationController from "%/components/framework/CommunicationController/CommunicationController";
import AuthenticationController from "%/components/framework/AuthenticationController/AuthenticationController";
import App from "@/App.vue";
import {DapandaConst} from "@/common/DapandaGlobals";

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
            h(CommunicationController, {appComponent: App, nopagePath: "/nopageSample", noAuthPath: "/loginSample", authHeader: DapandaConst.DapandaAccessTokenHeader, useBearer: false})
        ]);
}
