import {
    defineAuthenticationControllerStoreActions
} from "%/stores/AuthenticationControllerStore/DefineAuthenticationControllerStoreActions";
import {LoginInfo} from "%/common/LoginInfo";
import {RestoreLoginDataOptions} from "@/common/RestoreLoginInfoOptions";

export const authenticationControllerStoreActions = defineAuthenticationControllerStoreActions(
    {
        update(loginInfo: LoginInfo) {
            this.loginInfo = loginInfo;
            this.preparedFlg = true;
        },
        prepared() {
            this.preparedFlg = true;
        },
        async persist() {
            console.log("Auth:persist! prepareFlg = " + this.preparedFlg + ", saveFlg = " + this.saveFlg);
            if (this.preparedFlg) {
                this.saveFlg = !this.saveFlg;
                this.preparedFlg = false;
                console.log("Auth:persist! prepareFlg = " + this.preparedFlg + ", saveFlg = " + this.saveFlg);
            }
        },
        async restore(options: RestoreLoginDataOptions | undefined) {
            this.preparedFlg = false;
            this.restoreFlg = !this.restoreFlg;
            this.restoreOptions = options;
        },
        async remove() {
            this.preparedFlg = false;
            this.loginInfo = new LoginInfo();
            this.removeFlg = !this.removeFlg;
        }
    }
)
