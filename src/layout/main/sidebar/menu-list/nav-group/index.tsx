import { MenuCollapse, MenuGroup, MenuItemChildren } from "ts/interfaces/Iside-bar";
import NavCollapse from '../nav-collapse';
import NavItem from '../nav-item';

import { Divider, List, Typography } from '@mui/material';

interface INavGroup {
    key:string,
    item:MenuGroup
}

const NavGroup: React.FC<INavGroup> = ({ item }: INavGroup) => {

    const items = item.children?.map((menu: MenuCollapse | MenuItemChildren) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu as MenuCollapse} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu as MenuItemChildren} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return(
        <>
            <List
                subheader={
                    item.title && (
                        <Typography
                            variant="caption"
                            sx={{ 
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: 'color.grey900',
                                padding: '6px',
                                marginTop: '10px'
                            }}
                            display="block"
                            gutterBottom
                        >
                            {item.title}
                        </Typography>
                    )
                }
            >
                {items}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

export default NavGroup;