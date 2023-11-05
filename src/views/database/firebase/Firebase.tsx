import {
    Grid,
    Link,
    Typography,
} from "@mui/material";

import Img from 'components/styling/StyledImg';
import FirebaseIcon from 'assets/svg/database/firebase.svg';
import Server from 'assets/svg/database/server.svg';

import SubCard from "components/elements/cards/SubCard";

const Redux: React.FC = () =>
{
    return(
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <SubCard title='Firebase 🔥'>
                        <Typography variant='body1'>
                            Firebase est un <i>Back-end As A Service</i> (BaaS). Il offre multiple services tel que l'authentification, une base de données NoSQL,
                            hébergement, laboratoire de tests ainsi qu'une plateforme de notifications.
                        </Typography>
                        <Img src={FirebaseIcon} alt='Redux Icon' sx={{width:{xs:"100%"}, maxHeight:'100px', my:5}} />
                        <Typography variant='body1' sx={{mb:2}}>
                            Nous allons utiliser la base de données de Firebase.
                        </Typography>
                        <Link href='https://console.firebase.google.com/' target='_blank'>Console Firebase</Link><br />
                        <Link href='https://firebase.google.com/docs/database' target='_blank'>Documentation officielle de Firebase</Link><br />
                        <Link href='https://blog.logrocket.com/build-crud-application-react-firebase-web-sdk-v9/' target='_blank'>L'exemple que nous allons répliquer</Link>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Img src={Server} alt='Server' sx={{width:{xs:"100%"},}} />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Redux;