import {LocaleSelectProps} from "%/components/LocaleSelect/LocaleSelectProps";
import {computed, ref, SetupContext, watch} from "vue";
import {useI18n} from "vue-i18n";
import {LocaleSelectConst} from "@/components/LocaleSelect/LocaleSelectConst";
import {useLocaleSettingStore} from "%/stores/LocaleSettingStore/LocaleSettingStore";

/**
 * Select locale component
 * @param prop
 * @param context
 */
export const localeSelectSetup = (prop: LocaleSelectProps, context: SetupContext) => {
    /*
     * i18n definition
     */
    const { t } = useI18n();
    const sLanguage = computed(() => t('labels.LocaleSelect.sLanguage'));
    const sItemLangJa = computed(() => t('labels.LocaleSelect.sItemLangJa'));
    const sItemLangEn = computed(() => t('labels.LocaleSelect.sItemLangEn'));

    /*
     * lang list
     */
    const languageItems = [
        {lLabel: sItemLangJa.value, lValue: LocaleSelectConst.languageJa},
        {lLabel: sItemLangEn.value, lValue: LocaleSelectConst.languageEn}
    ];

    const defaultLang: number = 1;

    /*
     * select lang
     * prefer: navigator.language
     * if the language does not exit in our list,
     * select English
     */
    const navigatorLang = navigator.language;
    let i: number = 0;
    for (; i < languageItems.length; i++) {
        if (navigatorLang === languageItems[i].lValue) {
            break;
        }
    }
    if (i >= languageItems.length) {
        i = defaultLang;
    }
    let language = ref<{lLabel: string, lValue: string}>(languageItems[i]);
    console.log("choose language = " + language.value.lLabel);

    /*
     * watch language and set it to store
     */
    watch(language, () => {
        const localeSetting = useLocaleSettingStore();
        if (language.value.lValue === LocaleSelectConst.languageJa) {
            localeSetting.changeLang(LocaleSelectConst.languageJa);
        } else if (language.value.lValue === LocaleSelectConst.languageEn) {
            localeSetting.changeLang(LocaleSelectConst.languageEn);
        }
    });

    return {
        t,
        sLanguage,
        sItemLangJa,
        sItemLangEn,
        languageItems,
        language
    }
};