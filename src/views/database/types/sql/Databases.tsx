import {
    Grid,
    Typography
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";

import ProsSQL from "./sql/Pros";
import ConsSQL from "./sql/Cons";

import ProsNoSQL from "./NoSQL/Pros";
import ConsNoSQL from "./NoSQL/Cons";

const Databases: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{mt:2}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title="SQL 📈">
                        <Typography variant="body1" sx={{mb:3}}>
                            SQL (Structured Query Language) est un type de base de données. Celui-ci est souvent le plus utilisé.
                            C'est une base de données de type ligne.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title="Avantages 😃">
                        <ProsSQL />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title="Inconvénients 😟">
                        <ConsSQL />
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="NoSQL 📊">
                        <Typography variant="body1" sx={{mb:3}}>
                            Not only SQL est un autre type de base de données couramment utilisé. C'est une base de données de type colonne.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title="Avantages 😃">
                        <ProsNoSQL />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title="Inconvénients 😟">
                        <ConsNoSQL />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Databases;