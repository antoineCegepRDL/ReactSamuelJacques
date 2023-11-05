import {
    Grid,
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import Frameworks from "./frameworks";

const MaterialDesign: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <Frameworks />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default MaterialDesign;