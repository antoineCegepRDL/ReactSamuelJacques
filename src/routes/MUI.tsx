import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Frameworks = Loadable(lazy(() => import('views/mui/frameworks')));
const MUI = Loadable(lazy(() => import('views/mui/mui')));
const Composantes = Loadable(lazy(() => import('views/mui/composantes')));
const JSS = Loadable(lazy(() => import('views/mui/jss')));
const Projet = Loadable(lazy(() => import('views/mui/projet')));

const ReactRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/mui',
            element: <MUI />
        },
        {
            path: 'mui',
            children: [
                {
                    path: 'frameworks',
                    element: <Frameworks />
                },
                {
                    path: 'mui',
                    element: <MUI />
                },
                {
                    path: 'composantes',
                    element: <Composantes />
                },
                {
                    path: 'jss',
                    element: <JSS />
                },
                {
                    path: 'projet',
                    element: <Projet />
                },
            ],
            
        },
    ]
};

export default ReactRoutes;
