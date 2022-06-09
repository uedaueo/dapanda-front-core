/*
 * このソースコードはblanco Frameworkによって作成されました。
 */
import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * VeeValidateのカスタムメッセージを定義するクラスです。
 */
export class ValidateMessageJa extends AbstractLocaleMessageObject {
  dapanda: string = "真 {field} とは 0:{dapanda} のことである。";
  required: string = "{field} は必須だとあれほど、、、";
}
