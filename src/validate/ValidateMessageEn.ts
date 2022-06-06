/*
 * このソースコードはblanco Frameworkによって作成されました。
 */
import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * VeeValidateのカスタムメッセージを定義するクラスです。
 */
export class ValidateMessageEn extends AbstractLocaleMessageObject {
  /**
 * dateTimeEnd: {dateTimeEndErrorMessage}
 * [dateTimeEnd] true or false を指定します。
 * [dateTimeEndErrorMessage] 終了日時に開始日時より前の日付が指定された場合、エラーメッセージを指定します。
 */
dateTimeEnd: string = "{dateTimeEndErrorMessage}";

/**
 * groupNameDuplicate: {errorMessage}
 * [groupNameList] グループ名を指定します。
 * [errorMessage] グループ名が重複した時のエラーメッセージを指定します。
 */
groupNameDuplicate: string = "{errorMessage}";

/**
 * dateFormat: The {_field_} field may only contain date format {format}
 * [format] 日付フォーマットを指定します。指定が無い場合は、ISO 8601準拠のすべての形式を正しいと判断します。
 */
dateFormat: string = "The {_field_} field may only contain date format {format}";

/**
 * emptyIf: {errorMessage}
 * [emptyIf] true or false を指定します。
 * [errorMessage] 日付が入力されている場合、エラーメッセージを指定します。
 */
emptyIf: string = "{errorMessage}";
}
