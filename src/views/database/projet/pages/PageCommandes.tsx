import { IconChecks } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";
import AvatarList from "components/elements/lists/AvatarList";

const PageCommandes: React.FC = () => {
    const elementsItems: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Comme dans l\'exemple de Firebase, créer un petit formulaire qui permet d\'ajouter des commandes', secondaryText:'Mettre le \'Timestamp\' dans le champ \'date\'. Vous pouvez utiliser CE projet comme exemple 👇'},
        {avatar:<IconChecks color='green'/>, primaryText:'Remplir le Data Table avec les commandes qui se trouvent dans la collection \'Commandes\' dans Firebase', secondaryText:'Vous pouvez utiliser CE projet comme exemple 👇'},
        {avatar:<IconChecks color='green'/>, primaryText:'Faire fonctionner les boutons \'Modifier\' et \'Supprimer\'', secondaryText:'De la façon de votre choix (formulaire popup ou modification à même la ligne ou mettre les données dans un petit formulaire). Vous pouvez utiliser CE projet comme exemple 👇'},
        {avatar:<IconChecks color='green'/>, primaryText:'La liste des champs éditables : Nom, Item et montant', secondaryText:'Vous n\'avez pas à modifier Id ni Date'},
    ];

    return (
        <>
            <AvatarList items={elementsItems}/>
        </>
    );
}


export default PageCommandes;