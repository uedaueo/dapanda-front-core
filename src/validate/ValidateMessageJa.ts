/*
 * このソースコードはblanco Frameworkによって作成されました。
 */
import { AbstractLocaleMessageObject } from "@/i18n/AbstractLocaleMessageObject";

/**
 * VeeValidateのカスタムメッセージを定義するクラスです。
 */
export class ValidateMessageJa extends AbstractLocaleMessageObject {
  /**
   * password: {_field_}は英大文字・英小文字・数字・特殊文字から3種類以上使用してください。
   */
  password: string = "{_field_}は英大文字・英小文字・数字・特殊文字から3種類以上使用してください。";

  /**
   * maxValueBigint: {_field_}は{max}以下でなければなりません
   * [max] 最大値を指定します
   */
  maxValueBigint: string = "{_field_}は{max}以下でなければなりません";

  /**
   * ipAddressV4: {_field_}の形式が正しくありません。
   */
  ipAddressV4: string = "{_field_}の形式が正しくありません。";

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
 * delimiterItemSpace: {_field_}の一つあたりの項目は一つのスペースで区切り、{item1Name}は{item1ValidationMessage}、{item2Name}は{item2ValidationMessage}で入力してください
 * [item1Name] スペースで区切った前方の項目名を指定します。
 * [item1Max] スペースで区切った前方の項目の最大文字数を指定します。
 * [item1CheckHash] スペースで区切った前方の項目がハッシュチェックするかを指定します。
 * [item1ValidationMessage] スペースで区切った前方の項目のバリデーションメッセージを指定します。
 * [item2Name] スペースで区切った後方の項目名を指定します。
 * [item2Max] スペースで区切った後方の項目の最大文字数を指定します。
 * [item2CheckHash] スペースで区切った後方の項目がハッシュチェックするかを指定します。
 * [item2ValidationMessage] スペースで区切った後方の項目のバリデーションメッセージを指定します。
 */
delimiterItemSpace: string = "{_field_}の一つあたりの項目は一つのスペースで区切り、{item1Name}は{item1ValidationMessage}、{item2Name}は{item2ValidationMessage}で入力してください";

/**
 * delimiterItemAmpersand: {item1Name}{item1ValidationMessage}と{item2Name}{item2ValidationMessage}を&で繋いで入力してください。
 * [item1Name] &で区切った前方の項目名を指定します。
 * [item1Max] &で区切った前方の項目の最大文字数を指定します。
 * [item1CheckHash] &で区切った前方の項目がハッシュチェックするかを指定します。
 * [item1ValidationMessage] &で区切った前方の項目のバリデーションメッセージを指定します。
 * [item2Name] &で区切った後方の項目名を指定します。
 * [item2Max] &で区切った後方の項目の最大文字数を指定します。
 * [item2CheckHash] &で区切った後方の項目がハッシュチェックするかを指定します。
 * [item2ValidationMessage] &で区切った後方の項目のバリデーションメッセージを指定します。
 */
delimiterItemAmpersand: string = "{item1Name}{item1ValidationMessage}と{item2Name}{item2ValidationMessage}を&で繋いで入力してください。";

/**
 * delimiterItemMax: {_field_}の一つあたりの項目は{max}文字以内にしてください
 * [max] 区切り文字で区切った一つあたりの最大文字数を指定します。
 * [delimiter] 区切り文字を指定します。line：改行 space：空白（全角・半角とも）
 */
delimiterItemMax: string = "{_field_}の一つあたりの項目は{max}文字以内にしてください";

/**
 * dateFormat: {_field_}には日付フォーマット{format}を使用して下さい。
 * [format] 日付フォーマットを指定します。指定が無い場合は、ISO 8601準拠のすべての形式を正しいと判断します。
 */
dateFormat: string = "{_field_}には日付フォーマット{format}を使用して下さい。";

/**
 * emptyIf: {errorMessage}
 * [emptyIf] true or false を指定します。
 * [errorMessage] 日付が入力されている場合、エラーメッセージを指定します。
 */
emptyIf: string = "{errorMessage}";

/**
 * customEmail: {_field_}は有効なメールアドレスではありません
 */
customEmail: string = "{_field_}は有効なメールアドレスではありません";

/**
 * domain: {_field_}の形式が正しくありません。
 */
domain: string = "{_field_}の形式が正しくありません。";

/**
 * dateTimeSelectionField: 日時はセットです
 * [target1] 対象１
 * [target2] 対象２
 */
dateTimeSelectionField: string = "日時はセットです";
}
