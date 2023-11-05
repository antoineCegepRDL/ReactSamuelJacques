import {
    Grid,
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import { AvatarListItem } from "ts/interfaces/IAvatarList";
import BuildingImg from 'assets/svg/reactrouter/building_blocks.svg';

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";

const CreerProjet: React.FC = () => {
    const lectureItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Créer un projet vide', secondaryText:'npx create-react-app react-router-project --template typescript'},
        {avatar:'👉', primaryText:'Aller dans le projet avec Visual Studio Code', secondaryText:'Si vous ne l\'aviez pas créer avec.'},
        {avatar:'👉', primaryText:'Lancer la commande npm d\'installation :', secondaryText:'npm install react-router-dom'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='Créer le projet'>
                        <AvatarList items={lectureItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Img src={BuildingImg} alt='Building' sx={{width:{xs:"100%"}, height:'100%'}} />
                </Grid>
            </Grid>
        </Grid>
    );
}


export default CreerProjet;