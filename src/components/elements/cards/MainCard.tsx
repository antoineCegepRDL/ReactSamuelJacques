import {
    Card,
    CardContent,
    SxProps
} from "@mui/material";

import { borderRadius } from 'data/theme/index'

interface MainCardProps {
    children:React.ReactNode,
    sx?:SxProps
}

const MainCard = ({children, sx}: MainCardProps) => 
<Card sx={{borderRadius:borderRadius, flexGrow: 1, bgcolor:'background.default', ...sx}}>
    <CardContent>
        {children}
    </CardContent>
</Card>


export default MainCard;