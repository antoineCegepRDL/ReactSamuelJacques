import { IconChecks } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";
import AvatarList from "components/elements/lists/AvatarList";

import Img from 'components/styling/StyledImg';
import Dashboard from 'assets/images/database/Dashboard.png';

const CollectionDashboard: React.FC = () => {
    const elementsItems: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Aller dans Firebase et créer une nouvelle collection \'Commandes\'', secondaryText:'Voyez le comme une table'},
        {avatar:<IconChecks color='green'/>, primaryText:'Les champs seront \'date\':timestamp, \'nom\':string, \'item\':string, \'montant\':number', secondaryText:''},
        {avatar:<IconChecks color='green'/>, primaryText:'Créer quelques commandes bidons', secondaryText:'Mettre auto ID pour le Document ID.'},
    ];

    return (
        <>
            <AvatarList items={elementsItems}/>
            <Img src={Dashboard} alt='Collection Commandes' sx={{width:{xs:"100%"}}} />
        </>
    );
}


export default CollectionDashboard;