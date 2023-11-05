import {
    IconStack2,
    IconBrandReactNative,
    IconFileCode,
    IconRouter,
    IconWriting
} from '@tabler/icons';


import { MenuCollapse, MenuItemChildren } from 'ts/interfaces/Iside-bar';

const architecture: MenuCollapse = {
            id: 'react',
            title: 'React',
            caption:'Semaine 8',
            type: 'collapse',
            icon: IconBrandReactNative,
            children: [
                {
                    id: 'architecture',
                    title: 'Architecture',
                    caption:'Du projet',
                    type: 'item',
                    url: '/react/architecture',
                    icon:IconStack2,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'code',
                    title: 'Code',
                    caption:'JSX/TSX',
                    type: 'item',
                    url: '/react/code',
                    icon:IconFileCode,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'reactrouter',
                    title: 'React Router',
                    caption:'Gestion des pages',
                    type: 'item',
                    url: '/react/reactrouter',
                    icon:IconRouter,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'projet2',
                    title: 'Suite du projet',
                    caption:'Projet terminal',
                    type: 'item',
                    url: '/react/projet',
                    icon:IconWriting,
                    breadcrumbs: false
                } as MenuItemChildren,
            ]
        }

export default architecture;
