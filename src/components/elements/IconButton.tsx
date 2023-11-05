import { IconButton as IC, Tooltip } from '@mui/material';

interface IconButtonProps {
    icon: any,
    title:string,
    ariaLabel:string,
}

const IconButton = ({icon, title, ariaLabel}: IconButtonProps) => {

    return (
        <Tooltip title={title}>
            <IC color='default' aria-label={ariaLabel}>
                {icon}
            </IC>
        </Tooltip>
    );
}


export default IconButton;