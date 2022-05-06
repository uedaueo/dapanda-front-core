import {defineComponent, getCurrentInstance} from 'vue'

import {helloVuetifyData} from "@/sample/pages/HelloVuetify/HelloVuetifyData";
import {helloVuetifySetup} from "@/sample/pages/HelloVuetify/HelloVuetifySetup";
import {HelloVuetifyProps, helloVuetifyProps} from "@/sample/pages/HelloVuetify/HelloVuetifyProps";

export default defineComponent({
    name: 'HelloVuetify',
    props: helloVuetifyProps,
    setup: (props, context) => {
        return helloVuetifySetup(props as HelloVuetifyProps, context)
    },
    data: () => {
        return helloVuetifyData();
    }
})
