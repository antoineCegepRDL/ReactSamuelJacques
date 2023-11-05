import {
    Grid,
    Link,
    Typography
} from "@mui/material";
import Img from 'components/styling/StyledImg';
import ResultImg from 'assets/svg/unittest/UnitTestResult.svg';


import SubCard from "components/elements/cards/SubCard";
import { AvatarListItem } from "ts/interfaces/IAvatarList";

import {
    IconActivity,
    IconSettings,
    IconTestPipe2,
    IconUser,
    IconAffiliate
} from "@tabler/icons";
import AvatarList from "components/elements/lists/AvatarList";

const UnitTest: React.FC = () =>
{
    const testsItems: AvatarListItem[] = [
        {avatar:<IconTestPipe2 color="white"/>, primaryText:'Integration', secondaryText:'Modules complets dans un environnement "mocked"', href:'https://www.techtarget.com/searchsoftwarequality/definition/integration-testing#:~:text=Integration%20testing%20%2D%2D%20also%20known,be%20coded%20by%20different%20programmers.'},
        {avatar:<IconSettings color="white"/>, primaryText:'Système', secondaryText:'Dans un environnement réel', href:'https://www.techtarget.com/searchsoftwarequality/definition/system-testing#:~:text=System%20testing%2C%20also%20referred%20to,full%2C%20integrated%20system%20or%20application.'},
        {avatar:<IconUser color="white"/>, primaryText:'Acceptation', secondaryText:'Fait par le client ou l\'équipe QA', href:'https://www.softwaretestinghelp.com/what-is-acceptance-testing/'},
        {avatar:<IconActivity color="white"/>, primaryText:'Capacité', secondaryText:'Performance de l\'application sous la charge', href:'https://en.wikipedia.org/wiki/Load_testing'},
        {avatar:<IconAffiliate color="white"/>, primaryText:'Pénétration', secondaryText:'Tentative d\'hacking sur l\'application', href:'https://en.wikipedia.org/wiki/Penetration_test'},
    ];

    return(
        <>
            <Grid item md={6} xs={12}>
                <SubCard title="Que sont les tests unitaires ? 🧪">
                    <Typography variant="body1" sx={{mb:3}}>
                        Les tests unitaires sont utilisés pour <b>tester</b> la résilience d'une application, c'est-à-dire
                        la stabilité de celle-ci une fois soumise à des cas de nature dite "normale" aux "edge cases".
                    </Typography>
                    <Typography variant="body1" sx={{mb:3}}>
                        Il est facile de penser qu'un système est sans faille. Cependant, il est impossible de créer un
                        système parfait dû à la nature humaine. Un changement de code pour modifier le calcul des tarifs
                        sur les commandes peut engendrer un problème sur le calcul du total des ventes de l'an dernier car
                        la dite modification à impacter le calcul dynamique dans la BD des historiques, par exemple.
                    </Typography>
                    <Typography variant="body1" sx={{mb:3}}>
                        Certains cas peuvent même être dangereux pour l'équipe de programmation des systèmes.
                        En C# par exemple, il y a 3 représentation décimal, soit "Float", "double" et "decimal".

                        Lors du calcul des coûts réels, on ne peut pas utiliser float ni double.
                        Cette erreur peut mener à des pertes terribles pour une compagnie ou même la prison
                        tout dépendant du cas
                    </Typography>

                    <Typography variant="body1" sx={{mb:3}}>
                        L'important avec les tests unitaires est de toujours les monter de façon AAA (arrange-act-assert).
                        On commence par mettre les éléments en place (<i><b><u>arrange</u></b></i>), puis on agis (exécute le code à tester, <i><b><u>act</u></b></i>) et finalemenet, on regarde si les réponses concorde avec que nous voulions (<i><b><u>assert</u></b></i>)
                    </Typography>

                    <Link 
                        href="https://stackoverflow.com/questions/3730019/why-not-use-double-or-float-to-represent-currency"
                        target="_blank"
                    >
                        Réponse sur SO concernant ce cas
                    </Link>
                    {/* <AvatarList items={architectureItems}/> */}
                </SubCard>
            </Grid>
            <Grid item md={3} xs={12}>
                <Img src={ResultImg} alt='Résultats' sx={{width:{xs:"100%"}, height:'100%'}} />
            </Grid>
            <Grid item md={3} xs={12}>
                <SubCard title="Types de tests">
                    <AvatarList items={testsItems}/>
                </SubCard>
            </Grid>
        </>
    );
}


export default UnitTest;