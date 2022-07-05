import {CommonResponseActionsTree} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import { UnwrapRef } from "vue";
import { LoginSampleResponseStoreState } from "./LoginSampleResponseStoreState";

/**
 * LoginSample API の Response を格納するためのストアです。&lt;br&gt;
 *
 * ページ遷移時に次ページに渡すデータもここに格納します。
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function defineLoginSampleResponseStoreActions(actions: CommonResponseActionsTree & ThisType<CommonResponseActionsTree & UnwrapRef<LoginSampleResponseStoreState>>): CommonResponseActionsTree & ThisType<CommonResponseActionsTree & UnwrapRef<LoginSampleResponseStoreState>> {
    return actions;
}
