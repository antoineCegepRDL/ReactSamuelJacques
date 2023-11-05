import {
    IconInfoCircle
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const CodeAvecHooks: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:<IconInfoCircle color='white'/>, primaryText:'Une fonction anonyme', secondaryText:'Demande uniquement une variable et l\'import du paquet react'},
    ];

    const codeApp = `
    import React, { useState } from 'react';

    const Example = () => {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Vous avez cliqué {count} fois</p>
          <button onClick={() => setCount(count + 1)}>
            Cliquez ici
          </button>
        </div>
      );
    }
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeApp} />
        </>
    );
}


export default CodeAvecHooks;