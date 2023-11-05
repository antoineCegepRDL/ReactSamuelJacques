import {
    IconArrowsShuffle
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const Mapping: React.FC = () => {
    const ShortHandIfItems: AvatarListItem[] = [
        {avatar:<IconArrowsShuffle color='white'/>, primaryText:'La fonction de mapping permet d\'itérer comme un foreach sur les éléments d\'une liste ', secondaryText:'Cependant un "foreach" ne retourne rien, alors qu\'un "map" retourne un array que JSX peut retourner'},
    ];

    const codeShortHandIf = `
    interface AvatarListItem {
        avatar:React.ReactNode,
        primaryText:string,
        secondaryText?:string,
        href?:string
    }

    interface AvatarListProps {
        items: AvatarListItem[]
    }

    const AvatarList = ({items}: AvatarListProps) =>
    {
        let linkComponent: LinkComponent = {
            component:Link,
            href:''
        }
    
        return(
            //On retourne une liste MUI
            <List>
                {/*
                    Le map (comme un foreach)
                    va tout simplement itérer à travers
                    la liste d'items
                */}

                {items.map((item, index ) => {
                    //Pour chaque éléments fait ceci 👇 et retourne le résultat

                    linkComponent.href = item.href;
                    return (
                        <ListItem key={index} {...(item.href ? { ...linkComponent } :{})}>
                            <ListItemAvatar>
                                <Avatar>
                                    {item.avatar}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.primaryText} secondary={item.secondaryText}/>
                        </ListItem>
                )})}
            </List>
        )
    }
    
    export default AvatarList;
    `

    return (
        <>
            <AvatarList items={ShortHandIfItems}/>
            <CodeHighligther code={codeShortHandIf} />
        </>
    );
}

export default Mapping;