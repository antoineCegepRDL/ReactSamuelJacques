import {
    IconAtom2,
    IconWriting
} from '@tabler/icons';

import { PhishingOutlined, WebhookOutlined } from '@mui/icons-material';

import { MenuCollapse, MenuItemChildren } from 'ts/interfaces/Iside-bar';

const states: MenuCollapse = {
            id: 'states',
            title: 'États',
            caption:'Semaine 11',
            type: 'collapse',
            icon: WebhookOutlined,
            children: [
                {
                    id: 'hooks',
                    title: 'Hooks',
                    caption:'Motivations',
                    type: 'item',
                    url: '/states/hooks',
                    icon:PhishingOutlined,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'redux',
                    title: 'Redux',
                    caption:'Librairie' ,
                    type: 'item',
                    url: '/states/redux',
                    icon:IconAtom2,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'projetterminalstates',
                    title: 'Suite du projet',
                    caption:'Projet terminal',
                    type: 'item',
                    url: '/states/projet',
                    icon:IconWriting,
                    breadcrumbs: false
                } as MenuItemChildren,
            ]
        }

export default states;
