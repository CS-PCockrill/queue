import React, {
  useState,
  useEffect
} from 'react';
import {
  Link as RouterLink,
  // useLocation
} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import {
  List as InventoryIcon,
  Home as HomeIcon,
  TrendingUp as TrendsIcon,
  Send as OrderIcon,
  User as UserIcon,
  Users as CustomerIcon,
  Settings as SettingsIcon,
  Sliders as OptionIcon,
  BarChart as ChartIcon,
  Menu as SideBarIcon
} from 'react-feather';

import NavItem from './NavItem';

const items = [
  {
    href: '#',
    title: 'admin'
  },
  {
    href: '/dashboard/profile',
    icon: HomeIcon,
    title: 'profile'
  },
  // {
  //   href: '/dashboard/users',
  //   icon: UserIcon,
  //   title: 'users'
  // },
  // {
  //   href: '/dashboard/trends',
  //   icon: TrendsIcon,
  //   title: 'trends'
  // },
  {
    href: '/dashboard/orders',
    icon: OrderIcon,
    title: 'orders'
  },
  {
    href: '/dashboard/customers',
    icon: CustomerIcon,
    title: 'customers'
  },
  {
    href: '/dashboard/inventory',
    icon: InventoryIcon,
    title: 'inventory'
  },
  {
    href: '#',
    title: 'settings'
  },
  {
    href: '/dashboard/settings',
    icon: SettingsIcon,
    title: 'settings'
  },
  {
    href: '/dashboard/options',
    icon: OptionIcon,
    title: 'options'
  },
  {
    href: '/dashboard/charts',
    icon: ChartIcon,
    title: 'charts'
  },
];

const useStyles = makeStyles((theme) => ({
  drawer: {
    top: "3.5rem",
    backgroundColor: '#fff',
    height: 'calc(100% - 50px)'
  },
  drawerOpen: {
    width: 200
  },
  drawerClose: {
    width: theme.spacing(7) + 1
  }
}));

const NavBar = ({ onMobileClose, openMobile, collapseSideBar }) => {
  const classes = useStyles();
  const [iconBtn, setIconBtn] = useState(true)

  useEffect(() => {
    collapseSideBar(iconBtn)
  }, [iconBtn])

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Hidden lgUp>
        <Button onClick={() => setIconBtn(!iconBtn)}>
          <SideBarIcon />
        </Button>
      </Hidden>
      <Box>
        <List>
          {items.map((item, i) => (
            <NavItem
              href={item.href}
              key={i}
              title={item.title}
              icon={item.icon}
              iconButton={iconBtn}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={openMobile}
      variant="persistent"
    >
      {content}
    </Drawer>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
