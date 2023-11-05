import {
    Grid
} from "@mui/material";

import MUIFramework from "./MUIFramework";
import BaseMUI from "./BaseMUI";

const FrameworksCss: React.FC = () => {
    return (
        <>
            <Grid container spacing={2}>
                <MUIFramework />
            </Grid>
            <Grid container spacing={2}>
                <BaseMUI />
            </Grid>
        </>
    );
}


export default FrameworksCss;