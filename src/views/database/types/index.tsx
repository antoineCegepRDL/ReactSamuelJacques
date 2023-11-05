import {
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import Databases from "./sql/Databases";
import Exemple from "./sql/Exemple";

const Installation: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <Databases />
                        <Exemple />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default Installation;