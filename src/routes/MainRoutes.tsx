import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Framework = Loadable(lazy(() => import('views/introduction/framework')));

const MainRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/',
            element: <Framework />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <Framework />
                }
            ]
        },
    ]
};

export default MainRoutes;
