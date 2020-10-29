import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
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
    }
  },
  wrapperNavClosed: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 60,
    height: '100vh',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0
    }
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

  return (
    <div className={classes.root}>
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={isMobileNavOpen ? classes.wrapper : classes.wrapperNavClosed}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;