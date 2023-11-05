import {
    Button,
    Grid,
    Link,
    Typography
} from "@mui/material";

import { GamepadOutlined } from '@mui/icons-material';

import {
    IconBorderAll,
    IconForms,
    IconCheckbox,
    IconSquare,
    IconTypography,
    IconLayoutSidebar,
    IconLayoutNavbar,
    IconLink,
    IconMenu2,
    IconId,
    IconHourglassHigh,
    IconBone,
    IconBulb,
    IconDots,
    IconStack,
} from "@tabler/icons";

import Img from 'components/styling/StyledImg';
import DesignTeam from 'assets/svg/mui/My_feed.svg';

import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";

const Composantes: React.FC = () =>
{
    const iconColor = 'white';
    const compFreqUsedItems: AvatarListItem[] = [
        {avatar:<GamepadOutlined sx={{color:iconColor}} />, primaryText:<Button variant='contained'>Bouton</Button>},
        {avatar:<IconForms color={iconColor}/>, primaryText:'Textfield', secondaryText:'Des champs textes', href:'https://mui.com/material-ui/react-text-field/'},
        {avatar:<IconCheckbox color={iconColor}/>, primaryText:'Checkbox', secondaryText:'Les cases à cocher', href:'https://mui.com/material-ui/react-checkbox/'},
        {avatar:<IconTypography color={iconColor}/>, primaryText:'Typography', secondaryText:'Permet d\'utiliser de façon uniforme les textes dans MUI', href:'https://mui.com/material-ui/react-typography/'},
    ];

    const worhtNotingLiens: AvatarListItem[] = [
        {avatar:<IconLayoutNavbar color={iconColor} />, primaryText:'App bar', secondaryText:'Navigation en haut de page', href:'https://mui.com/material-ui/react-app-bar/'},
        {avatar:<IconLayoutSidebar color={iconColor} />, primaryText:'Drawer', secondaryText:'Navigation verticale (à gauche dans ce cas-ci)', href:'https://mui.com/material-ui/react-drawer/'},
        {avatar:<IconLink color={iconColor} />, primaryText:'Link', secondaryText:'Un lien, mais peut intégré tous les props de MUI, comme SX', href:'https://mui.com/material-ui/react-link/'},
        {avatar:<IconMenu2 color={iconColor}/>, primaryText:'Menu', secondaryText:'Un menu apparaît lors d\'un clique', href:'https://mui.com/material-ui/react-menu/'},
    ];

    const worhtNotingVisuel: AvatarListItem[] = [
        {avatar:<IconBorderAll color={iconColor}/>, primaryText:'Grid', secondaryText:'Qui sont, comme en Bootstrap, en 12 colonnes de base', href:'https://mui.com/material-ui/react-grid/'},
        {avatar:<IconStack color={iconColor} />, primaryText:'Stack', secondaryText:'Grid en 2D, 1 seule direction (cette liste est en stack)', href:'https://mui.com/material-ui/react-stack/'},
        {avatar:<IconSquare color={iconColor}/>, primaryText:'Box', secondaryText:'Un div, mais peut intégré tous les props de MUI, comme SX', href:'https://mui.com/material-ui/react-box/'},
        {avatar:<IconId color={iconColor} />, primaryText:'Card', secondaryText:'Génère une carte gérée. Tous les éléments sont sur des cartes sur ce site', href:'https://mui.com/material-ui/react-card/'},
    ];
    
    const worhtNotingItemsOther: AvatarListItem[] = [
        {avatar:<IconBulb color={iconColor} />, primaryText:'Material Icons', secondaryText:'plus de 2000 icons disponibles en tout temps', href:'https://mui.com/material-ui/material-icons/'},
        {avatar:<IconDots color={iconColor} />, primaryText:'Stepper', secondaryText:'Pour les éléments avec plusieurs étapes', href:'https://mui.com/material-ui/react-stepper/'},
        {avatar:<IconBone color={iconColor}/>, primaryText:'Skeleton', secondaryText:'Un "placeholder" en attendant que le contenu ait chargé', href:'https://mui.com/material-ui/react-skeleton/'},
        {avatar:<IconHourglassHigh color={iconColor} />, primaryText:'Progress', secondaryText:'Un item en attendant une progression', href:'https://mui.com/material-ui/react-progress/'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Composantes 🧱'>
                        <Typography variant="body1" sx={{mb:2}}>
                            Les composantes de Material UI sont la raison principales que nous utilisons un Framework CSS.
                            Ils permettent de mettre en place Material Design en appelant uniquement les ressources au besoin. 
                            Se sont les bloques de construction fournit par le projet.
                        </Typography>
                        <Link href='https://mui.com/components/' target='_blank'>Liste des composantes de MUI</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Composantes utilisées régulièrement'>
                        <AvatarList items={compFreqUsedItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={DesignTeam} alt='Design Team' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item md={12} xs={12}>
                    <SubCard title='Composantes importantes ❗'>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <AvatarList items={worhtNotingLiens}/>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <AvatarList items={worhtNotingVisuel}/>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <AvatarList items={worhtNotingItemsOther}/>
                        </Grid>
                    </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Composantes;