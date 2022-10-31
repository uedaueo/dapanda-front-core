import {MessageItem} from "%/blanco/restgenerator/valueobject/MessageItem";
import {SnackbarAttribute} from "%/components/snackbar/SnackbarAttribute";
import {DapandaConst} from "@/common/DapandaGlobals";
import {v4 as uuidv4} from "uuid";
import {Store} from "pinia";
import {SnackbarStoreState} from "%/stores/SnackbarStore/SnackbarStoreState";
import {SnackbarStoreGettersTree} from "%/stores/SnackbarStore/DefineSnackbarStoreGetters";
import {SnackbarStoreActionsTree} from "%/stores/SnackbarStore/DefineSnackbarStoreActions";

export enum SnackbarType {
    INFO = "info",
    ERROR = "error"
}

export type SnackbarStoreDefine = Store<"snackbarStore", SnackbarStoreState, SnackbarStoreGettersTree<SnackbarStoreState>, SnackbarStoreActionsTree>;

/**
 * Snackbarのユーティリティ
 */
export class SnackbarUtils {
    /**
     * Snackbar呼び出し用のインスタンスを作成する
     * @param component 呼び出し元のコンポーネント（コンポーネント自身から呼び出す場合はthisを指定）
     * @param type 表示したいSnackbarのタイプ（SnackbarType.INFOまたはSnackbarType.ERROR）
     * @param text 表示したい文字列
     * @param timeout タイムアウト（オプション）
     */
    static createSnackbarAttribute(
        type: SnackbarType,
        text: string,
        timeout?: number
    ): SnackbarAttribute {
        const snackbarAttribute: SnackbarAttribute = {
            color: "",
            id: "",
            mode: "",
            snackbar: false,
            text: "",
            timeout: 0,
            x: "",
            y: ""
        }

        snackbarAttribute.color = type;
        snackbarAttribute.text = text;
        snackbarAttribute.id = uuidv4();
        if (timeout === undefined) {
            switch (type) {
                case SnackbarType.INFO:
                    snackbarAttribute.timeout = DapandaConst.SnackbarTimeoutInfo;
                    break;
                case SnackbarType.ERROR:
                    snackbarAttribute.timeout = DapandaConst.SnackbarTimeoutError;
                    break;
                default:
                    throw "Invalid SnackbarType.";
            }
        } else {
            snackbarAttribute.timeout = timeout;
        }

        return snackbarAttribute;
    }

    /**
     * Snackbar即時表示する
     * @param store SnackbarStore
     * @param type 表示したいSnackbarのタイプ（SnackbarType.INFOまたはSnackbarType.ERROR）
     * @param text 表示したい文字列
     * @param timeout タイムアウト（オプション）
     */
    static showSnackbar(
        store: SnackbarStoreDefine,
        type: SnackbarType,
        text: string,
        timeout?: number
    ) {
        const snackbarAttribute = this.createSnackbarAttribute(
            type,
            text,
            timeout
        );
        store.showSnackbar(snackbarAttribute);
    }

    /**
     * errorメッセージを表示する
     * @param store SnackbarStore
     * @param messages 表示するMessageItemの配列
     */
    static showErrors(store: SnackbarStoreDefine, messages: Array<MessageItem>) {
        messages.forEach((message, errIdx) => {
            // errorのsnackbarを表示する
            let errorMessage = message.code ? message.code : "";
            if (message.messages) {
                errorMessage += "\n" + message.messages;
            }
            console.log("Error: msg = " + errorMessage);
            this.showSnackbar(store, SnackbarType.ERROR, errorMessage, DapandaConst.SnackbarTimeoutError);
        });
    }

    /**
     * info メッセージを表示する
     * @param store SnackbarStore
     * @param messages 表示するMessageItemの配列
     */
    static showMessages(store: SnackbarStoreDefine, messages: Array<MessageItem>) {
        messages.forEach((message, errIdx) => {
            // infoのsnackbarを表示する
            let infoMessage = message.code ? message.code : "";
            if (message.messages) {
                infoMessage += "\n" + message.messages;
            }
            console.log("Info: msg = " + infoMessage);
            this.showSnackbar(store, SnackbarType.INFO, infoMessage, DapandaConst.SnackbarTimeoutInfo);
        });
    }
}
