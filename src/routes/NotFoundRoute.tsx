import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const NotFound = Loadable(lazy(() => import('views/notfound')));

const MainRoutes = {
    path: '*',
    element: <Template />,
    children: [
        {
            path: '*',
            element: <NotFound />
        }
    ]
};

export default MainRoutes;
