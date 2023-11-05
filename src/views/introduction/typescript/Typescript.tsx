import {
    Grid,
    Typography
} from "@mui/material";

import { Link }  from '@mui/material';

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import Img from 'components/styling/StyledImg';
import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";

import Thinking from 'assets/svg/typescript/Thinking.svg';
import TSIcon from 'assets/svg/typescript/typescript.svg';
import TSSuperset from 'assets/images/TSSuperset.jpg';

import {
    IconChecks,
    IconX
} from "@tabler/icons";

const Typescript: React.FC = () => {
    const greenColor = '#00c853';
    const redColor = '#c62828';

    const prosItems: AvatarListItem[] = [
        {avatar:<IconChecks color={greenColor}/>, primaryText:'Rend le code plus explicite pour l\'équipe', secondaryText:'Il est plus facile, par exemple, de savoir ce que va retourner une fonction et à quelle résultat s\'attendre.'},
        {avatar:<IconChecks color={greenColor}/>, primaryText:'La fiabilité du code', secondaryText:'Selon une étude, 15% de tous les JavaScript bugs peuvent être trouvés par TypeScript.', href:'https://earlbarr.com/publications/typestudy.pdf'},
        {avatar:<IconChecks color={greenColor}/>, primaryText:'TypeScript et JavaScript peuvent cohabiter', secondaryText:'Il est donc possible dans un projet existant, de lentement le convertir en TypeScript.'},
    ];

    const consItems: AvatarListItem[] = [
        {avatar:<IconX color={redColor}/>, primaryText:'Un faux sentiment de sécurité', secondaryText:'Dans tous les cas, il sera converti en JavaScript et des erreurs bizarres de conversion peuvent encore arriver en production.'},
        {avatar:<IconX color={redColor}/>, primaryText:'Augmente la charge de travail', secondaryText:'Tout doit être typé, avoir une interface, des types louches qui m\'ont fait 🤬 pendant 2h hier, par exemple...'},
        {avatar:<IconX color={redColor}/>, primaryText:'Un autre langage à apprendre', secondaryText:'Même si ça reste du JavaScript, les moultes subtilitées de TypeScript le rendent difficile d\'approche initialement, même pour les développeurs JavaScript aguerris.'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='TypeScript ✅'>
                        <Typography variant="body1">
                            Langage open-source de Microsoft. Celui-ci est orienté objet, côté client qui est ensuite transpilé en JavaScript et interprété par le navigateur.
                            Il a été développer pour réduire les problèmes de typage dynamique en JavaScript. 
                        </Typography>
                        <Img src={TSIcon} alt='TS Icon' sx={{width:{xs:"100%"}, maxHeight:'100px', my:5}} />
                        <Link href='https://www.typescriptlang.org/fr/docs/handbook/typescript-from-scratch.html' target='_blank'>Documentation officielle de TypeScript</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={TSSuperset} alt='Ts Superset' sx={{width:{xs:"100%", md:'80%'}}} />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{my:2}}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Avantages'>
                        <Typography variant="body1">
                            Plusieurs raisons poussent les développeurs et entreprises à convertir leurs codes à TypeScript.
                        </Typography>
                        <AvatarList items={prosItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={Thinking} alt='Thinking...' sx={{width:{xs:"100%"}}} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Inconvénients'>
                        <Typography variant="body1">
                            Mais certaines gardent les développeurs à l'écart...
                        </Typography>
                        <AvatarList items={consItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Typescript;