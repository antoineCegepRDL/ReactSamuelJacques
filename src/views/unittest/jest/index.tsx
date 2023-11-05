import {
    Box,
    Grid
} from "@mui/material";

import MainCard from "components/elements/cards/MainCard";
import HorizontalLinearStepper from 'components/elements/HorizontalStepper';
import { StepperElements } from 'ts/interfaces/IStepper';
import ArrangeActAssert from "./ArrangeActAssert";
import Composante from "./Composantes";
import InstallationJest from "./InstallationJest";

import Jest from "./Jest";
import RunTest from "./RunTest";

const HooksIndex: React.FC = () => {

    const steps: StepperElements[] = [
        {label:'Jest', elements:<Jest />},
        {label:'Installation', elements:<InstallationJest />},
        {label:'Composante', elements:<Composante />},
        {label:'Arrange-Act-Assert', elements:<ArrangeActAssert />},
        {label:'Lancer les tests', elements:<RunTest />}
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