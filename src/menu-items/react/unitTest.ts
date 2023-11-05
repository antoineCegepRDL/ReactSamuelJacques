import {
    IconFlask,
    IconAB2,
    IconTestPipe
} from '@tabler/icons';


import { MenuCollapse, MenuItemChildren } from 'ts/interfaces/Iside-bar';

const unitest: MenuCollapse = {
            id: 'unittest',
            title: 'Tests unitaires',
            caption:'Semaine 12',
            type: 'collapse',
            icon: IconFlask,
            children: [
                {
                    id: 'testunitaire',
                    title: 'Tests',
                    caption:'Des composantes',
                    type: 'item',
                    url: '/unittest/tests',
                    icon:IconAB2,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'jest',
                    title: 'Jest',
                    caption:'Librairie',
                    type: 'item',
                    url: '/unittest/jest',
                    icon:IconTestPipe,
                    breadcrumbs: false
                } as MenuItemChildren,
            ]
        }

export default unitest;
