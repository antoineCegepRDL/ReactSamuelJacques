import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Hooks = Loadable(lazy(() => import('views/states/hooks')));
const Redux = Loadable(lazy(() => import('views/states/redux')));
const Projet = Loadable(lazy(() => import('views/states/projet')));

const StatesRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/states',
            element: <Hooks />
        },
        {
            path: 'states',
            children: [
                {
                    path: 'hooks',
                    element: <Hooks />
                },
                {
                    path: 'redux',
                    element: <Redux />
                },
                {
                    path: 'projet',
                    element: <Projet />
                },
            ],
            
        },
    ]
};

export default StatesRoutes;
