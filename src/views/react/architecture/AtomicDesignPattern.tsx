import {
    Grid,
    Link,
    Typography
} from "@mui/material";

import {
    IconAtom2,
    IconAtom,
    IconAffiliate,
    IconSquare,
    IconBrandPagekit,
 } from "@tabler/icons";

import Img from 'components/styling/StyledImg';
import AtomicDesignPattern from 'assets/images/react/AtomicDesignPattern.png';

import { HorizontalAvatarListItem } from "ts/interfaces/IAvatarList";
import HorizontalAvatarList from "components/elements/lists/HorizontalList";

import SubCard from "components/elements/cards/SubCard";
import { ChevronRight } from "@mui/icons-material";

const ArchitectureADP: React.FC = () =>
{
    const avatarColor = 'maroon';

    const adpItems: HorizontalAvatarListItem[] = [
        {
            avatar:<IconAtom2 color={avatarColor} />,
            betweenIcon:<ChevronRight sx={{fontSize:'2.5em'}}/>,
            primaryText:'Atome',
            secondaryText:'Minuscule'
        },
        {
            avatar:<IconAtom color={avatarColor}/>,
            betweenIcon:<ChevronRight sx={{fontSize:'2.5em'}}/>,
            primaryText:'Molécules',
            secondaryText:'Petits'
        },
        {
            avatar:<IconAffiliate color={avatarColor}/>,
            betweenIcon:<ChevronRight sx={{fontSize:'2.5em'}}/>,
            primaryText:'Organismes',
            secondaryText:'Moyen'
        },
        {
            avatar:<IconSquare color={avatarColor}/>,
            betweenIcon:<ChevronRight sx={{fontSize:'2.5em'}}/>,
            primaryText:'Templates',
            secondaryText:'Gros'
        },
        {
            avatar:<IconBrandPagekit color={avatarColor}/>,
            betweenIcon:<ChevronRight sx={{fontSize:'2.5em'}}/>,
            primaryText:'Pages',
            secondaryText:'Complet'
        },
    ];

    return(
        <Grid item xs={12} sx={{mt:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title="Atomic Design Pattern ⚛️">
                        <Typography variant="body1">
                            Le patron de design atomic 
                            (
                            <Link href='https://bootcamp.uxdesign.cc/everything-you-need-to-know-about-atomic-design-c7310d8a0bbe#:~:text=Atomic%20Design%20is%20a%20methodology,and%20simplifies%20otherwise%20tedious%20workflows.'>
                                Atomic Design Pattern
                            </Link>
                            ) est une façon d'architecturer les applications React.
                            Un patron est une méthodologie qui permet de construire une application de façon cohérente.
                        </Typography>

                        <Typography variant="body1" sx={{mt:3}}>
                            Une comparaison possible se fait avec le plan d'une maison 🏠
                        </Typography>
                        <Typography variant="body1">
                            Celui-ci indique toutes les pièces de la maison sans pour autant indiquer où se trouve tous les objets.
                        </Typography>
                        <Typography variant="body1">
                            On se doute que la toilettes 🚽 devrait uniquement se trouver dans la salle de bain et non dans le salon.
                        </Typography>

                        <Typography variant="body1" sx={{mt:3}}>
                            Dans le cas de notre patron, voyons chaque élément comme un ensemble atomic
                        </Typography>
                        <HorizontalAvatarList items={adpItems} sx={{my:5,display:'flex', justifyContent:'center'}}/>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Img src={AtomicDesignPattern} alt='Atomic Design Pattern' sx={{width:{xs:"100%"}, height:'100%'}} />
                </Grid>
            </Grid>
        </Grid>
    );
}


export default ArchitectureADP;