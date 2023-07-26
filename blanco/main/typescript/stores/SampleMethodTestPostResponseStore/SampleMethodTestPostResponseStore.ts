import {defineStore} from "pinia";
import { sampleMethodTestPostResponseStoreState } from "%/stores/SampleMethodTestPostResponseStore/SampleMethodTestPostResponseStoreState";
import { sampleMethodTestPostResponseStoreActions } from "@/stores/SampleMethodTestPostResponseStore/SampleMethodTestPostResponseStoreActions";

/**
 * SampleMethodTest API の POST Response を格納するためのストアです。<br>
 * ページ遷移時に次ページに渡すデータもここに格納します。
 */
export const useSampleMethodTestPostResponseStore = defineStore("sampleMethodTestPostResponseStore", {
    state: () => sampleMethodTestPostResponseStoreState,
    actions: sampleMethodTestPostResponseStoreActions
});
