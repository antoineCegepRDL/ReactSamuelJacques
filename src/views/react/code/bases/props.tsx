import {
    IconLicense
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const Props: React.FC = () => {
    const propsItems: AvatarListItem[] = [
        {avatar:<IconLicense color='white'/>, primaryText:'Les propriétés ou "props" sont tout simplement les paramètres passés aux objets JSX', secondaryText:'Le terme porte à confusion, mais dites vous vraiment que c\'est juste les paramètres...',
        href:'https://fr.reactjs.org/docs/components-and-props.html'},
    ];

    const codeProps = `
    interface AvatarItem {
        avatar:React.ReactNode,
        primaryText:string,
        secondaryText?:string,
        href?:string
    }

    //🚨 Nous sommes obligé en TypeScript de définir
    //l'interface du prop (paramètre) que nous voulons utiliser

    //On peut utiliser l'interface plus haut comme type d'objet 👆
    interface AvatarProps {
        items: AvatarItem,
        titre: string,
        nombre?: number
    }

    //On indique que le props (paramètre) sera de type AvatarProps
    //On veut dans cet objet les éléments suivant : item et titre.

    //On est pas obligé d'utilisé tout ce qui se
    //trouve dans AvatarProps s'ils sont optionnels (?)
    const Avatar = ({item, titre}: AvatarProps) =>
    {
        return(
            <>
                {/* Typography est un élément de texte de MUI */}
                <Typography variant="h1">
                    {titre}
                </Typography>
                <Avatar>
                    {item.avatar}
                </Avatar>
                <Typography variant="body1">
                    {item.primaryText}
                </Typography>
                <Typography variant="caption">
                    {item.secondaryText}
                </Typography>
            </>
        )
    }
    
    export default AvatarList;
    `

    return (
        <>
            <AvatarList items={propsItems}/>
            <CodeHighligther code={codeProps} />
        </>
    );
}

export default Props;