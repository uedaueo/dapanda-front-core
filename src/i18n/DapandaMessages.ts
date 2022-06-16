import validateJa from "@vee-validate/i18n/dist/locale/ja.json";
import validateEn from "@vee-validate/i18n/dist/locale/en.json";
import {AbstractLocaleMessageObject} from "@/i18n/AbstractLocaleMessageObject";
import {LabelsJa} from "%/labels/LabelsJa";
import {ValidateMessageJa} from "%/validators/ValidateMessageJa";
import {MessagesJa} from "%/messages/MessagesJa";
import {LabelsEn} from "%/labels/LabelsEn";
import {MessagesEn} from "%/messages/MessagesEn";
import {ValidateMessageEn} from "%/validators/ValidateMessageEn";

const builtInJa = validateJa.messages as AbstractLocaleMessageObject;
const builtInEn = validateEn.messages as AbstractLocaleMessageObject;

export const resourceJa = {
    labels: new LabelsJa(),
    messages: new MessagesJa(),
    validations: Object.assign(builtInJa, new ValidateMessageJa())
};

export const resourceEn = {
    labels: new LabelsEn(),
    messages: new MessagesEn(),
    validations: Object.assign(builtInEn, new ValidateMessageEn())
};
