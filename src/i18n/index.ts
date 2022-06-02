import { LabelsJa } from "%/labels/LabelsJa";
import { LabelsEn } from "%/labels/LabelsEn";
import {createI18n} from "vue-i18n";

const resourceJa = {
    labels: new LabelsJa(),
    // validateion: validateJa.messages,
};

const resourceEn = {
    labels: new LabelsEn(),
    // validateion: validateJa.messages,
};

export const i18n = createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: "resourceJa",
    messages: {
        ja: resourceJa,
        en: resourceEn
    }
});