import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Types = Loadable(lazy(() => import('views/database/types')));
const Firebase = Loadable(lazy(() => import('views/database/firebase')));
const Projet = Loadable(lazy(() => import('views/database/projet')));

const DatabaseRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/database',
            element: <Firebase />
        },
        {
            path: 'database',
            children: [
                {
                    path: 'types',
                    element: <Types />
                },
                {
                    path: 'firebase',
                    element: <Firebase />
                },
                {
                    path: 'projet',
                    element: <Projet />
                },
            ],
            
        },
    ]
};

export default DatabaseRoutes;
