import {
    Grid,
    Link,
    Typography,
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import JestLogo from 'assets/svg/unittest/Jest.svg';
import UsabilityTesting from 'assets/svg/unittest/usability_testing.svg';

import SubCard from "components/elements/cards/SubCard";

const Jest: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='Librairie Jest 🃏'>
                        <Typography variant='body1'>
                            Jest est un outil de test pour JavaScript recommandé par l'équipe de React (avec plusieurs autres).
                        </Typography>
                        <Img src={JestLogo} alt='Jest Icon' sx={{width:{xs:"100%"}, maxHeight:'200px', my:5}} />
                        <Typography variant='body1'>
                            Nous allons utiliser Jest afin de faciliter le développement de nos tests unitaires.
                        </Typography>
                        <Link href='https://fr.reactjs.org/docs/testing.html' target='_blank'>Documentation officielle de Jest par React</Link>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Img src={UsabilityTesting} alt='Testing' sx={{width:{xs:"100%"},}} />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Jest;