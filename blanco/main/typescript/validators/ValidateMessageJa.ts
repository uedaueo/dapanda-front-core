/*
 * This source code was created by blanco Framework.
 */
import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * VeeValidateのカスタムメッセージを定義するクラスです。
 */
export class ValidateMessageJa extends AbstractLocaleMessageObject {
    /**
     * required: {field} は必須だとあれほど、、、
     */
    required: string = "{field} は必須だとあれほど、、、";

    /**
     * dapanda: 真 {field} とは 0:{dapanda} のことである。
     */
    dapanda: string = "真 {field} とは 0:{dapanda} のことである。";

    /**
     * kopanda: 0:{parante}  (1:{age} 才) は  {field}  2:{dapanda} の親として相応しくありません。
     */
    kopanda: string = "0:{parante}  (1:{age} 才) は  {field}  2:{dapanda} の親として相応しくありません。";
}
