import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import HelloWorldImple from "@/sample/pages/HelloWorldImple";

/**
 * サンプル用このページについて画面です
 */
@Component
export default class HelloWorld extends Mixins(HelloWorldImple) {
  /**
   * フィールド [componentId] の値を取得します。
   *
   * @return フィールド[componentId]から取得した値。
   */
  get componentId(): string {
    return "HelloWorld";
  }

  /**
   * フィールド [caption] の値を取得します。
   *
   * @return フィールド[caption]から取得した値。
   */
  get caption(): string {
    return "HelloWorldサンプル";
  }

  /**
   * フィールド [routerPath] の値を取得します。
   *
   * @return フィールド[routerPath]から取得した値。
   */
  static get routerPath(): string {
    return "/helloworld";
  }

  /**
   * フィールド [routerName] の値を取得します。
   *
   * @return フィールド[routerName]から取得した値。
   */
  static get routerName(): string {
    return "HelloWorld";
  }

  /**
   * フィールド [expectConsistentAfterTransition] の値を取得します。
   *
   * @return フィールド[expectConsistentAfterTransition]から取得した値。
   */
  get expectConsistentAfterTransition(): boolean {
    return false;
  }
}
