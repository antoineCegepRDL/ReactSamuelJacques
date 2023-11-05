import {
    IconInfoCircle
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const CodeSansHook: React.FC = () => {
    const AppItems: AvatarListItem[] = [
      {avatar:<IconInfoCircle color='white'/>, primaryText:'Demande une classe', secondaryText:'Un constructeur pour y placer l\'état'},
    ];

    const codeApp = `
    class Example extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      render() {
        return (
          <div>
            <p>Vous avez cliqué {this.state.count} fois</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              Cliquez ici
            </button>
          </div>
        );
      }
    }
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeApp} />
        </>
    );
}


export default CodeSansHook;