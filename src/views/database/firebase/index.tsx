import {
    Box,
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";
import HorizontalLinearStepper from 'components/elements/HorizontalStepper';
import { StepperElements } from 'ts/interfaces/IStepper';

import Firebase from "./Firebase";
import FirebaseConsole from "./FirebaseConsole";
import ConfigFirebase from "./ConfigFirebase";
import ExempleFirebase from "./exemple";

const HooksIndex: React.FC = () => {

    const steps: StepperElements[] = [
        {label:'Firebase', elements:<Firebase />},
        {label:'Mise en place', elements:<FirebaseConsole />},
        {label:'Configuration', elements:<ConfigFirebase />},
        {label:'Exemple', elements:<ExempleFirebase />},
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