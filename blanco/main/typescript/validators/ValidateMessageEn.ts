/*
 * This source code was created by blanco Framework.
 */
import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * VeeValidateのカスタムメッセージを定義するクラスです。
 */
export class ValidateMessageEn extends AbstractLocaleMessageObject {
    /**
     * required: How many times do I have to say, {field} is REQUIRED!
     */
    required: string = "How many times do I have to say, {field} is REQUIRED!";

    /**
     * dapanda: The true {field} means 0:{dapanda} .
     */
    dapanda: string = "The true {field} means 0:{dapanda} .";

    /**
     * kopanda: 0:{parante}  (1:{age} years old) is NOT good for 2:{dapanda} the {field}'s parent.
     */
    kopanda: string = "0:{parante}  (1:{age} years old) is NOT good for 2:{dapanda} the {field}'s parent.";
}
