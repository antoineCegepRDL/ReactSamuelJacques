import {
    IconAppWindow,
    IconInfoCircle
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const ExpApp: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:<IconAppWindow color='white'/>, primaryText:'Mettre le thème dans App.tsx', secondaryText:'Provisionne le thème à toute l\'application'},
        {avatar:<IconInfoCircle color='white'/>, primaryText:'On peut placer CSSBaseline dans App.tsx', secondaryText:'Ou le placer dans le component de Layout'},
    ];

    const codeApp = `
    import CssBaseline from '@mui/material/CssBaseline';
    import { ThemeProvider } from '@mui/material/styles';

    import {
      Routes,
      Route
    } from "react-router-dom";

    import theme from './theme';
    import Layout from './Layout'

    import { About, Users, Home } from './pages'

    const App: React.FC = () => {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </Layout>
        </ThemeProvider>
      );
    }
    
    export default App;
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeApp} />
        </>
    );
}


export default ExpApp;