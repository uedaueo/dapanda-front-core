import { defineComponent } from 'vue'

import {helloVuetifyData} from "@/sample/pages/HelloVuetify/HelloVuetifyData";
import {helloVuetifySetup} from "@/sample/pages/HelloVuetify/HelloVuetifySetup";

export default defineComponent({
    name: 'HelloVuetify',
    data: () => {
        return helloVuetifyData();
    }
})
