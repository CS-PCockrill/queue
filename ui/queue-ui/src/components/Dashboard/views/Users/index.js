import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx'

import UpdateAddress from '../../../UserProfile/UpdateAddress';
import PaymentInfo from '../../../UserProfile/PaymentInfo';
import PersonalInfo from '../../../UserProfile/PersonalInfo';
import CompleteRegistration from '../../../UserProfile/CompleteRegistration';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: 1,
    color: '#001c4c'
  },
  verticalcenter: {
    display: 'flex',
    alignItems: 'center'
  },
  calendarBox: {
    width: '100%'
  }
}));

const Users = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
        <Grid
            container
            spacing={3}
        >
            <Grid
                item
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.verticalcenter}
            >
                <h2 className={classes.title}>Users</h2>
            </Grid>
            <Grid item lg={9} sm={9} xl={9} xs={12} />
        </Grid>

      </Container>
  );
};

export default Users;
