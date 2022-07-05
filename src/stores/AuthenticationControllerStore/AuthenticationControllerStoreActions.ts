import {
    defineAuthenticationControllerStoreActions
} from "%/stores/AuthenticationControllerStore/DefineAuthenticationControllerStoreActions";
import {LoginInfo} from "%/common/LoginInfo";

export const authenticationControllerStoreActions = defineAuthenticationControllerStoreActions(
    {
        update(loginInfo: LoginInfo) {
            this.loginInfo = loginInfo;
            this.preparedFlg = true;
        },
        async persist() {
            if (this.preparedFlg) {
                this.saveFlg = !this.saveFlg;
            }
        },
        async restore() {
            this.preparedFlg = false;
            this.restoreFlg = !this.restoreFlg;
        },
        async remove() {
            this.preparedFlg = false;
            this.loginInfo = new LoginInfo();
            this.removeFlg = !this.removeFlg;
        }
    }
)
