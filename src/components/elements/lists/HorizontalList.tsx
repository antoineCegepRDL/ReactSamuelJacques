import {
    Avatar,
    Box,
    Stack,
    SxProps,
    Typography
} from "@mui/material";

import { HorizontalAvatarListItem } from 'ts/interfaces/IAvatarList'


interface HorizontalAvatarListProps {
    items: HorizontalAvatarListItem[]
    sx?:SxProps
}

const HorizontalAvatarList = ({items, sx}: HorizontalAvatarListProps) =>
{
    return(
        <Stack direction='row' sx={{...sx}}>
            {items.map((item, index) => {
                return (
                <Box key={index} sx={{display:'flex', flexDirection:'row'}}>
                    <Stack sx={{display:'flex', alignItems:'center'}}>
                        <Avatar key={index} sx={{mx:2}}>
                            {item.avatar}
                        </Avatar>
                        <Typography>{item.primaryText}</Typography>
                        <Typography variant='caption'>{item.secondaryText}</Typography>
                    </Stack>
                    {item.betweenIcon && (index < items.length -1 && item.betweenIcon)}
                </Box>)
            })}
        </Stack>
    )
}

export default HorizontalAvatarList;