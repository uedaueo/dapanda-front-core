import {createI18n, VueMessageType} from "vue-i18n";
import {LocaleMessages} from "@intlify/core-base";
import {resourceEn, resourceJa} from "@/i18n/DapandaMessages";

export const dapandaI18n = (argMessages?:LocaleMessages<VueMessageType>) => {
    const defaultMessages: LocaleMessages<VueMessageType> = {
        ja: resourceJa,
        en: resourceEn
    };

    let integratedMessages: LocaleMessages<VueMessageType> = defaultMessages;
    if (argMessages != undefined && Object.keys(argMessages).length != 0) {
        console.log("dapandaI18n: " + JSON.stringify(argMessages, null, 2))
        integratedMessages = argMessages;
    }
    return createI18n({
        legacy: false,
        locale: navigator.language,
        fallbackLocale: "en",
        messages: integratedMessages
    });
}
