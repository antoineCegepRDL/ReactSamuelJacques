import {
    Box,
    Link,
    Grid,
    Typography
} from "@mui/material";

import {
    IconAffiliate,
    IconTable,
    IconBrandPagekit,
    IconId
 } from "@tabler/icons";

import { HorizontalAvatarListItem } from "ts/interfaces/IAvatarList";

import SubCard from "components/elements/cards/SubCard";
import HorizontalAvatarList from "components/elements/lists/HorizontalList";
import {
    ChevronRight,
    AddOutlined,
    ListOutlined,
    ArrowForward
} from "@mui/icons-material";
import CodeHighligther from "components/styling/CodeHighligther";

const ExempleADP: React.FC = () =>
{
    const avatarColor = 'maroon';

    const adpItems: HorizontalAvatarListItem[] = [
        {
            avatar:'',
            betweenIcon:<AddOutlined sx={{fontSize:'2.5em'}}/>,
            primaryText:'Avatar',
            secondaryText:'Atome'
        },
        {
            avatar:<ListOutlined sx={{color:avatarColor}} />,
            betweenIcon:<ArrowForward sx={{fontSize:'2.5em'}}/>,
            primaryText:'Liste',
            secondaryText:'Atome'
        },
        {
            avatar:<IconAffiliate color={avatarColor}/>,
            betweenIcon:<AddOutlined sx={{fontSize:'2.5em'}}/>,
            primaryText:'Liste Avatar',
            secondaryText:'Molécule'
        },
        {
            avatar:<IconId color={avatarColor}/>,
            betweenIcon:<ArrowForward sx={{fontSize:'2.5em'}}/>,
            primaryText:'Carte',
            secondaryText:'Molécule'
        },
        {
            avatar:<IconTable color={avatarColor}/>,
            betweenIcon:<ArrowForward sx={{fontSize:'2.5em'}}/>,
            primaryText:'Templates',
            secondaryText:'Templates'
        },
        {
            avatar:<IconBrandPagekit color={avatarColor}/>,
            betweenIcon:<ChevronRight sx={{fontSize:'2.5em'}}/>,
            primaryText:'Page complète',
            secondaryText:'Pages'
        },
    ];

    const codeAvatarListExemple = `
    const AvatarList = ({items}: AvatarListProps) =>
    {
        let linkComponent: LinkComponent = {
            component:Link,
            href:''
        }

        return(
            <List>
                {items.map((item, index ) => {
                    linkComponent.href = item.href;
                    return (
                        <ListItem key={index} {...(item.href ? { ...linkComponent } :{})}>
                            <ListItemAvatar>
                                <Avatar>
                                    {item.avatar}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.primaryText} secondary={item.secondaryText}/>
                        </ListItem>
                )})}
            </List>
        )
    }
    `

    return(
        <Grid item xs={12} sx={{mt:2}} >
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <CodeHighligther code={codeAvatarListExemple}/>
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <SubCard title="Cette application est Atomic 😎">
                        <Typography variant="body1">
                            Le site sur lequel vous surfez présentement a été architecturé selon la méthodologie Atomic Design Pattern.
                        </Typography>

                        <Typography variant="body1" sx={{mt:3}}>
                            Prenons par exemple une <b>liste</b> avec des <b>avatars</b>.
                        </Typography>
                        <Typography variant="body1">
                            Les listes avec avatar sont réutilisées très souvent dans l'application.
                            Afin de respecter le principe <b>DRY</b> (Don't repeat yourself), j'ai utilisé des <b>atoms</b> qui a eux seuls ne donnent pas le résultat attendu.
                            Cependant, une fois combiné, les atomes deviennent des molécules, qui combiné ensemble deviennent des organismes, puis des templates et finalement des pages.
                        </Typography>
                        <HorizontalAvatarList items={adpItems} sx={{my:5,display:'flex', justifyContent:'center'}}/>
                        <Typography variant="body1" sx={{mt:3}}>
                            L'exemple à gauche se trouve dans <b><i>components/elements/lists/AvatarList.tsx</i></b>
                        </Typography>

                        <Typography variant="body1" sx={{mt:5}}>
                            🎥 À écouter : <Link href='https://www.youtube.com/watch?v=UUga4-z7b6s'>Comment structurer les projets avec l'Atomic Design Pattern (débutant à avancer)</Link>
                        </Typography>
                        <Typography variant="body1">
                            Nous utiliserons l'intermédiaire avec quelques modifications et ajustements.
                        </Typography>
                        <Typography variant="body1">
                            Ce projet est construit comme l'intermédiaire.
                        </Typography>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default ExempleADP;