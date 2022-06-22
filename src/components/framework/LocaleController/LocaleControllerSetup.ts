import {LocaleControllerProps} from "%/components/framework/LocaleController/LocaleControllerProps";
import {SetupContext, watch} from "vue";
import {useLocaleSettingStore} from "%/stores/LocaleSettingStore/LocaleSettingStore";
import {storeToRefs} from "pinia";
import {useI18n} from "vue-i18n";

export const localeControllerSetup = (props: LocaleControllerProps, context: SetupContext) => {
    const i18n = useI18n();
    const localeSetting = useLocaleSettingStore();
    const { lang } = storeToRefs(localeSetting);
    console.log("localeControllerSetup = " + lang.value);
    watch(lang, () => {
        console.log("new lang = " + lang.value);
        i18n.locale.value = lang.value;
    });
}
