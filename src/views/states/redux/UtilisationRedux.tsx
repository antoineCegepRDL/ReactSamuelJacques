import {
    Grid,
    Typography,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";

import CodeProvider from "./codes/CodeProvider";
import CodeCounter from "./codes/CodeCounter";

const UtilisationRedux: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Utilisation de Redux'>
                        <Typography variant='body1'>
                            Pour questionner ou modifier les valeurs dans le store, il suffit d'utiliser les Hooks que Redux nous offre.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='useAppSelector ⬇️'>
                        <Typography variant='body1'>
                            <b>useAppSelector</b> permet d'aller questionner le store et récupérer les valeurs.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='useAppDispatch ⬆️'>
                        <Typography variant='body1'>
                            <b>useAppDispatch</b> permet d'aller exécuter les actions du reducers. Selon ce qui se trouve dans l'action, les valeurs seront modifiées en conséquence.
                        </Typography>
                        <Typography variant='body1'>
                            TLDR; On modifie les valeures ici.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Index.tsx'>
                        <Typography variant='body1'>
                            Il faut ajouter le provider avec le store à Index.tsx pour que l'application puisse l'utiliser.
                        </Typography>
                        <CodeProvider />
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Exemple avec Redux'>
                        <Typography variant='body1'>
                            Pour questionner ou modifier les valeurs dans le store, il suffit d'utiliser les Hooks que Redux nous offre.
                        </Typography>
                        <CodeCounter />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default UtilisationRedux;