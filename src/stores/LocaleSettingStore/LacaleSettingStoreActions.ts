import {defineLocalSettingStoreActions} from "%/stores/LocalSettingStore/DefineLocalSettingStoreActions";

export const lacaleSettingStoreActions = defineLocalSettingStoreActions(
    {
        changeLang(lang: string) {
            this.lang = lang;
        }
    }
);