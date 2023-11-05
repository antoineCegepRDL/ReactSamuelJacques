import {
    IconCirclePlus,
    IconInfoCircle
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const ExpMeta: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:<IconCirclePlus color='white'/>, primaryText:'Ajouter la police Roboto de Google (ou une autre au choix)', secondaryText:'La police Roboto est celle officiellement utilisée par MUI'},
        {avatar:<IconInfoCircle color='white'/>, primaryText:'Ajouter le viewport', secondaryText:'Aide pour le responsive web design'},
    ];

    const codeApp = `
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeApp} />
        </>
    );
}


export default ExpMeta;