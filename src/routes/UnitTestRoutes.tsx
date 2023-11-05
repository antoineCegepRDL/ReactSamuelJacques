import { lazy } from 'react';

import Template from 'layout/main';
import Loadable from 'ui-components/Loadable';

const Jest = Loadable(lazy(() => import('views/unittest/jest')));
const UnitTest = Loadable(lazy(() => import('views/unittest/tests')));

const UnitTestRoutes = {
    path: '/',
    element: <Template />,
    children: [
        {
            path: '/unittest',
            element: <UnitTest />
        },
        {
            path: 'unittest',
            children: [
                {
                    path: 'tests',
                    element: <UnitTest />
                },
                {
                    path: 'jest',
                    element: <Jest />
                },
            ],
            
        },
    ]
};

export default UnitTestRoutes;
