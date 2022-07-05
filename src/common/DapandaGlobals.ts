/**
 * Constants
 */
export namespace DapandaConst {
    export const GetRequestSuffix = "GetRequest";
    export const PostRequestSuffix = "PostRequest";
    export const PutRequestSuffix = "PutRequest";
    export const DeleteRequestSuffix = "DeleteRequest";
    export const GetResponseSuffix = "GetResponse";
    export const PostResponseSuffix = "PostResponse";
    export const PutResponseSuffix = "PutResponse";
    export const DeleteResponseSuffix = "DeleteResponse";
    export const HttpMethodGet = "GET";
    export const HttpMethodPost = "POST";
    export const HttpMethodPut = "PUT";
    export const HttpMethodDelete = "DELETE";
    export const ResultSuccess = "success";
    export const ResultError = "error";
    export const SnackbarColorInfo = "info";
    export const SnackbarColorSuccess = "success";
    export const SnackbarColorError = "error";
    export const SnackbarTimeoutInfo = 5000;
    export const SnackbarTimeoutSuccess = 3000;
    export const SnackbarTimeoutError = 0;
    export const VueAppDeployEnvironmentProduction = "production";
    export const EnvironmentNameProduction = "PRD";
    export const LocalStorageItemKey = "dapanda";

    /**
     * ApiBaseで取り扱うCommonResponseのresultの判定用
     */
    export const ApiBaseResultSuccess = "10";
    export const ApiBaseResultError = "20";

    /**
     * CommunicatorContextのstatus定義
     */
    export const CommunicatorContextStatusSuccess = ApiBaseResultSuccess;
    export const CommunicatorContextStatusError = ApiBaseResultError;
    export const CommunicatorContextStatusExecuting = "executing";
    export const CommunicatorContextStatusInitial = "initial";
}

/**
 * Error Codes
 */
export namespace DapandaErrorCode {
    export const AuthorizeErrorInvalidToken = "AuthorizeError.InvalidToken";
    export const AuthorizeErrorSourceIpNotAllowed =
        "AuthorizeError.SourceIpNotAllowed";
    export const InvalidDataDuplicate = "InvalidData.Duplicate";
    export const InvalidDataTooManyRows = "InvalidData.TooManyRows";
    export const ServerErrorInternalFailure = "ServerError.InternalFailure";
    export const InformationNoDataFound = "Information.NoDataFound";
}

/**
 * Key for SessionStorage
 */
export namespace SessionStorageKey {
    // framework
    export const SYSTEM_ERROR = "systemError";
    export const SNACKBAR_QUEUE = "snackbarQueue";
    export const MENU_PERMISSIONS = "menuPermissions";
    export const BEFORE_ROUTE_LEAVE_INFO = "beforeRouteLeaveInfo";
    export const RESERVED_KEYS = [
        SYSTEM_ERROR,
        SNACKBAR_QUEUE,
        MENU_PERMISSIONS,
        BEFORE_ROUTE_LEAVE_INFO
    ];
}
