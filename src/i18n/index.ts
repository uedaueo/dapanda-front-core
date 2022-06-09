import { LabelsJa } from "%/labels/LabelsJa";
import { LabelsEn } from "%/labels/LabelsEn";
import {createI18n, VueMessageType} from "vue-i18n";
import validateJa from "@vee-validate/i18n/dist/locale/ja.json";
import validateEn from "@vee-validate/i18n/dist/locale/en.json";
import {LocaleMessages} from "@intlify/core-base";

const resourceJa = {
    labels: new LabelsJa(),
    validations: validateJa.messages
};

const resourceEn = {
    labels: new LabelsEn(),
    validations: validateEn.messages
};

const messages: LocaleMessages<VueMessageType> = {
    ja: resourceJa,
    en: resourceEn
}

export const i18n = createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: "ja",
    messages: messages
});
