import {
    Grid,
    Link,
    Typography
} from "@mui/material";

import {
    IconBrandSpotify,
    IconBrandNetflix,
    IconBrandAmazon,
    IconRocket,
    IconBrandUnity,
    IconAlbum,
} from "@tabler/icons";

import Img from 'components/styling/StyledImg';
import BuildingWebsites from 'assets/svg/mui/building_websites.svg';
import MuiIcon from 'assets/svg/mui/material-ui-1.svg';

import SubCard from "components/elements/cards/SubCard";

import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const MUIFramework: React.FC = () =>
{
    const whoseUsingItItems: AvatarListItem[] = [
        {avatar:<IconBrandSpotify color='green'/>, primaryText:'Spotify'},
        {avatar:<IconBrandAmazon color='yellow'/>, primaryText:'Amazon'},
        {avatar:<IconRocket color='blue'/>, primaryText:'NASA'},
        {avatar:<IconBrandNetflix color='red'/>, primaryText:'Netflix'},
        {avatar:<IconBrandUnity color='white'/>, primaryText:'Unity'},
        {avatar:<IconAlbum color='white'/>, primaryText:'Shutterstock'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Material UI'>
                        <Typography variant="body1">
                            Material UI est un projet d'intégration de Material Design pour React. Il permet de respecter les règles de Material Design sans avoir à coder les thèmes à la main.
                            Material UI est utilisé par de gros projets comme Spotify, Amazon, Nasa, Netflix, Unity et shutterstock.
                        </Typography>
                        <Img src={MuiIcon} alt='Material UI' sx={{width:{xs:"100%"}, maxHeight:'100px', my:5}} />
                        <Link href='https://mui.com/core/' target='_blank'>Documentation officielle de MUI</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title={`Qui l'utilise?`}>
                        <AvatarList items={whoseUsingItItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={BuildingWebsites} alt='Building Website' sx={{width:{xs:"100%"},}} />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default MUIFramework;