import {LocaleControllerProps} from "%/components/framework/LocaleController/LocaleControllerProps";
import {SetupContext, watch} from "vue";
import {useLocaleSettingStore} from "%/stores/LocaleSettingStore/LocaleSettingStore";
import {storeToRefs} from "pinia";
import {i18n} from "@/i18n";

export const localeControllerSetup = (props: LocaleControllerProps, context: SetupContext) => {
    const localeSetting = useLocaleSettingStore();
    const { lang } = storeToRefs(localeSetting);
    console.log("localeControllerSetup = " + lang.value);
    watch(lang, () => {
        console.log("new lang = " + lang.value);
        i18n.global.locale.value = lang.value;
    });
}