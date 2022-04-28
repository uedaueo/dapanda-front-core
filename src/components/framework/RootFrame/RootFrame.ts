import {defineComponent, h, onMounted} from "vue";
import App from "@/App.vue";

/**
 * 最上位コンポーネント。Eventを受け取る事を目的とするので、画面は存在しない。
 */
export default defineComponent({
    name: 'RootFrame',
    setup: (props, context) => {
        onMounted(() => {
            /*
             * システム共通の store module はここでロードする。
             * 各画面用のストアは各画面の onMounted でロードすること。
             */
        });
    },
    render: () => {
        return h("div", { class: "root-frame-component" },
            [
                /*
                 * 画面を持たないUtilityコンポーネントはここに追加していく。
                 * App は一番最後がよい。
                 */
                h(App)
            ]);
    }
});
