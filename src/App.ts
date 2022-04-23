import {defineComponent} from "vue";
import HelloVuetify from "@/sample/pages/HelloVuetify/HelloVuetify.vue";
import HelloComposition from "@/sample/pages/HelloComposition/HelloComposition.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: 'App',
  components: {
    HelloVuetify,
    HelloComposition,
    HelloWorld
  }
});
