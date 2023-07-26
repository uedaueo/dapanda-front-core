import {CommonResponseActionsTree} from "@/components/framework/CommunicationController/CommunicatoinTypes";
import { UnwrapRef } from "vue";
import { SampleMethodTestPostResponseStoreState } from "./SampleMethodTestPostResponseStoreState";

/**
 * SampleMethodTest API の POST Response を格納するためのストアです。&lt;br&gt;
 *
 * ページ遷移時に次ページに渡すデータもここに格納します。
 *
 * @param actions パラメータとしてActionsTree定義を渡して下さい。
 * @return 定義されたActionsTreeを返します。
 */
export function defineSampleMethodTestPostResponseStoreActions(actions: CommonResponseActionsTree & ThisType<CommonResponseActionsTree & UnwrapRef<SampleMethodTestPostResponseStoreState>>): CommonResponseActionsTree & ThisType<CommonResponseActionsTree & UnwrapRef<SampleMethodTestPostResponseStoreState>> {
    return actions;
}
