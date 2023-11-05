import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import Routes from 'routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
