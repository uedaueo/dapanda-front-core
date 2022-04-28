import {createApp, h} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "@/router";
import RootFrame from "@/components/framework/RootFrame/RootFrame";

loadFonts()

const app = createApp({
    render: () => {
        return h(RootFrame);
    }
});
app
  .use(vuetify)
    .use(router)
    .mount('#app')
