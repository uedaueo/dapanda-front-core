import {computed, onMounted, SetupContext, watch} from "vue";
import {usePageTransitDataStore} from "@/stores/PageTransitDataStore/PageTransitDataStore";
import {storeToRefs} from "pinia";
import {RouteLocationRaw, useRouter} from "vue-router";

export const pageTransitControllerSetup = (props: any, context: SetupContext) => {
    const pageTransitData = usePageTransitDataStore();
    const { location } = storeToRefs(pageTransitData);
    console.log("pageTransitControllerSetup: location = " + location.value);
    const router = useRouter();
    watch(location, () => {
        console.log("toLocation" + location.value);
        router.push(location.value);
    });
};
