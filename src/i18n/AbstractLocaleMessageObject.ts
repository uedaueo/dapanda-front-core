import {VueMessageType} from "vue-i18n";

export abstract class AbstractLocaleMessageObject {
  [key: string]: VueMessageType;
}
