import {defineCommonStatusStoreActions} from "%/stores/CommonStatusStore/DefineCommonStatusStoreActions";

export const commonStatusStoreActions = defineCommonStatusStoreActions({
    changeProcessing(showProcessing: boolean) {
        this.processing = showProcessing;
    },
    changeLogout(show: boolean) {
        this.logout = show;
    }
});
