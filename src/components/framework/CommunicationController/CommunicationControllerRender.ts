import {getCurrentInstance, h} from "vue";
import App from "@/App.vue";
import {
    CommunicationControllerProps
} from "%/components/framework/CommunicationController/CommunicationControllerProps";

export const communicationControllerRender = () => {
    // console.log("CommunicationController is loaded.");
    const instance = getCurrentInstance();
    let myApp = App;
    let myNopagePath = "/nopageSample";
    let myNoAuthPath = "/login";
    if (instance) {
        console.log("CommunicationControllerRender: GOT instance!");
        const myProps = instance.props as CommunicationControllerProps;
        myApp = myProps.appComponent;
        myNopagePath = myProps.nopagePath;
        myNoAuthPath = myProps.noAuthPath;
    }
    return h("div", { class: "communication-frame-component" },
        [
            /*
             * Because $on function is obsolete on composition API,
             * we provides communication function to application with provide/inject.
             */
            h(myApp, {nopagePath: myNopagePath, noAuthPath: myNoAuthPath})
        ]);
};
