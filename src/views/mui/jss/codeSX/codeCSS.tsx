import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const CodeCSS: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Chaque éléments doit être multiplié ici'},
    ];

    const codeCSS = `
    // 0px and up
    #CetÉlémentSpecifique {
        width:100%;
    }
    ...

    // Small devices (landscape phones, 600px and up)
    @media (min-width: 600px) { 
        #CetÉlémentSpecifique {
            width:90%;
        }
     }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { 
        #CetÉlémentSpecifique {
            width:75%;
        }
     }
`

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeCSS} />
        </>
    );
}


export default CodeCSS;