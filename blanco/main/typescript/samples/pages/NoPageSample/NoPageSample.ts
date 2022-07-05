import { NoPageSampleProps, noPageSampleProps } from "./NoPageSampleProps";
import { defineComponent } from "vue";
import { noPageSampleSetup } from "@/samples/pages/NoPageSample/NoPageSampleSetup";

/**
 * NoPageを表示するための画面コンポーネントのサンプルです。
 */
export default defineComponent({
    name: "NoPageSample",
    props: noPageSampleProps,
    setup: (props, context) => {
        return noPageSampleSetup(props as NoPageSampleProps, context);
    }
});
