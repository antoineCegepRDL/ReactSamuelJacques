import {
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";
import ProsCons from "./ProsCons";

import UnitTest from "./UnitTests";

const UniTestIndex: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <UnitTest />
                        <ProsCons />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default UniTestIndex;