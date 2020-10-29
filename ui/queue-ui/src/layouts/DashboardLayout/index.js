import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import {
  makeStyles,
  Hidden
} from '@material-ui/core';
import NavBar from './NavBar';
import './UserDashboard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 60,
    height: '100vh',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 200
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 100
    }
  },
  wrapperNavClosed: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 60,
    height: '100vh',
    paddingLeft: 100
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(true);
  const [isSideBarCollapsed, setSideBarCollapsed] = useState(true)

  return (
    <div className={classes.root}>
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        collapseSideBar={setSideBarCollapsed}
        openMobile={isMobileNavOpen}
      />
      <Hidden lgUp>
        <div className={isSideBarCollapsed ? classes.wrapperNavClosed : classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
              {/* <Outlet /> */}
            </div>
          </div>
        </div>
      </Hidden>
      <Hidden mdDown>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
              {/* <Outlet /> */}
            </div>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default DashboardLayout;
