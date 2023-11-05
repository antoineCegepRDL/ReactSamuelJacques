import {
    Grid,
} from "@mui/material";

import AvatarList from "components/elements/lists/AvatarList";
import Img from 'components/styling/StyledImg';
import JsfImg from 'assets/svg/frameworks/JSF.svg';

import {
    IconBrandAngular,
    IconBrandReactNative,
    IconBrandVue,
    IconRipple,
    IconUnlink,
    IconDeviceAnalytics,
    IconMultiplier1x,
    IconClock
} from "@tabler/icons";
import SubCard from "components/elements/cards/SubCard";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const Frameworks: React.FC = () =>
{
    const frameworksItems: AvatarListItem[] = [
        {avatar:<IconBrandAngular color="red"/>, primaryText:'Angular', secondaryText:'Google, TypeScript', href:'https://angular.io/'},
        {avatar:<IconBrandReactNative color="blue"/>, primaryText:'React', secondaryText:'Facebook, JSX ou TSX', href:'https://reactjs.org/'},
        {avatar:<IconBrandVue color="green"/>, primaryText:'Vue', secondaryText:'Communautaire, JS ou TS', href:'https://vuejs.org/guide/introduction.html#what-is-vue'},
        {avatar:<IconRipple color="cyan"/>, primaryText:'JQuery', secondaryText:'Legacy, désuet', href:'https://jquery.com/'},
    ];

    const motivationItems: AvatarListItem[] = [
        {avatar:<IconClock color='white' />, primaryText:'Temps de développement réduit', secondaryText:'Plus rapide et intuitif'},
        {avatar:<IconMultiplier1x color='white' />, primaryText:'Chargé une seule fois', secondaryText:'Les items dans les autres pages peuvent être \'Lazy loaded\''},
        {avatar:<IconDeviceAnalytics color='white'/>, primaryText:'L\'expérience usager est meilleur', secondaryText:'Tout se fait sans recharger constamment les pages'},
        {avatar:<IconUnlink color='white'/>, primaryText:'Découple les éléments du front-end et back-end', secondaryText:'L\'application est donc plus facile à transporter'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Frameworks JavaScript populaires'>
                        <AvatarList items={frameworksItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={JsfImg} alt='JavaScript Frameworks' sx={{width:{xs:"100%"}}} />
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Motivations des Single Page Applications'>
                        <AvatarList items={motivationItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Frameworks;