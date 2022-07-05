import {createApp, h} from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import pinia from "@/pinia";
import RootFrame from "%/components/framework/RootFrame/RootFrame";
import {dapandaI18n} from "@/i18n";
import {ValidateConfig} from "%/validators/ValidateConfig";
import {createAllRoute} from "@/router";
import {ApiConstructors, ApiConstructorsInterface} from "@/common/ApiConstructors";
import {SampleApiList} from "%/samples/SampleApiList";

loadFonts()

// Initialize API constructors
const defaultApiList: ApiConstructorsInterface = {
    defaultApiList: SampleApiList
}
ApiConstructors.appendConstructor(defaultApiList);

// i18n を初期化します。
ValidateConfig.i18n = dapandaI18n();
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
    .use(ValidateConfig.i18n)
    .use(pinia)
    .use(router)
    .mount('#app')
