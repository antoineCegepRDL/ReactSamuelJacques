import {
    Grid,
    Typography
} from "@mui/material";

import AvatarList from "components/elements/lists/AvatarList";
import Img from 'components/styling/StyledImg';
import RandomThoughts from 'assets/svg/mui/random_thoughts.svg';

import SubCard from "components/elements/cards/SubCard";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const BaseMUI: React.FC = () =>
{
    const elementsBaseItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Ajouts de balises meta dans index.html', secondaryText:'viewport, Roboto font (optionnel)', href:'https://mui.com/material-ui/getting-started/installation/'},
        {avatar:'👉', primaryText:'Mettre le Theme dans App.tsx', secondaryText:'En lui passant un thème personnalisé en paramètre', href:'https://mui.com/material-ui/customization/theming/'},
        {avatar:'👉', primaryText:'CSSBaseline', secondaryText:'Permet de réduire les différences entre navigateurs et ajoute des éléments MD supplémentaires.', href:'https://mui.com/material-ui/react-css-baseline/'},
        {avatar:'👉', primaryText:'Créer un gabarit (Layout)', secondaryText:'On crée le squelette du site (ce qui restera statique)'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Les bases de MUI ✅'>
                        <Typography variant="body1">
                            Pour que Material UI fonctionne à son plein potentiel, il lui faut quelques éléments en places dans le projet avant de commencer à intégrer ses éléments. 
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={RandomThoughts} alt='Random Thoughts' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Éléments'>
                        <AvatarList items={elementsBaseItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default BaseMUI;