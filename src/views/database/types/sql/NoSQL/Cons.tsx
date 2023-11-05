import { IconX } from "@tabler/icons";
import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const ConsNoSQL: React.FC = () =>
{
    const consItems: AvatarListItem[] = [
        {
            avatar:<IconX color='red'/>,
            primaryText:'Langage non standard',
            secondaryText:'Le langage change selon la base de données que vous allez utiliser (Redis, DynamoDB, MongoDB, CassandraDB, Firestore, etc.)'
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Plus petite communauté',
            secondaryText:'Puisque la technologie est plus jeune, il y a moins de personnes qui ont eu le temps de l\'apprendre que SQL. Cependant, la communauté continue de grossir à toutes les années',
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Inefficace sur des requêtes complexes',
            secondaryText:'La flexibilité à un coût, Puisque la base de données n\'a pas de structure, la plupart des requêtes demanderont de l\'expérience de programmation et non juste de SQL'
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Iconsistance lors de requêtes',
            secondaryText:'Il peut être difficile d\'assurer que toutes les bases de données sont consitantes entre elles. NoSQL suit le modèle VASe et non ACID. E dans Base indique que d\'éventuelles inconsistances vont arrivées'
        },
    ];

    return(
        <AvatarList items={consItems}/>
    );
}


export default ConsNoSQL;