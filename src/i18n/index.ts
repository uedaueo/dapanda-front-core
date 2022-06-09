import {LabelsJa} from "%/labels/LabelsJa";
import {LabelsEn} from "%/labels/LabelsEn";
import {createI18n, VueMessageType} from "vue-i18n";
import validateJa from "@vee-validate/i18n/dist/locale/ja.json";
import validateEn from "@vee-validate/i18n/dist/locale/en.json";
import {ValidateMessageJa} from "@/validate/ValidateMessageJa";
import {ValidateMessageEn} from "@/validate/ValidateMessageEn";
import {LocaleMessages} from "@intlify/core-base";
import {AbstractLocaleMessageObject} from "@/i18n/AbstractLocaleMessageObject";

const builtInJa = validateJa.messages as AbstractLocaleMessageObject;
const builtInEn = validateEn.messages as AbstractLocaleMessageObject;

const resourceJa = {
    labels: new LabelsJa(),
    validations: Object.assign(builtInJa, new ValidateMessageJa())
};

const resourceEn = {
    labels: new LabelsEn(),
    validations: Object.assign(builtInEn, new ValidateMessageEn())
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
