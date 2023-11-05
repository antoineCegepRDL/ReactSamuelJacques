import {
    Grid,
    Typography
} from "@mui/material";

import {
    IconUrgent,
    IconBulb,
    IconChecks,
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import AvatarList from "components/elements/lists/AvatarList";

import Img from 'components/styling/StyledImg';
import ProjectBeginning from 'assets/svg/projet/ProjectBeginning.svg';

import CodeHighligther from "components/styling/CodeHighligther";

const ProjetTerminalMUI: React.FC = () => {
    const loginPageItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Vous devez créer une page d\'authentification', secondaryText:'Juste l\'aspect visuel, rien n\'a besoin de fonctionner'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Elle devra être faite à l\'aide de Material-UI et React', secondaryText:'Bien sûr !'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Je veux que la page soit disponible avec React Router.', secondaryText:'Au lien /login'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Elle devra ressembler le plus possible à la page ci-dessous', secondaryText:'Exemple de la page d\'authentification'},
        {avatar:<IconBulb color='yellow'/>, primaryText:'Regarder l\'exemple Template 👀', secondaryText:'Ça devrait vous faciliter grandement la tâche', href:'https://mui.com/material-ui/getting-started/templates/sign-in/'},
    ];

    const dashboardPageItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Vous devez créer une page Dashboard', secondaryText:'Juste l\'aspect visuel, rien n\'a besoin de fonctionner'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Elle devra être faite à l\'aide de Material-UI et React', secondaryText:'Bien sûr !'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Je veux que la page soit disponible avec React Router.', secondaryText:'Au lien /'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Elle devra ressembler le plus possible à la page ci-dessous', secondaryText:'Exemple de la page de Tableau de bord'},
        {avatar:<IconBulb color='yellow'/>, primaryText:'Regarder l\'exemple Template et CE projet 👇', secondaryText:'Ça devrait vous faciliter grandement la tâche', href:'https://mui.com/material-ui/getting-started/templates/dashboard/'},
    ];

    const dashboardPageItems2: AvatarListItem[] = [
        {avatar:<IconChecks color='green'/>, primaryText:'Les éléments doivent absolument respecter l\'Atomic Design Pattern', secondaryText:'Je ne veux pas tout le code dans la même page...'},
        {avatar:<IconChecks color='green'/>, primaryText:'Créer un élément layout qui aura comme composantes une Appbar, un Drawer et le contenu principal changeant au milieu', secondaryText:'Regarder le Dashboard et CE projet 👇', href:'https://mui.com/material-ui/getting-started/templates/dashboard/'},
        {avatar:<IconChecks color='green'/>, primaryText:'Créer une composante (component) Appbar qui contient la navigation à droite.', secondaryText:'Voir les exemples MUI', href:'https://mui.com/material-ui/react-app-bar/#basic-app-bar'},
        {avatar:<IconChecks color='green'/>, primaryText:'Créer une composante (component) Drawer', secondaryText:'Voir les exemples MUI', href:'https://mui.com/material-ui/react-drawer/#permanent-drawer'},
        {avatar:<IconChecks color='green'/>, primaryText:'Il y aura deux items dans la liste du Drawer. Le premier est le lien vers la page du tableau de bord. Le second est vers la page des commandes', secondaryText:'Voir les exemples MUI', href:'https://mui.com/material-ui/react-drawer/#mini-variant-drawer'},
    ];

    const ordersPageItems: AvatarListItem[] = [
        {avatar:<IconUrgent color='red'/>, primaryText:'Vous devez créer une page Orders', secondaryText:'Juste l\'aspect visuel, rien n\'a besoin de fonctionner'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Cette page contiendra un tableau MUI Basic Table', secondaryText:'Descendez à l\'élément Data table sur la page de documentation', href:'https://mui.com/material-ui/react-table/#basic-table'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Ajouter une colonne avec un bouton au bout qui permet de modifier ✏️ un item sur chacune des lignes', secondaryText:'Il n\'a pas besoin de fonctionner'},
        {avatar:<IconUrgent color='red'/>, primaryText:'Ajouter une colonne avec un autre bouton au bout qui permet de supprimer ❌ un item sur chacune des lignes', secondaryText:'Il n\'a pas besoin de fonctionner'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={8} xs={12}>
                    <SubCard title='Pour la semaine prochaine 📆'>
                        <Typography variant="body1">
                            Voici les éléments qui devront être fait pour la semaine 11.
                        </Typography>
                        <Typography variant="body1">
                            ❗Ne vous stressez pas à mettre un layout selon les routes. Il peut être appliqué directement à la composante "View" au besoin.❗
                        </Typography>
                        <Typography variant="body1">
                            Vous pouvez faire beaucoup plus simple que ce que CE projet fait 👇.
                        </Typography>
                        <Typography variant="body1">
                            Vous ne serez pas pénalisé pour ce copier coller, ça dépasse les compétences du cours.
                        </Typography>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Img src={ProjectBeginning} alt='Projet' sx={{width:{xs:"100%"}}} />
                </Grid>
                <Grid item xs={12}>
                    <SubCard title='Exemple de Routes avec layout dans les composantes directement'>
                         <Typography variant="body1">
                            Sûrement ce que vous avez déjà :
                        </Typography>
                        <CodeHighligther code={`
    const App = () => {
        return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={Dashboard} />
                <Route path="/dashboard" element={Dashboard} />
                <Route path="/orders" element={Orders} />
                <Route path="/login" element={Authentification} />
                <Route path="*" element={<>404</>} />
            </Routes>
        </ThemeProvider>
        );
    }
                        `}
                        />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Exemple MinimalLayout Authentification'>
                    <Typography variant="body1">
                            Si on a pas besoin du layout avec l'Appbar et le sidebar, on le place dans un layout "Minimal"
                    </Typography>
                    <CodeHighligther code={`
    import MinimalLayout from "layout/minimalLayout";

    const Authentification = () => {
        return(
            <MinimalLayout>
                Page d'authentification...
            </MinimalLayout>
        );
    }

    export default Authentification;
                        `}
                        />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Exemple Mainlayout Dashboard (ou tout autre composante)'>
                    <Typography variant="body1">
                            Si on a besoin du layout avec l'Appbar et le sidebar, on le place dans un layout "Mainlayout"
                    </Typography>
                    <CodeHighligther code={`
    import MainLayout from "layout/mainLayout";

    const Dashboard = () => {
        return(
            <MainLayout>
                Tableau de bord...
            </MainLayout>
        );
    }

    export default Dashboard;
                        `}
                        />
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Page Authentification '>
                        <AvatarList items={loginPageItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title='Page Commandes'>
                        <AvatarList items={ordersPageItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={12} xs={12}>
                    <SubCard title='Page Tableau de bord'>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <AvatarList items={dashboardPageItems}/>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <AvatarList items={dashboardPageItems2}/>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>

            </Grid>
        </Grid>
    );
}


export default ProjetTerminalMUI;