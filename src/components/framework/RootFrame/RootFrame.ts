import {defineComponent, h, onMounted} from "vue";
import {rootFrameRender} from "@/components/framework/RootFrame/RootFrameRender";

/**
 * 最上位コンポーネント。Eventを受け取る事を目的とするので、画面は存在しない。
 */
export default defineComponent({
    name: 'RootFrame',
    render: () => {
        return rootFrameRender();
    }
});
