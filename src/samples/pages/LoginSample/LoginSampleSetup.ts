import {inject, ref, SetupContext} from "vue";
import {useI18n} from "vue-i18n";
import {LoginSampleProps} from "%/samples/pages/LoginSample/LoginSampleProps";

export const loginSampleSetup = (props: LoginSampleProps, context: SetupContext) => {
    const { t } = useI18n();
    const title = ref(props.subject);

    const send = inject('send');

    const onSubmit = (values: any) => {
        console.log("Submitted : " + values);
    }
    return {
        t,
        title,
        onSubmit
    }
}
