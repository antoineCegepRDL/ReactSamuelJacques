import { IconX } from "@tabler/icons";
import AvatarList from "components/elements/lists/AvatarList";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

const ConsSQL: React.FC = () =>
{
    const consItems: AvatarListItem[] = [
        {
            avatar:<IconX color='red'/>,
            primaryText:'Évolutivité',
            secondaryText:'À moins de créer des \'Shards\', on peut uniquement augmenter verticalement les capacités SQL. (Verticalement indique qu\'on doit augmenter les composantes de la machine)'
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Normalisation des données',
            secondaryText:'Plus la base de données est grande, plus de join il y aura, plus de table \'view\' seront créé, plus d\'index il y aura, plus elle sera lente',
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Rigidité',
            secondaryText:'Même si le schéma permet de standardisé la base de données et est un avantage, il en est aussi un désavantage lorsque l\'on veut que modifier la base de données et que plusieurs champs/tables sont impactées avec tous les joins, views, etc.'
        },
        {
            avatar:<IconX color='red'/>,
            primaryText:'Demande plusieurs ressources pour évoluer',
            secondaryText:'Puisqu\'une compagnie ne voudra pas investir dans un ordinateur de 10000pb de RAM et 40 000 CPUs, à un moment ou un autre, on devra faire une évolution horizontale et c\'est à ce moment que ça devient compliqué.'
        },
    ];

    return(
        <AvatarList items={consItems}/>
    );
}


export default ConsSQL;