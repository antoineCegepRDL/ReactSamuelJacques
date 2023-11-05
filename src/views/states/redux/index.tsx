import {
    Box,
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";
import HorizontalLinearStepper from 'components/elements/HorizontalStepper';
import { StepperElements } from 'ts/interfaces/IStepper';

import Redux from "./Redux";
import InstallationRedux from "./InstallationRedux";
import ReduxTypes from "./ReduxTypes";
import UtilisationRedux from "./UtilisationRedux";
import Persistance from "./Persistance";

const HooksIndex: React.FC = () => {

    const steps: StepperElements[] = [
        {label:'Redux, Flux pattern', elements:<Redux />},
        {label:'Installation', elements:<InstallationRedux />},
        {label:'Types dans Redux', elements:<ReduxTypes />},
        {label:'Utilisation de Redux', elements:<UtilisationRedux />},
        {label:'Persistance', elements:<Persistance />},
    ]

    return (
        <Grid container sx={{width:'99%'}}>
            <Grid item xs={12} sx={{mt:2}}>
                <MainCard>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <HorizontalLinearStepper steps={steps} />
                    </Box>
                </MainCard>
            </Grid>
        </Grid>
    );
}


export default HooksIndex;