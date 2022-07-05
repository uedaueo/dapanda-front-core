/**
 * stateを定義します
 */
export interface CommonStatusStoreState {
    /**
     * 通信中などに画面にoverlayを重ねるかどうかを制御します。
     */
    overlay: boolean;
}

/**
 * stateを定義します
 */
export const commonStatusStoreState: CommonStatusStoreState = {
    overlay: false
};
