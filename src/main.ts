import {createApp, h} from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import pinia from "@/pinia";
import RootFrame from "%/components/framework/RootFrame/RootFrame";
import {i18n} from "@/i18n";
import {ValidateConfig} from "%/validators/ValidateConfig";
import {appendRouteRecords, createAllRoute} from "@/router";

loadFonts()

// VeeValidateを初期化します。
ValidateConfig.init();

const app = createApp({
    render: () => {
        return h(RootFrame);
    }
});

const router = createAllRoute();

app
  .use(vuetify)
    .use(i18n)
    .use(pinia)
    .use(router)
    .mount('#app')
