import {h} from "vue";
import App from "@/App.vue";
import PageTransitController from "%/components/framework/PageTransitController/PageTransitController";
import LocaleController from "%/components/framework/LocaleController/LocaleController";
import CommunicationController from "%/components/framework/CommunicationController/CommunicationController";

export const rootFrameRender = () => {
    return h("div", { class: "root-frame-component" },
        [
            /*
             * 画面を持たないUtilityコンポーネントはここに追加していく。
             * App は一番最後がよい。
             */
            h(PageTransitController),
            h(LocaleController),
            /* App は CommunicationController の子コンポーネントとする */
            h(CommunicationController)
        ]);
}
