import {
    IconStack
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const Interfaces: React.FC = () => {
    const ShortHandIfItems: AvatarListItem[] = [
        {avatar:<IconStack color='white'/>, primaryText:'Les interfaces représentes les objets en JavaScript. C\'est l\'ajout de TypeScript', secondaryText:'Voyez le comme vos objets en C#'},
    ];

    const codeShortHandIf = `
    /*
    Les interfaces indique ce que les objets doivent contenir.
    Dans ce cas-ci, quand je fais une liste d'avatar,
    je veux que tous mes items aient les éléments suivants :

     un avatar : type React.ReactNode 
    (n'importe quelle éléments React valide comme
    <h1>Allo</h1> ou même juste une string comme 'Allo')

     un text primaire : le premier texte du haut

     un texte secondaire : le petit texte 'caption' en bas,
     optionel à cause du ?. S'il n'y en a pas, je ne veux pas d'erreur.
     
     un lien : optionel encore une fois, mais si je veux le transformer en lien,
     je n'ai qu'à y mettre l'url et voilà 😎
     */
    interface AvatarListItem {
        avatar:React.ReactNode,
        primaryText:string,
        secondaryText?:string,
        href?:string
    }

    //Cet interface contient une liste de type AvatarListItem 👆
    interface AvatarListProps {
        items: AvatarListItem[]
    }
    `

    return (
        <>
            <AvatarList items={ShortHandIfItems}/>
            <CodeHighligther code={codeShortHandIf} />
        </>
    );
}

export default Interfaces;