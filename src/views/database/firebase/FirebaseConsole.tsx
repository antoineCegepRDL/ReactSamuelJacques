import {
    Grid,
    Typography,
} from "@mui/material";

import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

import Img from 'components/styling/StyledImg';
import OrderDelivered from 'assets/svg/states/Order_delivered.svg';

import SubCard from "components/elements/cards/SubCard";
import CodeHighligther from "components/styling/CodeHighligther";

const FirebaseConsole: React.FC = () =>
{
    const elementsBaseItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Créer le projet dans Firebase avec le nom que vous voulez', secondaryText:'Vous pouvez laisser coché Google Analytics, c\'est gratuit'},
        {avatar:'👉', primaryText:'Dans la liste Build, créer un Firestore Database', secondaryText:'Choisir \'Start in test mode\''},
        {avatar:'👉', primaryText:'Choisir us-east-1 comme emplacement.', secondaryText:'C\'est le plus près de nous'},
        {avatar:'🥳', primaryText:'Vous avez maintenant un projet Firestore disponible', secondaryText:'La base de données est vide, mais existante!'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Mise en place de Firebase 🔥'>
                        <AvatarList items={elementsBaseItems} />
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={OrderDelivered} alt='Personnal Data' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Installation React'>
                        <Typography variant='body1'>
                            Aller dans le projet React et installer avec npm Firebase.
                        </Typography>
                        <CodeHighligther code='~> npm install firebase'/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FirebaseConsole;