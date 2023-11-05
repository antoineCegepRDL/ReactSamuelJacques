import {
    Grid,
} from "@mui/material";


import Img from 'components/styling/StyledImg';
import ExempleDashBoard from 'assets/images/ExempleDashboard.png';
import ExempleLogin from 'assets/images/ExempleLogin.png';
import ExempleOrders from 'assets/images/ExempleOrders.png';
import SubCard from "components/elements/cards/SubCard";

const NPX: React.FC = () => {

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title="Exemple du tableau de bord 📈">
                        <Img src={ExempleDashBoard} alt='Exemple de tableau de bord' sx={{width:'100%'}} />
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title="Exemple des d'authentification 🔑">
                        <Img src={ExempleLogin} alt='Exemple de authentification' sx={{width:'100%'}} />
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <SubCard title="Exemple des commandes 📦">
                        <Img src={ExempleOrders} alt='Exemple des commandes' sx={{width:'100%'}} />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default NPX;