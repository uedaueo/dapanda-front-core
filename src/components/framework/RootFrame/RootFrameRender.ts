import {h} from "vue";
import App from "@/App.vue";
import PageTransitController from "%/components/framework/PageTransitController/PageTransitController";

export const rootFrameRender = () => {
    return h("div", { class: "root-frame-component" },
        [
            /*
             * 画面を持たないUtilityコンポーネントはここに追加していく。
             * App は一番最後がよい。
             */
            h(PageTransitController),
            h(App)
        ]);
}
