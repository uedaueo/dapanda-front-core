import { rootFrameRender } from "@/components/framework/RootFrame/RootFrameRender";
import { defineComponent } from "vue";
import { RootFrameProps, rootFrameProps } from "./RootFrameProps";

/**
 * フレームワークのルートコンポーネントです。
 */
export default defineComponent({
    name: "RootFrame",
    props: rootFrameProps,
    render: () => {
        return rootFrameRender();
    }
});
