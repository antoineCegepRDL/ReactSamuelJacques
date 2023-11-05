import {
    Box,
    Grid,
} from '@mui/material';

import HorizontalLinearStepper from 'components/elements/HorizontalStepper';
import { StepperElements } from 'ts/interfaces/IStepper';

import CestQuoi from './CestQuoi';
import CreerProjet from './CreerProjet';
import Composantes from './Composantes';
import Redirection from './Redirection';

const NodeJsNpm: React.FC = () =>
{
    const steps: StepperElements[] = [
        {label:'Qu\'est-ce que React Router', elements:<CestQuoi />},
        {label:'Créer le projet', elements:<CreerProjet />},
        {label:'Mettre en place les composantes', elements:<Composantes />},
        {label:'Redirection', elements:<Redirection />},
    ]

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <HorizontalLinearStepper steps={steps} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NodeJsNpm;