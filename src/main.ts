import {createApp, h} from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "@/router";
import pinia from "@/pinia";
import RootFrame from "@/components/framework/RootFrame/RootFrame.vue";

loadFonts()

const app = createApp({
    render: () => {
        return h(RootFrame);
    }
});
app
  .use(vuetify)
    .use(pinia)
    .use(router)
    .mount('#app')
