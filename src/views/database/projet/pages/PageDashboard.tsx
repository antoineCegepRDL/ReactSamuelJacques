import { IconChecks, IconBulb } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";
import AvatarList from "components/elements/lists/AvatarList";

const PageDashboard: React.FC = () => {
    const elementsItems: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Aller lire les commandes dans la collection \'Commandes\'', secondaryText:'Créer des commandes bidons au besoin si ce n\'est pas fait'},
        {avatar:<IconChecks color='green'/>, primaryText:'En utilisant \'Rechart\', comme dans l\'exemple', secondaryText:'L\'axe des X contient la date. L\'axe des Y contient le nombre de commandes faites par jour'},
        {avatar:<IconBulb color='yellow'/>, primaryText:'Utiliser un formatteur de date afin de vous rendre la tâche plus facile', secondaryText:'Aussi non, puisque le Timestamp de Firebase inclue l\'heure, vous n\'aurez jamais autant plus d\' un artcile à la fois'},
    ];

    return (
        <>
            <AvatarList items={elementsItems}/>
        </>
    );
}


export default PageDashboard;