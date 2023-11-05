import {
    IconTools,
    IconFlame,
    IconBrandJavascript,
    IconBrandReactNative,
    IconRocket,
    IconWriting
} from '@tabler/icons';

import { MenuCollapse, MenuItemChildren } from 'ts/interfaces/Iside-bar';

const introduction: MenuCollapse = {
            id: 'introduction',
            title: 'Introduction',
            caption:'Semaine 7',
            type: 'collapse',
            icon: IconFlame,
            children: [
                {
                    id: 'framework',
                    title: 'Frameworks',
                    caption:'React, Angular, Vue',
                    type: 'item',
                    url: '/introduction/frameworks',
                    icon:IconBrandReactNative,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'typescript',
                    title: 'TypeScript',
                    caption:'Motivations' ,
                    type: 'item',
                    url: '/introduction/typescript',
                    icon:IconBrandJavascript,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'installations',
                    title: 'Installation',
                    caption:'Extensions, NPM',
                    type: 'item',
                    url: '/introduction/installation',
                    icon:IconTools,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'premierlancement',
                    title: 'Lancement',
                    caption:'L-0, Liftoff!',
                    type: 'item',
                    url: '/introduction/lancement',
                    icon:IconRocket,
                    breadcrumbs: false
                } as MenuItemChildren,
                {
                    id: 'projet1',
                    title: 'Créer un site',
                    caption:'Projet terminal',
                    type: 'item',
                    url: '/introduction/projet',
                    icon:IconWriting,
                    breadcrumbs: false
                } as MenuItemChildren,

            ]
        }

export default introduction;
