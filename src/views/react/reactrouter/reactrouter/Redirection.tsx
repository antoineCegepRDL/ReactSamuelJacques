import {
    Box,
    Grid,
    Typography
} from "@mui/material";

import SubCard from "components/elements/cards/SubCard";
import CodeHighligther from "components/styling/CodeHighligther";

const Redirection: React.FC = () => {

    const codeRedirection = `
    const Authentifier = () => {
        const navigate = useNavigate();

        //On redirige ici après un clique
        const handleClick = () => {
          navigate('/home')
        }

        return (
          <div>
            <button onClick={handleClick}>Sign In</button>
          </div>
        );
      }
    );
    `

    const codeRouteProtegee = `
    const App = () => {

        const authentifier = true
    
        return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={authentifier ? <Dashboard/> : <Navigate to='/login'/>} />
                <Route path="/dashboard" element={authentifier ? <Dashboard/> : <Navigate to='/login'/>} />
                <Route path="/orders" element={authentifier ? <Orders/> : <Navigate to='/login'/>} />
                <Route path="/login" element={authentifier ? <Navigate to='/' /> : <Authentification />} />
                <Route path="*" element={<>404</>} />            
            </Routes>
        </ThemeProvider>
        );
    }
    `

    return (
        <Grid item xs={12} sx={{my:2}}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <SubCard title='Redirection ↩️'>
                            <Typography variant="body1" sx={{mb:1}}>
                                    Pour faire une redirection, il suffit d'utiliser le Hook 🪝<b>useNavigate()</b>;
                            </Typography>
                            <Typography variant="body1" sx={{mb:1}}>
                                    Un exemple de redirection est une fois qu'on s'authentifie ou qu'on se déconnecte.
                            </Typography>
                        </SubCard>
                    </Box>
                </Grid>
                <Grid item md={12} xs={12}>
                    <SubCard title='Utilisation de la redirection dans du code'>
                        <Typography variant="body1" sx={{mb:1}}>
                            La composante suivante par exemple, pourrait rediriger le client vers une autre après s'être authentifié.
                        </Typography>
                        <CodeHighligther code={codeRedirection} />
                    </SubCard>
                </Grid>
                <Grid item md={12} xs={12}>
                    <SubCard title='Protéger dans App.tsx'>
                        <Typography variant="body1" sx={{mb:1}}>
                            On peut aussi protéger les valeurs des routes avec un <b>shorthand if (?)</b>
                        </Typography>
                        <CodeHighligther code={codeRouteProtegee} />
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Redirection;