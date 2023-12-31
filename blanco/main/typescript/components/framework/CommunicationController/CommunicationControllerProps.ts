import { DefineComponent } from "vue";
import { LooseRequired } from "@vue/shared";
import { ComponentPropsOptions } from "vue";

/**
 * コンポーネントのプロパティを定義するインタフェイスです
 */
export interface CommunicationControllerInterface {
    /**
     * コンポーネントのcomponentIdプロパティです
     */
    componentId: string;

    /**
     * コンポーネントのsubjectプロパティです
     */
    subject?: string;

    /**
     * コンポーネントのaliasプロパティです
     */
    alias?: string;

    /**
     * CommunicationController 配下に置く App コンポーネントを指定します。
     */
    appComponent: DefineComponent;

    /**
     * ページが存在しなかった場合のrouteを指定染ます。Appコンポーネントに渡します。
     */
    nopagePath: string;

    /**
     * 認証に失敗した場合のrouteを指定染ます。Appコンポーネントに渡します。
     */
    noAuthPath: string;

    /**
     * 認証トークンを保持する HTTP ヘッダです。
     */
    authHeader: string;

    /**
     * 認可トークンに Bearer を付与するかどうか。
     */
    useBearer: boolean;
}

/** propsの型を定義します */
export declare type CommunicationControllerProps = Readonly<LooseRequired<CommunicationControllerInterface>>;

/**
 * propsの定義です
 */
export const communicationControllerProps: ComponentPropsOptions<CommunicationControllerInterface> = {
    componentId: {
        default: "CommunicationController"
    },
    subject: {
        default: "通信制御コンポーネント"
    },
    alias: {
        default: "通信制御コンポーネント"
    },
    appComponent: {
        required: true,
        default: {}
    },
    nopagePath: {
        default: "/nopageSample"
    },
    noAuthPath: {
        default: "/login"
    },
    authHeader: {
        default: "X-Dapanda-AccessToken"
    },
    useBearer: {
        default: false
    }
};
