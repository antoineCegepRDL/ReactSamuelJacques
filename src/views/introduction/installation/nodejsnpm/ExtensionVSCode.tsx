import {
    Grid,
    Link,
    Typography,
} from '@mui/material';

import SubCard from 'components/elements/cards/SubCard';
import AvatarList from 'components/elements/lists/AvatarList';

import { AvatarListItem } from 'ts/interfaces/IAvatarList';

const ExtensionVSCode: React.FC = () => {
    const installationVSItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'ES7+, React, Redux', secondaryText:'Cliquer ici', href:'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets'},
        {avatar:'👉', primaryText:'TypeScript', secondaryText:'Cliquer ici', href:'https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next'},
        {avatar:'👉', primaryText:'Intellicode', secondaryText:'Cliquer ici', href:'https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode'},
        {avatar:'👉', primaryText:'Live Share', secondaryText:'Cliquer ici', href:'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare'},
    ];

    const installationChromeItems: AvatarListItem[] = [
        {avatar:'👉', primaryText:'React Developper Tools', secondaryText:'Cliquer ici', href:'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'},
        {avatar:'👉', primaryText:'Redux DevTools', secondaryText:'Cliquer ici', href:'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en'},
    ];

    return (
        <Grid item xs={12} sx={{my:2}} >
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <SubCard title='Installer VS Code'>
                        <Typography variant='body1'>Je vous conseille d'installer VS Code comme éditeur de code.</Typography>
                        <Typography variant='body1'>Je ne l'obligerai cependant pas. Prenez ce qui vous convient le mieux 😊</Typography>
                        <Typography variant='body1'>De mon côté, j'utiliserai VS Code tout au long de la session.</Typography>
                        <Typography variant='body1' sx={{mb:5}}>En cas de problème, il sera possible de se connecter ensemble avec Live Share 👀</Typography>
                        <Link href='https://code.visualstudio.com/download'>VS Code</Link>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Extension VS Code'>
                        <AvatarList items={installationVSItems}/>
                    </SubCard>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SubCard title='Extension Chrome'>
                        <AvatarList items={installationChromeItems}/>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ExtensionVSCode;