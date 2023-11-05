import {
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import LangageTS from "./Typescript";
import Differences from './Differences'

const TypeScript: React.FC = () => {
    return (
            <Grid container sx={{width:'99%'}}>

                <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Grid container spacing={2}>
                        <LangageTS />
                    </Grid>
                    <Grid container spacing={2}>
                        <Differences />
                    </Grid>
                </MainCard>
                </Grid>
            </Grid>
    );
}


export default TypeScript;