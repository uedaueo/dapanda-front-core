import {ApiTelegram} from "%/blanco/restgenerator/valueobject/ApiTelegram";
import {CommonRequest} from "%/blanco/restgenerator/valueobject/CommonRequest";
import {CommonResponse} from "%/blanco/restgenerator/valueobject/CommonResponse";
import axios, {AxiosError} from "axios";
import {MessageItem} from "%/blanco/restgenerator/valueobject/MessageItem";
import {CommunicationOptions} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import {DapandaConst} from "@/common/DapandaGlobals";
import {RequestHeader} from "%/blanco/restgenerator/valueobject/RequestHeader";
import {LoginInfo} from "%/common/LoginInfo";

/**
 * API 電文処理のベースクラスです。
 * API 電文処理クラスは、このクラスを拡張しなければなりません。
 */
export abstract class ApiBase {
  /**
   * エラー
   */
  private _messages: Array<MessageItem> = [];

  /**
   * レスポンス
   */
  private _commonResponse?: CommonResponse = undefined;

  get messages(): Array<MessageItem> {
    return this._messages;
  }

  set messages(messages: Array<MessageItem>) {
    this._messages = messages;
  }

  hasErrors(): boolean {
    return this._messages.length > 0;
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
   * @param processName
   * @param method
   * @param options
   *
   */
  async send(
    request: ApiTelegram,
    processName: string,
    method: string,
    options?: CommunicationOptions | undefined
  ): Promise<CommonResponse | undefined>
  {
    let body: string = "";

    const commonRequest = await this.makeCommonRequest(
        request,
        options
    );
    body = JSON.stringify(commonRequest);
    console.log("ApiBase#send: json = " + body);

    var uri: string;
    let res;
    if (!("VUE_APP_API_ENDPOINT" in process.env)) {
      /* GET JSON FILE */
      uri = this.getJsonFileName(request, processName, method, options);
      res = await axios.get<CommonResponse>(uri);
      this._commonResponse = res.data;
    } else {
      uri = process.env.VUE_APP_API_ENDPOINT + this.locationURL;
      /* TODO: Set accessToken to X-Dapanda-AccessToken header */
      const headers = {
        "content-type": "application/json"
      };
      try {
        switch (method) {
          case DapandaConst.HttpMethodPost:
            res = await axios.post<CommonResponse>(uri, body, { headers });
            break;
          case DapandaConst.HttpMethodPut:
            res = await axios.put<CommonResponse>(uri, body, { headers });
            break;
          case DapandaConst.HttpMethodGet:
            /* TODO: Generate queryParams here */
            res = await axios.get<CommonResponse>(uri, { headers });
            break;
          case DapandaConst.HttpMethodDelete:
            /* TODO: Generate queryParams here */
            res = await axios.delete<CommonResponse>(uri, { headers });
            break;
          default:
            throw "Invalid method.";
        }
      } catch (exception) {
        res = (exception as AxiosError).response;
      }

      if (res) {
        this._commonResponse = res.data as CommonResponse;
      } else {

      }
    }

    if (this._commonResponse) {
      if (
          this._commonResponse.messages &&
          this._commonResponse.messages.length !== 0
      ) {
        console.log("API message num = " + this._commonResponse.messages.length);
        this.messages = this._commonResponse.messages;
      }
    }

    if (!this._commonResponse) {
      return undefined;
    }
    return this._commonResponse;
  }

  /**
   * LoginInfo準備用
   * @param component emitを実施するコンポーネント
   */
  prepareLoginInfo(): Promise<LoginInfo> {
    return new Promise<LoginInfo>((resolve, reject) => {
      // console.log("### prepareLoginInfo start");
    //   let restoreLoginDataCallback: RestoreLoginDataCallbackType = function(
    //     loginInfo: LoginInfo | undefined
    //   ): void {
    //     if (loginInfo) {
    //       // console.log("### prepareLoginInfo resolve", loginInfo.loginToken);
    //       resolve(loginInfo);
    //     } else {
    //       // console.log("### prepareLoginInfo reject");
    //       reject(undefined);
    //     }
    //   };
    //   const options: RestoreLoginDataOptions = {
    //     callback: restoreLoginDataCallback
    //   };
    //   component.$root.$emit(EVENT_RESTORE_LOGIN_DATA, options);
    //   // console.log("### prepareLoginInfo end");
    });
  }

  /**
   * デバグ用JSONの読込ルーチン。
   * JSON ファイルは
   * public/json/api/電文処理ID/電文ID.json
   * とし、1 API につき固定の 1 JSON を返す。
   *
   * リクエストの中身によって送り返すJSONを変えたい場合は、各電文処理で
   * このメソッドを override して、個別の処理を書く事。
   * @param request
   */
  protected getJsonFileName(
    request: ApiTelegram,
    processName: string,
    method: string,
    options: CommunicationOptions | undefined = undefined
  ): string {
    return "/jsons/api/" + processName + "/" + method + "CommonResponse.json";
  }

  /**
   * 電文をAPIのエンベロープ（CommonRequest）でくるみます。
   * header 情報（token の設定など）もここで行います。
   * @param component
   * @param request
   */
  private async makeCommonRequest(
    request: ApiTelegram,
    options: CommunicationOptions | undefined
  ): Promise<CommonRequest> {
    const info = await this.prepareRequestHeader(options);

    const commonRequest = new CommonRequest();
    commonRequest.info = info;
    commonRequest.telegram = request;

    return commonRequest;
  }

  /**
   * RequestHeaderを準備します
   */
  private async prepareRequestHeader(
    options: CommunicationOptions | undefined
  ): Promise<RequestHeader> {
    const header = new RequestHeader();

    // 認証が必要なAPIの場合はトークンの取得が先
    if (this.isAuthenticationRequired()) {
      const loginInfo = await this.prepareLoginInfo();
      // header.token = loginInfo.loginToken;
    }
    return header;
  }

  protected isAuthenticationRequired(): boolean | undefined {
    return false;
  }

  protected get locationURL(): string {
    return "";
  }
}
