import {
    Grid,
    Typography
} from "@mui/material";

import { IconUrgent, IconChecks } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";
import AuthentiticationSlices from "./slices/AuthentificationSlice";

const NPX: React.FC = () => {
    const projetTerminalItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Installer RTK dans votre projet', secondaryText:'À l\'aide de NPM'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Mettre en place le store et la slice pour les éléments suivant 👇'},
    ];

    const storeItems: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Doit inclure la slice créée précédement', secondaryText:'Bien sûr 😉'},
        {avatar:<IconChecks color='green'/>, primaryText:'Créer les types AppDispatch et RootState', secondaryText:'Yup 😉'},
    ];

    const fonctionnalitesItems: AvatarListItem[] = [
        {
            avatar:'👤',
            primaryText:'Sur la page d\'authentification, sans valider les informations dans Firebase, si un courriel/nom d\'utilisation et un mot de passe sont fournis, changer la valeure du store \'authentifier\' à True et la valeur de \'username\' à celle entrée',
            secondaryText:'Assurez-vous cependant que les valeurs ne sont pas vides. Regarder les propriétés de Textfield de MUI',
            href:'https://mui.com/material-ui/react-text-field/'
        },
        {
            avatar:'✋', primaryText:'Restreindre l\'accès à la page Tableau de bord si la valeur \'Authentifier\' est à False',
            secondaryText:'On simule un vrai login. Donc s\'il n\'est pas authentifié, on le retourne vers la page de connexion',
            href:'https://stackoverflow.com/a/69082743/3753889'
        },
        {
            avatar:<IconChecks color='green'/>, primaryText:'Ajouter \'Bonjour, nomUtilisateur\' au fond à gauche de l\'App Bar',
            secondaryText:'Utilisez votre slice bien sûr. Vous pouvez regardé l\'App bar de ce site 👇 avec l\'icône du cégep.',
        },
        {
            avatar:'❌', primaryText:'Ajouter un bouton au fond à droite de l\'App Bar qui permet de terminer la \'session\'',
            secondaryText:'Il change la valeur du store \'Authentifier\' à False',
        },
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title='Pour la fin de session 🗓️'>
                        <Typography variant="body1">
                            Voici les éléments qui devront être fait (suggérer de le finir pour la semaine 13)
                        </Typography>
                        <AvatarList items={projetTerminalItems}/>
                    </SubCard>
                </Grid>

                <Grid item md={6} xs={12}>
                    <SubCard title='Slice Authentification 🍕'>
                        <AuthentiticationSlices />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Créer le store 🔴'>
                        <AvatarList items={storeItems}/>
                    </SubCard>
                </Grid>

                <Grid item xs={12}>
                    <SubCard title='Fonctionnalités à ajouter ➕'>
                        <AvatarList items={fonctionnalitesItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NPX;