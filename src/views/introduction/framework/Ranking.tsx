import {
    Grid,
    Typography
} from "@mui/material";

import { Link }  from '@mui/material';

import Img from 'components/styling/StyledImg';
import JSRanking from 'assets/images/JSRanking.jpg';
import NpmTrendsJS from 'assets/images/introduction/NpmTrendsJS.png';

import SubCard from "components/elements/cards/SubCard";

const Ranking: React.FC = () =>
<Grid item xs={12} sx={{mt:2}} >
    <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
            <Img src={JSRanking} alt='JavaScript Ranking' sx={{width:{xs:"100%"}, maxHeight:'700px'}} />
        </Grid>
        <Grid item md={4} xs={12}>
            <SubCard title='JavaScript en tête de liste 🏆'>
                <Typography variant="body1" sx={{mb:3}}>Javascript est le langage le plus utilisé selon le rapport de StackOverflow 2022.</Typography>
                <Link href='https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language-prof'>Rapport StackOverflow</Link>
                <Typography variant="body1" sx={{mt:3}}>JavaScript est utilisé à toutes les sauces. Front-End, Back-End, AI et IoT, ce langage est très versatile</Typography>
                <Typography variant="body1" sx={{mt:3}}>On retrouve aussi en 5ième position un "superset" de JavaScript, soit TypeScript</Typography>
            </SubCard>
        </Grid>
        <Grid item xs={12}>
            <SubCard title='Les tendances à travers les Frameworks'>
                <Img src={NpmTrendsJS} alt='JavaScript Ranking' sx={{width:{xs:"100%"}}} />
            </SubCard>
        </Grid>
    </Grid>
</Grid>


export default Ranking;