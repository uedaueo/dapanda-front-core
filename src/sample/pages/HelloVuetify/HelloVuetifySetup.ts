import {computed, reactive, ref, SetupContext, toRefs} from "vue";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import {storeToRefs} from "pinia";

export const helloVuetifySetup = (props: any, context: SetupContext) => {
    const transitPageData = usePageTransitDataStore();
    const { location } = storeToRefs(transitPageData);
    return {
        location
        //
    };
}
