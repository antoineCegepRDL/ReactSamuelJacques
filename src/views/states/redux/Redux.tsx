import {
    Grid,
    Link,
    Typography,
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import ReduxIcon from 'assets/svg/states/redux.svg';
import PersonnalData from 'assets/svg/states/Personal_data.svg';
import FluxPattern from 'assets/images/states/flux_pattern.png';

import SubCard from "components/elements/cards/SubCard";

const Redux: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='Le flux pattern ♾️'>
                        <Typography variant='body1'>
                            Flux pattern est un patron de conception (pattern) qui indique comment les états devraient être géré à travers une application. Les hooks, tel que nous avons vu
                            permet de gérer les states, mais à l'intérieur des composantes ou au mieux (avec useContext), la composante et ses enfants. Le Flux pattern permet de mettre en place une gestion des états qui est disponible à grandeur de l'application.
                        </Typography>
                        <Img src={ReduxIcon} alt='Redux Icon' sx={{width:{xs:"100%"}, maxHeight:'100px', my:5}} />
                        <Typography variant='body1'>
                            Nous allons utiliser Redux qui est une implémentation du patron de conception Flux.
                            Malgré la ressemblance avec le nom de React, Redux est un paquet NPM indépendant qui peut être utilisé avec n'importe quel Framework JavaScript.
                        </Typography>
                        <Link href='https://redux.js.org/' target='_blank'>Documentation officielle de Redux</Link>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Img src={PersonnalData} alt='Personnal Data' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Le patron Flux'>
                    <Link href='https://www.youtube.com/watch?v=_shA5Xwe8_4' target='_blank'>🎥 Regarder la vidéo suivante pour un cours aperçu de Redux.</Link>
                        <Img src={FluxPattern} alt='Flux Pattern' sx={{width:{xs:"100%"}, mt:2}} />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Redux;