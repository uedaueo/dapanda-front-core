import {h} from "vue";
import App from "@/App.vue";

export const communicationControllerRender = () => {
    // console.log("CommunicationController is loaded.");
    return h("div", { class: "communication-frame-component" },
        [
            /*
             * Because $on function is obsolete on composition API,
             * we provides communication function to application with provide/inject.
             */
            h(App)
        ]);
};
