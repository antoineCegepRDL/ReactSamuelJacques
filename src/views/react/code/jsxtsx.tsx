import {
    Box,
    Grid,
    Typography
} from "@mui/material";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const JsxTsx: React.FC = () => {
    const jsxItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'JSX est une extension syntaxique de JS', secondaryText:'Permet de retourner des éléments du UI directement'},
        {avatar:'👉', primaryText:'Ça permet de mettre en évidence le fonctionnement de chaque composantes', secondaryText:'Ainsi que les impacts qu\'ils auront sur le UI'},
        {avatar:'📖', primaryText:'Ce n\'est pas obligé, mais...', secondaryText:'C\'est le gros avantage de React !', href:'https://fr.reactjs.org/docs/introducing-jsx.html'},
    ];

    const tsxItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Haha, le prof c\'est trompé 😂🤣', secondaryText:'Non, les changement avec les fichiers TSX seront uniquement au niveau des types 😎'},
        {avatar:'👉', primaryText:'TSX est un superset de JSX, TypeScript!', secondaryText:'Donc les différences entre les deux ne seront presque jamais au niveau des balises !'},
        {avatar:'👉', primaryText:'Lors de ce cours, presque toutes les différences se retrouveront dans les props.', secondaryText:'Les différences seront donc mineurs'},
        {avatar:'👉', primaryText:'L\'extension de fichier JSX ou TSX indique si l\'on veut que TypeScript soit inclus dans l\'analyse des types', secondaryText:'Normalement, ils devraient tous être TS/TSX ou JS/JSX selon l\'utilisation de TypeScript ou non'},
    ];

    const codeJSX = `
    const element = <h1>Hello, world!</h1>;      
    `

    const codeTSX = `
    const element = <h1>Hello, world!</h1>;      
    `

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='JSX'>
                        <Typography variant="body1">
                            Débutons avec un exemple 🤓
                        </Typography>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <CodeHighligther code={codeJSX} />
                        </Box>
                        <Typography variant="body1">
                            Cette drôle de syntaxe n’est ni une chaîne de caractères ni du HTML.
                        </Typography>
                        <AvatarList items={jsxItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='TSX'>
                        <Typography variant="body1">
                            Débutons avec un exemple (encore!)🤓
                        </Typography>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <CodeHighligther code={codeTSX} />
                        </Box>
                        <AvatarList items={tsxItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default JsxTsx;