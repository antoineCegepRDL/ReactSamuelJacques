import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const CodeSX: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'On l\'écrit une seule fois dans le div que nous voulions modifier'},
    ];

    const codeSX = `
    <Box
        id='CetÉlémentSpecifique'
        sx={{
            width:{
                xs:"100%",
                md:"90%",
                lg:"75%"
            }
        }}>
    </Box>
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeSX} />
        </>
    );
}


export default CodeSX;