import {
    Box,
    Grid,
    Typography
} from "@mui/material";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const Composantes: React.FC = () => {
    const lectureItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'On ajoute BrowserRouter dans index.tsx', secondaryText:'Une des rares choses qu\'on ajoute à ce fichier'},
        {avatar:'👉', primaryText:'On crée trois composantes qui représenterons nos pages selon l\'URL', secondaryText:'Dans l\'atomic pattern ⚛️, on serait dans une molécules. qui serait ajouté au template.'},
        {avatar:'👉', primaryText:'On ajoute les switchs au fichier App.tsx', secondaryText:' Voilà, ça fonctionne 🙌'},
    ];

    const indexTsx = `
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    
    import { BrowserRouter } from 'react-router-dom'
    
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    `

    const composantes = `
    export const Home = () => {
        return <h2>Home</h2>;
    }
    
    export const About = () => {
        return <h2>About</h2>;
    }
    
    export const Users = () => {
        return <h2>Users</h2>;
    }
    `

    const appTsx = `
    import {
        Routes ,
        Route,
        Link
      } from "react-router-dom";
      
    import {Home, About, Users} from './composantes'

    //Si vous avez plusieurs fichiers, vous avez plusieurs importes
    //import Home from './composantes/Home'
    //import About from './composantes/Home'
    //import Users from './composantes/Home'
    
    function App() {
    return (
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
    );
    }
    
    export default App;
    `

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <SubCard title='React Router'>
                            <AvatarList items={lectureItems}/>
                        </SubCard>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='index.tsx et composantes'>
                        <Typography variant="body1" sx={{mb:1}}>
                                On place le <b>BrowserRouter</b> dans <b>index.tsx</b>
                        </Typography>
                        <CodeHighligther code={indexTsx} />

                        <Typography variant="body1" sx={{mb:1}}>
                                Créons les 3 composantes TSX
                        </Typography>
                        <Typography variant="body1" sx={{mb:1}}>
                                À votre <b>choix</b> de le faire dans un fichier différent ou non pour cet exercice
                        </Typography>
                        <CodeHighligther code={composantes} />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='App.tsx'>
                        <Typography variant="body1" sx={{mb:1}}>
                                On place les <b>Switch</b> dans <b>App.tsx</b> et voilà !
                        </Typography>
                        <CodeHighligther code={appTsx} />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Composantes;