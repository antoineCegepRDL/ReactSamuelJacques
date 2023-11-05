import { Link } from 'react-router-dom';
import { Box, Avatar, ButtonBase, Typography } from '@mui/material';

import AvatarPicture from 'assets/images/LogoCegepRDL.jpg'

const LogoSection: React.FC = () =>
<Box>
    <ButtonBase disableRipple component={Link} to="/">
        <Avatar alt="Logo Cegep RDL" src={AvatarPicture} sx={{width:40, height:40}}/>
        <Typography variant="h6" sx={{textTransform:"uppercase", ml:1, fontSize:'1em'}}>
            Cégep Rivière-du-Loup
        </Typography>
    </ButtonBase>
</Box>


export default LogoSection;
