import {AppBar, Toolbar} from '@mui/material';
import Header from './header';

const AppBarNav: React.FC = () =>
<AppBar
    enableColorOnDark
    position="fixed"
    color="inherit"
    elevation={0}
    sx={{
        bgcolor:'background.default'
    }}
>
    <Toolbar>
        <Header />
    </Toolbar>
</AppBar>

export default AppBarNav;