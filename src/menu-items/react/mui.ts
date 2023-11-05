import {
    IconForms,
    IconWriting,
    IconArtboard,
    IconShape
} from '@tabler/icons';

import { AutoAwesomeOutlined } from '@mui/icons-material';

import { MenuCollapse, MenuItemChildren } from 'ts/interfaces/Iside-bar';

const architecture: MenuCollapse = {
            id: 'mui',
            title: 'Material Design',
            caption:'Semaine 9',
            type: 'collapse',
            icon: AutoAwesomeOutlined,
            children: [
                {
                    id: 'frameworkscss',
                    title: 'Frameworks',
                    caption:'MD, BS, TW',
                    type: 'item',
                    url: '/mui/frameworks',
                    icon:IconShape,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'mui',
                    title: 'MUI',
                    caption:'Framework CSS',
                    type: 'item',
                    url: '/mui/mui',
                    icon:IconArtboard,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'composantes',
                    title: 'Composantes',
                    caption:'Présentation',
                    type: 'item',
                    url: '/mui/composantes',
                    icon:IconForms,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'jss',
                    title: 'JSS',
                    caption:'JSS + SX = ✨',
                    type: 'item',
                    url: '/mui/jss',
                    icon:IconForms,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'compteur',
                    title: 'Suite du projet',
                    caption:'Projet terminal',
                    type: 'item',
                    url: '/mui/projet',
                    icon:IconWriting,
                    breadcrumbs: false
                } as MenuItemChildren,
            ]
        }

export default architecture;
