/*
 * このソースコードはblanco Frameworkによって作成されました。
 */
import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * VeeValidateのカスタムメッセージを定義するクラスです。
 */
export class ValidateMessageEn extends AbstractLocaleMessageObject {
  dapanda: string = "The true {field} means 0:{dapanda} .";
  required: string = "How many times do I have to say, {field} is REQUIRED!";
}
