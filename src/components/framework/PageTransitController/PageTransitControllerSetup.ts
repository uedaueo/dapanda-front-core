import {SetupContext, watch} from "vue";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
import {PageTransitControllerProps} from "%/components/framework/PageTransitController/PageTransitControllerProps";

export const pageTransitControllerSetup = (props: PageTransitControllerProps, context: SetupContext) => {
    const pageTransitData = usePageTransitDataStore();
    const { location } = storeToRefs(pageTransitData);
    console.log("pageTransitControllerSetup: location = " + location.value);
    const router = useRouter();
    watch(location, () => {
        console.log("toLocation " + location.value);
        router.push(location.value);
    });
};
