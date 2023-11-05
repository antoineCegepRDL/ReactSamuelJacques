import {
    Grid,
    Link,
} from "@mui/material";

import AvatarList from "components/elements/lists/AvatarList";
import Img from 'components/styling/StyledImg';
import TailwindCSSImg from 'assets/svg/mui/tailwind_css.svg';
import StateOfCSS from 'assets/images/mui/StateOfCSS.png';

import {
    IconShape,
    IconBrandBootstrap,
    IconBrandBulma,
    IconBrandTailwind,
    IconThumbUp,
    IconClock,
    IconHourglassLow,
    IconBrandCss3
} from "@tabler/icons";
import SubCard from "components/elements/cards/SubCard";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const Frameworks: React.FC = () =>
{
    const frameworksCssItems: AvatarListItem[] = [
        {avatar:<IconShape color="red"/>, primaryText:'Material Design', secondaryText:'Google Apps, Android', href:'https://material.io/design/introduction'},
        {avatar:<IconBrandBootstrap color="Purple"/>, primaryText:'Bootstrap', secondaryText:'Twitter', href:'https://getbootstrap.com/'},
        {avatar:<IconBrandTailwind color="blue"/>, primaryText:'Tailwdind', secondaryText:'Communautaire', href:'https://tailwindcss.com/'},
        {avatar:<IconBrandBulma color="green"/>, primaryText:'Bulma', secondaryText:'Privé', href:'https://bulma.io/'},
    ];

    const motivationItems: AvatarListItem[] = [
        {avatar:<IconClock color='white' />, primaryText:'Temps de développement réduit', secondaryText:'Plus rapide et intuitif (comme les tous les frameworks)'},
        {avatar:<IconHourglassLow color='white' />, primaryText:'Permet de réduire les difficultés inter-navigateurs', secondaryText:'Ça ne peut pas être sous-estimer'},
        {avatar:<IconThumbUp color='white'/>, primaryText:'Développer de bonnes habitudes', secondaryText:'Grids, Flexboxex, Alerts, Couleurs, etc.'},
        {avatar:<IconBrandCss3 color='white'/>, primaryText:'Aider à apprendre le CSS', secondaryText:'Les options sont documentées et souvent utilise du CSS pur pour la personnalisation'},
    ];

    const interessantsItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Tailwind domine', secondaryText:'L\'échantillonage provient de développeur CSS profesionnel', href:'https://tailwindcss.com/'},
        {avatar:'🪶', primaryText:'PureCSS reprend des plumes', secondaryText:'Minuscule librairie avec les fonctionnalités \'core\' de CSS', href:'https://purecss.io/'},
        {avatar:'👉', primaryText:'Materialize CSS', secondaryText:'Une autre librairie disponible de Material Design (ce n\'est pas MUI!)', href:'https://materializecss.com/'},
        {avatar:'🪶', primaryText:'Bootstrap perd ses plumes', secondaryText:'Mais elle n\'en reste pas moins le framework le plus important sur le marché', href:'https://getbootstrap.com/docs/5.0/getting-started/introduction/'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Frameworks CSS populaires'>
                        <AvatarList items={frameworksCssItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={TailwindCSSImg} alt='Tailwind CSS' sx={{width:{xs:"100%"},}} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Motivations des Frameworks CSS'>
                        <AvatarList items={motivationItems}/>
                    </SubCard>
                </Grid>
                <Grid item xs={8}>
                    <SubCard title='État du CSS en 2021'>
                        <Img src={StateOfCSS} alt='State of CSS' sx={{width:{xs:"100%"}, height:'100%', mb:2}} />
                        <Link href='https://2021.stateofcss.com/en-US/technologies/css-frameworks/#css_frameworks_experience_ranking' target='_blank'>État du CSS en 2021</Link>
                    </SubCard>
                </Grid>
                <Grid item xs={4}>
                    <SubCard title='Points Intéressants ➕'>
                        <AvatarList items={interessantsItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Frameworks;