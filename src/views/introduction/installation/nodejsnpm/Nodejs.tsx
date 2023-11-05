import {
    Grid,
    Link,
    Typography,
} from '@mui/material';

import { IconInfoCircle, IconStairs } from '@tabler/icons';

import SubCard from 'components/elements/cards/SubCard';
import AvatarList from 'components/elements/lists/AvatarList';

import { AvatarListItem } from 'ts/interfaces/IAvatarList';

const NodeJsNpmInstallation: React.FC = () => {
    const installationItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Aller sur le site web de Node JS et installer la dernière version', secondaryText:'Cliquer ici', href:'https://nodejs.org/fr/download/current/'},
        {avatar:<IconStairs color='white'/>, primaryText:'Lors de l\'installation, cliquer sur suivant sur tout et cocher l\'installation de Chocolatey sur Windows', secondaryText:'Quand le CMD/Powershell va se lancer, n\'oubliez pas de cliquer sur une touche...'},
        {avatar:<IconInfoCircle color='white'/>, primaryText:'En installant Node JS, NPM (Node Packet Manager) sera automatiquement installé', secondaryText:'Les deux vont de pair'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Installation de React'>
                        <AvatarList items={installationItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='NodeJS 🌐'>
                        <Typography>Node JS est un environnement JavaScript asynchrone orienté événement.
                            Il attend que quelque chose se fasse pour exécuter la fonction désirée.
                            Une fois le travail accompli, il retombe en mode 'sleep'💤.
                        </Typography>
                        <Typography sx={{my:1}}>
                            NodeJS sera le serveur qui délivera le contenu de notre application React (JavaScript).
                            React étant une librairie JavaScript, une fois le contenu demandé livré et s'il n'y a pas d'appel à un API (Application Programming Interface 🚪), il n'y a plus de travail à accomplir.
                            Tout le reste se passe à l'intérieur du navigateur client. 💻
                        </Typography>
                        <Link href='https://nodejs.org/fr/about/'>Site officiel</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Node Packet Manager 📦'>
                        <Typography>NPM est le plus gros dépôt de librairie au monde 🌎</Typography>
                        <Typography sx={{my:1}}>
                            Tous les projets qui s'y trouve sont open-source. Nous allons l'utiliser très souvent pour aller chercher des paquets afin de nous simplifier le développement. 😍 
                        </Typography>
                        <Link href='https://www.npmjs.com/'>Site officiel</Link>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NodeJsNpmInstallation;