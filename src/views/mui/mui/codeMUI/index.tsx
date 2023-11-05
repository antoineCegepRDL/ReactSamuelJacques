import {
    Grid,
    Typography
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";

import ExpMeta from './ExpMeta'
import ExpApp from "./ExpApp";
import ExpTheme from "./ExpTheme";

import CodeHighligther from "components/styling/CodeHighligther";

const CodeMUI: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SubCard title='Intégration minimale'>
                        <Typography variant="body1">
                            Voici une intégration de base de MUI dans un nouveau projet.
                        </Typography>
                        <Typography variant="body1">
                            Installer MUI à l'aide de NPM:.
                        </Typography>
                        <CodeHighligther code='~> npm install @mui/material @emotion/react @emotion/styled'/>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Index.html'>
                        <ExpMeta />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='App.tsx'>
                        <ExpApp />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Thème'>
                        <ExpTheme />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default CodeMUI;