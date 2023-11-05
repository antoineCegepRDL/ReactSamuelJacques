import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const ShortHandIf: React.FC = () => {
    const ShortHandIfItems: AvatarListItem[] = [
        {avatar:'❓', primaryText:'Le shorthand if est un raccourci qui permet de retourner 1 résultat selon la condition.', secondaryText:'Ça permet de réduire la taille du code et d\'éviter de faire du copier/coller (DRY)'},
    ];

    const codeShortHandIf = `
    interface DeuxTextesProps {
        couleurTexte: string,
        grossirPolice: boolean,
        titre?: string
    }
    
    const DeuxTextes = ({couleurTexte, grossirPolice, titre}: DeuxTextesProps) => {
        return(
            <>
                {/* 
                    Ici, on a fait un if en une ligne,
                    si vrai (non vide) on retourne la couleur,
                    si faux on retourne 'white'
                */}
                <Typography
                    color={couleurTexte ? couleurTexte : 'white'}
                    fontSize={grossirPolice ? '3em' : '1em'}
                >
                    Le titre de l'histoire est: {titre}
                </Typography>
            </>
        );
    }
    `

    return (
        <>
            <AvatarList items={ShortHandIfItems}/>
            <CodeHighligther code={codeShortHandIf} />
        </>
    );
}

export default ShortHandIf;