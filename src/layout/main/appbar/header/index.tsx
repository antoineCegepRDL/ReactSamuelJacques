import { Box } from '@mui/material';
import { DarkModeOutlined, KeyOutlined } from '@mui/icons-material';

import IconButton from 'components/elements/IconButton';
import LogoSection from 'ui-components/logo-section'
import { sidebarWidth } from 'data/theme';

const Header: React.FC = () =>
<>
    <Box
        sx={{
            width: {sm:'auto', md:sidebarWidth},
            display: 'flex'
        }}
    >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
            <LogoSection />
        </Box>
    </Box>

    <Box sx={{ flexGrow: 1 }} />

    <IconButton title='Mode Sombre' ariaLabel='mode sombre' icon={<DarkModeOutlined/>}/>
    <IconButton title='Authentification' ariaLabel='authentification' icon={<KeyOutlined/>}/>
</>



export default Header;