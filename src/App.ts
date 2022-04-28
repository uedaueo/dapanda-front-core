import {defineComponent} from "vue";
import HelloVuetify from "@/sample/pages/HelloVuetify/HelloVuetify.vue";
import HelloComposition from "@/sample/pages/HelloComposition/HelloComposition.vue";
import MenuBar from "@/components/Menu/MenuBar.vue";

export default defineComponent({
  name: 'App',
  components: {
    MenuBar
  }
});
