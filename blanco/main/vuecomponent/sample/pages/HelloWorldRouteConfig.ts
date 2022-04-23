import { RouteConfig } from "vue-router";

/**
 * RouteConfigを定義します: [HelloWorld]。
 */
export class HelloWorldRouteConfig implements RouteConfig {
  /**
   * RouteConfigのパラメータです: [path]。
   */
  path: string = "/helloworld";

  /**
   * RouteConfigのパラメータです: [name]。
   */
  name: string = "HelloWorld";

  /**
   * RouteConfigのパラメータです: [component]。
   */
  component: object = () => import("%%/sample/pages/HelloWorld.vue");

  /**
   * RouteConfigのパラメータです: [meta]。
   */
  meta: any = {
    reload: false,
    authRequired: true
  };
}
