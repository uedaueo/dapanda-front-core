import {_ActionsTree, _GettersTree, defineStore, DefineStoreOptions} from "pinia";
import localeSettingStoreOptions from "@/stores/LocaleSettingStore/LocaleSettingStoreOptions";

export interface LocaleSettingState {
    lang: string,
    tz: string,
    country: string
}

export type LocalSettingStoreOptions = Omit<DefineStoreOptions<string, LocaleSettingState, _GettersTree<LocaleSettingState>, _ActionsTree>, 'id'>;

export const localeSettingState: LocaleSettingState = {
    lang: 'ja',
    tz: 'Asia/Tokyo',
    country: 'jp'
}

export const useLocaleSettingStore = defineStore("localeSetting",
    localeSettingStoreOptions
);
