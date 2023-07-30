/*
 * This source code has been generated by blanco Framework.
 */
import { SampleMethodTest } from "@/samples/api/SampleMethodTest";
import { ApiPlainCommon } from "@/common/api/plain/ApiPlainCommon";
import { ApiPlainSample } from "@/samples/api/plain/ApiPlainSample";
import { SamplePlainApiListInterface } from "./SamplePlainApiListInterface";

/**
 * A class that holds a list of instances to be obtained from API argument string.
 */
export class SamplePlainApiList {
  /**
   * A list of instances to be obtained from API argument string.
   */
  static constructors: SamplePlainApiListInterface = {
    SampleMethodTest: SampleMethodTest,
    ApiPlainSample: ApiPlainSample,
    ApiPlainCommon: ApiPlainCommon
  };
}
