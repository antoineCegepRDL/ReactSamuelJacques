import {
    Box,
    Card,
    CardContent,
    CardHeader,
    SxProps,
    Typography
} from "@mui/material";

import { borderRadius } from 'data/theme/index'

interface SubCardProps {
    children:React.ReactNode,
    title?:string,
    sx?: SxProps | undefined
}

const SubCard = ({children, title, sx}: SubCardProps) =>
<Box sx={{display:'flex', width:'100%', height:'100%'}}>
    <Card sx={{p:1, borderRadius:borderRadius, flexGrow: 1, ...sx}}>
        {title && <CardHeader title={<Typography variant="h5" color={'white'}>{title}</Typography>} />}
        <CardContent>
            {children}
        </CardContent>
    </Card>
</Box>


export default SubCard;