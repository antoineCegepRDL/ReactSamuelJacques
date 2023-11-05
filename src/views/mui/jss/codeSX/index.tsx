import {
    Grid
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import CodeCSS from "./codeCSS";
import CodeSX from "./codeSX";

const CodeSXIndex: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='CSS ⭐'>
                        <CodeCSS />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='SX 🌟'>
                        <CodeSX />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CodeSXIndex;