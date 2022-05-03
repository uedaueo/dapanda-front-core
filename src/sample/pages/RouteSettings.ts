import HelloVuetify from "@/sample/pages/HelloVuetify/HelloVuetify.vue";
import HelloComposition from "@/sample/pages/HelloComposition/HelloComposition.vue";

const routeSettings = () => {
    return [
        { path: '/', component: HelloVuetify },
        { path: '/helloVuetify', component: HelloVuetify },
        { path: '/helloComposition', component: HelloComposition }
    ]
}

export default routeSettings;
