import {
    IconBraces
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const JSBalise: React.FC = () => {
    const jsBaliseItems: AvatarListItem[] = [
        {avatar:<IconBraces color='white'/>, primaryText:'Ils faut utiliser les accolades pour mettre du code JS dans les balises', secondaryText:'Même pour les commentaires ! Pro tips: Faire CTRL+K+C à la ligne désirée 😎'},
    ];

    const codeJSBalise = `
    const SubCard = ({children, title, sx}: SubCardProps) =>
    <Card sx={{p:1, borderRadius:borderRadius, flexGrow: 1, ...sx}}>
        {/* Les commentaires doivent être entre accolades */}
        {/*
            La ligne ci-dessous 👇 ajoute le CardHeader
            si le props title en haut 👆 n'est pas vide !  
        */}
        {/* C'est donc du JS qui ajoute des balises selon les conditions 🤔 */}
        {title &&
            <CardHeader title={
                <Typography variant="h5" color={'white'}>
                {/* La ligne ci-dessous 👇 place la variable title 😊 */}
                    {title} 
                </Typography>
            } />}
        <CardContent>
            {children}
        </CardContent>
    </Card>
    `

    return (
        <>
            <AvatarList items={jsBaliseItems}/>
            <CodeHighligther code={codeJSBalise} />
        </>
    );
}


export default JSBalise;