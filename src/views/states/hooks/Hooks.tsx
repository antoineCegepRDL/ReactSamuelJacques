import {
    Grid,
    Typography,
} from "@mui/material";

import AvatarList from "components/elements/lists/AvatarList";

import SubCard from "components/elements/cards/SubCard";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

import CodeSansHook from "./CodeSansHook";
import CodeAvecHooks from "./CodeAvecHooks";

const Hooks: React.FC = () =>
{
    const hooksExempleItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Compter et afficher le nombre de clique sur un bouton'},
        {avatar:'👉', primaryText:'Savoir si le drawer est fermé ou ouvert',},
        {avatar:'👉', primaryText:'Savoir quelle tab est ouvert dans une composante Tabs', href:'https://mui.com/material-ui/react-tabs/'},
        {avatar:'👉', primaryText:'Si un menu doit être ouvert ou non'},
        {avatar:'👉', primaryText:'Ajouter des éléments à une liste de Todos'},
    ];

    const interessantsItems: AvatarListItem[] = [
        {avatar:'🤏', primaryText:'Réduit la taille du code', secondaryText:'Élimine le besoin des patterns render props et HoC (des wrappers)', href:'https://fr.reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components'},
        {avatar:'👻', primaryText:'Élimine le besoin d\'écrire des classes', secondaryText:'Il est conseillé de tout convertir en fonction anonyme', href:'https://fr.reactjs.org/docs/hooks-intro.html#motivation'},
        {avatar:'🔀', primaryText:'Remplace les componentDid...', secondaryText:'Vous n\'en avez pas utilisé et vous ne voulez pas en utiliser...', href:'https://fr.reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand'},
    ];

    const hooksTypesItems: AvatarListItem[] = [
        {avatar:'📌', primaryText:'useState', secondaryText:'De définir des états à l\'intérieur de la composante', href:'https://fr.reactjs.org/docs/hooks-overview.html#state-hook'},
        {avatar:'⚡️', primaryText:'useEffect', secondaryText:'Pour aller chercher des données, modifier le DOM, subscribre à des events', href:'https://reactjs.org/docs/hooks-overview.html#effect-hook'},
        {avatar:'💡', primaryText:'useCustomHookParVous', secondaryText:'Il est possible de créer ses propres hooks avec l\'aide de ceux disponibles dans React', href:'https://reactjs.org/docs/hooks-overview.html#building-your-own-hooks'},
        {avatar:'👨‍👧‍👦', primaryText:'useContext', secondaryText:'Au lieu d\'avoir l\'état uniquement dans la composante, on peut partager les données à ses enfants', href:'https://reactjs.org/docs/hooks-reference.html#usecontext'},
        {avatar:'🔌', primaryText:'Et plus encore', secondaryText:'Il existe plusieurs autres hooks, vous pouvez les trouver ici', href:'https://reactjs.org/docs/hooks-reference.html#additional-hooks'},
    ];

    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Les Hooks 🪝'>
                        <Typography variant='body1'>
                            Les hooks sont une façon de gérer l'état d'un élément <b>localement</b>, c'est-à-dire à l'intérieur de la même composante. Ils permettent de mettre à jour une valeure <b>sans</b> avoir à recharger 🔂 la page.
                        </Typography>
                        <Typography variant='body1' sx={{mt:2}}>
                            Voici quelques exemples simples :
                        </Typography>
                        <AvatarList items={hooksExempleItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Motivations des Hooks 🤔'>
                        <AvatarList items={interessantsItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Types de Hooks'>
                        <AvatarList items={hooksTypesItems}/>
                    </SubCard>
                </Grid>

                <Grid item xs={12}>
                    <SubCard title='Exemple de hooks'>
                        <Typography variant='body1' sx={{mt:2}}>
                            Voici du code React sans et avec l'implémentation de Hooks.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <CodeSansHook />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <CodeAvecHooks />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Hooks;