import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import NavItem from '../nav-item';
import { MenuCollapse, MenuItemChildren } from "ts/interfaces/Iside-bar";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

interface INavCollapse {
    key:string,
    menu: MenuCollapse,
    level:number
}

const NavCollapse: React.FC<INavCollapse> = ({menu, level }: INavCollapse) => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleClick = () => {
        setOpen(!open);
        setSelected(!selected ? menu.id : "");
    };

    const menus = menu.children?.map((item: MenuCollapse | MenuItemChildren) => {
        switch (item.type) {
            case 'collapse':
                return <NavCollapse key={item.id} menu={item as MenuCollapse} level={level + 1} />;
            case 'item':
                return <NavItem key={item.id} item={item as MenuItemChildren} level={level + 1} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const Icon = menu.icon;
    const menuIcon = menu?.icon ? (
        <Icon stroke={1.5} size="1.3rem" />
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: 6,
                height: 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    return(
        <>
            <ListItemButton
                sx={{
                    borderRadius: '8px',
                    mb: 0.5,
                    alignItems: 'flex-start',
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    py: level > 1 ? 1 : 1.25,
                    pl: `${level * 24}px`
                }}
                selected={selected === menu.id}
                onClick={handleClick}
            >
                <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}>{menuIcon}</ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant='body1' color="inherit" sx={{ my: 'auto' }}>
                            {menu.title}
                        </Typography>
                    }
                    secondary={
                        menu.caption && (
                            <Typography variant="caption" display="block" gutterBottom>
                                {menu.caption}
                            </Typography>
                        )
                    }
                />
                {open ? (
                    <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                ) : (
                    <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        position: 'relative',
                        '&:after': {
                            content: "''",
                            position: 'absolute',
                            left: '32px',
                            top: 0,
                            height: '100%',
                            width: '1px',
                            opacity: 1,
                            background: theme.palette.primary.light
                        }
                    }}
                >
                    {menus}
                </List>
            </Collapse>
        </>
    );
};

export default NavCollapse;
