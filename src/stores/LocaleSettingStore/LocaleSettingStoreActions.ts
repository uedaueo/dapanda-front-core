import {defineLocaleSettingStoreActions} from "%/stores/LocaleSettingStore/DefineLocaleSettingStoreActions";

export const localeSettingStoreActions = defineLocaleSettingStoreActions(
    {
        changeLang(lang: string) {
            this.lang = lang;
            console.log("localeSettingStoreActions: lang = " + this.lang);
        }
    }
);