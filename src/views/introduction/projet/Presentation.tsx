import {
    Grid,
    Typography
} from "@mui/material";

import { IconUrgent } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import Img from 'components/styling/StyledImg';
import SubCard from "components/elements/cards/SubCard";
import ProjectBeginning from 'assets/svg/projet/ProjectBeginning.svg';
import AvatarList from "components/elements/lists/AvatarList";

const NPX: React.FC = () => {
    const lectureItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Le projet sera un SPA en React', secondaryText:'Construit par vous 🚧'},
        {avatar:'👉', primaryText:'Devra être fait en TypeScript', secondaryText:'Pour vous familiariser tout de suite à la technologie'},
        {avatar:'👉', primaryText:'Chaque éléments vu en classe sera ajouté au projet', secondaryText:'Bloc par bloc'},
        {avatar:'👉', primaryText:'Le site aura une page d\'authentification et un tableau de bord', secondaryText:'Avec un graph et tout ! 📈'},
        {avatar:'👉', primaryText:'Les remises se feront par blocs', secondaryText:'Il sera donc important de vous garder à jour'},
    ];

    const pourSemaineProchaineItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Créer un projet sur Github', secondaryText:'Appeler le projet de session et ajoutez moi.'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Mettre un projet React dans Github', secondaryText:'Créer le projet avec NPX et ajoutez le dans le Github'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Présentation du projet'>
                        <Typography variant="body1">
                            Vous débutez aujourd'hui un projet qui perdurera jusqu'à la fin de la session.
                        </Typography>
                        <AvatarList items={lectureItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Pour la semaine prochaine 🗓️'>
                        <Typography variant="body1">
                            Voici les éléments qui devront être fait pour la semaine prochaine
                        </Typography>
                        <AvatarList items={pourSemaineProchaineItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={ProjectBeginning} alt='Début du projet' sx={{width:{xs:"100%"}}} />
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NPX;