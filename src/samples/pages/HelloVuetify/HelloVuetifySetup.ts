import {onMounted, SetupContext, toRefs} from "vue";
import {storeToRefs} from "pinia";
import {HelloVuetifyProps} from "%/samples/pages/HelloVuetify/HelloVuetifyProps";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";

export const helloVuetifySetup = (props: HelloVuetifyProps, context: SetupContext) => {
    const transitPageData = usePageTransitDataStore();
    const { location } = storeToRefs(transitPageData);
    const {subject, alias, dumm} = toRefs(props);
    var dummval = "NG!";
    if (!dumm) {
        dummval = "OK!";
    }
    console.log('subject = ' + subject.value);
    onMounted(() => {
        console.log("HelloVuetify is mounted!");
    });
    return {
        location,
        subject,
        alias,
        dummval
    };
}
