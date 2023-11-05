import {
    Grid,
    Typography
} from "@mui/material";

import { Link }  from '@mui/material';
import { AvatarListItem } from "ts/interfaces/IAvatarList";

import Img from 'components/styling/StyledImg';
import SubCard from "components/elements/cards/SubCard";
import Congrats from 'assets/svg/lancement/Congrats.svg';
import CodeHighligther from 'components/styling/CodeHighligther';
import AvatarList from "components/elements/lists/AvatarList";

const NPX: React.FC = () => {

    const lectureItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Faire le premier tutoriel de React', secondaryText:'Ils vous donnera un premier aperçu du code', href:'https://fr.reactjs.org/tutorial/tutorial.html'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={5} xs={12}>
                    <SubCard title='Premier lancement de React 🚀'>
                        <Typography variant="body1">
                            Puisque React est une librairie de Javascript, il n'y a rien à installer de plus sur l'appareil.
                            Il suffit d'aller chercher la librairie sur NPM.
                        </Typography>
                        <Typography variant="body1" sx={{mt:3}}>
                            Ouvrez un CLI et tapper ceci:
                        </Typography>
                        <CodeHighligther code='~> npx create-react-app nomDuProjet --template typescript' language="cli" />
                        <Typography variant="body1" sx={{mt:3}}>
                            Notez que nous utilisons <b><i>npx</i></b> au lieu de <b><i>npm</i></b>.
                        </Typography>
                        <Typography variant="body1" sx={{mt:3}}>
                            <Link href='https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/#:~:text=Npm%20is%20a%20tool%20that,pollution%20in%20the%20long%20term.'>NPX </Link>
                            permet d'exécuter des paquets qui se trouve sur NPM, tel que notre create-react-app qui configure l'environnement de React pour nous.
                        </Typography>
                        <Typography variant="body1" sx={{mt:3}}>
                            Une fois terminé, dans le CLI, il suffit d'aller dans le dossier et faire <CodeHighligther code='nomDuProjet> npm start' language="cli" />
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={Congrats} alt='Congrats !' sx={{width:{xs:"100%"}}} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <SubCard title='Lecture à faire 📖'>
                        <AvatarList items={lectureItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NPX;