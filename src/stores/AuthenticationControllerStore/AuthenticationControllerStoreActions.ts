import {
    defineAuthenticationControllerStoreActions
} from "%/stores/AuthenticationControllerStore/DefineAuthenticationControllerStoreActions";
import {LoginInfo} from "%/common/LoginInfo";
import {RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";
import {DapandaConst} from "@/common/DapandaGlobals";

export const authenticationControllerStoreActions = defineAuthenticationControllerStoreActions(
    {
        update(loginInfo: LoginInfo) {
            this.loginInfo = loginInfo;
            this.status = DapandaConst.AuthenticationStatusUpdated;
        },
        setStatus(status: string) {
            console.log("AuthenticationControllerStoreActions#status: current status = " + this.status + ", change to " + status);
             this.status = status;
        },
        async persist() {
            console.log("AuthenticationControllerStoreActions#request: current status = " + this.status);
            if (this.status === DapandaConst.AuthenticationStatusValid || this.status === DapandaConst.AuthenticationStatusUpdated) {
                this.status = DapandaConst.AuthenticationStatusSaving;
                console.log(" status changed to " + this.status);
            }
        },
        async restore(options: RestoreLoginDataOptions | undefined) {
            console.log("AuthenticationControllerStoreActions#restore: current status = " + this.status);
            if (this.status === DapandaConst.AuthenticationStatusInvalid || this.status === DapandaConst.AuthenticationStatusValid) {
                this.status = DapandaConst.AuthenticationStatusRestoring;
                this.restoreOptions = options;
            }
        },
        async remove() {
            console.log("AuthenticationControllerStoreActions#restore: current status = " + this.status);
            this.status = DapandaConst.AuthenticationStatusRemoving;
            this.loginInfo = new LoginInfo();
            /* localStorage will be removed in AuthenticationController. */
        }
    }
)
