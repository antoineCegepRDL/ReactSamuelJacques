import {
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import Architecture from "./Architecture";
import AtomicDesignPattern from './AtomicDesignPattern'
import ExempleADP from './ExempleADP'

const Installation: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <Architecture />
                    </Grid>
                    <Grid container spacing={2}>
                        <AtomicDesignPattern />
                    </Grid>
                    <Grid container spacing={2}>
                        <ExempleADP />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default Installation;