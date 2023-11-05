import { IconChecks } from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";

const AuthentiticationSlices: React.FC = () => {
    const elementsItems: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Créer une slice Authentitication', secondaryText:'Elle n\'aura que 2 attributs'},
        {avatar:<IconChecks color='green'/>, primaryText:'authentifier:boolean', secondaryText:'Une valeure qui indiquera si on est authentifier ou non'},
        {avatar:<IconChecks color='green'/>, primaryText:'username:string', secondaryText:'Une valeure qui indiquera le nom de la personne lorsque qu\'authentifiée'},
    ];

    return (
        <AvatarList items={elementsItems}/>
    );
}


export default AuthentiticationSlices;