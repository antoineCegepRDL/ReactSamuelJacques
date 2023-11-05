import {
    IconAppWindow,
    IconInfoCircle
} from "@tabler/icons";

import { AvatarListItem } from "ts/interfaces/IAvatarList";

import AvatarList from "components/elements/lists/AvatarList";
import CodeHighligther from "components/styling/CodeHighligther";

const ExpTheme: React.FC = () => {
    const AppItems: AvatarListItem[] = [
        {avatar:<IconAppWindow color='white'/>, primaryText:'Créer le fichier de thème', secondaryText:'Le fichier utilise les JS provenant de MUI'},
        {avatar:<IconInfoCircle color='white'/>, primaryText:'Le fichier peut être vide', secondaryText:'Les valeurs seront donc celles de base de MUI'},
    ];

    const codeTheme = `
    import { createTheme, PaletteOptions } from '@mui/material/styles';

    const themeOptions: PaletteOptions = {
        mode: 'dark',
        primary: {
          main: '#e3f2fd',
          light: '#2196f3',
          dark: '#1e88e5',
        },
        secondary: {
          main: '#d1c4e9',
          light: '#7c4dff',
          dark: '#651fff',
        },
        background: {
          default: '#111936',
          paper: '#1a223f',
        },
        text: {
          primary: '#bdc8f0',
          secondary: '#8492c4',
        },
        error: {
          main: '#f44336',
          light: '#ef9a9a',
          dark: '#c62828',
        },
        warning: {
          main: '#ffe57f',
          light: '#fff8e1',
          dark: '#ffc107',
        },
        divider: '#eeeeee',
    };
    
    const theme = createTheme({
        palette: themeOptions
    });
    
    export default theme;
    `

    return (
        <>
            <AvatarList items={AppItems}/>
            <CodeHighligther code={codeTheme} />
        </>
    );
}


export default ExpTheme;