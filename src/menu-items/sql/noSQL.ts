import {
    IconBrandFirebase,
    IconDatabase,
    IconClipboardList,
    IconWriting
} from '@tabler/icons';

import { MenuCollapse, MenuItemChildren } from 'ts/interfaces/Iside-bar';

const introduction: MenuCollapse = {
            id: 'database',
            title: 'Base de données',
            caption:'Semaine 10',
            type: 'collapse',
            icon: IconDatabase,
            children: [
                {
                    id: 'types',
                    title: 'Types',
                    caption:'NoSQL, SQL',
                    type: 'item',
                    url: '/database/types',
                    icon:IconClipboardList,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'firebase',
                    title: 'Firebase',
                    caption:'CRUD',
                    type: 'item',
                    url: '/database/firebase',
                    icon:IconBrandFirebase,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'projetterminaldatabase',
                    title: 'Suite du projet',
                    caption:'Projet terminal',
                    type: 'item',
                    url: '/database/projet',
                    icon:IconWriting,
                    breadcrumbs: false
                } as MenuItemChildren,
            ]
        }

export default introduction;
