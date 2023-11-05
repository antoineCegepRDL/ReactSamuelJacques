import {
    Grid,
    Typography
} from "@mui/material";

import { IconUrgent, IconChecks } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import Img from 'components/styling/StyledImg';
import SubCard from "components/elements/cards/SubCard";
import ProjectBeginning from 'assets/svg/projet/ProjectBeginning.svg';
import AvatarList from "components/elements/lists/AvatarList";

const NPX: React.FC = () => {
    const pourSemaineProchaineItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Installer react-router-dom dans votre projet React', secondaryText:'À l\'aide de NPM'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Mettre en place 3 pages. (voir la section plus bas 👇)', secondaryText:'Elles seront les pages finales du projet'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Commencer à regarder Material-UI et l\'installer au projet', secondaryText:'Pour vous donner une idée du prochain cours.'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Mettre le titre \'TP Terminal\'', secondaryText:'Dans la meta "title" d\'index.html'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Mettre une description \'Travail Pratique Terminal\'', secondaryText:'Dans la meta description. d\'index.html'},
    ];

    const pagesItems: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Page d\'authentification', secondaryText:'Au lien /login'},
        {avatar:<IconChecks color='green'/>, primaryText:'Page de tableau de bord', secondaryText:'Au lien / et au lieu /dashboard'},
        {avatar:<IconChecks color='green'/>, primaryText:'Page des commandes', secondaryText:'Au lien /orders'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Pour la semaine prochaine 🗓️'>
                        <Typography variant="body1">
                            Voici les éléments qui devront être fait pour la semaine prochaine
                        </Typography>
                        <AvatarList items={pourSemaineProchaineItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={ProjectBeginning} alt='Projet' sx={{width:{xs:"100%"}}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Pages à ajouter ➕'>
                        <Typography variant="body1">
                           Je veux un lien par page de disponible
                        </Typography>
                        <AvatarList items={pagesItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NPX;