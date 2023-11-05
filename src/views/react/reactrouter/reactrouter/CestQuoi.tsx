import {
    Grid,
    Link,
    Typography
} from "@mui/material";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const CestQuoi: React.FC = () => {
    const lectureItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'Il change uniquement les éléments concernés selon l\'URL défini.', secondaryText:'On ne reload donc jamais une page au complet.'},
        {avatar:'👉', primaryText:'Les pages qui ne sont pas utilisées seront mises en "LazyLoad" et seront uniquement chargées lorsque demandées. (Hors de la portée du cours)', secondaryText:'Dans un monde idéal, tout ce qui n\'est pas immédiatement à l\'écran devrait être "lazyloaded"'},
    ];

    const indexTsx = `
    import React from "react";
    import {
      BrowserRouter as Router,
      Routes,
      Route,
      Link
    } from "react-router-dom";
    
    const App = () => {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
    
    const Home = () => {
      return <h2>Home</h2>;
    }
    
    const About = () => {
        return <h2>About</h2>;
    }
    
    const Users = () => {
        return <h2>Users</h2>;
    }
    `

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                  <SubCard title='React Router'>
                      <Typography variant="body1">
                          <Link href='https://reactrouter.com/docs/en/v6/getting-started/overview' sx={{mt:1}}>React Router</Link> permet de créer plusieurs pages à l'intérieur d'un site de type SPA.
                      </Typography>
                      <AvatarList items={lectureItems}/>
                  </SubCard>
                </Grid>
                <Grid item md={12} xs={12}>
                  <SubCard title='Exemple'>
                      <Typography variant="body1" sx={{mb:1}}>
                              On place le <b>BrowserRouter</b> dans <b>index.tsx</b>
                      </Typography>
                      <CodeHighligther code={indexTsx} />
                  </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CestQuoi;