import { IconChecks } from "@tabler/icons";
import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const ProsSQL: React.FC = () =>
{
    const prosItems: AvatarListItem[] = [
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Un schéma qui est standardisé',
            secondaryText:'On s\'assure que les données insérées suivent le modèle établie'
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Une très grande communauté',
            secondaryText:'On retrouve facilement quelqu\'un qui a une réponse à nos problèmes',
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Très efficace lors de requêtes complexes',
            secondaryText:'Puisque le schéma est rigide, les requêtes sont très rapides'
        },
        {
            avatar:<IconChecks color='green'/>,
            primaryText:'Suit le modèle ACID',
            secondaryText:'Atomic : Soit on change, soit on change pas. Consitancy : Les données sont valides. Isolation: Chaques transactions est exécutées indépendement. Durability: Une fois enregistrée, les données sont permanentes'
        },
    ];

    return(
        <AvatarList items={prosItems}/>
    );
}


export default ProsSQL;