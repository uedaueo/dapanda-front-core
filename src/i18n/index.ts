import {createI18n, VueMessageType} from "vue-i18n";
import {LocaleMessages} from "@intlify/core-base";
import {resourceEn, resourceJa} from "@/i18n/DapandaMessages";

const defaultMessages: LocaleMessages<VueMessageType> = {
    ja: resourceJa,
    en: resourceEn
};

let integratedMessages: LocaleMessages<VueMessageType> = defaultMessages;

export function setMessages(messages: LocaleMessages<VueMessageType>) {
    if (messages != undefined && Object.keys(messages).length != 0) {
        integratedMessages = messages;
    }
}

export const dapandaI18n = () => {
    return createI18n({
        legacy: false,
        locale: navigator.language,
        fallbackLocale: "en",
        messages: integratedMessages
    });
}
//
// export const i18n = createI18n({
//     legacy: false,
//     locale: navigator.language,
//     fallbackLocale: "en",
//     messages: integratedMessages
// });
