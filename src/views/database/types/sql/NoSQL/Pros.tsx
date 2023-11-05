import { IconChecks } from "@tabler/icons";
import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const ProsNoSQL: React.FC = () =>
{
    const prosItems: AvatarListItem[] = [
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Disponibilité',
            secondaryText:'NoSQL est facilement déplaçable sur plusieurs machines et cela permet de le placer sur plusieurs zones ou régions afin de ne pas avoir un \'Single point of failure\''
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Rapidité des requêtes',
            secondaryText:'Puisque les données sont dénormalisée, les requêtes n\'ont pas besoin de join entre les \'tables\'',
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Agilité',
            secondaryText:'Permet aux développeurs de faire des changements à la volé sans avoir à se préocupper des limitations du schéma déjà établi. Ça permet aussi de connecter rapidement plusieurs base de données disparates au besoin'
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Réduction des coûts',
            secondaryText:'Puisqu\'on peut faire facilement de l\'évolution horizontal, on peut augmenter le nombre de machines lors de grosses demandes et en réduire le nombre lorsque la demande est terminée'
        },
    ];

    return(
        <AvatarList items={prosItems}/>
    );
}


export default ProsNoSQL;