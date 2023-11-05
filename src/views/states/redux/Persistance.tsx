import {
    Grid,
    Link,
    Typography,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import CodeHighligther from "components/styling/CodeHighligther";

const Persistance: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title='Persistance 🍪'>
                        <Typography variant='body1'>
                            Il est possible de sauvegarder les données de Redux dans un cookie.
                        </Typography>
                        <Typography variant='body1'>
                            Dans un reducer, on peut tout simplement ajouter <b>set</b> l'élément voulu avec <b>localStorage.setItem('key', 'value')</b>
                        </Typography>
                        <Typography variant='body1'>
                            Et faire la même chose pour aller rechercher la valeur lors de l'inialisation du reducer
                        </Typography>
                        <CodeHighligther code={`
    export interface AuthentificationState {
        authentifier: Boolean,
        username:string
    }

    //Initialisation avec le localStorage
    const initialState: AuthentificationState = {
      authentifier: localStorage.getItem('Authentifier')?.toString() === 'true' ? true : false,
      username: '',
    };

    //Une slice d'authentification extrêment basique
    export const authentificationSlice = createSlice({
        name: 'authentification',
        initialState,
        reducers: {
          login: (state) => {
            state.authentifier = true;
            localStorage.setItem('Authentifier', state.authentifier.toString());
          },
          logout: (state) => {
            state.authentifier = false;
            localStorage.removeItem('Authentifier');
            localStorage.removeItem('Username');
          },
          setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            localStorage.setItem('Username', state.username);
          },
        },
      });
                        `}/>
                        <Typography variant='body1'>
                            Il existe d'autre librairie, mais ça dépasse les compétences du cours :
                        </Typography>
                        <Link href='https://www.npmjs.com/package/redux-storage' target='_blank'>Redux Storage</Link><br />
                        <Link href='https://www.npmjs.com/package/redux-persist' target='_blank'>Redux Persist</Link>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Persistance;