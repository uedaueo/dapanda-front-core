import {MenuItem} from "@/components/Menu/MenuItem";

export const dummyMenuData: Array<MenuItem> = [
    {
        menuId: 'TopMenu01',
        description: 'TopMenu Sample 01',
        nameId: 'TopMenu01',
        children: [
            {
                menuId: 'HelloVuetify01',
                description: 'Vuetify sample 01',
                path: '/helloVuetify',
                nameId: 'HelloVuetify01',
                icon: "mdi-information-outline"
            },
            {
                menuId: 'HelloComposition01',
                description: 'Composition API Sample 01',
                path: '/helloComposition',
                nameId: 'HelloComposition01',
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
                path: '/helloVuetify',
                nameId: 'HelloVuetify01',
                icon: "mdi-information-outline"
            },
            {
                menuId: 'HelloComposition02',
                description: 'Composition API Sample 02',
                path: '/helloComposition',
                nameId: 'HelloComposition01',
                icon: "mdi-information-outline"
            }
        ]
    }
];
