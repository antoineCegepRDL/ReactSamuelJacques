import {
    Grid,
    Typography,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import CodeSlices from "./codes/CodeSlices";
import CodeStore from "./codes/CodeStore";
import CodeHooks from "./codes/CodeHooks";

const ReduxTypes: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <SubCard title='RTK Store 🔴'>
                        <Typography variant='body1'>
                            Le Store est l'endroit où tous les états seront déposés.
                            De cette façon, toutes les composantes sont capables de questionner le Store ainsi que d'activer une action qui modifiera son état.
                            On passe en paramètre tous les reducers lors de la création du Store.
                        </Typography>
                        <CodeStore />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='RTK Store 🔴'>
                        <Typography variant='body1'>
                            Le Store est l'endroit où tous les états seront déposés.
                            De cette façon, toutes les composantes sont capables de questionner le Store ainsi que d'activer une action qui modifiera son état.
                            On passe en paramètre tous les reducers lors de la création du Store.
                        </Typography>
                        <CodeStore />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='RTK Hooks 🪝'>
                        <Typography variant='body1'>
                            Puisque nous sommes en TypeScript, nous devons déclarer de quelle type vont être les hooks. On va placer cette logique dans un fichier hooks.ts.
                            C'est un bon exemple d'Hooks personnalisés.
                        </Typography>
                        <CodeHooks />
                    </SubCard>
                </Grid>
                <Grid item md={12} xs={12}>
                    <SubCard title='RTK Reducers ✅'>
                        <Typography variant='body1'>
                            Les reducers prennent 2 paramètres, <b>state</b> et <b>action</b>.
                            Le reducer va prendre le state actuel dans le store et le modifier selon le résultat de l'action.
                        </Typography>
                        <Typography variant='body1' sx={{mt:2}}>
                            On retrouve un exemple de reducers dans les slices. Voir l'exemple plus bas. 👇
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='RTK Slices 🍕'>
                        <Typography variant='body1'>
                            Les Slices sont des fichiers que l'on donne l'état initial et les reducers. Il va ensuite créer automatiquement les <b>créateurs d'actions</b> ainsi que les <b>types d'actions</b>. 🤖
                        </Typography>
                        <CodeSlices />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default ReduxTypes;