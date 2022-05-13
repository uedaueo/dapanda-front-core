import {helloVuetifyRouteRecord} from "%/samples/pages/HelloVuetify/HelloVuetifyRouteRecord";
import {helloCompositionRouteRecord} from "%/samples/pages/HelloComposition/HelloCompositionRouteRecord";
import {MenuItem} from "%/components/menu/MenuItem";

export const dummyMenuData: Array<MenuItem> = [
    {
        menuId: 'TopMenu01',
        description: 'TopMenu Sample 01',
        nameId: 'TopMenu01',
        children: [
            {
                menuId: 'HelloVuetify01',
                description: 'Vuetify sample 01',
                path: helloVuetifyRouteRecord.path,
                nameId: helloVuetifyRouteRecord.name as string,
                icon: "mdi-information-outline"
            },
            {
                menuId: 'HelloComposition01',
                description: 'Composition API Sample 01',
                path: helloCompositionRouteRecord.path,
                nameId: helloCompositionRouteRecord.name as string,
                icon: "mdi-information-outline"
            }
        ]
    },
    {
        menuId: 'TopMenu02',
        description: 'TopMenu Sample 02',
        nameId: 'TopMenu02',
        children: [
            {
                menuId: 'HelloVuetify02',
                description: 'Vuetify sample 02',
                path: helloVuetifyRouteRecord.path,
                nameId: 'HelloVuetify01',
                icon: "mdi-information-outline"
            },
            {
                menuId: 'HelloComposition02',
                description: 'Composition API Sample 02',
                path: helloCompositionRouteRecord.path,
                nameId: 'HelloComposition01',
                icon: "mdi-information-outline"
            }
        ]
    }
];
