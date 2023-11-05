import {
    Grid,
    Typography,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import CodeHelloTest from "./codes/CodeTestComposante";

const Arrange: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title='Arrange, Act et Assert 🧑‍⚖️'>
                        <Typography variant='body1'>
                            Finalement, on crée l'élément de test. Cette composante aura comme extension de fichier ".test.tsx"
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Hello.test.tsx'>
                        <CodeHelloTest />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Arrange;