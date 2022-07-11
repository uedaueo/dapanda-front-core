import {defineComponent} from "vue";
import MenuBar from "%/components/menu/MenuBar/MenuBar.vue";
import {useRouter} from "vue-router";
import {usePageTransitDataStore} from "%/stores/PageTransitDataStore/PageTransitDataStore";
import {useCommonStatusStore} from "%/stores/CommonStatusStore/CommonStatusStore";
import {storeToRefs} from "pinia";
import {RouterHooks} from "@/utils/RouterHooks";

export default defineComponent({
    name: 'App',
    components: {
        MenuBar,
    },
    props: {
        nopagePath: {
            type: String,
            default: "/nopageSample",
            required: true
        }
    },
    setup: (props, context) => {
        console.log("process.env.VUE_APP_DEPLOY_ENVIRONMENT is", process.env.VUE_APP_DEPLOY_ENVIRONMENT
        );

        /* Get OverlayStatus */
        const commonStatusStore = useCommonStatusStore();
        const { overlay } = storeToRefs(commonStatusStore);

        /* remove baseUrl from current pathname */
        const baseUrl = process.env.BASE_URL;
        let targetPath = window.location.pathname;
        if (baseUrl) {
            targetPath = targetPath.slice(baseUrl.length);
        }
        console.log("targetPath: " + targetPath);

        /* Check page exist on directly specified with GET method */
        const router = useRouter();
        let resolved = router.resolve({path: targetPath});
        console.log("matched: " + resolved.matched.length);
        console.log("path: " + resolved.path);
        console.log("name: " + (resolved.name as string));
        console.log("href: " + resolved.href);

        const pageTransitDataStore = usePageTransitDataStore();
        if (resolved.matched.length == 0) {
            // transit to nopage.
            pageTransitDataStore.update(props.nopagePath);
        }

        /* Set Global guards */
        router.beforeResolve((to, from, next) => {
            RouterHooks.beforeResolve(router, to, from, next, props.nopagePath);
        });

        return {
            overlay
        }
    }
});
