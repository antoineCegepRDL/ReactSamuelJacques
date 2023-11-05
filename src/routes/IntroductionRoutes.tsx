import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Framework = Loadable(lazy(() => import('views/introduction/framework')));
const TypeScript = Loadable(lazy(() => import('views/introduction/typescript')));
const Installation = Loadable(lazy(() => import('views/introduction/installation')));
const Lancement = Loadable(lazy(() => import('views/introduction/lancement')));
const Projet = Loadable(lazy(() => import('views/introduction/projet')));

const IntroductionRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/introduction',
            element: <Framework />
        },
        {
            path: 'introduction',
            children: [
                {
                    path: 'frameworks',
                    element: <Framework />
                },
                {
                    path: 'typescript',
                    element: <TypeScript />
                },
                {
                    path: 'installation',
                    element: <Installation />
                },
                {
                    path: 'lancement',
                    element: <Lancement />
                },
                {
                    path: 'projet',
                    element: <Projet />
                }
            ]
        },
    ]
};

export default IntroductionRoutes;
