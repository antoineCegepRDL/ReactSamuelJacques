import {
    IconMathFunction
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const FonctionAnonyme: React.FC = () => {
    const fonctionAnonymeItems: AvatarListItem[] = [
        {avatar:<IconMathFunction color='white'/>, primaryText:'Les fonctions anonymes s\'utilisent comme des fonctions normales', secondaryText:'Ça permet de rendre la fonction immuable.', href:'https://stackoverflow.com/a/42803030'},
    ];

    const codeFunctionAnonyme = `
    //Immuable
    const add = (a,b) => {
        return (a+b);
    }

    //Modifiable, voir la réponse SO ☝️
    function add(a,b) {
        return (a+b);
    }

    // La fonction vient d'être modifiée
    add = function (x, y) {
        return x - y;
    };

    // Maintenant on n'a plus le bon résultat
    console.log(add(1, 2)); // -1
    `

    return (
        <>
            <AvatarList items={fonctionAnonymeItems}/>
            <CodeHighligther code={codeFunctionAnonyme} />
        </>
    );
}


export default FonctionAnonyme;