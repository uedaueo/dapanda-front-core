import {SetupContext, toRefs} from "vue";
import {storeToRefs} from "pinia";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import {HelloVuetifyProps} from "%/samples/pages/HelloVuetify/HelloVuetifyProps";

export const helloVuetifySetup = (props: HelloVuetifyProps, context: SetupContext) => {
    const transitPageData = usePageTransitDataStore();
    const { location } = storeToRefs(transitPageData);
    const {subject, alias, dumm} = toRefs(props);
    var dummval = "NG!";
    if (!dumm) {
        dummval = "OK!";
    }
    console.log('subject = ' + subject);
    return {
        location,
        subject,
        alias,
        dummval
    };
}
