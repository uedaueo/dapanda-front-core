import {SetupContext, toRefs} from "vue";
import {storeToRefs} from "pinia";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import {HelloVuetifyProps} from "@/sample/pages/HelloVuetify/HelloVuetifyProps";

export const helloVuetifySetup = (props: HelloVuetifyProps, context: SetupContext) => {
    const transitPageData = usePageTransitDataStore();
    const { location } = storeToRefs(transitPageData);
    const {title, alias} = toRefs(props);
    console.log('title = ' + title);
    return {
        location,
        title,
        alias
    };
}
