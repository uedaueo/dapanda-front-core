import {defineCommonStatusStoreActions} from "%/stores/CommonStatusStore/DefineCommonStatusStoreActions";

export const commonStatusStoreActions = defineCommonStatusStoreActions({
    changeOverlay(showOverlay: boolean) {
        this.overlay = showOverlay;
    }
});
