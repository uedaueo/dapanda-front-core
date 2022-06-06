import {defineLocaleSettingStoreActions} from "%/stores/LocaleSettingStore/DefineLocaleSettingStoreActions";

export const localeSettingStoreActions = defineLocaleSettingStoreActions(
    {
        changeLang(lang: string) {
            this.lang = lang;
        }
    }
);