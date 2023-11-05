import {
    Box,
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";

import MUI from "./mui";
import CodeMUI from "../mui/codeMUI";

import HorizontalLinearStepper from 'components/elements/HorizontalStepper';
import { StepperElements } from 'ts/interfaces/IStepper';

const MUIPage: React.FC = () => {
    const steps: StepperElements[] = [
        {label:'MUI', elements:<MUI />},
        {label:'Intégration minimale', elements:<CodeMUI />}
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


export default MUIPage;