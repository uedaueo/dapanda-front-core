import {SetupContext} from "vue";
import {storeToRefs} from "pinia";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";

export const helloVuetifySetup = (props: any, context: SetupContext) => {
    const transitPageData = usePageTransitDataStore();
    const { location } = storeToRefs(transitPageData);
    return {
        location
    };
}
