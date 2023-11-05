import {
    Grid,
    Typography
} from "@mui/material";

import { IconUrgent, IconBulb } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";

import CollectionDashboard from "./collections/CollectionDashboard";

import PageDashboard from "./pages/PageDashboard";
import PageCommandes from "./pages/PageCommandes";

const NPX: React.FC = () => {
    const projetTerminalItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Installer Firebase dans votre projet', secondaryText:'À l\'aide de NPM'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Créer votre projet Firestore dans Firebase', secondaryText:'Créez vous un compte au besoin et regardez l\'exemple d\'aujourd\'hui'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Mettre la configuration du projet que vous venez de créer dans FirebaseDataStore.js', secondaryText:'N\'oubliez pas de créer votre web app pour la récupérer'},
    ];

    const projetTerminalItems2: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'L\'opération de Read devra être disponible dans la page Tableau de bord', secondaryText:'Plus de détails 👇'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Les opérations CRUD devront être disponibles dans la page Commandes', secondaryText:'Plus de détails 👇'},
        {avatar:<IconBulb color='yellow'/>, primaryText:'Puisque nous sommes en NoSQL, n\'oubliez pas qu\'il n\'y a pas de schéma à faire pour initialiser la base de données', secondaryText:'L\'atout principal du NoSQL 😉'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title='Pour la fin de session 🗓️'>
                        <Typography variant="body1">
                            Voici les éléments qui devront être fait
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <AvatarList items={projetTerminalItems}/>
                            </Grid>
                            <Grid item md={6}>
                                <AvatarList items={projetTerminalItems2}/>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

                <Grid item md={12} xs={12}>
                    <SubCard title='Collection Commandes 📈'>
                        <CollectionDashboard />
                    </SubCard>
                </Grid>

                <Grid item md={6} xs={12}>
                    <SubCard title='Page Tableau de bord 📈'>
                        <PageDashboard />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Page Commandes 💎'>
                        <PageCommandes />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NPX;