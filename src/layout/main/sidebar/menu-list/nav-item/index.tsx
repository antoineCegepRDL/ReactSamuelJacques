import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { MenuItemChildren } from "ts/interfaces/Iside-bar";
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

import { setSelectedItem } from 'redux/slices/MenuSlice';

interface INavItem {
    key:string,
    item: MenuItemChildren,
    level:number
}

const NavItem: React.FC<INavItem> = ({item, level }: INavItem) => {
    const selectedItem = useAppSelector((state) => state.menu.selectedItem);
    const dispatch = useAppDispatch();
    
    const Icon = item.icon;
    const itemIcon = item?.icon ? (
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

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef<HTMLAnchorElement>((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    };

    const itemHandler = (id:string) => {
        dispatch(setSelectedItem(id));
    };

    return(
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: '8px',
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                py: level > 1 ? 1 : 1.25,
                pl: `${level * 24}px`,
                '&.Mui-selected': {
                    color: '#651fff',
                    backgroundColor: '#d1c4e9',
                    '&:hover': {
                        backgroundColor: '#d1c4e9'
                    },
                    '& .MuiListItemIcon-root': {
                        color: '#651fff'
                    }
                },
                '&:hover': {
                    backgroundColor: '#d1c4e9',
                    color: '#651fff',
                    '& .MuiListItemIcon-root': {
                        color: '#651fff'
                    }
                }
            }}
            selected={selectedItem === item.id}
            onClick={() => itemHandler(item.id)}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant='body1' color="inherit">
                        {item.title}
                    </Typography>
                }
                secondary={
                    item.caption && (
                        <Typography variant="caption" display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )
                }
            />
        </ListItemButton>
    );
};

export default NavItem;
