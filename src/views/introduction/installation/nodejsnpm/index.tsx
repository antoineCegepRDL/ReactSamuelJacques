import {
    Box,
    Grid,
} from '@mui/material';

import HorizontalLinearStepper from 'components/elements/HorizontalStepper';
import { StepperElements } from 'ts/interfaces/IStepper';

import NodeJsNpmInstallation from './Nodejs';
import ExtensionVSCode from './ExtensionVSCode';

const steps: StepperElements[] = [
    {label:'NodeJS & NPM', elements:<NodeJsNpmInstallation />},
    {label:'Extensions VS Code', elements:<ExtensionVSCode />}
]

const NodeJsNpm: React.FC = () =>
<Grid item xs={12} sx={{my:2}} >
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <HorizontalLinearStepper steps={steps} />
            </Box>
        </Grid>
    </Grid>
</Grid>

export default NodeJsNpm;