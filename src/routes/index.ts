import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import NotFoundRoute from './NotFoundRoute';
import IntroductionRoutes from './IntroductionRoutes';
import ReactRoutes from './ReactRoutes';
import StateRoutes from './StatesRoutes';
import DatabaseRoutes from './DatabaseRoutes';
import UnitTestRoutes from './UnitTestRoutes';
import MUI from './MUI';

const ThemeRoutes = () => {
    return useRoutes([
        MainRoutes,
        IntroductionRoutes,
        StateRoutes,
        ReactRoutes,
        MUI,
        DatabaseRoutes,
        NotFoundRoute,
        UnitTestRoutes
    ]);
}

export default ThemeRoutes;