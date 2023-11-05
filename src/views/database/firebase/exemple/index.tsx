import {
    Grid,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import AddTask from "components/elements/tasks/AddTask";

import Img from 'components/styling/StyledImg';
import Completing from 'assets/svg/database/completing.svg';

import ListeTaches from "./ListeTaches";

const ConfigFirebase: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <SubCard title='Ajouter une tâche 📝 (Create ➕)'>
                        <AddTask />
                    </SubCard>
                </Grid>
                <Grid item xs={3}>
                    <Img src={Completing} alt='Create' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Les tâches dans la BD (Read 🤓, Update ✏️, delete 🗑️)'>
                        <ListeTaches />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ConfigFirebase;