import {
    Avatar,
    Link,
    LinkTypeMap,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";

import { OverridableComponent } from "@mui/material/OverridableComponent";

import { AvatarListItem } from 'ts/interfaces/IAvatarList'

interface LinkComponent {
    component:OverridableComponent<LinkTypeMap>,
    href?:string | undefined,
    target:string
}

interface AvatarListProps {
    items: AvatarListItem[]
}

const AvatarList = ({items}: AvatarListProps) =>
{
    let linkComponent: LinkComponent = {
        component:Link,
        href:'',
        target:"_blank"
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
                        <ListItemText primary={<Typography sx={item.href ? {textDecoration:'underline'} : {}}>{item.primaryText}</Typography>} secondary={item.secondaryText}/>
                    </ListItem>
            )})}
        </List>
    )
}

export default AvatarList;