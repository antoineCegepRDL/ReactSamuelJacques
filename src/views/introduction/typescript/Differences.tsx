import {
    Grid,
    Typography,
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";

import CodeHighligther from "components/styling/CodeHighligther";

const Differences: React.FC = () => {
    const js:string = `
    const Ajouter = (a,b) => {
        return a+b;
    }
    `

    const ts:string = `
    interface NumProps {
        a:number,
        b:number
    }

    const Ajouter = ({a,b}: NumProps) => {
        return a+b;
    }
    `
    return (
        <Grid item xs={12} sx={{mb:2}}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='JavaScript ⭐'>
                        <Typography variant="body1">
                            Le code est réduit, mais on ne sait pas si c'est pour additionner des nombres ou concatonner des <i>string</i>. Il est même possible de faire: 
                            <pre><code>"4" + 2 = 42 ou "42"</code></pre>
                        </Typography>
                        <CodeHighligther language="javascript" code={js}/>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='TypeScript 🌟'>
                        <Typography variant="body1">
                            Le code est est allongé, mais maintenant on sait exactement ce que le code fait et retourne.
                        </Typography>
                        <CodeHighligther code={ts}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Differences;