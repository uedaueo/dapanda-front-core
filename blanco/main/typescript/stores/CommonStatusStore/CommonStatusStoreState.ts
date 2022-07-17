/**
 * stateを定義します
 */
export interface CommonStatusStoreState {
    /**
     * 通信中などに画面にoverlayを重ねるかどうかを制御します。
     */
    processing: boolean;

    /**
     * ログアウトオーバーレイコンポーネントを表示します。
     */
    logout: boolean;
}

/**
 * stateを定義します
 */
export const commonStatusStoreState: CommonStatusStoreState = {
    processing: false,
    logout: false
};
