import {
    Grid,
    Link,
    Typography,
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import OrderDelivered from 'assets/svg/states/Order_delivered.svg';

import SubCard from "components/elements/cards/SubCard";
import CodeHighligther from "components/styling/CodeHighligther";

const InstallationRedux: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Installation'>
                        <Typography variant='body1'>
                            Nous allons utiliser NPM pour l'installation de Redux Tool Kit (RTK).
                        </Typography>
                        <CodeHighligther code='~> npm install @reduxjs/toolkit'/>
                        <Typography variant='body1'>
                            RTK permet de réduire le code à écrire pour que Redux fonctionne. Le "boilerplate" code est souvent critiqué avec Redux standard.
                        </Typography>
                        <Link href='https://redux-toolkit.js.org/introduction/getting-started' target='_blank'>Documentation officielle de Redux Tool Kit</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={OrderDelivered} alt='Personnal Data' sx={{width:{xs:"100%"},}} />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default InstallationRedux;