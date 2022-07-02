import { ApiGetTelegram } from "%/blanco/restgenerator/valueobject/ApiGetTelegram";
import { ApiPostTelegram } from "%/blanco/restgenerator/valueobject/ApiPostTelegram";
import { ApiPutTelegram } from "%/blanco/restgenerator/valueobject/ApiPutTelegram";
import { ApiTelegram } from "%/blanco/restgenerator/valueobject/ApiTelegram";
import { ApiDeleteTelegram } from "%/blanco/restgenerator/valueobject/ApiDeleteTelegram";
import { CommonRequest } from "%/blanco/restgenerator/valueobject/CommonRequest";
import { CommonResponse } from "%/blanco/restgenerator/valueobject/CommonResponse";
import { RequestHeader } from "%/blanco/restgenerator/valueobject/RequestHeader";
import axios from "axios";
import { ErrorItem } from "%/blanco/restgenerator/valueobject/ErrorItem";

/**
 * API 電文処理のベースクラスです。
 * API 電文処理クラスは、このクラスを拡張しなければなりません。
 */
export abstract class ApiBase {
  /**
   * エラー
   */
  private _errors: Array<ErrorItem> = [];

  /**
   * レスポンス
   */
  private _commonResponse?: CommonResponse = undefined;

  get errors(): Array<ErrorItem> {
    return this._errors;
  }

  set errors(errors: Array<ErrorItem>) {
    this._errors = errors;
  }

  hasErrors(): boolean {
    return this._errors.length > 0;
  }

  get commonResponse(): CommonResponse | undefined {
    return this._commonResponse;
  }

  /**
   * この API の戻り値をセットする store の Action を表す文字列
   */
  // abstract getStoreActionId(
  //   argHttpMethod: string,
  //   options?: CommunicatorOptions
  // ): string;

  /**
   * API呼び出しのEntryポイント
   * @param request
   */
  async send(
    request: ApiTelegram,
    processName: string,
    method: string,
  )
      // : Promise<ApiTelegram | undefined>
  {
    let body: string = "";
    let errors: ErrorItem[] = new Array<ErrorItem>();

    // var uri: string;
    // let res;
    // if (!("VUE_APP_API_ENDPOINT" in process.env)) {
    //   /* JSON ファイルを取得する */
    //   uri = this.getJsonFileName(request, processName, method, options);
    //   res = await axios.get<CommonResponse>(uri);
    //   this._commonResponse = res.data;
    // } else {
    //   /* Ajax で API を呼び出す（ルールスタジオ用は固定） */
    //   if (toRuleStudio) {
    //     uri = process.env.VUE_APP_API_ENDPOINT + ruleStudioProxyURL;
    //     method = Const.HttpMethodPost;
    //   } else {
    //     uri = process.env.VUE_APP_API_ENDPOINT + this.locationURL;
    //   }
    //   const headers = {
    //     "content-type": "application/json"
    //   };
    //   try {
    //     switch (method) {
    //       case Const.HttpMethodPost:
    //         res = await axios.post<CommonResponse>(uri, body, { headers });
    //         break;
    //       case Const.HttpMethodPut:
    //         res = await axios.put<CommonResponse>(uri, body, { headers });
    //         break;
    //       default:
    //         throw "Invalid method.";
    //     }
    //   } catch (exception) {
    //     res = exception.response;
    //   }
    //
    //   // ルールスタジオのレスポンスはカプセル化解除する
    //   if (toRuleStudio) {
    //     console.log("ApiBase#send from RuleStudio", res);
    //     if (res.data) {
    //       const outerRes: CommonResponse = res.data;
    //       if (outerRes.errors) {
    //         outerRes.errors.forEach(item => {
    //           errors.push(item);
    //         });
    //       }
    //       if (res.data.telegram && res.data.telegram.response) {
    //         const innerRes: CommonResponse = res.data.telegram.response;
    //         this._commonResponse = innerRes;
    //         console.log(
    //           "ApiBase#send decapsulated response.",
    //           this._commonResponse
    //         );
    //       } else {
    //         console.log("ApiBase#send decapsulated data.", outerRes);
    //       }
    //     } else {
    //       throw "Not found encapsulated response.";
    //     }
    //   } else {
    //     this._commonResponse = res.data;
    //   }
    // }
    //
    // if (this._commonResponse) {
    //   if (
    //     this._commonResponse.messages &&
    //     this._commonResponse.messages.length !== 0
    //   ) {
    //     console.log("API message num = " + this._commonResponse.messages.length);
    //     this.messages = this._commonResponse.messages;
    //   }
    //   if (
    //     this._commonResponse.errors &&
    //     this._commonResponse.errors.length !== 0
    //   ) {
    //     this._commonResponse.errors.forEach(item => {
    //       errors.push(item);
    //     });
    //   }
    // }
    //
    // if (errors.length !== 0) {
    //   this.errors = errors;
    //   console.log("API Error!!!", errors);
    //   return undefined;
    // }
    //
    // if (!this._commonResponse) {
    //   return undefined;
    // }
    // return this._commonResponse.telegram;
  }

  /**
   * LoginInfo準備用
   * @param component emitを実施するコンポーネント
   */
  // prepareLoginInfo(component: Vue): Promise<LoginInfo> {
  //   return new Promise<LoginInfo>((resolve, reject) => {
  //     // console.log("### prepareLoginInfo start");
  //     let restoreLoginDataCallback: RestoreLoginDataCallbackType = function(
  //       loginInfo: LoginInfo | undefined
  //     ): void {
  //       if (loginInfo) {
  //         // console.log("### prepareLoginInfo resolve", loginInfo.loginToken);
  //         resolve(loginInfo);
  //       } else {
  //         // console.log("### prepareLoginInfo reject");
  //         reject(undefined);
  //       }
  //     };
  //     const options: RestoreLoginDataOptions = {
  //       callback: restoreLoginDataCallback
  //     };
  //     component.$root.$emit(EVENT_RESTORE_LOGIN_DATA, options);
  //     // console.log("### prepareLoginInfo end");
  //   });
  // }
  //
  // /**
  //  * GET method 送信
  //  * @param request
  //  */
  // sendByGet(request: ApiGetTelegram): ApiGetTelegram {
  //   var res = new ApiGetTelegram();
  //   return res;
  // }
  //
  // /**
  //  * POST method 送信
  //  * @param request
  //  */
  // sendByPost(request: ApiPostTelegram): ApiPostTelegram {
  //   var res = new ApiPostTelegram();
  //
  //   return res;
  // }
  //
  // /**
  //  * PUT method 送信
  //  * @param request
  //  */
  // sendByPut(request: ApiPutTelegram): ApiPutTelegram {
  //   var res = new ApiPutTelegram();
  //   return res;
  // }
  //
  // /**
  //  * DELETE method 送信
  //  * @param request
  //  */
  // sendByDelete(request: ApiDeleteTelegram): ApiDeleteTelegram {
  //   var res = new ApiDeleteTelegram();
  //   return res;
  // }
  //
  // /**
  //  * デバグ用JSONの読込ルーチン。
  //  * JSON ファイルは
  //  * public/json/api/電文処理ID/電文ID.json
  //  * とし、1 API につき固定の 1 JSON を返す。
  //  *
  //  * リクエストの中身によって送り返すJSONを変えたい場合は、各電文処理で
  //  * このメソッドを override して、個別の処理を書く事。
  //  * @param request
  //  */
  // protected getJsonFileName(
  //   request: ApiTelegram,
  //   processName: string,
  //   method: string,
  //   options: CommunicatorOptions | undefined = undefined
  // ): string {
  //   return "/jsons/api/" + processName + "/" + method + "CommonResponse.json";
  // }
  //
  // /**
  //  * 電文をAPIのエンベロープ（CommonRequest）でくるみます。
  //  * header 情報（token の設定など）もここで行います。
  //  * @param component
  //  * @param request
  //  */
  // private async makeCommonRequest(
  //   component: Vue,
  //   request: ApiTelegram,
  //   options: CommunicatorOptions | undefined
  // ): Promise<CommonRequest> {
  //   const info = await this.prepareScreenApiRequestHeader(component, options);
  //
  //   const commonRequest = new CommonRequest();
  //   commonRequest.info = info;
  //   commonRequest.telegram = request;
  //
  //   return commonRequest;
  // }
  //
  // /**
  //  * ルールスタジオ用の電文をAPIのエンベロープでくるみます。
  //  * header 情報（token の設定など）もここで行います。
  //  */
  // private async makeRuleStudioProxyReqeust(
  //   component: Vue,
  //   request: ApiTelegram,
  //   method: string,
  //   options: CommunicatorOptions | undefined
  // ): Promise<RuleStudioProxyReqeust> {
  //   const info = await this.prepareScreenApiRequestHeader(component, options);
  //
  //   const splittedUrlArray = this.locationURL.split("/");
  //   const api = splittedUrlArray[splittedUrlArray.length - 1];
  //
  //   const commonRequest = new CommonRequest();
  //   commonRequest.info = new RequestHeader();
  //   commonRequest.telegram = request;
  //
  //   const telegram = new RuleStudioProxyTelegram();
  //   telegram.api = api;
  //   telegram.method = method;
  //   telegram.request = commonRequest;
  //
  //   const proxyRequest = new RuleStudioProxyReqeust();
  //   proxyRequest.info = info;
  //   proxyRequest.telegram = telegram;
  //
  //   return proxyRequest;
  // }
  //
  // /**
  //  * ScreenApiRequestHeaderを準備します
  //  */
  // private async prepareScreenApiRequestHeader(
  //   component: Vue,
  //   options: CommunicatorOptions | undefined
  // ): Promise<ScreenApiRequestHeader> {
  //   const header = new ScreenApiRequestHeader();
  //
  //   // 認証が必要なAPIの場合はトークンの取得が先
  //   if (this.isAuthenticationRequired()) {
  //     const loginInfo = await this.prepareLoginInfo(component);
  //     header.token = loginInfo.loginToken;
  //     if (TargetDependentInfo.name.trim() === "cacco") {
  //       header.shopId = "cacco";
  //     } else if (TargetDependentInfo.name.trim() === "shop") {
  //       header.shopId = loginInfo.loginOperator
  //         ? loginInfo.loginOperator.companyId
  //         : "";
  //     }
  //     // console.log("### ApiBase#send: loginInfo is", loginInfo);
  //   }
  //   if (options && options.overrideShopId) {
  //     header.shopId = options.overrideShopId;
  //   }
  //
  //   return header;
  // }

  protected isAuthenticationRequired(): boolean | undefined {
    return false;
  }

  protected get locationURL(): string {
    return "";
  }
}
