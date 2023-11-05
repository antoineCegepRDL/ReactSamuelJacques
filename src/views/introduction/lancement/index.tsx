import {
    Grid, Typography
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";
import SubCard from "components/elements/cards/SubCard";

import NPX from "./NPX";
import CRA from './CRA'


const Introduction: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <NPX />
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{m:2}}>
                            <Grid container spacing={2}>
                                <SubCard title='Félicitations 🥳'>
                                    <Typography variant='body1'> Votre première application React est maintenant fonctionnelle !</Typography>
                                    <CRA />
                                </SubCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default Introduction;