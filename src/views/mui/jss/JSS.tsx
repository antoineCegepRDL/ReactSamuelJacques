import {
    Grid,
    Link,
    Typography
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import StaticAssets from 'assets/svg/mui/Static_assets.svg';

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const JSS: React.FC = () =>
{
    const whySXItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Raccourcis', secondaryText:'SX implémente des raccourcis comme mb pour margi-bottom, p pour padding, etc.'},
        {avatar:'👉', primaryText:'Permet un accès direct au thème', secondaryText:'D\'aller chercher les éléments du thème tel que les couleurs primaires et secondaires'},
        {avatar:'👉', primaryText:'Accès aux breakpoints', secondaryText:'Permet de faire le responsive à même l\'élément xs,sm,md,lg, etc.'},
        {avatar:'👉', primaryText:'Faire des calculs à même le CSS', secondaryText:'Regarde l\'exemple avec le drawer'},
        {avatar:'👉', primaryText:'Tout code JSS reste valide', secondaryText:'En cas de doute, tout simplement utiliser le JSS en string et ça fonctionne'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='JSS ⭐'>
                        <Typography variant="body1" sx={{mb:2}}>
                            JSS est une librairie qui permet de faire du CSS à même le JavaScript.
                            Il converti les styles fournits en CSS lors de la transpilation.
                            Rien n'empêche d'utiliser CSS pur en cas de besoin et même SASS.
                        </Typography>
                        <Link href='https://cssinjs.org/?v=v10.9.2' target='_blank'>Documentation officielle de JSS</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='SX 🌟'>
                        <Typography variant="body1" sx={{mb:2}}>
                            Ce n'est pas tant JSS qui nous intéresse, mais le fait que MUI intègre JSS directement avec la props SX.
                            C'est un raccourci qui permet d'intégrer le CSS à même l'objet au besoin. Ce site est maintenant presque entièrement en SX.
                        </Typography>
                        <Link href='https://mui.com/system/getting-started/the-sx-prop/' target='_blank'>Documentation de la props SX</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={StaticAssets} alt='Static assets' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Pourquoi SX ✨'>
                        <AvatarList items={whySXItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default JSS;