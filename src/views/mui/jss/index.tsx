import {
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import JSS from "./JSS";
import CodeSX from "./codeSX";

const JssIndex: React.FC = () => {
    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <JSS />
                    </Grid>
                    <Grid container spacing={2}>
                        <CodeSX />
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default JssIndex;