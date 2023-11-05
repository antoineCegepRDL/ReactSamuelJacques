import {
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import Composantes from "./Composantes";

const ComposantesIndex: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <Composantes />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default ComposantesIndex;