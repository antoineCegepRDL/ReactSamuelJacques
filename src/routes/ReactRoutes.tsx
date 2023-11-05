import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Architecture = Loadable(lazy(() => import('views/react/architecture')));
const Code = Loadable(lazy(() => import('views/react/code')));
const ReactRouter = Loadable(lazy(() => import('views/react/reactrouter')));
const Projet = Loadable(lazy(() => import('views/react/projet')));

const ReactRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/react',
            element: <Architecture />
        },
        {
            path: 'react',
            children: [
                {
                    path: 'architecture',
                    element: <Architecture />
                },
                {
                    path: 'code',
                    element: <Code />
                },
                {
                    path: 'reactrouter',
                    element: <ReactRouter />
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
