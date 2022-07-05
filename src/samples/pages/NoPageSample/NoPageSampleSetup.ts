import {ref, SetupContext} from "vue";
import {useI18n} from "vue-i18n";
import {NoPageSampleProps} from "%/samples/pages/NoPageSample/NoPageSampleProps";

export const noPageSampleSetup = (props: NoPageSampleProps, context: SetupContext) => {
    const { t } = useI18n();
    const title = ref(props.subject);

    return {
        t,
        title
    }
}
