import React, {
  // useEffect
} from 'react';
import {
  Link as RouterLink,
  // useLocation
} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';

import NavItem from './NavItem';

const items = [
  {
    href: '#',
    title: 'admin'
  },
  {
    href: '/dashboard/profile',
    title: 'profile'
  },
  {
    href: '/dashboard/users',
    title: 'users'
  },
  {
    href: '/dashboard/trends',
    title: 'trends'
  },
  {
    href: '/dashboard/orders',
    title: 'orders'
  },
  {
    href: '/dashboard/customers',
    title: 'customers'
  },
  {
    href: '/dashboard/inventory',
    title: 'inventory'
  },
  {
    href: '#',
    title: 'settings'
  },
  {
    href: '/dashboard/settings',
    title: 'settings'
  },
  {
    href: '/dashboard/options',
    title: 'options'
  },
  {
    href: '/dashboard/charts',
    title: 'charts'
  },
];

const useStyles = makeStyles(() => ({
  desktopDrawer: {
    top: 50,
    width: 200,
    backgroundColor: '#fff',
    height: 'calc(100% - 50px)'
  },
  mobileDrawer: {
    width: 200,
    backgroundColor: '#fff',
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open={openMobile}
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
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
