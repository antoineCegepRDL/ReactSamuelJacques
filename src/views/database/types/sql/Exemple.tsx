import {
    Grid,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";

import Img from 'components/styling/StyledImg';
import NoSQL from 'assets/images/database/NoSQLvs.jpg';
import NoSQLvsSQL from 'assets/images/database/NoSQLvsSQL.jpg';
import SqlDifferences from 'assets/images/database/SqlDifferences.jpg';

const Exemple: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{mt:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title="Qui utilise NoSQL et SQL">
                        <Img src={NoSQL} alt='NoSQL' sx={{width:{xs:"100%"}}} />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title="SQL vs NoSQL">
                        <Img src={NoSQLvsSQL} alt='NoSQLvsSQL' sx={{width:{xs:"100%"}}} />
                    </SubCard>
                </Grid>
                <Grid item md={12} xs={12}>
                    <SubCard title="Différences entre SQL et NoSQL">
                        <Img src={SqlDifferences} alt='Differences SQL' sx={{width:{xs:"100%"}}} />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Exemple;