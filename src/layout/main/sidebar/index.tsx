import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { sidebarWidth } from 'data/theme';

import PerfectScrollbar from 'react-perfect-scrollbar';

import LogoSection from 'ui-components/logo-section';
import MenuList from './menu-list';

const SideBar: React.FC = () =>
{
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <Box sx={{width:sidebarWidth}}>
            <Box sx={theme => theme.mixins.toolbar}/>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
            <PerfectScrollbar
                component='div'
                style={{
                    height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                    paddingLeft: '16px',
                    paddingRight: '16px'
                }}
            >
                <MenuList />
            </PerfectScrollbar>
        </Box>
    );
}

export default SideBar;