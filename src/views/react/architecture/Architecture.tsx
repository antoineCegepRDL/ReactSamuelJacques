import {
    Grid,
    Typography
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import ArchitectureImg from 'assets/images/react/ArchitectureNPX.png';

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";

const Architecture: React.FC = () =>
{
    const architectureItems: AvatarListItem[] = [
        {
            avatar:'📁',
            primaryText:'node_modules contient les modules de npm.',
            secondaryText:'Téléchargé à l\'aide de npm install module ou npm i module (pour sauvé des touches 😎)'
        },
        {
            avatar:'📁',
            primaryText:'public ne sera pas intégré au "bundle" lors du build.',
            secondaryText:'Il contient tout de même le fichier index.html qui est le fichier de départ de React',
            href:'https://create-react-app.dev/docs/using-the-public-folder/'
        },
        {
            avatar:'📁',
            primaryText:'src (source) contient tous ce qui sera transpilé et inclus dans le bundle lors du build',
            secondaryText:'C\'est ici que nous passerons 99.999% de notre temps'
        },
        {
            avatar:'🗒️',
            primaryText:'Les fichiers sous le dossier source sont les fichiers de configuration',
            secondaryText:'Le plus important est package.json qui contient tous les références à npm'
        },
    ];

    return(
        <Grid item xs={12} sx={{mt:2}} >
            <Grid container spacing={2}>
                <Grid item md={9} xs={12}>
                    <SubCard title="Architecture d'un projet React 📝">
                        <Typography variant="body1" sx={{mb:3}}>L'architecture d'un projet react est très simple.</Typography>
                        <AvatarList items={architectureItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Img src={ArchitectureImg} alt='Architecture' sx={{width:{xs:"100%"}, height:'100%'}} />
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Architecture;