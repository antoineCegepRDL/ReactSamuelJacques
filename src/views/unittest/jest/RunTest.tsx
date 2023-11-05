import {
    Grid,
    Typography,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import CodeHighligther from "components/styling/CodeHighligther";

import Img from 'components/styling/StyledImg';
import TestsPassed from 'assets/images/unittest/TestsPassed.png'

const RunTest: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Lancer les tests 🧑‍🔬'>
                        <Typography variant='body1'>
                            Une fois tout en place, il suffit de lancer les tests unitaires avec la commande suivante :
                        </Typography>
                        <CodeHighligther code={"~> npm test"}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Résultats'>
                        <Img src={TestsPassed} alt='Tests Passed' sx={{width:{xs:"100%"},}} />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default RunTest;