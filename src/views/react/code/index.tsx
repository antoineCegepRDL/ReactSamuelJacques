import {
    Grid,
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import JsxTsx from "./jsxtsx";
import Bases from "./bases";

const Code: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <JsxTsx />
                        <Bases />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default Code;