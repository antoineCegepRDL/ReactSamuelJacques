import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import { styled } from '@mui/material/styles';
import { sidebarWidth } from 'data/theme';

import AppBarNav from './appbar'
import Sidebar from './sidebar'

const Main = styled('main')({});

const Template: React.FC = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <AppBarNav />

            {/* Drawer */}
            <Sidebar />

            {/* main content */}
            <Main sx={{
                ml: 0,
                borderBottomLeftRadius:0,
                borderBottomRightRadius:0,
                width: `calc(100% - ${sidebarWidth}px)`,
            }}>
                <Box sx={theme => theme.mixins.toolbar}/>
                <Outlet />
            </Main>
        </Box>
    );
}

export default Template;