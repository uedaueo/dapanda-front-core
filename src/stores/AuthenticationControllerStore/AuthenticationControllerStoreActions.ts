import {
    defineAuthenticationControllerStoreActions
} from "%/stores/AuthenticationControllerStore/DefineAuthenticationControllerStoreActions";
import {LoginInfo} from "%/common/LoginInfo";
import {RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";
import {DapandaConst} from "@/common/DapandaGlobals";

export const authenticationControllerStoreActions = defineAuthenticationControllerStoreActions(
    {
        update(loginInfo: LoginInfo, issuer: string) {
            this.loginInfo = loginInfo;
            this.status = DapandaConst.AuthenticationStatusUpdated;
            this.issuer = issuer;
        },
        setStatus(status: string, issuer: string) {
            console.log("AuthenticationControllerStoreActions#status: current status = " + this.status + ", change to " + status);
             this.status = status;
             this.issuer = issuer;
        },
        async persist(issuer: string) {
            console.log("AuthenticationControllerStoreActions#request: current status = " + this.status);
            if (this.status === DapandaConst.AuthenticationStatusValid || this.status === DapandaConst.AuthenticationStatusUpdated) {
                this.status = DapandaConst.AuthenticationStatusSaving;
                this.issuer = issuer;
                console.log(" status changed to " + this.status);
            }
        },
        async restore(options: RestoreLoginDataOptions | undefined, issuer: string) {
            console.log("AuthenticationControllerStoreActions#restore: current status = " + this.status);
            if (this.status === DapandaConst.AuthenticationStatusInvalid || this.status === DapandaConst.AuthenticationStatusValid) {
                this.status = DapandaConst.AuthenticationStatusRestoring;
                this.issuer = issuer;
                this.restoreOptions = options;
            }
        },
        async remove(issuer: string) {
            console.log("AuthenticationControllerStoreActions#remove: current status = " + this.status + ", issuer = " + issuer);
            this.status = DapandaConst.AuthenticationStatusRemoving;
            this.issuer = issuer;
            this.loginInfo = new LoginInfo();
            /* localStorage will be removed in AuthenticationController. */
        },
        setIssuer(issuer: string) {
            console.log("AuthenticationControllerStoreActions#setIssuer: current issuer = " + this.issuer + ", next = " + issuer);
            this.issuer = issuer;
        }
    }
)
