import {
    Grid,
    Link,
    Typography,
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import OrderDelivered from 'assets/svg/states/Order_delivered.svg';

import SubCard from "components/elements/cards/SubCard";
import CodeHighligther from "components/styling/CodeHighligther";

const InstallationJest: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Installation'>
                        <Typography variant='body1'>
                            Nous allons utiliser NPM pour l'installation de Jest.
                        </Typography>
                        <Typography variant='body1'>
                           Il est à noté que si vous avez utilisé npx create-react-app, Jest est installé par défaut.
                        </Typography>
                        <CodeHighligther code='~> npm install jest'/>
                        <Link href='https://jestjs.io/docs/tutorial-react' target='_blank'>Documentation officielle de Jest</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={OrderDelivered} alt='Personnal Data' sx={{width:{xs:"100%"},}} />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default InstallationJest;