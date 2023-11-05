import { IconX, IconChecks } from "@tabler/icons";
import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";
import { Grid } from "@mui/material";
import SubCard from "components/elements/cards/SubCard";

const ProsCons: React.FC = () =>
{
    const prosItems: AvatarListItem[] = [
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Rend le refonte de code plus facile',
            secondaryText:'Permet de rendre les systèmes plus fiable et stables en s\'assurant que des modifications n\'ont pas eu d\'impact ailleurs qu\'à l\'endroit désiré'
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Fait un QA du code avant les autres paliers',
            secondaryText:'Permet de faire l\'assurance qualité du code avant même de l\'envoyer sur les autres paliers ce qui peut sauver beaucoup de temps de développement',
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Documente le système',
            secondaryText:'Les tests unitaires font une carte du système en montrant tous les cas d\'utilisation qui devraient passer et ne pas passer'
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Rend le déboggage plus facile',
            secondaryText:'Lancer les tests peut montrer dans quel cas l\'unité de code ne passe pas alors qu\'il le devrait'
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Réduit le coût des projets',
            secondaryText:'En attrapant les bugs plus tôt et plus rapidement, il est plus facile de corriger le code en conséquence que de ramanier une application entière pour un bug critique...'
        },
    ];

    const consItems: AvatarListItem[] = [
        {
            avatar:<IconX color='red'/>,
            primaryText:'Augmente la charge de travail',
            secondaryText:'Pour chaque unité de code écrite, plusieurs cas de tests doivent être écrit, ce qui multiplie la charge de travail des programmeurs'
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Difficule avec les UI.',
            secondaryText:'Valider par tests unitaires les interfaces usagé (UI) est beaucoup plus difficile que de tester la logique de l\'application',
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Rends plus complexe les futurs modifications',
            secondaryText:'Si quelque chose vient impacter le résultat final d\'une unité de code, un ou plusieurs tests devront être modifiés pour s\'arrimer avec la nouvelle réalité'
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Il restera des bugs 🐛',
            secondaryText:'Il est impossible de prévoir l\'ensemble des problèmes d\'une unité de code...'
        }
    ];

    return(
        <>
            <Grid item xs={12} md={6}>
                <SubCard title="Avantages">
                    <AvatarList items={prosItems}/>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Inconvénients">
                    <AvatarList items={consItems}/>
                </SubCard>
            </Grid>
        </>
    );
}


export default ProsCons;