import {
    Grid,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";

import UneBalise from "./uneBalise";
import FonctionAnonyme from "./fonctionAnonymes";
import JSBalise from "./jsBalise";
import ShortHandIf from "./shorthandIf";
import Mapping from "./mapping";
import Interfaces from "./interfaces";
import Props from "./props";


const Bases: React.FC = () => {
    return (
        <Grid item xs={12} sx={{my:2}}> 
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <SubCard title='Notions de base importantes' >
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <UneBalise />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                    <FonctionAnonyme />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Interfaces />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Props />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <ShortHandIf />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <JSBalise />
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Mapping />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Bases;