import {
    LocaleSettingState,
    localeSettingState,
    LocalSettingStoreOptions
} from "@/stores/LocaleSettingStore/LocaleSettingStore";

const localeSettingStoreOptions: LocalSettingStoreOptions = {
    state: () => localeSettingState,
    getters: {
        getLang: (state: LocaleSettingState) => {
            return (): string => {
                return state.lang;
            }
        }
    },
    actions: {
        changeLang(lang: string): void {
            this.lang = lang;
        }
    }
};

export default localeSettingStoreOptions;
