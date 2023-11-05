import {
    Grid,
    Typography,
} from "@mui/material";

import {
    IconHome,
    IconCode
} from "@tabler/icons";

import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

import Img from 'components/styling/StyledImg';
import Create from 'assets/svg/database/create.svg';

import SubCard from "components/elements/cards/SubCard";

import FirebaseFile from "./code/FirebaseFile";

const ConfigFirebase: React.FC = () =>
{
    const configurationItems: AvatarListItem[] = [
        {avatar:<IconHome color='white'/>, primaryText:'Si vous étiez encore sur la page de Firestore, cliquer sur "Project Overview"', secondaryText:'L\'url devrait ressembler à ça : https://console.firebase.google.com/project/nomDuProjet/overview'},
        {avatar:<IconCode color='white'/>, primaryText:'Cliquer sur "Add app" (s\'il apparait), puis sur l\'icône (</>)', secondaryText:'Ça va ouvrir l\'ajout d\'une application web'},
        {avatar:'👉', primaryText:'Garder la page ouverte, nous allons en avoir de besoin dans quelques instants', secondaryText:'Ou placez le sur un document texte en attendant'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Aller chercher la configuration 🔥'>
                        <AvatarList items={configurationItems} />
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={Create} alt='Personnal Data' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='FirebaseDataStore.ts'>
                        <Typography variant='body1'>
                            Créer le fichier fichier <b>firebase.ts</b> à la racine du dossier <b>src</b>. Ajouter le code suivant
                        </Typography>
                        <FirebaseFile />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ConfigFirebase;