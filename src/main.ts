import {createApp, h} from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "@/router";
import pinia from "@/pinia";
import RootFrame from "%/components/framework/RootFrame/RootFrame";
import {i18n} from "@/i18n";
import {ValidateInitializer} from "@/validate/ValidateInitializer";

loadFonts()

// VeeValidateを初期化します。
ValidateInitializer.init();

const app = createApp({
    render: () => {
        return h(RootFrame);
    }
});
app
  .use(vuetify)
    .use(i18n)
    .use(pinia)
    .use(router)
    .mount('#app')
