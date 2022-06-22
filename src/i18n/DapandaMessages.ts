import validateJa from "@vee-validate/i18n/dist/locale/ja.json";
import validateEn from "@vee-validate/i18n/dist/locale/en.json";
import {AbstractLocaleMessageObject} from "@/i18n/AbstractLocaleMessageObject";
import {LabelsJa} from "%/labels/LabelsJa";
import {ValidateMessageJa} from "%/validators/ValidateMessageJa";
import {MessagesJa} from "%/messages/MessagesJa";
import {LabelsEn} from "%/labels/LabelsEn";
import {MessagesEn} from "%/messages/MessagesEn";
import {ValidateMessageEn} from "%/validators/ValidateMessageEn";
import {LocaleMessageDictionary} from "@intlify/core-base";
import {VueMessageType} from "vue-i18n";
import {LocaleLabels} from "@/i18n/LocaleLabels";

const builtInJa = validateJa.messages as AbstractLocaleMessageObject;
const builtInEn = validateEn.messages as AbstractLocaleMessageObject;

export interface DapandaI18nResources extends LocaleMessageDictionary<VueMessageType> {
    labels: LocaleLabels,
    messages: LocaleLabels,
    validations: AbstractLocaleMessageObject
}

export const resourceJa: DapandaI18nResources = {
    labels: new LabelsJa(),
    messages: new MessagesJa(),
    validations: Object.assign(builtInJa, new ValidateMessageJa())
};

export const resourceEn: DapandaI18nResources = {
    labels: new LabelsEn(),
    messages: new MessagesEn(),
    validations: Object.assign(builtInEn, new ValidateMessageEn())
};
