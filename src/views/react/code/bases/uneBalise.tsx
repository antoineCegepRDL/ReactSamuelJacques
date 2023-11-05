import {
    IconCode
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const UneBalise: React.FC = () => {
    const plusieursBalisesItems: AvatarListItem[] = [
        {avatar:<IconCode color='white'/>, primaryText:'Une seule balise peut se trouver dans un return à la fois', secondaryText:'Permet de retourner des éléments du UI directement.'},
    ];

    const plusieursBalises = `
    const Ok: React.RC = () => {
        return(
            <h1>Hello, world!</h1>
        );
    }

    const Erreur: React.RC = () => {
        return(
            <h1>Hello, world!</h1>
            <h1>Je suis une balise de trop, erreur! 💣</h1>
        );
    }

    const RetournerPlusieursElements: React.RC = () => {
        return(
            <>
                <h1>Hello, world!</h1>
                <h1>
                    Je ne suis plus une balise de 
                    trop car nous sommes des enfants d'une balise parent 😉
                </h1>
            </>
        );
    }
    `

    return (
        <>
            <AvatarList items={plusieursBalisesItems}/>
            <CodeHighligther code={plusieursBalises} />
        </>
    );
}


export default UneBalise;