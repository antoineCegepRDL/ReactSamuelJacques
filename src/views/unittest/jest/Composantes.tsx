import {
    Grid,
    Link,
    Typography,
} from "@mui/material";


import SubCard from "components/elements/cards/SubCard";
import CodeHello from "./codes/CodeComposante";

const Composante: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title='Composante 🏗️'>
                        <Typography variant='body1'>
                            Nous allons créer une composantes très simple afin de pouvoir la tester.
                        </Typography>
                        <Typography variant='body1'>
                            Nous allons utiliser Jest afin de faciliter le développement de nos tests unitaires.
                        </Typography>
                        <Link href='https://fr.reactjs.org/docs/testing.html' target='_blank'>Documentation officielle de Jest par React</Link>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Hello.tsx'>
                        <CodeHello />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Composante;