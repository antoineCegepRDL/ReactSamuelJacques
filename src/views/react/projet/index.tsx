import {
    Grid,
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import Presentation from "./Presentation";
// import Exemple from "./Exemples";

const Introduction: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <Presentation />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default Introduction;